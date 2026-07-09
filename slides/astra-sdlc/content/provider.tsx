import type { Page } from '@open-slide/core';
import { Card, Heading, Slide } from '../primitives';
import { c, font } from '../tokens';

const BENEFIT_CARDS = [
  {
    title: 'One catalog',
    body: 'Open-weight and frontier in one place — Kimi · GLM · Qwen · MiMo through Opus · GPT · Sonnet. Four daily routes and escalate share one base_url.',
  },
  {
    title: 'Four daily routes',
    body: 'Set the task-pair map without rewriting your stack — PRD → GLM · RFC → Kimi · Code → Kimi · Review → GLM. Swap model param only.',
  },
  {
    title: 'Escalate without leaving',
    body: 'When the rubric fails or blast radius is high, jump to frontier on the same SDK and base_url — no second provider account.',
  },
  {
    title: 'Regional MaaS',
    body: 'api-sg.umodelverse.ai — one regional bill for the same eval run instead of juggling multiple direct provider accounts.',
  },
] as const;

const DAILY_ROUTES = [
  { task: 'PRD', daily: 'GLM 5.2', escalate: 'GPT-5.5' },
  { task: 'RFC', daily: 'Kimi K2.7', escalate: 'Opus 4.8' },
  { task: 'Code', daily: 'Kimi K2.7', escalate: 'GPT-5.5' },
  { task: 'Review', daily: 'GLM 5.2', escalate: 'Opus 4.8' },
] as const;

const ProviderPayoffPage: Page = () => (
  <Slide source="api-sg.umodelverse.ai/v1/ · GET /v1/models" pad="104px 120px 116px">
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Heading
        kicker="provider layer"
        title="Why AstraFlow."
        subtitle="Recommended daily router — one catalog for four open-weight routes, frontier escalate on the same base_url."
        size="compact"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
          marginTop: 36,
          flex: 1,
          minHeight: 0,
          alignContent: 'center',
        }}
      >
        {BENEFIT_CARDS.map((card) => (
          <Card key={card.title} style={{ padding: '28px 32px' }}>
            <div style={{ fontSize: 34, fontWeight: 600, lineHeight: 1.2 }}>{card.title}</div>
            <p style={{ margin: '14px 0 0', fontSize: 26, lineHeight: 1.4, color: c.smoke }}>{card.body}</p>
          </Card>
        ))}
      </div>
      <p style={{ margin: '20px 0 0', color: c.ash, fontSize: 22, flexShrink: 0 }}>
        Verify live model IDs and pricing via GET /v1/models before the workshop.
      </p>
    </div>
  </Slide>
);

const AstraFlowRoutesPage: Page = () => (
  <Slide source="same SDK · same base_url · swap model param only" pad="104px 120px 116px">
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Heading
        kicker="tomorrow’s setup"
        title="Set these four routes in AstraFlow."
        subtitle="Daily open-weight default per SDLC task. Escalate to frontier only when the bar fails or risk is high."
        size="compact"
      />
      <Card style={{ marginTop: 36, padding: '28px 36px', flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.7fr 1.2fr 1.2fr',
            gap: 16,
            fontFamily: font.mono,
            fontSize: 20,
            color: c.ash,
            paddingBottom: 16,
            borderBottom: `1px solid ${c.stone}`,
          }}
        >
          <div>Task</div>
          <div>Daily open-weight</div>
          <div>Escalate (exception)</div>
        </div>
        <div style={{ display: 'grid', gap: 0, flex: 1, alignContent: 'center' }}>
          {DAILY_ROUTES.map((row) => (
            <div
              key={row.task}
              style={{
                display: 'grid',
                gridTemplateColumns: '0.7fr 1.2fr 1.2fr',
                gap: 16,
                padding: '22px 0',
                borderBottom: `1px solid ${c.stone}`,
                fontSize: 32,
                lineHeight: 1.2,
                alignItems: 'center',
              }}
            >
              <b>{row.task}</b>
              <span style={{ fontWeight: 600 }}>{row.daily}</span>
              <span style={{ color: c.smoke }}>{row.escalate}</span>
            </div>
          ))}
        </div>
      </Card>
      <p style={{ margin: '20px 0 0', color: c.ash, fontSize: 22, flexShrink: 0 }}>
        Soft workshop labels — verify live IDs via GET /v1/models before routing.
      </p>
    </div>
  </Slide>
);

export const ASTRAFLOW_ACCESS = ProviderPayoffPage;
export const ASTRAFLOW_ROUTES = AstraFlowRoutesPage;
export const ASTRAFLOW_PAGES: Page[] = [ASTRAFLOW_ACCESS, ASTRAFLOW_ROUTES];
