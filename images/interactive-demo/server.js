// interactive-demo container — single Node process serving the playground's
// interactive surface:
//
//   GET  /*                 → Static SPA from src/ (no bundler)
//   GET  /api/health        → MCP health probe
//   POST /api/chat          → SSE streaming chat (Anthropic Claude + KrakenD MCP tools)
//   WS   /ws/:room          → WebSocket broker (KrakenD proxies /chat/ws/{room} here)

import express from "express";
import Anthropic from "@anthropic-ai/sdk";
import { WebSocketServer } from "ws";
import http from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3000;
const MCP_URL = process.env.MCP_URL || "http://localhost:8080/mcp";
const MODEL = process.env.MODEL || "claude-haiku-4-5";
const MAX_TOOL_TURNS = Number(process.env.MAX_TOOL_TURNS || 6);

if (!process.env.ANTHROPIC_API_KEY) {
    console.error("ANTHROPIC_API_KEY is required");
    process.exit(1);
}

const anthropic = new Anthropic();
const app = express();
app.use(express.json({ limit: "10mb" }));

// Static SPA — plain HTML/CSS/JS, no bundler. Served directly from src/.
app.use(express.static(join(__dirname, "src")));

// ─── MCP protocol helpers (JSON-RPC over HTTP, stateless) ───
let mcpRequestId = 0;

async function mcpCall(method, params) {
    const id = ++mcpRequestId;
    const res = await fetch(MCP_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json, text/event-stream",
        },
        body: JSON.stringify({ jsonrpc: "2.0", id, method, params: params ?? {} }),
    });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`MCP ${method} failed: HTTP ${res.status} — ${text}`);
    }
    // KrakenD MCP may return JSON or SSE; handle both.
    const ct = res.headers.get("content-type") || "";
    if (ct.includes("text/event-stream")) {
        const text = await res.text();
        const dataLine = text.split("\n").find(l => l.startsWith("data:"));
        if (!dataLine) throw new Error(`MCP ${method}: no data in SSE response`);
        return JSON.parse(dataLine.slice(5).trim());
    }
    return res.json();
}

async function mcpListTools() {
    const resp = await mcpCall("tools/list");
    if (resp.error) throw new Error(`MCP tools/list error: ${JSON.stringify(resp.error)}`);
    return resp.result.tools;
}

async function mcpCallTool(name, args) {
    const resp = await mcpCall("tools/call", { name, arguments: args });
    if (resp.error) throw new Error(`MCP tools/call error: ${JSON.stringify(resp.error)}`);
    return resp.result;
}

function mcpToolsToAnthropic(mcpTools) {
    return mcpTools.map(t => ({
        name: t.name,
        description: t.description || t.title || t.name,
        input_schema: t.inputSchema || t.input_schema,
    }));
}

function mcpResultToToolResultContent(result) {
    if (!result?.content) return JSON.stringify(result ?? {});
    return result.content
        .map(block => (block.type === "text" ? block.text : JSON.stringify(block)))
        .join("\n");
}

