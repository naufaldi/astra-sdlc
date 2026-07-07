import type { Page } from '@open-slide/core';
import stackSwapWin from '../assets/stack-swap-win.png';
import { FlowDiagramPage, HeadingGridPage, SplitImageCalloutPage } from '../factories';

export const PROVIDER_PAGES: Page[] = [
  FlowDiagramPage({ kicker: 'provider layer', title: 'AstraFlow is the access layer, not the SDLC workflow.', steps: [
    { label: '01', detail: 'IDE, agent, CLI, app' },
    { label: '02', detail: 'AstraFlow gateway' },
    { label: '03', detail: 'OpenAI-compatible /v1/chat/completions' },
    { label: '04', detail: 'Kimi, Qwen, GLM, MiMo, DeepSeek catalog' },
  ], source: 'UCloud ModelVerse · api-sg.umodelverse.ai for SEA', note: 'Swap model via model param only — same base_url, same SDK. Like OpenRouter for regional MaaS.', callout: { title: 'benchmark context', body: 'Open weights are now within 6–8% of frontier quality on daily engineering benchmarks, while costing 5–12× less.', footnote: 'Reference: Kimi K2.7, Qwen 3.7 Max, GLM 5.2, MiMo V2.5 vs proprietary baselines. Verify live availability.' } }),
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
