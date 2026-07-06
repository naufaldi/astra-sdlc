import type { CSSProperties, ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import kimiBenchmarks from './assets/kimi-benchmarks.png';
import arenaLeaderboard from './assets/arena-agent-leaderboard.png';
import intelligenceVsCost from './assets/intelligence-vs-cost.png';
import stackSwapWin from './assets/stack-swap-win.png';

export const design: DesignSystem = {
  palette: { bg: '#fdfcfc', text: '#000000', accent: '#0447ff' },
  fonts: {
    display: '"Plus Jakarta Sans", "Inter", system-ui, sans-serif',
    body: '"Inter", system-ui, -apple-system, sans-serif',
  },
  typeScale: { hero: 120, body: 36 },
  radius: 20,
};

const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap';
if (typeof document !== 'undefined' && !document.getElementById('osd-webfont')) {
  const link = document.createElement('link');
  link.id = 'osd-webfont';
  link.rel = 'stylesheet';
  link.href = FONT_HREF;
  document.head.appendChild(link);
}

const c = {
  bg: design.palette.bg,
  text: design.palette.text,
  taupe: '#f5f3f1',
  stone: '#ebe8e4',
  smoke: '#777169',
  ash: '#a59f97',
  ink2: '#1a1814',
  violet: '#0447ff',
  ember: '#ff4704',
  green: '#1a7a4a',
  amber: '#b86a00',
  red: '#c0392b',
};

const font = { mono: '"JetBrains Mono", ui-monospace, Menlo, monospace' };
const fill: CSSProperties = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  position: 'relative',
  overflow: 'hidden',
};

const Footer = ({ source }: { source?: string }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <div style={{ position: 'absolute', left: 120, right: 120, bottom: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: c.ash, fontSize: 22 }}>
      <div style={{ fontFamily: font.mono }}>AstraFlow SDLC Model Routing</div>
      <div style={{ maxWidth: 880, textAlign: 'right' }}>{source}</div>
      <div style={{ fontFamily: font.mono }}>{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>
    </div>
  );
};

const Slide = ({ children, source, pad = '104px 120px 116px' }: { children: ReactNode; source?: string; pad?: string }) => (
  <section style={fill}>
    <div style={{ position: 'relative', zIndex: 1, height: '100%', padding: pad }}>{children}</div>
    <Footer source={source} />
  </section>
);

const PillLabel = ({ children }: { children: ReactNode }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', height: 40, padding: '0 18px', border: `1px solid ${c.stone}`, borderRadius: 9999, fontFamily: font.mono, fontSize: 20, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'lowercase' }}>{children}</div>
);

const Heading = ({ kicker, title, subtitle }: { kicker?: string; title: ReactNode; subtitle?: ReactNode }) => (
  <header style={{ maxWidth: 1420 }}>
    {kicker && <PillLabel>{kicker}</PillLabel>}
    <h1 style={{ margin: kicker ? '28px 0 0' : 0, fontFamily: 'var(--osd-font-display)', fontSize: 96, lineHeight: 1.04, letterSpacing: '-0.02em', fontWeight: 600 }}>{title}</h1>
    {subtitle && <p style={{ margin: '28px 0 0', color: c.smoke, fontSize: 36, lineHeight: 1.45, maxWidth: 1280 }}>{subtitle}</p>}
  </header>
);

const Card = ({ children, style }: { children: ReactNode; style?: CSSProperties }) => (
  <div style={{ background: c.taupe, borderRadius: 'var(--osd-radius)', padding: 32, ...style }}>{children}</div>
);

const BigRule = ({ children }: { children: ReactNode }) => (
  <div style={{ padding: '32px 36px', background: c.taupe, borderRadius: 20, fontSize: 40, lineHeight: 1.24, fontWeight: 600 }}>{children}</div>
);

const Hairline = () => <div style={{ height: 1, background: c.stone, margin: '24px 0' }} />;

type GridCard = { title: string; body: string };
type FlowStep = { label: string; detail: string };
type CompareSide = { model: string; strengths: string[] };
type SdlcCompare = {
  id: 'prd' | 'rfc' | 'code' | 'review';
  kicker: string;
  title: string;
  task: string;
  proprietary: CompareSide;
  openWeight: CompareSide;
  risk: string;
  demo: { title: string; subtitle: string; source: string };
};

