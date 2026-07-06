import type { Page } from '@open-slide/core';
import { Card } from '../primitives';
import { c, font } from '../tokens';
import { HeadingGridPage, HeroPage, ProblemPage } from '../factories';

export const COVER = HeroPage({
  kicker: 'developer workshop',
  title: 'Which AI Model Wins for Developers',
  subtitle: 'Which model wins — task by task. Route open-weight models through AstraFlow, not one premium default.',
  source: 'Stop Reading, Start Vibe-ing · UCloud Jakarta',
  aside: (
    <Card style={{ padding: 32 }}>
      <div style={{ fontFamily: font.mono, fontSize: 20, color: c.smoke }}>workshop frame</div>
      <div style={{ display: 'grid', gap: 16, marginTop: 20 }}>
        <Card style={{ padding: 20 }}><div style={{ fontFamily: font.mono, fontSize: 16 }}>input</div><div style={{ marginTop: 10, fontSize: 26, fontWeight: 600 }}>Developer task</div></Card>
        <Card style={{ padding: 20 }}><div style={{ fontFamily: font.mono, fontSize: 16 }}>provider</div><div style={{ marginTop: 10, fontSize: 26, fontWeight: 600 }}>AstraFlow</div></Card>
        <Card style={{ padding: 20 }}><div style={{ fontFamily: font.mono, fontSize: 16 }}>choice</div><div style={{ marginTop: 10, fontSize: 26, fontWeight: 600 }}>Open-weight model</div></Card>
      </div>
    </Card>
  ),
});

export const INTRO_PAGES: Page[] = [
  COVER,
  HeadingGridPage({ kicker: 'event promise', title: 'A model wins only when it fits the task.', subtitle: 'The workshop teaches developers how to choose a model for a concrete SDLC job.', cards: [
    { title: 'Real workflow', body: 'Evaluate model output inside PRD, RFC, coding, and review tasks.' },
    { title: 'Measured quality', body: 'Ask whether the model reduces engineering work, not whether it sounds impressive.' },
    { title: 'Cost pressure', body: 'Premium defaults are useful, but expensive when used for every developer step.' },
  ]}),
  ProblemPage(),
];
