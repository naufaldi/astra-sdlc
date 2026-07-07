import type { Page } from '@open-slide/core';
import { Card } from '../primitives';
import { c, font } from '../tokens';
import { ConstraintsShiftPage, HeadingGridPage, HeroPage, ProblemPage } from '../factories';

export const COVER = HeroPage({
  kicker: 'developer workshop',
  title: 'Which AI Model Wins for Developers',
  subtitle: 'Models are getting better — choosing the right one for each developer task is still not simple. Compare GLM, GPT, Opus, and Kimi on real SDLC work through AstraFlow.',
  source: 'Stop Reading, Start Vibe-ing · UCloud Jakarta',
  aside: (
    <Card style={{ padding: 32 }}>
      <div style={{ fontFamily: font.mono, fontSize: 20, color: c.smoke }}>how we decide</div>
      <div style={{ display: 'grid', gap: 16, marginTop: 20 }}>
        <Card style={{ padding: 20 }}><div style={{ fontFamily: font.mono, fontSize: 16 }}>input</div><div style={{ marginTop: 10, fontSize: 26, fontWeight: 600 }}>Developer task</div></Card>
        <Card style={{ padding: 20 }}><div style={{ fontFamily: font.mono, fontSize: 16 }}>provider</div><div style={{ marginTop: 10, fontSize: 26, fontWeight: 600 }}>AstraFlow MaaS</div></Card>
        <Card style={{ padding: 20 }}><div style={{ fontFamily: font.mono, fontSize: 16 }}>choice</div><div style={{ marginTop: 10, fontSize: 26, fontWeight: 600 }}>Model choice</div></Card>
      </div>
    </Card>
  ),
});

const CONSTRAINTS = ConstraintsShiftPage({
  kicker: 'engineering reality',
  title: 'Constraints did not disappear. They changed.',
  subtitle: 'The workshop question is not "which model is smartest." It is which model fits the task under cost, speed, context, and quality.',
  left: {
    label: 'classic engineering constraints',
    items: [
      { title: 'Manpower', body: 'Team size caps throughput.' },
      { title: 'Time', body: 'Deadlines bound scope.' },
      { title: 'Budget', body: 'Infra, licenses, hiring.' },
      { title: 'Technology', body: 'Stack debt and integration cost.' },
    ],
  },
  right: {
    label: 'ai-era developer constraints',
    items: [
      { title: 'Inference cost', body: 'Smart models get expensive at every SDLC step.' },
      { title: 'Model fit', body: 'Fast and cheap vs good enough for the task.' },
      { title: 'Speed + context', body: 'Latency and window shape real workflows.' },
      { title: 'Regulation', body: 'Approved models, residency, org policy.' },
    ],
  },
  rule: 'You do not solve this with one premium default. You route — AstraFlow is OpenAI-compatible MaaS (like OpenRouter): one base_url, swap model param, same IDE.',
});

const BASELINE = HeadingGridPage({
  kicker: 'current state',
  title: 'Where is your team today?',
  subtitle: 'No wrong answers — this sets the baseline before we compare models live.',
  columns: 2,
  cards: [
    { title: 'Default habit', body: 'Strongest model for every task — or matched to the step?' },
    { title: 'Cost awareness', body: 'Know inference spend per PRD, code, review — or only monthly bill?' },
    { title: 'Output bar', body: 'Score on correctness and completeness — or "sounds good"?' },
    { title: 'Routing setup', body: 'One API gateway to swap models (AstraFlow / OpenRouter-style) — or locked to one vendor?' },
  ],
});

const PROBLEM = ProblemPage({
  kicker: 'problem',
  title: 'Teams use the strongest model as the default hammer.',
  rule: 'GPT-5.5 and Opus 4.8 are excellent — but using them for every SDLC step hides cheaper models that already pass the bar.',
  items: [
    { title: 'Same model for every task', body: 'PRDs, RFCs, code, and review all hit the premium baseline — even when the task is narrow.' },
    { title: 'Token price is only part of it', body: 'Retries, long context, and human correction dominate — especially when the model is overkill.' },
    { title: 'No practical scorecard', body: 'Teams compare vibes instead of cost, speed, context, and output quality on the same prompt.' },
  ],
});

const PROMISE = HeadingGridPage({
  kicker: 'workshop promise',
  title: 'A model wins only when it fits the task.',
  subtitle: 'Not one best model for everything — the right model for the right SDLC step.',
  cards: [
    { title: 'Same task, many models', body: 'Compare GLM 5.2, GPT 5.5, Opus 4.8, Kimi K2.7 on identical developer prompts.' },
    { title: 'Practical scorecard', body: 'Cost, speed, context, prompt sensitivity, output quality — not benchmark bragging.' },
    { title: 'Route through AstraFlow', body: 'OpenAI-compatible MaaS: swap model param, keep your IDE — then pick the cheapest passing model.' },
  ],
});

export const INTRO_PAGES: Page[] = [
  COVER,
  CONSTRAINTS,
  BASELINE,
  PROBLEM,
  PROMISE,
];
