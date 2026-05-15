-- JSON aggregate → TOON converter for the KYC dossier.
--
-- Runs as a modifier/lua-proxy `post` hook on the multi-backend aggregator
-- endpoint. Reads the merged `{entity, ownership, sanctions}` via r:data()
-- (KrakenD's luaTable wrapper) and rewrites the response so it carries a
-- single compact TOON-formatted string under the "content" key.
--
-- Why a single key: KrakenD's MCP wrapper requires `output_schema.type =
-- "object"`, so the workflow body must be a JSON object. Putting the TOON
-- string in `content` keeps the wrapper happy while letting downstream LLM
-- clients read the compact text directly from `content[0].text`.
--
-- Helper functions below are generic; the orchestrator is KYC-specific
-- (it knows the aggregate shape, including the XML-induced
-- `sanctions.matches.match[]` wrapping).
--
-- Usage in KrakenD config:
--   "modifier/lua-proxy": {
--     "sources": ["/etc/krakend/lua/to_toon.lua"],
--     "post":    "to_toon_response()",
--     "live":    true
--   }

local function row_csv(obj, columns)
    local vals = {}
    for i = 1, #columns do
        local v = obj:get(columns[i])
        vals[i] = (v == nil) and "" or tostring(v)
    end
    return table.concat(vals, ",")
end

-- emit_tabular handles both luaList (multiple items) and a single luaTable
-- (one item) — XML decoding represents singleton arrays as plain objects,
-- so we must accept both shapes for uniform TOON output.
local function emit_tabular(prefix, list_or_obj, columns)
    local lines = {}
    local first_indexed = list_or_obj:get(0)
    if first_indexed ~= nil then
        local len = list_or_obj:len()
        table.insert(lines, prefix .. "[" .. len .. "]{" .. table.concat(columns, ",") .. "}:")
        for i = 0, len - 1 do
            table.insert(lines, "  " .. row_csv(list_or_obj:get(i), columns))
        end
    else
        table.insert(lines, prefix .. "[1]{" .. table.concat(columns, ",") .. "}:")
        table.insert(lines, "  " .. row_csv(list_or_obj, columns))
    end
    return lines
end

local function emit_single(prefix, obj, columns)
    return {
        prefix .. "{" .. table.concat(columns, ",") .. "}:",
        "  " .. row_csv(obj, columns)
    }
end

local function append_lines(target, source)
    for i = 1, #source do
        target[#target+1] = source[i]
    end
end

function to_toon_response()
    local r = response.load()
    local d = r:data()
    local out = {}

    -- entity
    append_lines(out, emit_single(
        "entity",
        d:get("entity"),
        {"legal_name", "lei", "jurisdiction", "status", "incorporated", "sector"}))

    -- ownership.chain
    local ownership = d:get("ownership")
    append_lines(out, emit_tabular(
        "ownership.chain",
        ownership:get("chain"),
        {"level", "name", "lei", "jurisdiction", "percentage"}))

    -- ownership.ubos
    append_lines(out, emit_tabular(
        "ownership.ubos",
        ownership:get("ubos"),
        {"name", "control_percentage", "country"}))

    -- sanctions: total_hits + tabular matches (matches arrive wrapped as matches.match[] from XML decoding)
    local sanctions = d:get("sanctions")
    local total_hits = tostring(sanctions:get("total_hits"))
    out[#out+1] = "sanctions.total_hits: " .. total_hits
    if total_hits ~= "0" then
        local matches_wrapper = sanctions:get("matches")
        local matches = matches_wrapper:get("match")
        append_lines(out, emit_tabular(
            "sanctions.matches",
            matches,
            {"list", "score", "matched_field", "evidence", "date_listed"}))
    end

    local toon = table.concat(out, "\n")

    -- Wipe original fields and replace with a single `content` carrying TOON.
    d:del("entity")
    d:del("ownership")
    d:del("sanctions")
    d:set("content", toon)
end
