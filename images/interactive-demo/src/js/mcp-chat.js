/* MCP Chat — plain <script> module loaded in index.html. Conventions:
     - `marked` is loaded as a UMD global from a <script> in index.html
     - initMcpChat is exposed on window so main.js can call it after DOM ready
     - init guards against double-binding (user switching tabs back and forth)
     - fetch() paths are SPA-relative (./api/health, ./api/chat) so they
       resolve to /interactive-demo/api/* through KrakenD */

const { marked } = window;
marked.setOptions({ gfm: true, breaks: true });

let initialised = false;

window.initMcpChat = function initMcpChat() {
    if (initialised) return;
    initialised = true;

    const conversationEl = document.getElementById("conversation");
    const composer = document.getElementById("composer");
    const input = document.getElementById("input");
    const sendBtn = document.getElementById("send");
    const suggestions = document.getElementById("suggestions");
    const infoToggle = document.getElementById("info-toggle");
    const infoPanel = document.querySelector("#page-mcp-chat .info-panel");

    if (!conversationEl || !composer) {
        // Page DOM not present — bail (e.g. SSR or build-time).
        return;
    }

    if (infoToggle && infoPanel) {
        infoToggle.addEventListener("click", () => {
            const collapsed = infoPanel.classList.toggle("collapsed");
            infoToggle.setAttribute("aria-expanded", String(!collapsed));
        });
    }

    const messages = []; // Anthropic-format conversation
    let streaming = false;

    // Composer behaviour
    input.addEventListener("input", () => {
        input.style.height = "auto";
        input.style.height = Math.min(input.scrollHeight, 200) + "px";
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            composer.requestSubmit();
        }
    });

    composer.addEventListener("submit", (e) => {
        e.preventDefault();
        if (streaming) return;
        const text = input.value.trim();
        if (!text) return;
        input.value = "";
        input.style.height = "auto";
        sendMessage(text);
    });

    suggestions.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        if (!btn || streaming) return;
        sendMessage(btn.dataset.prompt);
    });

    // Rendering helpers ------------------------------------------------------
    function ensureWelcomeRemoved() {
        const welcome = conversationEl.querySelector(".welcome");
        if (welcome) welcome.remove();
    }

    function renderUser(text) {
        ensureWelcomeRemoved();
        const wrap = document.createElement("div");
        wrap.className = "msg user";
        wrap.innerHTML = `
            <div class="avatar">You</div>
            <div class="bubble"></div>
        `;
        wrap.querySelector(".bubble").textContent = text;
        conversationEl.appendChild(wrap);
        scrollToBottom();
    }

    function renderAssistantShell() {
        ensureWelcomeRemoved();
        const wrap = document.createElement("div");
        wrap.className = "msg assistant";
        wrap.innerHTML = `
            <div class="avatar"><i class="fa-solid fa-sparkles" style="position:relative;z-index:2;"></i></div>
            <div class="bubble">
                <div class="assistant-content"></div>
            </div>
        `;
        conversationEl.appendChild(wrap);
        scrollToBottom();
        return wrap.querySelector(".assistant-content");
    }

    function appendTextNode(container) {
        const div = document.createElement("div");
        div.className = "markdown-content";
        div._buffer = "";
        container.appendChild(div);
        return div;
    }

    function appendCursor(container) {
        const c = document.createElement("span");
        c.className = "cursor";
        container.appendChild(c);
        return c;
    }

    function appendToolCard(container, { id, name, input: toolInput, route = "POST /mcp" }) {
        const card = document.createElement("div");
        card.className = "tool-card pending";
        card.dataset.id = id;
        card.innerHTML = `
            <div class="tool-head">
                <span class="spinner"></span>
                <span>Calling tool <code>${name}</code> via <code>${route}</code></span>
            </div>
            <div class="tool-args"></div>
        `;
        card.querySelector(".tool-args").textContent = JSON.stringify(toolInput, null, 2);
        container.appendChild(card);
        scrollToBottom();
        return card;
    }

    function formatToolPreview(text) {
        if (!text) return "";
        try {
            const parsed = JSON.parse(text);
            if (parsed && typeof parsed === "object" && !Array.isArray(parsed)
                && typeof parsed.content === "string"
                && Object.keys(parsed).length === 1) {
                return parsed.content;
            }
            return JSON.stringify(parsed, null, 2);
        } catch {
            return text;
        }
    }

    function resolveToolCard(card, { ok, preview, chars }) {
        card.classList.remove("pending");
        card.classList.add(ok ? "ok" : "err");
        const head = card.querySelector(".tool-head");
        const spinner = head.querySelector(".spinner");
        spinner.outerHTML = ok
            ? '<i class="fa-solid fa-check"></i>'
            : '<i class="fa-solid fa-xmark"></i>';
        if (typeof chars === "number") {
            const size = document.createElement("span");
            size.className = "tool-size";
            size.textContent = `${chars} chars`;
            head.appendChild(size);
        }
        if (preview) {
            const pre = document.createElement("div");
            pre.className = "tool-args tool-output";
            pre.style.marginTop = "6px";
            pre.textContent = formatToolPreview(preview);
            card.appendChild(pre);
        }
    }

    function scrollToBottom() {
        conversationEl.scrollTop = conversationEl.scrollHeight;
    }

    // SSE chat call ----------------------------------------------------------
    async function sendMessage(text) {
        streaming = true;
        sendBtn.disabled = true;

        messages.push({ role: "user", content: text });
        renderUser(text);

        const contentEl = renderAssistantShell();
        let currentTextSpan = null;
        let cursor = appendCursor(contentEl);
        const toolCardsById = new Map();

        try {
            const res = await fetch("./api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages }),
            });

            if (!res.ok || !res.body) {
                const errText = await res.text().catch(() => "");
                throw new Error(errText || `HTTP ${res.status}`);
            }

            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let buf = "";

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                buf += decoder.decode(value, { stream: true });

                let idx;
                while ((idx = buf.indexOf("\n\n")) >= 0) {
                    const chunk = buf.slice(0, idx);
                    buf = buf.slice(idx + 2);
                    handleSSEChunk(chunk);
                }
            }
        } catch (err) {
            cursor?.remove();
            const errDiv = document.createElement("div");
            errDiv.className = "tool-card err";
            errDiv.innerHTML = `<div class="tool-head"><i class="fa-solid fa-triangle-exclamation"></i><span>Error: ${err.message}</span></div>`;
            contentEl.appendChild(errDiv);
        } finally {
            cursor?.remove();
            streaming = false;
            sendBtn.disabled = false;
            scrollToBottom();
        }

        function handleSSEChunk(chunk) {
            const lines = chunk.split("\n");
            let event = "message";
            let data = "";
            for (const line of lines) {
                if (line.startsWith("event:")) event = line.slice(6).trim();
                else if (line.startsWith("data:")) data += line.slice(5).trim();
            }
            if (!data) return;
            let payload;
            try { payload = JSON.parse(data); } catch { return; }

            switch (event) {
                case "tools":
                    break;
                case "text":
                    if (!currentTextSpan) currentTextSpan = appendTextNode(contentEl);
                    cursor?.remove();
                    currentTextSpan._buffer += payload.delta;
                    currentTextSpan.innerHTML = marked.parse(currentTextSpan._buffer);
                    cursor = appendCursor(contentEl);
                    scrollToBottom();
                    break;
                case "tool_use_start":
                    break;
                case "tool_call": {
                    currentTextSpan = null;
                    cursor?.remove();
                    const card = appendToolCard(contentEl, {
                        id: payload.id,
                        name: payload.name,
                        input: payload.input,
                    });
                    toolCardsById.set(payload.id, card);
                    cursor = appendCursor(contentEl);
                    break;
                }
                case "tool_result": {
                    const card = toolCardsById.get(payload.id);
                    if (card) resolveToolCard(card, { ok: payload.ok, preview: payload.preview, chars: payload.chars });
                    break;
                }
                case "done":
                    cursor?.remove();
                    messages.push({ role: "assistant", content: contentEl.innerText.trim() });
                    break;
                case "error":
                    throw new Error(payload.message);
            }
        }
    }
}
