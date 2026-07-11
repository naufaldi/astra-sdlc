import type { Page } from '@open-slide/core';
import stackSwapWin from '../assets/stack-swap-win.png';
import { HeadingGridPage, PricingTablePage, SplitImageCalloutPage } from '../factories';

export const OPEN_WEIGHT_BASELINE = HeadingGridPage({
  kicker: 'open-weight baseline',
  title: 'Open-weight is already close — and much cheaper.',
  subtitle: 'Not a replacement mandate. An alternative when the bar is met.',
  cards: [
    {
      title: 'Near-frontier intelligence',
      body: 'Kimi K2.7 · GLM 5.2 within 6–8% of Opus 4.8 / GPT-5.5 on daily engineering benchmarks — see slides 4–5.',
    },
    {
      title: 'Fraction of the price',
      body: 'Same task rubric, 5–12× cheaper per SDLC pass vs Opus/GPT direct pricing — see pricing slide.',
    },
    {
      title: 'Alternative, not replace',
      body: 'Open-weight routes sit beside premium defaults. Good enough for this task at lower cost — engineer picks per step.',
    },
    {
      title: 'More options, more possibility',
      body: 'One compatible API surface — Kimi · GLM · Qwen · DeepSeek · MiMo. Swap model param without rewriting your stack.',
    },
  ],
  columns: 2,
  rule: 'Open-weight gives you alternatives — near-frontier quality, frontier-level savings, your choice per task.',
});

export const MEASURING_MODELS = HeadingGridPage({
  kicker: 'what we measure',
  title: 'Measuring models — same rubric, every route.',
  subtitle: 'Score the model you can ship with, not the one that sounds smartest.',
  cards: [
    { title: 'Tokens per second', body: 'Generation throughput — slow models compound across retries.' },
    { title: 'Cost per task', body: 'Non-cache input + cache + output + reasoning for one workflow — AA Intelligence Index run, not list $/M.' },
    { title: 'Tokens per task', body: 'Total token burn per workflow — efficiency matters at volume.' },
    { title: 'Capability fit', body: 'Task match: reasoning, coding, agent loops, structured output.' },
    { title: 'Vision input / output', body: 'Multimodal needs — screenshots, diagrams, UI mocks. Flag when an open-weight route lacks vision.' },
    { title: 'Output quality', body: 'Correctness, coverage, maintainability on the workshop rubric — not macro benchmark rank.' },
  ],
  columns: 3,
  rule: 'Every routing decision uses the same scorecard.',
  footnote: 'Macro benchmarks (Arena, Artificial Analysis) set context — task rubric is the final arbiter.',
});

export const SMALL_INTEL_LARGE_COST = SplitImageCalloutPage({
  title: 'Others already route open-weight — not just us.',
  subtitle: 'What teams share online when they leave one frontier default.',
  image: stackSwapWin,
  source: 'Reference frame · internet stack swaps · verify on scorecard',
  rows: [
    { title: 'RFC · Opus 4.8 → Kimi K2.7', body: 'Intelligence: ~8% benchmark gap · Cost: ~11× cheaper.' },
    { title: 'PRD · GPT-5.5 → GLM 5.2', body: 'Intelligence: ~3% gap · Cost: ~5× cheaper.' },
    { title: 'Code · GPT-5.5 → Kimi K2.7', body: 'Intelligence: ~5–18% gap · Cost: ~7× cheaper.' },
    { title: 'Review · Opus 4.8 → GLM 5.2', body: 'Intelligence: checklist tradeoff · Cost: human review stays in loop.' },
  ],
});

export const ROUTING_PATTERNS = HeadingGridPage({
  kicker: 'what we can change',
  title: 'Stop using one frontier model for everything.',
  subtitle: 'Two routing patterns — task-specific or single open-weight default.',
  cards: [
    {
      title: 'Task-by-task routing',
      body: 'Match near-frontier open weight to each SDLC step — RFC → Kimi K2.7 · PRD/Review → GLM 5.2 · Code → Kimi K2.7.',
    },
    {
      title: 'Single-model default',
      body: 'Pick one open-weight model for all daily work — GLM 5.2 for everything or Kimi K2.7 for everything.',
    },
    {
      title: 'Frontier for complex tasks',
      body: 'Still need frontier models when the task is complex — ambiguous architecture, security-sensitive changes, multi-step reasoning, high blast radius.',
    },
    {
      title: 'Review stays in the loop',
      body: 'Still review the output — yourself or another agent. Routing changes the draft model, not accountability. Score 1–5; cheapest passing route wins.',
    },
  ],
  columns: 2,
  rule: 'Today most teams default Opus or GPT for almost everything. Routing means choosing GLM, Kimi, or task-specific pairs instead.',
  footnote: 'Verify model IDs via GET /v1/models before the workshop.',
});

export const PRICING_TABLE = PricingTablePage({
  title: 'Compare cost per workflow, not only token price.',
  formula: 'non-cache input + cache + output + reasoning',
  mode: 'task-cost',
  costColumnLabel: 'Index $',
  anchorNote: 'Artificial Analysis · Cost to Run Intelligence Index — one standardized eval run. Stacks non-cache input, cache read/write, reasoning, and output. Not list $/M.',
  source: 'artificialanalysis.ai · Price and Cost · Jul 2026',
  rows: [
    { model: 'MiMo V2.5 Pro', costPerTask: '$98', note: 'Open-weight volume anchor' },
    { model: 'DeepSeek V4 Pro (max)', costPerTask: '$176', note: 'Cost-efficiency anchor' },
    { model: 'GLM 5.2 (max)', costPerTask: '$820', note: 'Open-weight PRD/review' },
    { model: 'Kimi K2.7', costPerTask: '~$852', note: 'Open-weight code/RFC · K2.6 on AA chart' },
    { model: 'GPT-5.5 (xhigh)', costPerTask: '$2,630', note: 'Frontier baseline' },
    { model: 'Opus 4.8 (max)', costPerTask: '$3,753', note: 'Frontier reasoning' },
    { model: 'Fable 5 (fallback)', costPerTask: '$5,631', note: 'Premium ceiling' },
  ],
});

export const BASELINE_PAGES: Page[] = [
  OPEN_WEIGHT_BASELINE,
  MEASURING_MODELS,
  SMALL_INTEL_LARGE_COST,
  ROUTING_PATTERNS,
  PRICING_TABLE,
];