const HeroPage = ({ kicker, title, subtitle, source, center, aside }: { kicker?: string; title: string; subtitle?: string; source?: string; center?: boolean; aside?: ReactNode }) => {
  const PageFn: Page = () => (
    <Slide source={source} pad={center ? '120px' : undefined}>
      {center ? (
        <div style={{ height: '100%', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
          <div>
            {kicker && <PillLabel>{kicker}</PillLabel>}
            <h1 style={{ margin: '36px auto 0', maxWidth: 1280, fontFamily: 'var(--osd-font-display)', fontSize: center ? 104 : 'var(--osd-size-hero)', lineHeight: 1.04, fontWeight: 600, letterSpacing: '-0.02em' }}>{title}</h1>
            {subtitle && <p style={{ margin: '40px auto 0', maxWidth: 1120, color: c.smoke, fontSize: 38, lineHeight: 1.36 }}>{subtitle}</p>}
          </div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: aside ? '1.05fr 0.95fr' : '1fr', gap: 70, height: '100%', alignItems: 'center' }}>
          <div>
            {kicker && <PillLabel>{kicker}</PillLabel>}
            <h1 style={{ margin: '32px 0 0', fontFamily: 'var(--osd-font-display)', fontSize: 'var(--osd-size-hero)', lineHeight: 0.98, fontWeight: 600, letterSpacing: '-0.02em', maxWidth: 980 }}>{title}</h1>
            {subtitle && <p style={{ margin: '36px 0 0', color: c.smoke, fontSize: 40, lineHeight: 1.34, maxWidth: 920 }}>{subtitle}</p>}
          </div>
          {aside}
        </div>
      )}
    </Slide>
  );
  return PageFn;
};

const HeadingGridPage = ({ kicker, title, subtitle, cards, columns = 3, source, footnote, rule }: { kicker?: string; title: string; subtitle?: string; cards: GridCard[]; columns?: number; source?: string; footnote?: string; rule?: string }) => {
  const PageFn: Page = () => (
    <Slide source={source}>
      <Heading kicker={kicker} title={title} subtitle={subtitle} />
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 24, marginTop: 56 }}>
        {cards.map((card) => (
          <Card key={card.title}>
            <div style={{ fontSize: 36, fontWeight: 600 }}>{card.title}</div>
            <p style={{ margin: '18px 0 0', fontSize: 28, lineHeight: 1.4, color: c.smoke }}>{card.body}</p>
          </Card>
        ))}
      </div>
      {rule && <div style={{ marginTop: 40 }}><BigRule>{rule}</BigRule></div>}
      {footnote && <p style={{ marginTop: 28, color: c.ash, fontSize: 24 }}>{footnote}</p>}
    </Slide>
  );
  return PageFn;
};

const FlowDiagramPage = ({ kicker, title, subtitle, steps, source, note }: { kicker?: string; title: string; subtitle?: string; steps: FlowStep[]; source?: string; note?: string }) => {
  const PageFn: Page = () => (
    <Slide source={source}>
      <Heading kicker={kicker} title={title} subtitle={subtitle} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 72, flexWrap: 'wrap' }}>
        {steps.map((s, i) => (
          <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {i > 0 && <div style={{ width: 48, height: 1, background: c.stone }} />}
            <Card style={{ width: 280, minHeight: 140, padding: 24 }}>
              <div style={{ fontFamily: font.mono, color: c.smoke, fontSize: 18 }}>{s.label}</div>
              <div style={{ marginTop: 14, fontSize: 28, lineHeight: 1.25, fontWeight: 600 }}>{s.detail}</div>
            </Card>
          </div>
        ))}
      </div>
      {note && <p style={{ margin: '64px auto 0', maxWidth: 1180, textAlign: 'center', color: c.smoke, fontSize: 34, lineHeight: 1.38 }}>{note}</p>}
    </Slide>
  );
  return PageFn;
};

