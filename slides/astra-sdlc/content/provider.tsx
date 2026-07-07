import type { Page } from '@open-slide/core';
import stackSwapWin from '../assets/stack-swap-win.png';
import { FlowDiagramPage, HeadingGridPage, SplitImageCalloutPage } from '../factories';

export const PROVIDER_PAGES: Page[] = [
  FlowDiagramPage({ kicker: 'provider layer', title: 'AstraFlow is the access layer, not the SDLC workflow.', subtitle: 'Slide 2 named the routing pattern — here is the OpenAI-compatible gateway.', steps: [
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
    { title: 'Code · GPT-5.5 → Kimi K2.7', body: '~5–18% gap, ~7× cheaper — see Kimi coding benchmark slide.' },
    { title: 'Review · Opus 4.8 → GLM 5.2', body: 'Checklist + reasoning tradeoff — human review stays in loop.' },
  ]}),
];
