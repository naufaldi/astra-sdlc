import type { Page } from '@open-slide/core';
import { DemoPlaceholderPage, FlowDiagramPage, SideBySideCompare } from '../factories';
import type { SdlcCompare } from '../types';

export const SDLC_COMPARES: SdlcCompare[] = [
  { id: 'prd', kicker: 'task 01', title: 'PRD: replace when the input is structured enough.', task: 'PRD', proprietary: { model: 'GPT-5.5', strengths: ['Strong when the product problem is vague, political, or full of hidden assumptions.'] }, openWeight: { model: 'GLM 5.2', strengths: ['Strong when the brief has user, goal, scope, constraints, and acceptance criteria.'] }, risk: 'shallow requirements or missed edge cases', demo: { title: 'Demo: PRD (GPT-5.5 vs GLM 5.2)', subtitle: 'Switch to live IDE / AstraFlow console', source: 'Live demo · PRD task' } },
  { id: 'rfc', kicker: 'task 02', title: 'RFC: replace first drafts, be careful with final architecture.', task: 'RFC', proprietary: { model: 'Opus 4.8', strengths: ['Useful for ambiguous architecture, long context, and second-order consequences.'] }, openWeight: { model: 'Kimi K2.7', strengths: ['Good for draft alternatives, risk lists, migration notes, and decision tables.'] }, risk: 'weak constraints, generic tradeoffs, or missing rollback plan', demo: { title: 'Demo: RFC (Opus 4.8 vs Kimi K2.7)', subtitle: 'Switch to live IDE / AstraFlow console', source: 'Live demo · RFC task' } },
  { id: 'code', kicker: 'task 03', title: 'Code generation: replacement works best with narrow scope.', task: 'Generate Code', proprietary: { model: 'GPT-5.5', strengths: ['Helpful for unfamiliar codebases, multi-file context, and complex dependency chains.'] }, openWeight: { model: 'Kimi K2.7', strengths: ['Good for scoped implementation, tests, refactors; K2.7 within ~5–15pts of GPT-5.5 on coding benches.'] }, risk: 'fake APIs, incomplete integration, or style drift', demo: { title: 'Demo: Code (GPT-5.5 vs Kimi K2.7)', subtitle: 'Switch to live IDE / AstraFlow console', source: 'Live demo · Code task' } },
  { id: 'review', kicker: 'task 04', title: 'Code review: use open-weight models as checklist amplifiers.', task: 'Review Code', proprietary: { model: 'Opus 4.8', strengths: ['Better for subtle reasoning, security-sensitive changes, and complex behavioral regressions.'] }, openWeight: { model: 'GLM 5.2', strengths: ['Good for missing tests, obvious bugs, inconsistent patterns, and checklist-based review.'] }, risk: 'confident noise or missed deep design issues', demo: { title: 'Demo: Review (Opus 4.8 vs GLM 5.2)', subtitle: 'Switch to live IDE / AstraFlow console', source: 'Live demo · Review task' } },
];

export const SDLC_MAP = FlowDiagramPage({ kicker: 'sdlc map', title: 'Use the same four tasks for every model.', steps: [
  { label: '01 · PRD', detail: 'GPT-5.5 vs GLM 5.2' },
  { label: '02 · RFC', detail: 'Opus 4.8 vs Kimi K2.7' },
  { label: '03 · Code', detail: 'GPT-5.5 vs Kimi K2.7' },
  { label: '04 · Review', detail: 'Opus 4.8 vs GLM 5.2' },
]});

export const SDLC_COMPARE_PAGES: Page[] = SDLC_COMPARES.flatMap((c) => [
  SideBySideCompare(c),
  DemoPlaceholderPage(c.demo),
]);