const SplitImageCalloutPage = ({ title, image, rows, source }: { title: string; image: string; rows: GridCard[]; source?: string }) => {
  const PageFn: Page = () => (
    <Slide source={source}>
      <Heading title={title} subtitle="Small benchmark gap, large cost gap — when the task bar is met." />
      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 36, marginTop: 48, alignItems: 'start' }}>
        <img src={image} alt="" style={{ width: '100%', borderRadius: 16, border: `1px solid ${c.stone}` }} />
        <div style={{ display: 'grid', gap: 16 }}>
          {rows.map((r) => (
            <Card key={r.title} style={{ padding: 24 }}>
              <div style={{ fontSize: 28, fontWeight: 600 }}>{r.title}</div>
              <p style={{ margin: '10px 0 0', fontSize: 24, lineHeight: 1.35, color: c.smoke }}>{r.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </Slide>
  );
  return PageFn;
};

const ImageBenchmarkPage = ({ title, image, callouts, footerSource, footnote, narrative }: { title: string; image: string; callouts?: { label: string; items: string[] }[]; footerSource: string; footnote?: string; narrative?: string[] }) => {
  const PageFn: Page = () => (
    <Slide source={footerSource}>
      <Heading title={title} />
      <img src={image} alt="" style={{ width: '100%', maxHeight: 520, objectFit: 'contain', marginTop: 32, borderRadius: 12 }} />
      {(callouts || narrative) && (
        <div style={{ display: 'grid', gridTemplateColumns: callouts ? '1fr 1fr' : '1fr', gap: 20, marginTop: 24 }}>
          {callouts?.map((co) => (
            <Card key={co.label} style={{ padding: 20 }}>
              <div style={{ fontFamily: font.mono, fontSize: 18, color: c.smoke }}>{co.label}</div>
              <div style={{ marginTop: 10, fontSize: 22, lineHeight: 1.35 }}>{co.items.join(' · ')}</div>
            </Card>
          ))}
          {narrative && (
            <Card style={{ padding: 20 }}>
              {narrative.map((n) => <div key={n} style={{ fontSize: 22, lineHeight: 1.4, color: c.smoke, marginTop: 8 }}>{n}</div>)}
            </Card>
          )}
        </div>
      )}
      {footnote && <p style={{ marginTop: 20, color: c.ash, fontSize: 22 }}>{footnote}</p>}
    </Slide>
  );
  return PageFn;
};

const PricingTablePage = ({ title, formula, rows, anchorNote, source }: { title: string; formula: string; rows: { model: string; input: string; output: string; note?: string }[]; anchorNote: string; source?: string }) => {
  const PageFn: Page = () => (
    <Slide source={source}>
      <Heading kicker="cost model" title={title} />
      <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 36 }}>
        <Card style={{ padding: 36 }}>
          <div style={{ fontFamily: font.mono, fontSize: 22, color: c.smoke }}>TASK COST</div>
          <div style={{ marginTop: 24, fontSize: 44, lineHeight: 1.2, fontWeight: 600 }}>{formula}</div>
          <p style={{ marginTop: 24, fontSize: 26, color: c.smoke, lineHeight: 1.4 }}>{anchorNote}</p>
        </Card>
        <Card style={{ padding: 28 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.8fr 0.8fr 1fr', gap: 10, fontFamily: font.mono, fontSize: 18, color: c.ash, fontWeight: 500 }}>
            <div>Model</div><div>In $/M</div><div>Out $/M</div><div>Note</div>
          </div>
          <Hairline />
          {rows.map((r) => (
            <div key={r.model} style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.8fr 0.8fr 1fr', gap: 10, fontSize: 22, padding: '10px 0', borderBottom: `1px solid ${c.stone}` }}>
              <b>{r.model}</b><span>{r.input}</span><span>{r.output}</span><span style={{ color: c.smoke, fontSize: 20 }}>{r.note}</span>
            </div>
          ))}
        </Card>
      </div>
    </Slide>
  );
  return PageFn;
};

const SideBySideCompare = (d: SdlcCompare) => {
  const PageFn: Page = () => (
    <Slide>
      <Heading kicker={d.kicker} title={d.title} />
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr 1fr', gap: 20, marginTop: 56 }}>
        <Card style={{ padding: 24 }}><div style={{ fontFamily: font.mono, fontSize: 18, color: c.smoke }}>SDLC TASK</div><div style={{ marginTop: 16, fontSize: 40, fontWeight: 600 }}>{d.task}</div></Card>
        <Card style={{ padding: 24 }}>
          <div style={{ fontFamily: font.mono, fontSize: 18, color: c.amber }}>{d.proprietary.model}</div>
          {d.proprietary.strengths.map((s) => <p key={s} style={{ margin: '14px 0 0', fontSize: 26, lineHeight: 1.34, color: c.smoke }}>{s}</p>)}
        </Card>
        <Card style={{ padding: 24 }}>
          <div style={{ fontFamily: font.mono, fontSize: 18, color: c.green }}>{d.openWeight.model}</div>
          {d.openWeight.strengths.map((s) => <p key={s} style={{ margin: '14px 0 0', fontSize: 26, lineHeight: 1.34, color: c.smoke }}>{s}</p>)}
          <p style={{ marginTop: 20, color: c.red, fontSize: 22 }}>Risk: {d.risk}</p>
        </Card>
      </div>
    </Slide>
  );
  return PageFn;
};

const DemoPlaceholderPage = (d: SdlcCompare['demo']) => {
  const PageFn: Page = () => (
    <Slide source={d.source} pad="120px">
      <div style={{ height: '100%', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
        <div>
          <PillLabel>live demo</PillLabel>
          <h1 style={{ margin: '40px 0 0', fontFamily: 'var(--osd-font-display)', fontSize: 104, fontWeight: 600, letterSpacing: '-0.02em' }}>{d.title}</h1>
          <p style={{ margin: '36px 0 0', color: c.smoke, fontSize: 38 }}>{d.subtitle}</p>
          <p style={{ margin: '28px 0 0', fontFamily: font.mono, color: c.ash, fontSize: 24 }}>Swap model via AstraFlow model param</p>
        </div>
      </div>
    </Slide>
  );
  return PageFn;
};

const MatrixPage = ({ kicker, title, cards, table }: { kicker?: string; title: string; cards?: GridCard[]; table?: { headers: string[]; rows: string[][] } }) => {
  const PageFn: Page = () => (
    <Slide>
      <Heading kicker={kicker} title={title} />
      {cards && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 48 }}>
          {cards.map((card) => (
            <Card key={card.title} style={{ minHeight: 160 }}>
              <div style={{ fontSize: 32, fontWeight: 600 }}>{card.title}</div>
              <p style={{ margin: '14px 0 0', fontSize: 26, color: c.smoke, lineHeight: 1.35 }}>{card.body}</p>
            </Card>
          ))}
        </div>
      )}
      {table && (
        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 32 }}>
          <Card style={{ padding: 28 }}>
            <div style={{ display: 'grid', gridTemplateColumns: `1.3fr repeat(${table.headers.length - 1}, 0.55fr)`, gap: 10, fontFamily: font.mono, fontSize: 18, color: c.ash }}>
              {table.headers.map((h) => <div key={h}>{h}</div>)}
            </div>
            {table.rows.map((row) => (
              <div key={row[0]} style={{ display: 'grid', gridTemplateColumns: `1.3fr repeat(${row.length - 1}, 0.55fr)`, gap: 10, fontSize: 22, padding: '12px 0', borderTop: `1px solid ${c.stone}` }}>
                {row.map((cell, i) => (i === 0 ? <b key={cell}>{cell}</b> : <span key={cell}>{cell}</span>))}
              </div>
            ))}
          </Card>
          <Card style={{ padding: 32 }}>
            <div style={{ fontSize: 36, fontWeight: 600 }}>Decision rule</div>
            <p style={{ marginTop: 20, fontSize: 28, lineHeight: 1.42, color: c.smoke }}>The replacement wins when it hits the minimum quality score and lowers total workflow cost.</p>
            <div style={{ marginTop: 28 }}><BigRule>Cheapest passing model wins.</BigRule></div>
          </Card>
        </div>
      )}
    </Slide>
  );
  return PageFn;
};

