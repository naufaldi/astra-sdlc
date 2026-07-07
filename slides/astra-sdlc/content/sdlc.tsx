import type { Page } from '@open-slide/core';
import { DemoPlaceholderPage, TaskComparePage } from '../factories';
import { Card, Heading, Slide } from '../primitives';
import { c } from '../tokens';
import type { SdlcCompare } from '../types';

export const SDLC_COMPARES: SdlcCompare[] = [
  {
    id: 'prd',
    kicker: 'task 01',
    title: 'Compare PRD.',
    task: 'PRD',
    about: 'Turn a feature brief into a product requirements document — what to build, what to skip, and what done looks like.',
    values: 'Scope · Non-goals · Edge cases · Acceptance criteria',
    proprietary: { model: 'GPT-5.5' },
    openWeight: { model: 'GLM 5.2' },
    demo: { title: 'Demo: PRD (GPT-5.5 vs GLM 5.2)', subtitle: 'Switch to live IDE / AstraFlow console', source: 'Live demo · PRD task' },
  },
  {
    id: 'rfc',
    kicker: 'task 02',
    title: 'Compare RFC.',
    task: 'RFC',
    about: 'Technical proposal before code ships — problem framing, architecture, and how to roll out safely.',
    values: 'Problem statement · Data model · API flow · Failure modes · Architecture tradeoffs · Rollout plan',
    proprietary: { model: 'Opus 4.8' },
    openWeight: { model: 'Kimi K2.7' },
    demo: { title: 'Demo: RFC (Opus 4.8 vs Kimi K2.7)', subtitle: 'Switch to live IDE / AstraFlow console', source: 'Live demo · RFC task' },
  },
  {
    id: 'code',
    kicker: 'task 03',
    title: 'Compare Code.',
    task: 'Generate Code',
    about: 'Focused implementation from a clear spec — a diff that compiles, integrates, and matches the codebase.',
    values: 'Correct APIs · Scoped changes · Test coverage · Style fit · No hallucinated dependencies',
    proprietary: { model: 'GPT-5.5' },
    openWeight: { model: 'Kimi K2.7' },
    demo: { title: 'Demo: Code (GPT-5.5 vs Kimi K2.7)', subtitle: 'Switch to live IDE / AstraFlow console', source: 'Live demo · Code task' },
  },
  {
    id: 'review',
    kicker: 'task 04',
    title: 'Compare Review.',
    task: 'Review Code',
    about: 'Pre-merge review of a diff — catch what a human reviewer would flag before it ships.',
    values: 'Missing tests · Edge cases · Security gaps · Pattern consistency · Actionable feedback',
    proprietary: { model: 'Opus 4.8' },
    openWeight: { model: 'GLM 5.2' },
    demo: { title: 'Demo: Review (Opus 4.8 vs GLM 5.2)', subtitle: 'Switch to live IDE / AstraFlow console', source: 'Live demo · Review task' },
  },
];

const CompareMethodologyPage: Page = () => (
  <Slide source="api-sg.umodelverse.ai/v1/ · swap model param only" pad="104px 120px 116px">
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Heading kicker="what we do" title="Four tasks. Two models. Same rubric." size="compact" />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
          marginTop: 48,
          flex: 1,
          minHeight: 0,
          alignContent: 'center',
        }}
      >
        <Card style={{ padding: '28px 32px' }}>
          <div style={{ fontSize: 34, fontWeight: 600, lineHeight: 1.2 }}>Four tasks</div>
          <p style={{ margin: '14px 0 0', fontSize: 26, lineHeight: 1.4, color: c.smoke }}>
            PRD · RFC · Generate Code · Review Code — four fixed SDLC steps. Every model runs the same task.
          </p>
        </Card>
        <Card style={{ padding: '28px 32px' }}>
          <div style={{ fontSize: 34, fontWeight: 600, lineHeight: 1.2 }}>Model pairs</div>
          <div style={{ margin: '14px 0 0', fontSize: 26, lineHeight: 1.4, color: c.smoke }}>
            {SDLC_COMPARES.map((compare) => (
              <p key={compare.id} style={{ margin: compare.id === 'prd' ? 0 : '10px 0 0' }}>
                {compare.task} → {compare.proprietary.model} vs {compare.openWeight.model}
              </p>
            ))}
          </div>
        </Card>
        <Card style={{ padding: '28px 32px' }}>
          <div style={{ fontSize: 34, fontWeight: 600, lineHeight: 1.2 }}>Same setup</div>
          <p style={{ margin: '14px 0 0', fontSize: 26, lineHeight: 1.4, color: c.smoke }}>
            Identical prompt per task. Route both through AstraFlow — same base_url, same SDK, swap model param only.
          </p>
        </Card>
        <Card style={{ padding: '28px 32px' }}>
          <div style={{ fontSize: 34, fontWeight: 600, lineHeight: 1.2 }}>What we score</div>
          <p style={{ margin: '14px 0 0', fontSize: 26, lineHeight: 1.4, color: c.smoke }}>
            Correctness · Completeness · Engineering depth · Hallucination risk · Human cleanup — 1–5 per task, per model.
          </p>
        </Card>
      </div>
    </div>
  </Slide>
);

export const SDLC_MAP = CompareMethodologyPage;

export const SDLC_COMPARE_PAGES: Page[] = SDLC_COMPARES.flatMap((compare) => [
  TaskComparePage(compare),
  DemoPlaceholderPage(compare.demo),
]);