// ─── SSE chat endpoint ───
app.post("/api/chat", async (req, res) => {
    const { messages } = req.body;
    if (!Array.isArray(messages)) {
        return res.status(400).json({ error: "messages array required" });
    }

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();

    const send = (event, data) => {
        res.write(`event: ${event}\n`);
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    };

    try {
        const mcpTools = await mcpListTools();
        const tools = mcpToolsToAnthropic(mcpTools);
        send("tools", { count: tools.length, names: tools.map(t => t.name) });

        const conversation = [...messages];
        let turn = 0;

        while (turn < MAX_TOOL_TURNS) {
            turn++;

            const stream = anthropic.messages.stream({
                model: MODEL,
                max_tokens: 1024,
                system: `You are a KYC (Know-Your-Customer) analyst assistant connected to a KrakenD MCP server that exposes counterparty risk dossier tools.

Two tools are available:
- get_kyc_dossier — returns a compact TOON-formatted dossier optimized for LLM token efficiency. Prefer this for normal queries.
- get_kyc_dossier_legacy — returns the verbose JSON aggregation of the same data. Use it ONLY when the user explicitly asks for the verbose / legacy / raw / JSON format, or asks you to compare the two outputs.

When the user asks to "compare" the two tools, call both for the SAME LEI and summarize: which counterparty, what the risk picture is, and the character-count savings achieved by TOON over the verbose JSON.

Both tools take a Legal Entity Identifier (LEI), a 20-character alphanumeric code (ISO 17442). Example LEIs available in this demo:
- 549300CLEAN000000001 — Helvetica Industries AG (clean)
- 549300VOLGA000000001 — Volga Energy Trading LLC (sanctioned)
- 549300MERC0000000001 — Mercator Capital Holdings Ltd (sanctioned UBO buried in shell chain)

Be concise and friendly. When you call a tool, briefly explain why before doing it. After a tool returns sanctions data, give a one-line risk verdict (✅ low / ⚠️ medium / 🚨 high) and the key reasoning.`,
                tools,
                messages: conversation,
            });

            let currentText = "";
            const contentBlocks = [];
            let activeToolUse = null;

            for await (const event of stream) {
                if (event.type === "content_block_start") {
                    if (event.content_block.type === "tool_use") {
                        activeToolUse = {
                            type: "tool_use",
                            id: event.content_block.id,
                            name: event.content_block.name,
                            input: "",
                        };
                        send("tool_use_start", { id: activeToolUse.id, name: activeToolUse.name });
                    } else if (event.content_block.type === "text") {
                        currentText = "";
                    }
                } else if (event.type === "content_block_delta") {
                    if (event.delta.type === "text_delta") {
                        currentText += event.delta.text;
                        send("text", { delta: event.delta.text });
                    } else if (event.delta.type === "input_json_delta" && activeToolUse) {
                        activeToolUse.input += event.delta.partial_json;
                    }
                } else if (event.type === "content_block_stop") {
                    if (activeToolUse) {
                        try {
                            activeToolUse.input = activeToolUse.input ? JSON.parse(activeToolUse.input) : {};
                        } catch {
                            activeToolUse.input = {};
                        }
                        contentBlocks.push(activeToolUse);
                        activeToolUse = null;
                    } else if (currentText) {
                        contentBlocks.push({ type: "text", text: currentText });
                        currentText = "";
                    }
                }
            }

            const finalMessage = await stream.finalMessage();
            conversation.push({ role: "assistant", content: finalMessage.content });

            if (finalMessage.stop_reason !== "tool_use") {
                send("done", { stop_reason: finalMessage.stop_reason });
                break;
            }

            const toolUses = finalMessage.content.filter(b => b.type === "tool_use");
            const toolResults = [];
            for (const tu of toolUses) {
                send("tool_call", { id: tu.id, name: tu.name, input: tu.input });
                try {
                    const result = await mcpCallTool(tu.name, tu.input);
                    const text = mcpResultToToolResultContent(result);
                    let payloadChars = text.length;
                    try {
                        const parsed = JSON.parse(text);
                        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)
                            && typeof parsed.content === "string"
                            && Object.keys(parsed).length === 1) {
                            payloadChars = parsed.content.length;
                        }
                    } catch { /* not JSON — fall back to raw length */ }
                    send("tool_result", {
                        id: tu.id,
                        name: tu.name,
                        ok: !result.isError,
                        preview: text.length > 4000 ? text.slice(0, 4000) + "\n…[truncated]" : text,
                        chars: payloadChars,
                    });
                    toolResults.push({
                        type: "tool_result",
                        tool_use_id: tu.id,
                        content: text,
                        is_error: !!result.isError,
                    });
                } catch (err) {
                    send("tool_result", { id: tu.id, name: tu.name, ok: false, preview: err.message });
                    toolResults.push({
                        type: "tool_result",
                        tool_use_id: tu.id,
                        content: `Error: ${err.message}`,
                        is_error: true,
                    });
                }
            }
            conversation.push({ role: "user", content: toolResults });
        }

        res.end();
    } catch (err) {
        console.error("Chat error:", err);
        send("error", { message: err.message });
        res.end();
    }
});

