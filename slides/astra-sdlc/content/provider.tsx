import type { Page } from '@open-slide/core';
import stackSwapWin from '../assets/stack-swap-win.png';
import { FlowDiagramPage, HeadingGridPage, SplitImageCalloutPage } from '../factories';

export const PROVIDER_PAGES: Page[] = [
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
  HeadingGridPage({ kicker: 'from vibe to routing', title: 'Replace does not mean “win every benchmark.”', subtitle: 'Same prompt, same task — score the output, not the vibe.', source: 'Stop Reading, Start Vibe-ing · Naufaldi × UCloud Jakarta · 12 Jul 2026', cards: [
    { title: 'Same task, same prompt', body: 'PRD, RFC, code, and review use identical inputs for every model — fair comparison only.' },
    { title: 'Human-reviewed', body: 'The engineer still owns acceptance. AstraFlow only swaps the model behind the API call.' },
    { title: 'Measured on scorecard', body: 'Correctness, coverage, and cleanup effort — scored 1–5 per task, not vibes.' },
  ], rule: 'Replace means: good enough for this SDLC step at lower total cost — verified on today\'s scorecard, not a leaderboard.' }),
  SplitImageCalloutPage({ kicker: 'workshop pairs', title: 'The win: small benchmark gap, large cost gap', subtitle: 'One API key, one base_url — change model only between runs.', image: stackSwapWin, source: 'AstraFlow · api-sg.umodelverse.ai/v1/ · verify live pricing morning-of', monoStrip: 'curl $ENDPOINT/v1/chat/completions -d \'{"model":"zai-org/glm-5",...}\'  → swap model param only', rows: [
    { title: 'PRD · GPT-5.5 → GLM 5.2', body: 'zai-org/glm-5 · ~3% gap, ~5× cheaper on AstraFlow — GLM #7 on Arena agent board.' },
    { title: 'RFC · Opus 4.8 → Kimi K2.7', body: 'moonshotai/kimi-k2.5 · ~8% gap, ~7–11× cheaper — draft alternatives and risk lists.' },
    { title: 'Code · GPT-5.5 → Kimi K2.7', body: 'moonshotai/Kimi-K2-Instruct · ~5–18% gap, ~7× cheaper — see Kimi coding chart (slide 11).' },
    { title: 'Review · Opus 4.8 → GLM 5.2', body: 'zai-org/glm-5 · checklist amplifier — human review stays in the loop for deep issues.' },
  ]}),
];
