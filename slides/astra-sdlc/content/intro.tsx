import type { Page } from '@open-slide/core';
import { Card, GradientSphere } from '../primitives';
import { c, font } from '../tokens';
import { HeadingGridPage, HeroPage, ProblemPage } from '../factories';

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

export const INTRO_PAGES: Page[] = [
  COVER,
  HeadingGridPage({ kicker: 'event promise', title: 'Routing gives you more freedom.', subtitle: 'Three reasons to route through AstraFlow — not one premium default.', cards: [
    { title: 'Cost', body: 'Cut cost 5–20× on SDLC tasks an open-weight model can handle.' },
    { title: 'Freedom', body: 'One provider, many models — swap via AstraFlow without rewriting your stack.' },
    { title: 'Quality', body: '8–12% performance gap vs frontier — high-intelligence open weights for daily engineering work.' },
  ], rule: 'Route for freedom: cost, choice, and intelligence.', hairline: true }),
  ProblemPage(),
];
