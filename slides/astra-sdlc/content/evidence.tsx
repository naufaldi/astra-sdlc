import type { Page } from '@open-slide/core';
import kimiBenchmarks from '../assets/kimi-benchmarks.png';
import arenaLeaderboard from '../assets/arena-agent-leaderboard.png';
import intelligenceVsCost from '../assets/intelligence-vs-cost.png';
import { HeadingGridPage, ImageBenchmarkPage, PricingTablePage } from '../factories';

export const EVIDENCE_PAGES: Page[] = [
  HeadingGridPage({ kicker: 'what we compare', title: 'Every routing decision uses the same scorecard.', cards: [
    { title: 'Cost per task', body: 'Input + output tokens priced per million for one SDLC pass.' },
    { title: 'Output quality', body: 'Correctness, coverage, and maintainability on the rubric.' },
    { title: 'Latency', body: 'Time-to-first-token and end-to-end workflow speed.' },
    { title: 'Tokens per second', body: 'Generation throughput — slow models add up across retries.' },
    { title: 'Context window', body: 'How much source code, docs, and history fit in one call.' },
    { title: 'Intelligence index', body: 'Macro benchmark context — not the final arbiter.' },
    { title: 'Arena rankings', body: 'Agentic task performance with source labels.' },
    { title: 'Retry + correction cost', body: 'Re-prompts and human cleanup after a bad draft.' },
    { title: 'Vendor lock-in', body: 'Open-weight routes reduce single-vendor dependency.' },
  ], columns: 3 }),
  ImageBenchmarkPage({ title: 'Intelligence vs cost per task', image: intelligenceVsCost, footerSource: 'artificialanalysis.ai · Intelligence vs Cost · Jul 2026', narrative: [
    'Opus 4.8 ~56 intel · ~$2.50/task — premium ceiling',
    'GPT-5.5 ~55 intel · ~$1.20/task — workshop baseline',
    'GLM-5.2 ~51 intel · ~$0.45/task — top-left move, >60% cost cut',
    'DeepSeek V4 ~44 intel · ~$0.045/task — cost anchor zone',
  ], footnote: 'Workshop uses Kimi K2.7 Code; scatter shows K2.6 ~43 intel.' }),
  ImageBenchmarkPage({ title: 'Benchmark: Arena.ai Agent Leaderboard', image: arenaLeaderboard, footerSource: 'arena.ai/leaderboard/agent · Jul 2026', narrative: [
    'GLM 5.2 #7 MIT — beats GPT 5.5 base #10 on agent tasks',
    'Opus 4.8 #2 · GPT 5.5 xHigh #3 — premium agent baselines',
    'Kimi K2.7 #14 on agent board — pair with Kimi coding chart',
  ]}),
  ImageBenchmarkPage({ title: 'Coding & Agent Benchmarks', image: kimiBenchmarks, footerSource: 'Kimi vendor benchmark * · Jul 2026', callouts: [
    { label: 'Coding', items: ['Kimi Code Bench v2*', 'Program Bench', 'MLS Bench Lite'] },
    { label: 'Agents', items: ['Kimi Claw 24/7 Bench*', 'MCP Atlas', 'MCP Mark Verified'] },
  ], narrative: ['K2.7 within ~5–15pts of GPT-5.5 on coding benches', 'MCP Atlas: K2.7 76 vs GPT-5.5 79.4', 'MCP Mark: K2.7 81.1 vs Opus 4.8 76.4'], footnote: 'Chart shows K2.6; workshop compares K2.7 Code. Vendor internal benchmarks (*).' }),
  HeadingGridPage({ kicker: 'candidate routes', title: 'Treat model swaps as hypotheses.', source: 'Recheck model IDs, pricing, and availability during live setup', cards: [
    { title: 'Opus 4.8', body: 'Premium reasoning baseline for ambiguous SDLC work.' },
    { title: 'GPT-5.5', body: 'Premium general coding and product baseline.' },
    { title: 'GLM 5.2', body: 'Open-weight candidate for structured SDLC drafting.' },
    { title: 'Kimi K2.7 Code', body: 'Open-weight candidate for coding workflows.' },
    { title: 'DeepSeek V4 Pro', body: 'Cost-efficiency anchor for coding and review.' },
    { title: 'Decision rule', body: 'A candidate replaces a baseline only after passing the task rubric.' },
  ], columns: 3 }),
  PricingTablePage({ title: 'Compare cost per workflow, not only token price.', formula: 'input + output + retries + human correction', anchorNote: 'DeepSeek V3.2-Exp anchors at 2/3 CNY per M on AstraFlow. Premium rows are direct-API contrast — verify routed pricing live.', source: 'astraflow.ucloud.cn/docs/modelverse/price · Jul 2026', rows: [
    { model: 'DeepSeek V3.2-Exp', input: '¥2/M', output: '¥3/M', note: 'Cost anchor' },
    { model: 'GLM 5 (zai-org/glm-5)', input: '¥4–6/M', output: '¥18–22/M', note: 'Open-weight PRD/review' },
    { model: 'Kimi K2 (moonshotai/*)', input: '¥4/M', output: '¥16/M', note: 'Open-weight code/RFC' },
    { model: 'GPT-5.5', input: '~$2.50/M', output: '~$15/M', note: 'Premium baseline' },
    { model: 'Opus 4.8', input: '~$5/M', output: '~$25/M', note: 'Premium reasoning' },
  ]}),
  HeadingGridPage({ kicker: 'quality rubric', title: 'Quality means less work for the engineer.', cards: [
    { title: 'Correctness', body: 'Does the answer match the task and constraints?' },
    { title: 'Coverage', body: 'Does it include edge cases and missing requirements?' },
    { title: 'Reasoning', body: 'Does it explain tradeoffs without hand-waving?' },
    { title: 'Hallucination', body: 'Does it avoid fake APIs, facts, or architecture?' },
    { title: 'Maintainability', body: 'Would this be easy to review and extend?' },
    { title: 'Review effort', body: 'How much human cleanup remains?' },
  ], columns: 3, rule: 'Score the output you can use, not the answer that sounds smartest.', footnote: 'Workshop rubric beats any benchmark chart.' }),
];
