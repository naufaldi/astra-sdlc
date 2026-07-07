import type { Page } from '@open-slide/core';
import { Card, Heading, Slide } from '../primitives';
import { c } from '../tokens';

const BENEFIT_CARDS = [
  {
    title: 'Model freedom',
    body: 'Open-weight to frontier in one catalog — Kimi · GLM · Qwen · MiMo · DeepSeek through Opus · GPT · Sonnet. Swap model param only.',
  },
  {
    title: 'Lower regional cost',
    body: 'Regional MaaS via api-sg.umodelverse.ai — competitive vs juggling multiple direct provider accounts for the same eval run.',
  },
  {
    title: 'You control the route',
    body: 'Pick model per task, cap spend, verify live IDs + pricing before shipping. GET /v1/models is your pre-flight check.',
  },
  {
    title: 'Coding and agents',
    body: 'Not only IDE copilots — CLI tools, autonomous agent loops, and production app backends on the same base_url and SDK.',
  },
] as const;

const ProviderPayoffPage: Page = () => (
  <Slide source="api-sg.umodelverse.ai/v1/ · GET /v1/models" pad="104px 120px 116px">
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Heading kicker="provider layer" title="Why AstraFlow." size="compact" />
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
        {BENEFIT_CARDS.map((card) => (
          <Card key={card.title} style={{ padding: '28px 32px' }}>
            <div style={{ fontSize: 34, fontWeight: 600, lineHeight: 1.2 }}>{card.title}</div>
            <p style={{ margin: '14px 0 0', fontSize: 26, lineHeight: 1.4, color: c.smoke }}>{card.body}</p>
          </Card>
        ))}
      </div>
    </div>
  </Slide>
);

export const ASTRAFLOW_ACCESS = ProviderPayoffPage;
