import type { Page } from '@open-slide/core';
import { Card, GradientSphere } from '../primitives';
import { c, font } from '../tokens';
import { FlowDiagramPage, HeadingGridPage, HeroPage, ProblemPage } from '../factories';

export const COVER = HeroPage({
  kicker: 'developer workshop',
  title: 'Open-Weight Routing for the SDLC',
  subtitle: 'Stop defaulting to one frontier model. Route open-weight models through AstraFlow when the quality bar is met — and cut cost by 5–12×.',
  source: 'Stop Reading, Start Vibe-ing · UCloud Jakarta',
  aside: (
    <div style={{ position: 'relative' }}>
      <Card style={{ padding: 32 }}>
        <div style={{ fontFamily: font.mono, fontSize: 20, color: c.smoke }}>three levers</div>
        <div style={{ display: 'grid', gap: 16, marginTop: 20 }}>
          <Card style={{ padding: 20 }}><div style={{ fontFamily: font.mono, fontSize: 16 }}>cost</div><div style={{ marginTop: 10, fontSize: 26, fontWeight: 600 }}>5–12× lower cost</div></Card>
          <Card style={{ padding: 20 }}><div style={{ fontFamily: font.mono, fontSize: 16 }}>vendor lock</div><div style={{ marginTop: 10, fontSize: 26, fontWeight: 600 }}>One API, swap models</div></Card>
          <Card style={{ padding: 20 }}><div style={{ fontFamily: font.mono, fontSize: 16 }}>quality</div><div style={{ marginTop: 10, fontSize: 26, fontWeight: 600 }}>Within 6–8% bar</div></Card>
        </div>
      </Card>
      <GradientSphere size={160} style={{ position: 'absolute', top: -40, right: -40, opacity: 0.75 }} />
    </div>
  ),
});

export const SDLC_STAGES = FlowDiagramPage({
  kicker: 'sdlc basics',
  title: 'What is the SDLC?',
  subtitle: 'Software Development Life Cycle — the path from idea to production.',
  source: 'Shared vocabulary · before we route',
  steps: [
    { label: 'Business Plan', detail: 'Decide what to build and why' },
    { label: 'Requirement Gathering', detail: 'Turn intent into scope' },
    { label: 'Code', detail: 'Implement the change' },
    { label: 'Testing', detail: 'Prove it works' },
    { label: 'Deploy', detail: 'Ship to users' },
  ],
  note: 'Every feature walks this path — whether you name the stages or not.',
});

export const SDLC_ARTIFACTS = FlowDiagramPage({
  kicker: 'in practice',
  title: 'How that shows up in engineering work.',
  subtitle: 'The same life cycle, expressed as the artifacts teams actually produce.',
  source: 'Shared vocabulary · before we route',
  steps: [
    { label: 'PRD', detail: 'Product requirements' },
    { label: 'RFC', detail: 'Technical proposal' },
    { label: 'Code', detail: 'The implementation' },
    { label: 'Review', detail: 'Pre-merge quality check' },
    { label: 'Release Notes', detail: 'What shipped' },
  ],
  note: 'Later we route models to these exact SDLC tasks.',
});

export const INTRO_PAGES: Page[] = [
  COVER,
  SDLC_STAGES,
  SDLC_ARTIFACTS,
  HeadingGridPage({ kicker: 'event promise', title: 'Routing gives you more freedom.', subtitle: 'Three reasons to route through AstraFlow — not one premium default.', cards: [
    { title: 'Cost', body: 'Cut cost 5–20× on SDLC tasks an open-weight model can handle.' },
    { title: 'Freedom', body: 'One provider, many models — swap via AstraFlow without rewriting your stack.' },
    { title: 'Quality', body: '8–12% performance gap vs frontier — high-intelligence open weights for daily engineering work.' },
  ], rule: 'Route for freedom: cost, choice, and intelligence.', hairline: true }),
  ProblemPage(),
];
