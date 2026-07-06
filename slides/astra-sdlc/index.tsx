import type { CSSProperties, ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';

export const design: DesignSystem = {
  palette: {
    bg: '#f8fbfd',
    text: '#0c1a24',
    accent: '#00a6b2',
  },
  fonts: {
    display: '"Inter", "SF Pro Display", system-ui, -apple-system, sans-serif',
    body: '"Inter", "SF Pro Text", system-ui, -apple-system, sans-serif',
  },
  typeScale: {
    hero: 142,
    body: 34,
  },
  radius: 18,
};

const c = {
  bg: design.palette.bg,
  text: design.palette.text,
  accent: design.palette.accent,
  green: '#1aa76c',
  amber: '#d99020',
  red: '#d84b45',
  blue: '#2d6cdf',
  ink2: '#294252',
  muted: '#607481',
  pale: '#eef6f8',
  paleGreen: '#edf8f2',
  paleAmber: '#fff5e6',
  line: '#cfe0e6',
  lineStrong: '#9fb9c4',
  white: '#ffffff',
};

const font = {
  mono: '"SF Mono", "JetBrains Mono", ui-monospace, Menlo, monospace',
};

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
    <div
      style={{
        position: 'absolute',
        left: 120,
        right: 120,
        bottom: 52,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: c.muted,
        fontSize: 22,
        letterSpacing: 0,
      }}
    >
      <div style={{ fontFamily: font.mono }}>AstraFlow SDLC Model Routing</div>
      <div style={{ maxWidth: 880, textAlign: 'right' }}>{source}</div>
      <div style={{ fontFamily: font.mono }}>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </div>
  );
};