const HandsOnPage = ({ brief, prompts }: { brief: string; prompts: { title: string; body: string }[] }) => {
  const PageFn: Page = () => (
    <Slide>
      <Heading kicker="hands-on" title="Workshop scenario: voucher feature." />
      <div style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 32, marginTop: 48 }}>
        <Card style={{ padding: 32 }}>
          <div style={{ fontSize: 38, fontWeight: 600 }}>Feature brief</div>
          <p style={{ marginTop: 20, color: c.smoke, fontSize: 28, lineHeight: 1.42 }}>{brief}</p>
        </Card>
        <div style={{ display: 'grid', gap: 16 }}>
          {prompts.map((p) => (
            <div key={p.title} style={{ background: c.ink2, color: c.bg, borderRadius: 16, padding: '20px 24px', fontFamily: font.mono }}>
              <div style={{ fontSize: 16, color: c.ash, textTransform: 'uppercase' }}>{p.title}</div>
              <div style={{ marginTop: 12, fontSize: 20, lineHeight: 1.38 }}>{p.body}</div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
  return PageFn;
};

const ProblemPage = () => {
  const PageFn: Page = () => (
    <Slide>
      <Heading kicker="problem" title="Teams use premium models as the default hammer." />
      <div style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 40, marginTop: 52 }}>
        <BigRule>GPT and Opus are strong defaults, but defaulting every SDLC task to them hides the real cost curve.</BigRule>
        <Card style={{ padding: 32 }}>
          {[
            ['Same model for every task', 'PRDs, RFCs, code, tests, and review all route to the premium baseline.'],
            ['Token price is only part of it', 'Long context, retries, and human correction dominate total cost.'],
            ['No quality bar', 'Teams often compare vibes instead of acceptance criteria.'],
          ].map(([t, b]) => (
            <div key={t} style={{ padding: '16px 0', borderBottom: `1px solid ${c.stone}` }}>
              <div style={{ fontSize: 28, fontWeight: 600 }}>{t}</div>
              <div style={{ marginTop: 8, color: c.smoke, fontSize: 24, lineHeight: 1.32 }}>{b}</div>
            </div>
          ))}
        </Card>
      </div>
    </Slide>
  );
  return PageFn;
};

