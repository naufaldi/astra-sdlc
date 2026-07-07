import type { Page } from '@open-slide/core';
import { DemoPlaceholderPage, FlowDiagramPage, HeadingGridPage, PrdCoverageChecklistPage, SideBySideCompare } from '../factories';
import type { SdlcCompare } from '../types';

export const PRD_COMPARISON_PROTOCOL = HeadingGridPage({
  kicker: 'task 01 · comparison protocol',
  title: 'Task 01 teaches the comparison — use it for every SDLC step.',
  cards: [
    { title: 'Same input', body: 'Use the structured voucher brief. Do not change the prompt between models.' },
    { title: 'Swap model only', body: 'Run GPT-5.5, then GLM 5.2 — same AstraFlow base_url, only the model param changes.' },
    { title: 'Judge the output', body: "Don't pick a winner by model name. Read both PRDs and score what each actually covered." },
  ],
  rule: 'Fair test beats benchmark charts — control the input, measure the output.',
  footnote: 'Tasks 02–04 repeat this protocol with different model pairs.',
});

export const PRD_COVERAGE_CHECKLIST = PrdCoverageChecklistPage({
  rows: [
    { section: 'Problem / goal', lookFor: 'Clear user + success metric', gptMark: '✓ / ⚠ / ✗', glmMark: '✓ / ⚠ / ✗' },
    { section: 'Scope', lookFor: 'In-scope features listed', gptMark: '✓ / ⚠ / ✗', glmMark: '✓ / ⚠ / ✗' },
    { section: 'Non-goals', lookFor: 'Explicit out-of-scope', gptMark: '✓ / ⚠ / ✗', glmMark: '✓ / ⚠ / ✗' },
    { section: 'Edge cases', lookFor: 'Double-use, expiry, failed redemption', gptMark: '✓ / ⚠ / ✗', glmMark: '✓ / ⚠ / ✗' },
    { section: 'Acceptance criteria', lookFor: 'Testable Given/When/Then', gptMark: '✓ / ⚠ / ✗', glmMark: '✓ / ⚠ / ✗' },
    { section: 'Open questions', lookFor: 'Unknowns flagged, not hidden', gptMark: '✓ / ⚠ / ✗', glmMark: '✓ / ⚠ / ✗' },
  ],
  examples: [
    { section: 'Edge cases', gpt: 'Strong on redemption failure UX', glm: 'Covers double-use; thinner on error messaging' },
    { section: 'Non-goals', gpt: 'May over-scope admin analytics', glm: 'Stays closer to brief scope' },
    { section: 'Acceptance criteria', gpt: 'More narrative AC', glm: 'More checklist-style AC' },
  ],
  rule: 'A model wins this task only when its PRD passes the rows you need — not because of the logo on the model card.',
  footnote: 'Example frame from workshop prep — your live demo results are the truth.',
});

export const SDLC_COMPARES: SdlcCompare[] = [
  {
    id: 'prd',
    kicker: 'task 01',
    title: 'PRD: two models, one brief — results decide.',
    subtitle: 'Benchmarks suggest where to start. The PRD output decides if replacement works.',
    task: 'PRD',
    proprietary: {
      model: 'GPT-5.5',
      strengths: [
        'When to try first: vague or political problem; hidden assumptions in the brief.',
        'May infer scope the brief did not state.',
      ],
    },
    openWeight: {
      model: 'GLM 5.2',
      strengths: [
        'When to try first: structured brief with user, goal, scope, constraints, acceptance criteria.',
        'Often cheaper (~5×) with small benchmark gap on agent tasks.',
      ],
    },
    compareNote: 'Neither wins until you compare coverage on the checklist slide.',
    risk: 'Shallow requirements · missed edge cases · invented scope',
    demo: {
      title: 'Demo: PRD (GPT-5.5 vs GLM 5.2)',
      subtitle: 'Generate both PRDs — then compare coverage, not model names.',
      source: 'Live demo · PRD task · results decide the winner',
      steps: [
        'Paste voucher brief + PRD prompt (hands-on slide)',
        'Generate with GPT-5.5 → open output → mark coverage checklist',
        'Same prompt, swap to zai-org/glm-5 → mark checklist again',
        'Compare rows side-by-side → score PRD column → discuss which passed',
      ],
    },
  },
  { id: 'rfc', kicker: 'task 02', title: 'RFC: replace first drafts, be careful with final architecture.', task: 'RFC', proprietary: { model: 'Opus 4.8', strengths: ['Useful for ambiguous architecture, long context, and second-order consequences.'] }, openWeight: { model: 'Kimi K2.7', strengths: ['Good for draft alternatives, risk lists, migration notes, and decision tables.'] }, risk: 'weak constraints, generic tradeoffs, or missing rollback plan', demo: { title: 'Demo: RFC (Opus 4.8 vs Kimi K2.7)', subtitle: 'Switch to live IDE / AstraFlow console', source: 'Live demo · RFC task' } },
  { id: 'code', kicker: 'task 03', title: 'Code generation: replacement works best with narrow scope.', task: 'Generate Code', proprietary: { model: 'GPT-5.5', strengths: ['Helpful for unfamiliar codebases, multi-file context, and complex dependency chains.'] }, openWeight: { model: 'Kimi K2.7', strengths: ['Good for scoped implementation, tests, refactors; K2.7 within ~5–15pts of GPT-5.5 on coding benches.'] }, risk: 'fake APIs, incomplete integration, or style drift', demo: { title: 'Demo: Code (GPT-5.5 vs Kimi K2.7)', subtitle: 'Switch to live IDE / AstraFlow console', source: 'Live demo · Code task' } },
  { id: 'review', kicker: 'task 04', title: 'Code review: use open-weight models as checklist amplifiers.', task: 'Review Code', proprietary: { model: 'Opus 4.8', strengths: ['Better for subtle reasoning, security-sensitive changes, and complex behavioral regressions.'] }, openWeight: { model: 'GLM 5.2', strengths: ['Good for missing tests, obvious bugs, inconsistent patterns, and checklist-based review.'] }, risk: 'confident noise or missed deep design issues', demo: { title: 'Demo: Review (Opus 4.8 vs GLM 5.2)', subtitle: 'Switch to live IDE / AstraFlow console', source: 'Live demo · Review task' } },
];

export const SDLC_MAP = FlowDiagramPage({
  kicker: 'sdlc map',
  title: 'Use the same four tasks for every model.',
  steps: [
    { label: '01 · PRD', detail: 'GPT-5.5 vs GLM 5.2' },
    { label: '02 · RFC', detail: 'Opus 4.8 vs Kimi K2.7' },
    { label: '03 · Code', detail: 'GPT-5.5 vs Kimi K2.7' },
    { label: '04 · Review', detail: 'Opus 4.8 vs GLM 5.2' },
  ],
  note: 'Task 01 sets the comparison pattern — judge outputs, not model names.',
});

export const SDLC_COMPARE_PAGES: Page[] = SDLC_COMPARES.flatMap((c) => [
  SideBySideCompare(c),
  DemoPlaceholderPage(c.demo),
]);