const Slide = ({
  children,
  source,
  grid = true,
}: {
  children: ReactNode;
  source?: string;
  grid?: boolean;
}) => (
  <section style={fill}>
    {grid && (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.72,
          backgroundImage: `linear-gradient(${c.line}55 1px, transparent 1px), linear-gradient(90deg, ${c.line}55 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,.9), rgba(0,0,0,.25))',
          WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,.9), rgba(0,0,0,.25))',
        }}
      />
    )}
    <div style={{ position: 'relative', zIndex: 1, height: '100%', padding: '104px 120px 116px' }}>
      {children}
    </div>
    <Footer source={source} />
  </section>
);

const Label = ({ children, tone = 'cyan' }: { children: ReactNode; tone?: 'cyan' | 'green' | 'amber' }) => {
  const color = tone === 'green' ? c.green : tone === 'amber' ? c.amber : c.accent;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: 42,
        padding: '0 18px',
        border: `1px solid ${color}55`,
        borderRadius: 999,
        background: `${color}12`,
        color,
        fontFamily: font.mono,
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </div>
  );
};

const Heading = ({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) => (
  <header style={{ maxWidth: 1420 }}>
    {kicker && <Label>{kicker}</Label>}
    <h1
      style={{
        margin: kicker ? '30px 0 0' : 0,
        fontFamily: 'var(--osd-font-display)',
        fontSize: 86,
        lineHeight: 1.04,
        letterSpacing: 0,
        fontWeight: 860,
      }}
    >
      {title}
    </h1>
    {subtitle && (
      <p
        style={{
          margin: '30px 0 0',
          color: c.ink2,
          fontSize: 34,
          lineHeight: 1.45,
          maxWidth: 1280,
        }}
      >
        {subtitle}
      </p>
    )}
  </header>
);

const Card = ({
  children,
  style,
  accent = c.accent,
}: {
  children: ReactNode;
  style?: CSSProperties;
  accent?: string;
}) => (
  <div
    style={{
      background: c.white,
      border: `1px solid ${c.line}`,
      borderTop: `6px solid ${accent}`,
      borderRadius: 'var(--osd-radius)',
      boxShadow: '0 22px 70px rgba(20, 57, 73, 0.08)',
      padding: 34,
      ...style,
    }}
  >
    {children}
  </div>
);

const BigRule = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      padding: '34px 40px',
      border: `2px solid ${c.accent}`,
      background: c.pale,
      borderRadius: 24,
      color: c.text,
      fontSize: 44,
      lineHeight: 1.22,
      fontWeight: 760,
    }}
  >
    {children}
  </div>
);

const FlowNode = ({ label, detail, accent = c.accent }: { label: string; detail: string; accent?: string }) => (
  <div
    style={{
      width: 350,
      minHeight: 178,
      border: `1px solid ${c.line}`,
      borderRadius: 22,
      background: c.white,
      padding: 28,
      boxShadow: '0 18px 44px rgba(10, 39, 54, 0.08)',
    }}
  >
    <div style={{ color: accent, fontFamily: font.mono, fontSize: 20, fontWeight: 800 }}>{label}</div>
    <div style={{ marginTop: 20, color: c.text, fontSize: 30, lineHeight: 1.25, fontWeight: 720 }}>{detail}</div>
  </div>
);

const Arrow = () => (
  <div
    style={{
      width: 80,
      height: 2,
      background: c.lineStrong,
      position: 'relative',
      flex: '0 0 auto',
    }}
  >
    <div
      style={{
        position: 'absolute',
        right: -2,
        top: -7,
        width: 16,
        height: 16,
        borderTop: `2px solid ${c.lineStrong}`,
        borderRight: `2px solid ${c.lineStrong}`,
        transform: 'rotate(45deg)',
      }}
    />
  </div>
);

const ModelCard = ({ name, role, tone }: { name: string; role: string; tone: 'proprietary' | 'open' }) => (
  <Card accent={tone === 'proprietary' ? c.amber : c.green} style={{ minHeight: 172, padding: 28 }}>
    <div
      style={{
        color: tone === 'proprietary' ? c.amber : c.green,
        fontFamily: font.mono,
        fontSize: 18,
        fontWeight: 800,
        textTransform: 'uppercase',
      }}
    >
      {tone === 'proprietary' ? 'premium baseline' : 'open-weight candidate'}
    </div>
    <div style={{ marginTop: 18, fontSize: 36, fontWeight: 820, lineHeight: 1.1 }}>{name}</div>
    <div style={{ marginTop: 14, color: c.muted, fontSize: 24, lineHeight: 1.32 }}>{role}</div>
  </Card>
);

const Metric = ({ title, body, tone = c.accent }: { title: string; body: string; tone?: string }) => (
  <div
    style={{
      display: 'flex',
      gap: 18,
      alignItems: 'flex-start',
      padding: '20px 0',
      borderBottom: `1px solid ${c.line}`,
    }}
  >
    <div style={{ width: 14, height: 14, marginTop: 10, borderRadius: 999, background: tone }} />
    <div>
      <div style={{ fontSize: 30, fontWeight: 760 }}>{title}</div>
      <div style={{ marginTop: 8, color: c.ink2, fontSize: 25, lineHeight: 1.32 }}>{body}</div>
    </div>
  </div>
);

const WorkStep = ({ index, title, body, accent }: { index: string; title: string; body: string; accent: string }) => (
  <Card accent={accent} style={{ width: 378, minHeight: 260, padding: 28 }}>
    <div style={{ color: accent, fontFamily: font.mono, fontSize: 22, fontWeight: 900 }}>{index}</div>
    <div style={{ marginTop: 28, fontSize: 38, fontWeight: 820 }}>{title}</div>
    <div style={{ marginTop: 18, color: c.ink2, fontSize: 25, lineHeight: 1.34 }}>{body}</div>
  </Card>
);

const CompareBlock = ({
  task,
  premium,
  open,
  risk,
}: {
  task: string;
  premium: string;
  open: string;
  risk: string;
}) => (
  <div style={{ display: 'grid', gridTemplateColumns: '330px 1fr 1fr', gap: 22, alignItems: 'stretch' }}>
    <Card accent={c.accent} style={{ padding: 26 }}>
      <div style={{ fontFamily: font.mono, color: c.accent, fontSize: 20, fontWeight: 800 }}>SDLC TASK</div>
      <div style={{ marginTop: 24, fontSize: 42, fontWeight: 840 }}>{task}</div>
    </Card>
    <Card accent={c.amber} style={{ padding: 26 }}>
      <div style={{ color: c.amber, fontFamily: font.mono, fontSize: 20, fontWeight: 800 }}>PROPRIETARY STRENGTH</div>
      <div style={{ marginTop: 22, color: c.ink2, fontSize: 29, lineHeight: 1.34 }}>{premium}</div>
    </Card>
    <Card accent={c.green} style={{ padding: 26 }}>
      <div style={{ color: c.green, fontFamily: font.mono, fontSize: 20, fontWeight: 800 }}>OPEN-WEIGHT OPPORTUNITY</div>
      <div style={{ marginTop: 22, color: c.ink2, fontSize: 29, lineHeight: 1.34 }}>{open}</div>
      <div style={{ marginTop: 24, color: c.red, fontSize: 23, lineHeight: 1.25 }}>Risk: {risk}</div>
    </Card>
  </div>
);

const ScoreCell = ({ label, detail }: { label: string; detail: string }) => (
  <div
    style={{
      background: c.white,
      border: `1px solid ${c.line}`,
      borderRadius: 18,
      padding: 24,
      minHeight: 132,
    }}
  >
    <div style={{ fontSize: 28, fontWeight: 760 }}>{label}</div>
    <div style={{ marginTop: 12, color: c.muted, fontSize: 22, lineHeight: 1.25 }}>{detail}</div>
  </div>
);

const PromptBox = ({ title, children }: { title: string; children: ReactNode }) => (
  <div
    style={{
      background: '#0c1a24',
      color: '#eaf7f8',
      borderRadius: 20,
      padding: '24px 28px',
      fontFamily: font.mono,
      minHeight: 150,
      boxShadow: '0 22px 70px rgba(12, 26, 36, 0.16)',
    }}
  >
    <div style={{ color: '#7ee2d3', fontSize: 18, fontWeight: 900, textTransform: 'uppercase' }}>{title}</div>
    <div style={{ marginTop: 16, fontSize: 22, lineHeight: 1.38 }}>{children}</div>
  </div>
);

const Cover: Page = () => (
  <Slide source="Event: Stop Reading, Start Vibe-ing · UCloud Jakarta">
    <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 70, height: '100%', alignItems: 'center' }}>
      <div>
        <Label tone="green">Developer workshop</Label>
        <h1
          style={{
            margin: '34px 0 0',
            fontSize: 'var(--osd-size-hero)',
            lineHeight: 0.98,
            letterSpacing: 0,
            fontWeight: 900,
            maxWidth: 980,
          }}
        >
          AstraFlow SDLC Model Routing
        </h1>
        <p style={{ margin: '38px 0 0', color: c.ink2, fontSize: 40, lineHeight: 1.34, maxWidth: 920 }}>
          Replacing premium model defaults with open-weight candidates by measuring task quality.
        </p>
      </div>
      <Card accent={c.green} style={{ padding: 38 }}>
        <div style={{ fontFamily: font.mono, color: c.green, fontSize: 22, fontWeight: 900 }}>WORKSHOP FRAME</div>
        <div style={{ display: 'grid', gap: 22, marginTop: 30 }}>
          <FlowNode label="INPUT" detail="Developer task" accent={c.blue} />
          <FlowNode label="PROVIDER" detail="AstraFlow" accent={c.accent} />
          <FlowNode label="CHOICE" detail="Open-weight model" accent={c.green} />
        </div>
      </Card>
    </div>
  </Slide>
);

const EventPromise: Page = () => (
  <Slide source="Luma event page: model choice for real developer workflows">
    <Heading
      kicker="event promise"
      title="A model wins only when it fits the task."
      subtitle="The workshop should not crown one smartest model. It should teach developers how to choose a model for a concrete SDLC job."
    />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28, marginTop: 72 }}>
      <Card accent={c.blue}>
        <div style={{ fontSize: 38, fontWeight: 820 }}>Real workflow</div>
        <p style={{ margin: '22px 0 0', fontSize: 29, lineHeight: 1.4, color: c.ink2 }}>Evaluate model output inside PRD, RFC, coding, and review tasks.</p>
      </Card>
      <Card accent={c.green}>
        <div style={{ fontSize: 38, fontWeight: 820 }}>Measured quality</div>
        <p style={{ margin: '22px 0 0', fontSize: 29, lineHeight: 1.4, color: c.ink2 }}>Ask whether the model reduces engineering work, not whether it sounds impressive.</p>
      </Card>
      <Card accent={c.amber}>
        <div style={{ fontSize: 38, fontWeight: 820 }}>Cost pressure</div>
        <p style={{ margin: '22px 0 0', fontSize: 29, lineHeight: 1.4, color: c.ink2 }}>Premium defaults are useful, but expensive when used for every developer step.</p>
      </Card>
    </div>
  </Slide>
);

const Problem: Page = () => (
  <Slide>
    <Heading kicker="problem" title="Teams use premium models as the default hammer." />
    <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 48, marginTop: 58, alignItems: 'stretch' }}>
      <BigRule>GPT and Opus are strong defaults, but defaulting every SDLC task to them hides the real cost curve.</BigRule>
      <Card accent={c.red} style={{ padding: 38 }}>
        <Metric title="Same model for every task" body="PRDs, RFCs, code, tests, and review all route to the premium baseline." tone={c.red} />
        <Metric title="Token price is only part of it" body="Long context, retries, and human correction can dominate total cost." tone={c.amber} />
        <Metric title="No quality bar" body="Teams often compare vibes instead of acceptance criteria." tone={c.accent} />
      </Card>
    </div>
  </Slide>
);

const ProviderLayer: Page = () => (
  <Slide source="UCloud ModelVerse API docs; AstraFlow as MaaS provider layer">
    <Heading kicker="provider layer" title="AstraFlow is the access layer, not the SDLC workflow." />
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22, marginTop: 96 }}>
      <FlowNode label="01" detail="IDE, agent, CLI, app" accent={c.blue} />
      <Arrow />
      <FlowNode label="02" detail="AstraFlow provider" accent={c.accent} />
      <Arrow />
      <FlowNode label="03" detail="Model choices" accent={c.green} />
      <Arrow />
      <FlowNode label="04" detail="SDLC output" accent={c.amber} />
    </div>
    <p style={{ margin: '86px auto 0', maxWidth: 1180, textAlign: 'center', color: c.ink2, fontSize: 36, lineHeight: 1.38 }}>
      The engineering value is routing: pick a model per task, compare cost and quality, keep the provider integration stable.
    </p>
  </Slide>
);

const OpenWeightThesis: Page = () => (
  <Slide source="UCloud Model Plaza docs; public open-weight model provider listings">
    <Heading
      kicker="open-weight thesis"
      title="Open-weight models become useful when they pass a task bar."
      subtitle="They are not magic, and they are not automatically better. They are valuable when quality is good enough and cost is lower."
    />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 34, marginTop: 62 }}>
      <Card accent={c.green}>
        <div style={{ fontSize: 40, fontWeight: 820 }}>Why they matter</div>
        <p style={{ fontSize: 30, lineHeight: 1.42, color: c.ink2 }}>More provider options, lower per-task cost, less vendor lock-in, and better room for internal routing experiments.</p>
      </Card>
      <Card accent={c.amber}>
        <div style={{ fontSize: 40, fontWeight: 820 }}>Where to be careful</div>
        <p style={{ fontSize: 30, lineHeight: 1.42, color: c.ink2 }}>Quality varies by task. A cheap model that needs many retries may be expensive in human time.</p>
      </Card>
    </div>
  </Slide>
);

const ReplaceMeaning: Page = () => (
  <Slide>
    <Heading kicker="definition" title="Replace does not mean “win every benchmark.”" />
    <div style={{ marginTop: 78, display: 'grid', gap: 38 }}>
      <BigRule>Replace means: the candidate model produces output good enough for this SDLC task at a lower total cost.</BigRule>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28 }}>
        <Card accent={c.accent}>
          <div style={{ fontSize: 34, fontWeight: 820 }}>Task-specific</div>
          <p style={{ fontSize: 27, color: c.ink2, lineHeight: 1.36 }}>PRD quality is not the same as code review quality.</p>
        </Card>
        <Card accent={c.green}>
          <div style={{ fontSize: 34, fontWeight: 820 }}>Human-reviewed</div>
          <p style={{ fontSize: 27, color: c.ink2, lineHeight: 1.36 }}>The engineer still owns the decision and accepts the risk.</p>
        </Card>
        <Card accent={c.amber}>
          <div style={{ fontSize: 34, fontWeight: 820 }}>Measured</div>
          <p style={{ fontSize: 27, color: c.ink2, lineHeight: 1.36 }}>Cost and quality are scored with the same rubric every time.</p>
        </Card>
      </div>
    </div>
  </Slide>
);

const ModelCandidates: Page = () => (
  <Slide source="Recheck model IDs, pricing, and availability during live setup">
    <Heading kicker="candidate routes" title="Treat model swaps as hypotheses." />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginTop: 56 }}>
      <ModelCard name="Opus 4.8" role="Premium reasoning baseline for ambiguous SDLC work." tone="proprietary" />
      <ModelCard name="GPT-5.5" role="Premium general coding and product baseline." tone="proprietary" />
      <ModelCard name="GLM 5.2" role="Open-weight candidate for structured SDLC drafting." tone="open" />
      <ModelCard name="Kimi K2.7 Code" role="Open-weight candidate for coding workflows." tone="open" />
      <ModelCard name="DeepSeek V4 Pro" role="Open-weight candidate for coding and review." tone="open" />
      <Card accent={c.accent} style={{ minHeight: 172, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: 34, fontWeight: 820 }}>Decision rule</div>
        <div style={{ marginTop: 14, color: c.ink2, fontSize: 25, lineHeight: 1.32 }}>A candidate replaces a baseline only after passing the task rubric.</div>
      </Card>
    </div>
  </Slide>
);

const CostModel: Page = () => (
  <Slide source="Pricing docs: OpenAI, Anthropic, DeepSeek, Kimi, provider listings">
    <Heading kicker="cost model" title="Compare cost per workflow, not only token price." />
    <div style={{ marginTop: 68, display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48 }}>
      <Card accent={c.green} style={{ padding: 44 }}>
        <div style={{ fontFamily: font.mono, color: c.green, fontSize: 24, fontWeight: 900 }}>TASK COST</div>
        <div style={{ marginTop: 34, fontSize: 56, lineHeight: 1.18, fontWeight: 860 }}>
          input + output + retries + human correction
        </div>
      </Card>
      <Card accent={c.amber} style={{ padding: 40 }}>
        <Metric title="Retry cost" body="Weak first output creates more prompts and longer context." tone={c.amber} />
        <Metric title="Correction cost" body="Human cleanup time is the hidden price." tone={c.red} />
        <Metric title="Pass cost" body="The cheapest model is the cheapest one that passes." tone={c.green} />
      </Card>
    </div>
  </Slide>
);

const QualityRubric: Page = () => (
  <Slide>
    <Heading kicker="quality rubric" title="Quality means less work for the engineer." />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 56 }}>
      <ScoreCell label="Correctness" detail="Does the answer match the task and constraints?" />
      <ScoreCell label="Coverage" detail="Does it include edge cases and missing requirements?" />
      <ScoreCell label="Reasoning" detail="Does it explain tradeoffs without hand-waving?" />
      <ScoreCell label="Hallucination" detail="Does it avoid fake APIs, facts, or architecture?" />
      <ScoreCell label="Maintainability" detail="Would this be easy to review and extend?" />
      <ScoreCell label="Review effort" detail="How much human cleanup remains?" />
    </div>
    <BigRule>Score the output you can use, not the answer that sounds smartest.</BigRule>
  </Slide>
);

const SdlcMap: Page = () => (
  <Slide>
    <Heading kicker="sdlc map" title="Use the same four tasks for every model." />
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginTop: 90 }}>
      <WorkStep index="01" title="PRD" body="Clarify problem, users, scope, and acceptance criteria." accent={c.blue} />
      <Arrow />
      <WorkStep index="02" title="RFC" body="Choose architecture, tradeoffs, risks, and rollout." accent={c.accent} />
      <Arrow />
      <WorkStep index="03" title="Generate Code" body="Implement scoped changes with tests and repo patterns." accent={c.green} />
      <Arrow />
      <WorkStep index="04" title="Review Code" body="Find bugs, test gaps, regressions, and maintainability risks." accent={c.amber} />
    </div>
  </Slide>
);

const PrdComparison: Page = () => (
  <Slide>
    <Heading kicker="task 01" title="PRD: replace when the input is structured enough." />
    <div style={{ marginTop: 70 }}>
      <CompareBlock
        task="PRD"
        premium="Strong when the product problem is vague, political, or full of hidden assumptions."
        open="Strong candidate when the brief has user, goal, scope, constraints, and acceptance criteria."
        risk="shallow requirements or missed edge cases"
      />
    </div>
  </Slide>
);

const RfcComparison: Page = () => (
  <Slide>
    <Heading kicker="task 02" title="RFC: replace first drafts, be careful with final architecture." />
    <div style={{ marginTop: 70 }}>
      <CompareBlock
        task="RFC"
        premium="Useful for ambiguous architecture, long context, and second-order consequences."
        open="Good for draft alternatives, risk lists, migration notes, and decision tables."
        risk="weak constraints, generic tradeoffs, or missing rollback plan"
      />
    </div>
  </Slide>
);

const CodeGenComparison: Page = () => (
  <Slide>
    <Heading kicker="task 03" title="Code generation: replacement works best with narrow scope." />
    <div style={{ marginTop: 70 }}>
      <CompareBlock
        task="Generate Code"
        premium="Helpful for unfamiliar codebases, multi-file context, and complex dependency chains."
        open="Good for scoped implementation, test generation, refactors, and known patterns."
        risk="fake APIs, incomplete integration, or style drift"
      />
    </div>
  </Slide>
);

const ReviewComparison: Page = () => (
  <Slide>
    <Heading kicker="task 04" title="Code review: use open-weight models as checklist amplifiers." />
    <div style={{ marginTop: 70 }}>
      <CompareBlock
        task="Review Code"
        premium="Better for subtle reasoning, security-sensitive changes, and complex behavioral regressions."
        open="Good for missing tests, obvious bugs, inconsistent patterns, and checklist-based review."
        risk="confident noise or missed deep design issues"
      />
    </div>
  </Slide>
);

const RoutingMatrix: Page = () => (
  <Slide>
    <Heading kicker="routing matrix" title="Route by risk, context, and repeatability." />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 24, marginTop: 54 }}>
      <Card accent={c.green} style={{ minHeight: 190 }}>
        <div style={{ fontSize: 36, fontWeight: 830 }}>Low risk + repeatable</div>
        <p style={{ fontSize: 28, color: c.ink2, lineHeight: 1.35 }}>Start with open-weight. Examples: test drafts, PRD cleanup, checklist review.</p>
      </Card>
      <Card accent={c.amber} style={{ minHeight: 190 }}>
        <div style={{ fontSize: 36, fontWeight: 830 }}>High ambiguity</div>
        <p style={{ fontSize: 28, color: c.ink2, lineHeight: 1.35 }}>Use premium baseline first, then route follow-up iterations cheaper.</p>
      </Card>
      <Card accent={c.accent} style={{ minHeight: 190 }}>
        <div style={{ fontSize: 36, fontWeight: 830 }}>Clear context</div>
        <p style={{ fontSize: 28, color: c.ink2, lineHeight: 1.35 }}>Open-weight candidates become stronger when prompts include source truth and acceptance criteria.</p>
      </Card>
      <Card accent={c.red} style={{ minHeight: 190 }}>
        <div style={{ fontSize: 36, fontWeight: 830 }}>High blast radius</div>
        <p style={{ fontSize: 28, color: c.ink2, lineHeight: 1.35 }}>Keep human review strict. Consider premium model as second reviewer.</p>
      </Card>
    </div>
  </Slide>
);

const HandsOnScenario: Page = () => (
  <Slide>
    <Heading kicker="hands-on" title="Workshop scenario: voucher feature." />
    <div style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 34, marginTop: 54 }}>
      <Card accent={c.green} style={{ padding: 36 }}>
        <div style={{ fontSize: 42, fontWeight: 860 }}>Feature brief</div>
        <p style={{ marginTop: 24, color: c.ink2, fontSize: 31, lineHeight: 1.42 }}>
          Admin can create vouchers. Vouchers have expiry date, usage limit, customer eligibility, and checkout validation.
        </p>
        <p style={{ color: c.ink2, fontSize: 31, lineHeight: 1.42 }}>
          The system must prevent double usage and explain failed redemption clearly.
        </p>
      </Card>
      <div style={{ display: 'grid', gap: 18 }}>
        <PromptBox title="prd prompt">Turn this feature brief into a PRD with scope, non-goals, edge cases, and acceptance criteria.</PromptBox>
        <PromptBox title="rfc prompt">Propose an RFC covering data model, API flow, validation logic, failure modes, and rollout.</PromptBox>
        <PromptBox title="code prompt">Generate the implementation plan and focused code changes for the checkout validation path.</PromptBox>
      </div>
    </div>
  </Slide>
);

const ScoringSheet: Page = () => (
  <Slide>
    <Heading kicker="scorecard" title="Give every model the same task and same scoring sheet." />
    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 34, marginTop: 54 }}>
      <Card accent={c.accent} style={{ padding: 30 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr repeat(4, 0.6fr)', gap: 12, fontFamily: font.mono, color: c.muted, fontSize: 19, fontWeight: 900 }}>
          <div>Criterion</div>
          <div>PRD</div>
          <div>RFC</div>
          <div>Code</div>
          <div>Review</div>
        </div>
        <div style={{ marginTop: 22, display: 'grid', gap: 12, fontSize: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr repeat(4, 0.6fr)', gap: 12 }}><b>Correctness</b><span>1-5</span><span>1-5</span><span>1-5</span><span>1-5</span></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr repeat(4, 0.6fr)', gap: 12 }}><b>Completeness</b><span>1-5</span><span>1-5</span><span>1-5</span><span>1-5</span></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr repeat(4, 0.6fr)', gap: 12 }}><b>Engineering depth</b><span>1-5</span><span>1-5</span><span>1-5</span><span>1-5</span></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr repeat(4, 0.6fr)', gap: 12 }}><b>Hallucination risk</b><span>1-5</span><span>1-5</span><span>1-5</span><span>1-5</span></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr repeat(4, 0.6fr)', gap: 12 }}><b>Human cleanup</b><span>1-5</span><span>1-5</span><span>1-5</span><span>1-5</span></div>
        </div>
      </Card>
      <Card accent={c.green} style={{ padding: 36 }}>
        <div style={{ fontSize: 40, fontWeight: 850 }}>Decision rule</div>
        <p style={{ marginTop: 26, fontSize: 31, lineHeight: 1.42, color: c.ink2 }}>
          The replacement wins when it hits the minimum quality score and lowers total workflow cost.
        </p>
        <BigRule>Cheapest passing model wins.</BigRule>
      </Card>
    </div>
  </Slide>
);

const Closing: Page = () => (
  <Slide grid={false} source="Use live pricing and provider availability before final recommendation">
    <div style={{ height: '100%', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
      <div>
        <Label tone="green">closing principle</Label>
        <h1 style={{ margin: '38px auto 0', maxWidth: 1280, fontSize: 104, lineHeight: 1.04, fontWeight: 900 }}>
          Senior engineers choose the cheapest model that passes the bar.
        </h1>
        <p style={{ margin: '44px auto 0', maxWidth: 1120, color: c.ink2, fontSize: 38, lineHeight: 1.36 }}>
          Not one smartest model. A routing system: task, quality bar, model candidate, cost check, human review.
        </p>
      </div>
    </div>
  </Slide>
);

export const meta: SlideMeta = {
  title: 'AstraFlow SDLC Model Routing',
  createdAt: '2026-07-06T12:57:53.415Z',
};

export default [
  Cover,
  EventPromise,
  Problem,
  ProviderLayer,
  OpenWeightThesis,
  ReplaceMeaning,
  ModelCandidates,
  CostModel,
  QualityRubric,
  SdlcMap,
  PrdComparison,
  RfcComparison,
  CodeGenComparison,
  ReviewComparison,
  RoutingMatrix,
  HandsOnScenario,
  ScoringSheet,
  Closing,
] satisfies Page[];
