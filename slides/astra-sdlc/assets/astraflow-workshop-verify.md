# AstraFlow workshop verification (12 Jul morning-of)

SEA endpoint: `https://api-sg.umodelverse.ai/v1/`

## 1. List models

```bash
export ENDPOINT="https://api-sg.umodelverse.ai"
curl "$ENDPOINT/v1/models" -H "Authorization: Bearer $ASTRAFLOW_API_KEY" | jq '.data[].id'
```

Confirm IDs for workshop pairs (names may differ — use closest match on catalog):

| Role | Catalog ID (Jul 2026 docs) | AstraFlow price (CNY/M) |
|------|---------------------------|-------------------------|
| PRD open-weight | `zai-org/glm-5` | In 4–6 · Out 18–22 |
| PRD premium | Check catalog for GPT-5.x | Verify live |
| RFC premium | Check catalog for Opus/Claude | Verify live |
| RFC open-weight | `moonshotai/kimi-k2.5` or `moonshotai/Kimi-K2-Instruct` | In 4 · Out 16–21 |
| Code open-weight | `moonshotai/Kimi-K2-Instruct` | In 4 · Out 16 |
| Review open-weight | `zai-org/glm-5` | In 4–6 · Out 18–22 |
| Cost anchor | `deepseek-ai/DeepSeek-V3.2-Exp` | In 2 · Out 3 |

## 2. Smoke test (swap model param only)

```bash
curl "$ENDPOINT/v1/chat/completions" \
  -H "Authorization: Bearer $ASTRAFLOW_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "{model_id_from_catalog}",
    "messages": [{"role": "user", "content": "Reply with OK only."}],
    "max_tokens": 10
  }'
```

Run once per demo pair before session.

## 3. Pricing

Verify live $/M at: https://astraflow.ucloud.cn/docs/modelverse/price

Update slide 15 rows if numbers shifted.

## 4. Demo prompts (same text as slide 28 hands-on)

- PRD: voucher feature → PRD, GPT-5.5 vs GLM 5.2
- RFC: data model + rollout, Opus 4.8 vs Kimi K2.7
- Code: checkout validation diff, GPT-5.5 vs Kimi K2.7
- Review: diff for tests/security, Opus 4.8 vs GLM 5.2
- Debug: paste failing test/stack trace, iterate until green

## 5. Run of show (150 min)

| Block | Min | Slides | Notes |
|-------|-----|--------|-------|
| Welcome + framing | 15 | 1–5 | Cover → constraints → baseline → problem → promise |
| AstraFlow + thesis | 20 | 6–9 | Live API swap on slide 6 |
| Evidence (compressed) | 15 | 10–13, 15–16 | Skip slide 14 if tight |
| Compares + demos | 45 | 17–25 | Second screen |
| Hands-on | 40 | 26–29 | Scorecard on slide 29 |
| Q&A + closing | 15 | 30 | |
