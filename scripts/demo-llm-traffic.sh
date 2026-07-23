#!/usr/bin/env bash
#
# Generates live LLM traffic against the playground AI Gateway to populate
# the Grafana dashboard and the Jaeger/Tempo traces during a demo.
#
# Usage:
#   ./scripts/demo-llm-traffic.sh                 # runs 60s and stops
#   DURATION=120 ./scripts/demo-llm-traffic.sh    # runs 120s
#   DURATION=0 ./scripts/demo-llm-traffic.sh      # infinite loop (Ctrl+C)
#   DELAY=2 ROUNDS_BURST=2 ./scripts/demo-llm-traffic.sh
#
# Environment variables:
#   BASE_URL     (def: http://localhost:8080)  gateway host
#   DURATION     (def: 60)  seconds to run; 0 = infinite (Ctrl+C to stop)
#   DELAY        (def: 3)   seconds to pause between rounds
#   ROUNDS_BURST (def: 1)   concurrent calls per provider and round
#
set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:8080}"
DURATION="${DURATION:-60}"
DELAY="${DELAY:-3}"
ROUNDS_BURST="${ROUNDS_BURST:-1}"

ENDPOINT="$BASE_URL/llm-routing"

# Providers: X-Model header (empty = default Alibaba Qwen)
PROVIDERS=("openai" "gemini" "anthropic" "")

# Varied prompts so responses (and token counts) change
PROMPTS=(
  "Give me a one-line API tip"
  "Explain API gateways in one sentence"
  "Write a haiku about APIs"
  "Name 3 benefits of rate limiting"
  "What is JWT in one line?"
  "Suggest a REST naming convention"
)

# Counters (bash 3.2 compatible, no associative arrays)
C_OPENAI=0; C_GEMINI=0; C_ANTHROPIC=0; C_ALIBABA=0
TOTAL=0
START=$(date +%s)

cleanup() {
  echo ""
  echo "──────────────────────────────────────────"
  echo "  Traffic stopped. Total: $TOTAL calls"
  echo "    OpenAI:$C_OPENAI  Gemini:$C_GEMINI  Anthropic:$C_ANTHROPIC  Alibaba:$C_ALIBABA"
  echo "──────────────────────────────────────────"
  exit 0
}
trap cleanup INT TERM

fire() {
  local model="$1" prompt="$2"
  if [ -n "$model" ]; then
    curl -s -o /dev/null -X POST "$ENDPOINT" \
      -H 'Content-Type: application/json' -H "X-Model: $model" \
      -d "{\"contents\":\"$prompt\"}" || true
  else
    curl -s -o /dev/null -X POST "$ENDPOINT" \
      -H 'Content-Type: application/json' \
      -d "{\"contents\":\"$prompt\"}" || true
  fi
}

echo "▶ Sending traffic to $ENDPOINT"
if [ "$DURATION" -gt 0 ]; then
  echo "  For ${DURATION}s (Ctrl+C to stop earlier)"
else
  echo "  Infinite loop (Ctrl+C to stop)"
fi
echo ""

while true; do
  for _ in $(seq 1 "$ROUNDS_BURST"); do
    for p in "${PROVIDERS[@]}"; do
      prompt="${PROMPTS[$((RANDOM % ${#PROMPTS[@]}))]}"
      fire "$p" "$prompt" &
      case "$p" in
        openai)    C_OPENAI=$((C_OPENAI + 1)) ;;
        gemini)    C_GEMINI=$((C_GEMINI + 1)) ;;
        anthropic) C_ANTHROPIC=$((C_ANTHROPIC + 1)) ;;
        *)         C_ALIBABA=$((C_ALIBABA + 1)) ;;
      esac
      TOTAL=$((TOTAL + 1))
    done
  done
  wait

  printf "\r  sent: %-4s | OpenAI:%s Gemini:%s Anthropic:%s Alibaba:%s   " \
    "$TOTAL" "$C_OPENAI" "$C_GEMINI" "$C_ANTHROPIC" "$C_ALIBABA"

  if [ "$DURATION" -gt 0 ]; then
    NOW=$(date +%s)
    [ $((NOW - START)) -ge "$DURATION" ] && cleanup
  fi
  sleep "$DELAY"
done
