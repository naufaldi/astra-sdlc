import type { ReactNode } from 'react';
import type { Page } from '@open-slide/core';
import { c, font } from './tokens';
import { BigRule, Card, GradientSphere, Hairline, Heading, PillLabel, Slide } from './primitives';
import type { CoverageExample, CoverageRow, FlowStep, GridCard, SdlcCompare } from './types';

export const HeroPage = ({ kicker, title, subtitle, source, center, aside }: { kicker?: string; title: string; subtitle?: string; source?: string; center?: boolean; aside?: ReactNode }) => {
  const PageFn: Page = () => (
    <Slide source={source} pad={center ? '120px' : undefined}>
      {center ? (
        <div style={{ height: '100%', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
          <div>
            {kicker && <PillLabel>{kicker}</PillLabel>}
            <h1 style={{ margin: '36px auto 0', maxWidth: 1280, fontFamily: 'var(--osd-font-display)', fontSize: center ? 104 : 'var(--osd-size-hero)', lineHeight: 1.04, fontWeight: 300, letterSpacing: '-0.02em' }}>{title}</h1>
            {subtitle && <p style={{ margin: '40px auto 0', maxWidth: 1120, color: c.smoke, fontSize: 38, lineHeight: 1.36 }}>{subtitle}</p>}
          </div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: aside ? '1.05fr 0.95fr' : '1fr', gap: 70, height: '100%', alignItems: 'center' }}>
          <div>
            {kicker && <PillLabel>{kicker}</PillLabel>}
            <h1 style={{ margin: '32px 0 0', fontFamily: 'var(--osd-font-display)', fontSize: 'var(--osd-size-hero)', lineHeight: 0.98, fontWeight: 300, letterSpacing: '-0.02em', maxWidth: 980 }}>{title}</h1>
            {subtitle && <p style={{ margin: '36px 0 0', color: c.smoke, fontSize: 40, lineHeight: 1.34, maxWidth: 920 }}>{subtitle}</p>}
          </div>
          {aside}
        </div>
      )}
    </Slide>
  );
  return PageFn;
};

export const HeadingGridPage = ({ kicker, title, subtitle, cards, columns = 3, source, footnote, rule, hairline }: { kicker?: string; title: string; subtitle?: string; cards: GridCard[]; columns?: number; source?: string; footnote?: string; rule?: string; hairline?: boolean }) => {
  const PageFn: Page = () => (
    <Slide source={source}>
      <Heading kicker={kicker} title={title} subtitle={subtitle} />
      {hairline && <div style={{ marginTop: 36 }}><Hairline /></div>}
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 24, marginTop: hairline ? 36 : 56 }}>
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