app.get("/api/health", async (_req, res) => {
    try {
        const tools = await mcpListTools();
        res.json({ ok: true, mcp: { url: MCP_URL, tools: tools.map(t => t.name) } });
    } catch (err) {
        res.status(503).json({ ok: false, error: err.message, mcp: { url: MCP_URL } });
    }
});

// ─── HTTP + WS upgrade plumbing ───────────────────────────────────────────
//
// WebSocket broker compatible with KrakenD's WS proxy. The proxy connects,
// sends the handshake string, and the broker replies "OK". After that the
// proxy forwards client messages wrapped in JSON ({event, body, url,
// session}) with `body` base64-encoded on the wire. Wire behaviour:
//   - handshake               → reply "OK"
//   - JSON parse fails        → broadcast raw bytes to all sessions
//   - event === "connected"   → reply with `body: greetings` to that session
//   - event === "disconnected"→ no-op (logged)
//   - event === ""            → echo back to sender (NOT broadcast)
//
// Buffer / size knobs match KrakenD's /chat/ws/{room} extra_config.
const server = http.createServer(app);

const wss = new WebSocketServer({
    noServer: true,
    maxPayload: 32 * 1024 * 1024, // 32 MB, matches Go MaxMessageSize
});

const HANDSHAKE = '{"msg":"KrakenD WS proxy starting"}';
const HANDSHAKE_RESPONSE = "OK";
const GREETINGS = "Greetings, visitor";

const sessions = new Set();

wss.on("connection", (ws) => {
    sessions.add(ws);

    ws.on("message", (data) => {
        const msgStr = data.toString();

        // KrakenD WS proxy handshake
        if (msgStr === HANDSHAKE) {
            ws.send(HANDSHAKE_RESPONSE);
            return;
        }

        // Try parse as the JSON envelope KrakenD sends ({event, body, url, session})
        let decoded;
        try {
            decoded = JSON.parse(msgStr);
        } catch {
            console.log("unformatted msg. broadcasting it");
            for (const s of sessions) {
                if (s.readyState === ws.OPEN) s.send(data);
            }
            return;
        }

        switch (decoded.event) {
            case "connected": {
                console.log("new client connected");
                const greetingBytes = Buffer.from(GREETINGS);
                const resp = {
                    session: { uuid: decoded.session?.uuid },
                    body: greetingBytes.toString("base64"),
                };
                ws.send(JSON.stringify(resp));
                return;
            }
            case "disconnected":
                console.log("client disconnected");
                return;
            case "":
            case undefined: {
                const bodyBytes = decoded.body
                    ? Buffer.from(decoded.body, "base64")
                    : Buffer.alloc(0);
                console.log(`msg received through the gateway (body size: ${bodyBytes.length}) room: ${decoded.url}. broadcasting it back`);
                console.log(bodyBytes.toString());
                const echo = { url: decoded.url, body: decoded.body };
                ws.send(JSON.stringify(echo));
                return;
            }
            default:
                // Unknown event — log and drop.
                console.log(`ignoring unknown event: ${decoded.event}`);
        }
    });

    ws.on("close", () => sessions.delete(ws));
});

server.on("upgrade", (req, socket, head) => {
    // KrakenD strips the /chat prefix; client connects to /chat/ws/{room},
    // backend sees /ws/{room}. We accept any /ws/* path (room is informational).
    const path = (req.url || "").split("?")[0];
    if (path.startsWith("/ws/")) {
        wss.handleUpgrade(req, socket, head, (ws) => {
            wss.emit("connection", ws, req);
        });
    } else {
        socket.destroy();
    }
});

server.listen(PORT, () => {
    console.log(`interactive-demo container listening on :${PORT}`);
    console.log(`  SPA:        served from src/ (no bundler)`);
    console.log(`  MCP chat:   POST /api/chat  (model ${MODEL}, MCP ${MCP_URL})`);
    console.log(`  WS broker:  WS   /ws/:room`);
});
