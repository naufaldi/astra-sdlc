import type { Page } from '@open-slide/core';
import { FlowDiagramPage } from '../factories';

export const ASTRAFLOW_ACCESS = FlowDiagramPage({
  kicker: 'provider layer',
  title: 'AstraFlow is the access layer, not the SDLC workflow.',
  steps: [
    { label: '01', detail: 'IDE, agent, CLI, app' },
    { label: '02', detail: 'AstraFlow gateway' },
    { label: '03', detail: 'OpenAI-compatible /v1/chat/completions' },
    { label: '04', detail: 'Kimi, Qwen, GLM, MiMo, DeepSeek catalog' },
  ],
  source: 'UCloud ModelVerse · api-sg.umodelverse.ai for SEA',
  note: 'Swap model via model param only — same base_url, same SDK. Like OpenRouter for regional MaaS.',
  callout: {
    title: 'benchmark context',
    body: 'Open weights are now within 6–8% of frontier quality on daily engineering benchmarks, while costing 5–12× less.',
    footnote: 'Reference: Kimi K2.7, Qwen 3.7 Max, GLM 5.2, MiMo V2.5 vs proprietary baselines. Verify live availability.',
  },
});