export const FlowDiagramPage = ({ kicker, title, subtitle, steps, source, note, callout }: { kicker?: string; title: string; subtitle?: string; steps: FlowStep[]; source?: string; note?: string; callout?: { title: string; body: string; footnote?: string } }) => {
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
      {callout && (
        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <Card style={{ padding: 28 }}>
            <div style={{ fontFamily: font.mono, fontSize: 18, color: c.smoke }}>{callout.title}</div>
            <div style={{ marginTop: 14, fontSize: 28, lineHeight: 1.3, fontWeight: 600 }}>{callout.body}</div>
            {callout.footnote && <p style={{ marginTop: 16, color: c.ash, fontSize: 22 }}>{callout.footnote}</p>}
          </Card>
          <Card style={{ padding: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', background: c.ink2, color: c.bg }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: font.mono, fontSize: 18, color: c.ash }}>GET /v1/models</div>
              <div style={{ marginTop: 12, fontSize: 28, lineHeight: 1.3, fontWeight: 500 }}>Verify live model IDs and pricing before routing.</div>
            </div>
          </Card>
        </div>
      )}
    </Slide>
  );
  return PageFn;
};

export const SplitImageCalloutPage = ({ title, image, rows, source }: { title: string; image: string; rows: GridCard[]; source?: string }) => {
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

export const ImageBenchmarkPage = ({ title, image, callouts, footerSource, footnote, narrative, kicker, subtitle }: { title: string; image: string; callouts?: { label: string; items: string[] }[]; footerSource: string; footnote?: string; narrative?: string[]; kicker?: string; subtitle?: string }) => {
  const bottomItems = callouts ?? (narrative?.map((line, i) => ({ label: String(i + 1).padStart(2, '0'), items: [line] })) ?? []);
  const bottomColumns = Math.min(Math.max(bottomItems.length, 1), 3);
  const hasBottom = bottomItems.length > 0;
  const PageFn: Page = () => (
    <Slide source={footerSource}>
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', paddingBottom: hasBottom ? 40 : 0 }}>
        <Heading kicker={kicker} title={title} subtitle={subtitle} size={hasBottom ? 'compact' : 'default'} />
        <img
          src={image}
          alt=""
          style={{
            width: '100%',
            flex: hasBottom ? 1 : undefined,
            minHeight: hasBottom ? 0 : undefined,
            maxHeight: hasBottom ? 340 : 520,
            objectFit: 'contain',
            marginTop: hasBottom ? 16 : 24,
            borderRadius: 12,
            flexShrink: hasBottom ? undefined : 0,
          }}
        />
        {hasBottom && (
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${bottomColumns}, 1fr)`, gap: 12, marginTop: 14, flexShrink: 0 }}>
            {bottomItems.map((co) => (
              <Card key={co.label} style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: font.mono, fontSize: 14, color: c.smoke, textTransform: 'lowercase' }}>{co.label}</div>
                <div style={{ marginTop: 8, fontSize: 18, lineHeight: 1.35, fontWeight: 500 }}>{co.items.join(' · ')}</div>
              </Card>
            ))}
          </div>
        )}
        {footnote && <p style={{ margin: '10px 0 0', color: c.ash, fontSize: 18, lineHeight: 1.35, flexShrink: 0 }}>{footnote}</p>}
        {!hasBottom && <GradientSphere size={120} style={{ position: 'absolute', bottom: -20, right: -20, opacity: 0.6 }} />}
      </div>
    </Slide>
  );
  return PageFn;
};

export const PricingTablePage = ({ title, formula, rows, anchorNote, source }: { title: string; formula: string; rows: { model: string; input: string; output: string; note?: string }[]; anchorNote: string; source?: string }) => {
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

export const SideBySideCompare = (d: SdlcCompare) => {
  const PageFn: Page = () => (
    <Slide>
      <Heading kicker={d.kicker} title={d.title} subtitle={d.subtitle} />
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr 1fr', gap: 20, marginTop: d.subtitle ? 40 : 56 }}>
        <Card style={{ padding: 24 }}><div style={{ fontFamily: font.mono, fontSize: 18, color: c.smoke }}>SDLC TASK</div><div style={{ marginTop: 16, fontSize: 40, fontWeight: 600 }}>{d.task}</div></Card>
        <Card style={{ padding: 24 }}>
          <div style={{ fontFamily: font.mono, fontSize: 18, color: c.amber }}>{d.proprietary.model}</div>
          {d.proprietary.strengths.map((s) => <p key={s} style={{ margin: '14px 0 0', fontSize: 26, lineHeight: 1.34, color: c.smoke }}>{s}</p>)}
        </Card>
        <Card style={{ padding: 24 }}>
          <div style={{ fontFamily: font.mono, fontSize: 18, color: c.green }}>{d.openWeight.model}</div>
          {d.openWeight.strengths.map((s) => <p key={s} style={{ margin: '14px 0 0', fontSize: 26, lineHeight: 1.34, color: c.smoke }}>{s}</p>)}
        </Card>
      </div>
      {(d.compareNote || d.risk) && (
        <div style={{ marginTop: 28, display: 'grid', gap: 16 }}>
          {d.compareNote && <p style={{ color: c.smoke, fontSize: 26, lineHeight: 1.38 }}>{d.compareNote}</p>}
          {d.risk && <p style={{ color: c.red, fontSize: 22 }}>Risk: {d.risk}</p>}
        </div>
      )}
    </Slide>
  );
  return PageFn;
};

export const DemoPlaceholderPage = (d: SdlcCompare['demo']) => {
  const PageFn: Page = () => (
    <Slide source={d.source} pad={d.steps ? '88px 120px 96px' : '120px'}>
      <div style={{ height: '100%', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
        <div style={{ maxWidth: 1280 }}>
          <PillLabel>live demo</PillLabel>
          <h1 style={{ margin: '32px 0 0', fontFamily: 'var(--osd-font-display)', fontSize: d.steps ? 88 : 104, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.04 }}>{d.title}</h1>
          <p style={{ margin: '28px 0 0', color: c.smoke, fontSize: 36, lineHeight: 1.34 }}>{d.subtitle}</p>
          {d.steps ? (
            <div style={{ marginTop: 36, textAlign: 'left', display: 'grid', gap: 14 }}>
              {d.steps.map((step, i) => (
                <div key={step} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16, alignItems: 'start' }}>
                  <div style={{ fontFamily: font.mono, fontSize: 22, fontWeight: 600, color: c.ash }}>{i + 1}.</div>
                  <div style={{ fontSize: 26, lineHeight: 1.36, color: c.smoke }}>{step}</div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ margin: '28px 0 0', fontFamily: font.mono, color: c.ash, fontSize: 24 }}>Swap model via AstraFlow model param</p>
          )}
        </div>
      </div>
    </Slide>
  );
  return PageFn;
};

export const PrdCoverageChecklistPage = ({ rows, examples, rule, footnote }: { rows: CoverageRow[]; examples: CoverageExample[]; rule: string; footnote?: string }) => {
  const PageFn: Page = () => (
    <Slide>
      <Heading kicker="task 01 · judge the result" title="Compare PRD outputs — what did each model actually cover?" />
      <Card style={{ padding: 24, marginTop: 40 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.4fr 0.55fr 0.55fr', gap: 10, fontFamily: font.mono, fontSize: 16, color: c.ash, fontWeight: 500 }}>
          <div>Section</div><div>What to look for</div><div>GPT-5.5</div><div>GLM 5.2</div>
        </div>
        <Hairline />
        {rows.map((r) => (
          <div key={r.section} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.4fr 0.55fr 0.55fr', gap: 10, fontSize: 20, padding: '10px 0', borderBottom: `1px solid ${c.stone}`, alignItems: 'start' }}>
            <b>{r.section}</b>
            <span style={{ color: c.smoke, lineHeight: 1.32 }}>{r.lookFor}</span>
            <span style={{ fontFamily: font.mono }}>{r.gptMark}</span>
            <span style={{ fontFamily: font.mono }}>{r.glmMark}</span>
          </div>
        ))}
      </Card>
      <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {examples.map((ex) => (
          <Card key={ex.section} style={{ padding: 20 }}>
            <div style={{ fontSize: 22, fontWeight: 600 }}>{ex.section}</div>
            <p style={{ margin: '10px 0 0', fontSize: 20, lineHeight: 1.34, color: c.smoke }}><span style={{ fontFamily: font.mono, color: c.amber }}>GPT-5.5 · </span>{ex.gpt}</p>
            <p style={{ margin: '8px 0 0', fontSize: 20, lineHeight: 1.34, color: c.smoke }}><span style={{ fontFamily: font.mono, color: c.green }}>GLM 5.2 · </span>{ex.glm}</p>
          </Card>
        ))}
      </div>
      <div style={{ marginTop: 24 }}><BigRule>{rule}</BigRule></div>
      {footnote && <p style={{ marginTop: 16, color: c.ash, fontSize: 22 }}>{footnote}</p>}
    </Slide>
  );
  return PageFn;
};

export const MatrixPage = ({ kicker, title, cards, table, footnote }: { kicker?: string; title: string; cards?: GridCard[]; table?: { headers: string[]; rows: string[][] }; footnote?: string }) => {
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
      {footnote && <p style={{ marginTop: 28, color: c.ash, fontSize: 24 }}>{footnote}</p>}
    </Slide>
  );
  return PageFn;
};

export const HandsOnPage = ({ brief, prompts }: { brief: string; prompts: { title: string; body: string }[] }) => {
  const compact = prompts.length > 3;
  const PageFn: Page = () => (
    <Slide pad={compact ? '88px 120px 96px' : undefined}>
      <Heading kicker="hands-on" title="Workshop scenario: voucher feature." />
      <div style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 32, marginTop: compact ? 36 : 48 }}>
        <Card style={{ padding: compact ? 28 : 32 }}>
          <div style={{ fontSize: compact ? 34 : 38, fontWeight: 600 }}>Feature brief</div>
          <p style={{ marginTop: 16, color: c.smoke, fontSize: compact ? 24 : 28, lineHeight: 1.38 }}>{brief}</p>
        </Card>
        <div style={{ display: 'grid', gap: compact ? 12 : 16 }}>
          {prompts.map((p) => (
            <div key={p.title} style={{ background: c.ink2, color: c.bg, borderRadius: 16, padding: compact ? '14px 20px' : '20px 24px', fontFamily: font.mono }}>
              <div style={{ fontSize: 15, color: c.ash, textTransform: 'uppercase' }}>{p.title}</div>
              <div style={{ marginTop: 8, fontSize: compact ? 18 : 20, lineHeight: 1.34 }}>{p.body}</div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
  return PageFn;
};

export const ProblemPage = () => {
  const PageFn: Page = () => (
    <Slide>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Heading kicker="why open weight" title="Open weight for cost efficiency and freedom." subtitle="Four reasons routing beats one premium default — cost, freedom, intelligence, and supply resilience." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 20, marginTop: 28, flex: 1, minHeight: 0 }}>
          {[
            {
              title: 'Cost',
              body: 'Premium defaults inflate every SDLC step — same task, frontier price.',
              solve: 'Open weights cut the same task 5–20× when the quality bar is met.',
            },
            {
              title: 'Freedom',
              body: 'One provider controls pricing, availability, and roadmaps.',
              solve: 'AstraFlow keeps choice open — one API, swap models without rewriting your stack.',
            },
            {
              title: 'Intelligence',
              body: 'Teams over-buy frontier intelligence for routine engineering work.',
              solve: 'High-intelligence open weights within an 8–12% gap on daily benchmarks.',
            },
            {
              title: 'Government Interference',
              body: 'Frontier models can be suspended or gate-kept overnight.',
              solve: 'Open weights are currently exempt — harder to unilaterally switch off.',
            },
          ].map((p) => (
            <Card key={p.title} style={{ padding: '22px 24px', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
              <div style={{ fontSize: 28, fontWeight: 600, lineHeight: 1.2, minHeight: 68 }}>{p.title}</div>
              <p style={{ margin: '8px 0 0', fontSize: 22, lineHeight: 1.38, color: c.smoke, flex: 1 }}>{p.body}</p>
              <div style={{ marginTop: 'auto', paddingTop: 14 }}>
                <div style={{ margin: '0 0 12px', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ flex: 1, height: 1, background: c.stone }} />
                  <div style={{ color: c.violet, fontSize: 18 }}>→</div>
                  <div style={{ flex: 1, height: 1, background: c.stone }} />
                </div>
                <p style={{ margin: 0, fontSize: 22, lineHeight: 1.38, fontWeight: 500 }}>{p.solve}</p>
              </div>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: 20, flexShrink: 0 }}>
          <BigRule style={{ padding: '24px 32px', fontSize: 34, lineHeight: 1.28 }}>Route open weight when the bar is met — efficiency, freedom, intelligence, and resilience.</BigRule>
        </div>
      </div>
    </Slide>
  );
  return PageFn;
};
