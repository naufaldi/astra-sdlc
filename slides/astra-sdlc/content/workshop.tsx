import type { Page } from '@open-slide/core';
import { HandsOnPage, HeadingGridPage, HeroPage, MatrixPage } from '../factories';

const LOGISTICS = HeadingGridPage({
  kicker: 'before we start hands-on',
  title: 'Laptop ready — same scorecard, same prompts.',
  source: 'AstraFlow · api-sg.umodelverse.ai · GET /v1/models to confirm IDs',
  cards: [
    { title: 'Laptop + IDE', body: 'Cursor, VS Code, or any OpenAI-compatible client. WiFi required.' },
    { title: 'AstraFlow access', body: 'Workshop voucher / API key. base_url → api-sg.umodelverse.ai/v1/' },
    { title: 'Verify models', body: 'Confirm GLM 5.2, GPT-5.5, Opus 4.8, Kimi K2.7 IDs via GET /v1/models.' },
    { title: 'Scorecard', body: 'Use the next slide grid — print or duplicate in your notes. Score 1–5 per task.' },
  ],
  columns: 2,
  footnote: 'Morning-of: recheck pricing at astraflow.ucloud.cn/docs/modelverse/price before live demos.',
});

export const WORKSHOP_PAGES: Page[] = [
  MatrixPage({ kicker: 'routing matrix', title: 'Route by risk, context, and repeatability.', cards: [
    { title: 'Low risk + repeatable', body: 'Start with open-weight. Examples: test drafts, PRD cleanup, checklist review.' },
    { title: 'High ambiguity', body: 'Use premium baseline first, then route follow-up iterations cheaper.' },
    { title: 'Clear context', body: 'Open-weight candidates strengthen when prompts include source truth and acceptance criteria.' },
    { title: 'High blast radius', body: 'Keep human review strict. Consider premium model as second reviewer.' },
  ]}),
  LOGISTICS,
  HandsOnPage({ brief: 'Admin can create vouchers with expiry, usage limit, eligibility, and checkout validation. Prevent double usage and explain failed redemption clearly.', prompts: [
    { title: 'prd prompt', body: 'Turn this feature brief into a PRD with scope, non-goals, edge cases, and acceptance criteria. Compare GPT-5.5 vs GLM 5.2.' },
    { title: 'rfc prompt', body: 'Propose an RFC covering data model, API flow, validation logic, failure modes, and rollout. Compare Opus 4.8 vs Kimi K2.7.' },
    { title: 'code prompt', body: 'Generate focused code changes for checkout validation. Compare GPT-5.5 vs Kimi K2.7.' },
    { title: 'review prompt', body: 'Review the generated diff for missing tests, edge cases, and security gaps. Compare Opus 4.8 vs GLM 5.2.' },
    { title: 'debug prompt', body: 'Paste a failing test or stack trace. Ask the model to fix root cause and explain the change. Iterate until green.' },
  ]}),
  MatrixPage({ kicker: 'scorecard', title: 'Give every model the same task and same scoring sheet.', table: { headers: ['Criterion', 'PRD', 'RFC', 'Code', 'Review'], rows: [
    ['Correctness', '1-5', '1-5', '1-5', '1-5'],
    ['Completeness', '1-5', '1-5', '1-5', '1-5'],
    ['Engineering depth', '1-5', '1-5', '1-5', '1-5'],
    ['Hallucination risk', '1-5', '1-5', '1-5', '1-5'],
    ['Human cleanup', '1-5', '1-5', '1-5', '1-5'],
  ]}, footnote: 'Print or screenshot this slide for hands-on. Score each model per task column — cheapest passing model wins.' }),
  HeroPage({ kicker: 'closing principle', title: 'Senior engineers choose the cheapest model that passes the bar.', subtitle: 'Not one smartest model. A routing system: task, quality bar, model candidate, cost check, human review.', source: 'Use live pricing and provider availability before final recommendation', center: true }),
];