const COVER = HeroPage({
  kicker: 'developer workshop',
  title: 'AstraFlow SDLC Model Routing',
  subtitle: 'Route open-weight models through AstraFlow — not one premium default.',
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

const INTRO_PAGES: Page[] = [
  COVER,
  HeadingGridPage({ kicker: 'event promise', title: 'A model wins only when it fits the task.', subtitle: 'The workshop teaches developers how to choose a model for a concrete SDLC job.', cards: [
    { title: 'Real workflow', body: 'Evaluate model output inside PRD, RFC, coding, and review tasks.' },
    { title: 'Measured quality', body: 'Ask whether the model reduces engineering work, not whether it sounds impressive.' },
    { title: 'Cost pressure', body: 'Premium defaults are useful, but expensive when used for every developer step.' },
  ]}),
  ProblemPage(),
];

const PROVIDER_PAGES: Page[] = [
  FlowDiagramPage({ kicker: 'provider layer', title: 'AstraFlow is the access layer, not the SDLC workflow.', steps: [
    { label: '01', detail: 'IDE, agent, CLI, app' },
    { label: '02', detail: 'AstraFlow gateway' },
    { label: '03', detail: 'OpenAI-compatible /v1/chat/completions' },
    { label: '04', detail: 'Model catalog + SDLC output' },
  ], source: 'UCloud ModelVerse · api-sg.umodelverse.ai for SEA', note: 'Swap model via model param only — same base_url, same SDK. Like OpenRouter for regional MaaS.' }),
  HeadingGridPage({ kicker: 'open-weight thesis', title: 'Open-weight models become useful when they pass a task bar.', subtitle: 'They are not magic. They are valuable when quality is good enough and cost is lower.', cards: [
    { title: 'Why they matter', body: 'More provider options, lower per-task cost, less vendor lock-in, room for routing experiments.' },
    { title: 'Where to be careful', body: 'Quality varies by task. A cheap model that needs many retries may be expensive in human time.' },
  ], columns: 2 }),
  HeadingGridPage({ kicker: 'definition', title: 'Replace does not mean “win every benchmark.”', cards: [
    { title: 'Task-specific', body: 'PRD quality is not the same as code review quality.' },
    { title: 'Human-reviewed', body: 'The engineer still owns the decision and accepts the risk.' },
    { title: 'Measured', body: 'Cost and quality are scored with the same rubric every time.' },
  ], rule: 'Replace means: the candidate produces output good enough for this SDLC task at a lower total cost.' }),
  SplitImageCalloutPage({ title: 'The win: small benchmark gap, large cost gap', image: stackSwapWin, source: 'Reference frame · adapt pairs per SDLC task · verify on scorecard', rows: [
    { title: 'RFC · Opus 4.8 → Kimi K2.7', body: '~8% benchmark gap, ~11× cheaper — same pair as reasoning reference.' },
    { title: 'PRD · GPT-5.5 → GLM 5.2', body: '~3% gap, ~5× cheaper — GLM strong on Arena agent leaderboard.' },
    { title: 'Code · GPT-5.5 → Kimi K2.7', body: '~5–18% gap, ~7× cheaper — see Kimi coding chart (page 11).' },
    { title: 'Review · Opus 4.8 → GLM 5.2', body: 'Checklist + reasoning tradeoff — human review stays in loop.' },
  ]}),
];

const EVIDENCE_PAGES: Page[] = [
  HeadingGridPage({ kicker: 'what we compare', title: 'Every routing decision uses the same scorecard.', cards: [
    { title: 'Cost per task', body: 'Input + output tokens, retries, and human correction time.' },
    { title: 'Output quality', body: 'Correctness, coverage, and maintainability on the rubric.' },
    { title: 'Latency', body: 'Time-to-first-token and end-to-end workflow speed.' },
    { title: 'Intelligence index', body: 'Macro benchmark context — not the final arbiter.' },
    { title: 'Arena rankings', body: 'Agentic task performance with source labels.' },
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
  PricingTablePage({ title: 'Compare cost per workflow, not only token price.', formula: 'input + output + retries + human correction', anchorNote: 'DeepSeek V3/V4 anchors the cost-efficiency zone. Verify live pricing at workshop.', source: 'Pricing docs · verify live at workshop', rows: [
    { model: 'DeepSeek V3.2-Exp', input: '~$0.28', output: '~$0.42', note: 'Cost anchor' },
    { model: 'GLM 5.2', input: '~$0.55', output: '~$2.20', note: 'Open-weight PRD/RFC' },
    { model: 'Kimi K2.7', input: '~$0.55', output: '~$2.20', note: 'Open-weight code' },
    { model: 'GPT-5.5', input: '~$2.50', output: '~$15.00', note: 'Premium baseline' },
    { model: 'Opus 4.8', input: '~$5.00', output: '~$25.00', note: 'Premium reasoning' },
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

const SDLC_COMPARES: SdlcCompare[] = [
  { id: 'prd', kicker: 'task 01', title: 'PRD: replace when the input is structured enough.', task: 'PRD', proprietary: { model: 'GPT-5.5', strengths: ['Strong when the product problem is vague, political, or full of hidden assumptions.'] }, openWeight: { model: 'GLM 5.2', strengths: ['Strong when the brief has user, goal, scope, constraints, and acceptance criteria.'] }, risk: 'shallow requirements or missed edge cases', demo: { title: 'Demo: PRD (GPT-5.5 vs GLM 5.2)', subtitle: 'Switch to live IDE / AstraFlow console', source: 'Live demo · PRD task' } },
  { id: 'rfc', kicker: 'task 02', title: 'RFC: replace first drafts, be careful with final architecture.', task: 'RFC', proprietary: { model: 'Opus 4.8', strengths: ['Useful for ambiguous architecture, long context, and second-order consequences.'] }, openWeight: { model: 'Kimi K2.7', strengths: ['Good for draft alternatives, risk lists, migration notes, and decision tables.'] }, risk: 'weak constraints, generic tradeoffs, or missing rollback plan', demo: { title: 'Demo: RFC (Opus 4.8 vs Kimi K2.7)', subtitle: 'Switch to live IDE / AstraFlow console', source: 'Live demo · RFC task' } },
  { id: 'code', kicker: 'task 03', title: 'Code generation: replacement works best with narrow scope.', task: 'Generate Code', proprietary: { model: 'GPT-5.5', strengths: ['Helpful for unfamiliar codebases, multi-file context, and complex dependency chains.'] }, openWeight: { model: 'Kimi K2.7', strengths: ['Good for scoped implementation, tests, refactors; K2.7 within ~5–15pts of GPT-5.5 on coding benches.'] }, risk: 'fake APIs, incomplete integration, or style drift', demo: { title: 'Demo: Code (GPT-5.5 vs Kimi K2.7)', subtitle: 'Switch to live IDE / AstraFlow console', source: 'Live demo · Code task' } },
  { id: 'review', kicker: 'task 04', title: 'Code review: use open-weight models as checklist amplifiers.', task: 'Review Code', proprietary: { model: 'Opus 4.8', strengths: ['Better for subtle reasoning, security-sensitive changes, and complex behavioral regressions.'] }, openWeight: { model: 'GLM 5.2', strengths: ['Good for missing tests, obvious bugs, inconsistent patterns, and checklist-based review.'] }, risk: 'confident noise or missed deep design issues', demo: { title: 'Demo: Review (Opus 4.8 vs GLM 5.2)', subtitle: 'Switch to live IDE / AstraFlow console', source: 'Live demo · Review task' } },
];

const SDLC_MAP = FlowDiagramPage({ kicker: 'sdlc map', title: 'Use the same four tasks for every model.', steps: [
  { label: '01 · PRD', detail: 'GPT-5.5 vs GLM 5.2' },
  { label: '02 · RFC', detail: 'Opus 4.8 vs Kimi K2.7' },
  { label: '03 · Code', detail: 'GPT-5.5 vs Kimi K2.7' },
  { label: '04 · Review', detail: 'Opus 4.8 vs GLM 5.2' },
]});

const WORKSHOP_PAGES: Page[] = [
  MatrixPage({ kicker: 'routing matrix', title: 'Route by risk, context, and repeatability.', cards: [
    { title: 'Low risk + repeatable', body: 'Start with open-weight. Examples: test drafts, PRD cleanup, checklist review.' },
    { title: 'High ambiguity', body: 'Use premium baseline first, then route follow-up iterations cheaper.' },
    { title: 'Clear context', body: 'Open-weight candidates strengthen when prompts include source truth and acceptance criteria.' },
    { title: 'High blast radius', body: 'Keep human review strict. Consider premium model as second reviewer.' },
  ]}),
  HandsOnPage({ brief: 'Admin can create vouchers with expiry, usage limit, eligibility, and checkout validation. Prevent double usage and explain failed redemption clearly.', prompts: [
    { title: 'prd prompt', body: 'Turn this feature brief into a PRD with scope, non-goals, edge cases, and acceptance criteria. Compare GPT-5.5 vs GLM 5.2.' },
    { title: 'rfc prompt', body: 'Propose an RFC covering data model, API flow, validation logic, failure modes, and rollout. Compare Opus 4.8 vs Kimi K2.7.' },
    { title: 'code prompt', body: 'Generate focused code changes for checkout validation. Compare GPT-5.5 vs Kimi K2.7.' },
  ]}),
  MatrixPage({ kicker: 'scorecard', title: 'Give every model the same task and same scoring sheet.', table: { headers: ['Criterion', 'PRD', 'RFC', 'Code', 'Review'], rows: [
    ['Correctness', '1-5', '1-5', '1-5', '1-5'],
    ['Completeness', '1-5', '1-5', '1-5', '1-5'],
    ['Engineering depth', '1-5', '1-5', '1-5', '1-5'],
    ['Hallucination risk', '1-5', '1-5', '1-5', '1-5'],
    ['Human cleanup', '1-5', '1-5', '1-5', '1-5'],
  ]}}),
  HeroPage({ kicker: 'closing principle', title: 'Senior engineers choose the cheapest model that passes the bar.', subtitle: 'Not one smartest model. A routing system: task, quality bar, model candidate, cost check, human review.', source: 'Use live pricing and provider availability before final recommendation', center: true }),
];

const DECK_ORDER: Page[] = [
  ...INTRO_PAGES,
  ...PROVIDER_PAGES,
  ...EVIDENCE_PAGES,
  SDLC_MAP,
  ...SDLC_COMPARES.flatMap((c) => [SideBySideCompare(c), DemoPlaceholderPage(c.demo)]),
  ...WORKSHOP_PAGES,
];

export const meta: SlideMeta = {
  title: 'AstraFlow SDLC Model Routing',
  createdAt: '2026-07-06T12:57:53.415Z',
};

export default DECK_ORDER satisfies Page[];
