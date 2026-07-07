import type { Page } from '@open-slide/core';
import cursorEvalLeaderboard from '../assets/cursor-eval-leaderboard.png';
import intelligenceVsCost from '../assets/intelligence-vs-cost.png';
import { ImageBenchmarkPage } from '../factories';

export const INTELLIGENCE_PAGES: Page[] = [
  ImageBenchmarkPage({
    kicker: 'intelligence proof',
    title: 'Near-frontier intelligence, open-weight economics.',
    subtitle: 'Fable, Opus, GPT-5.5 set the ceiling — Kimi and GLM cluster just below at a fraction of the cost.',
    image: intelligenceVsCost,
    footerSource: 'artificialanalysis.ai · Intelligence vs Cost · Jul 2026',
    callouts: [
      { label: 'frontier tier', items: ['Fable · Opus · GPT-5.5 — proprietary defaults teams over-pay for.'] },
      { label: 'open-weight bar', items: ['Kimi · GLM within 6–8% on daily engineering benchmarks.'] },
      { label: 'economics', items: ['5–12× cost gap when the same task rubric passes.'] },
    ],
    footnote: 'Verify model IDs and live pricing before the workshop.',
  }),
  ImageBenchmarkPage({
    kicker: 'cursor eval',
    title: 'Same Cursor eval. Scored output. Real cost.',
    subtitle: 'Cursor\'s agent benchmark — score, cost, tokens, and steps on identical tasks.',
    image: cursorEvalLeaderboard,
    footerSource: 'Cursor eval · agent benchmark · Jul 2026',
    callouts: [
      { label: 'frontier tier', items: ['Fable 5 Max · Opus 4.8 · GPT-5.5 — top eval scores, $4–18 per task.'] },
      { label: 'efficiency outlier', items: ['Composer 2.5 — 63% score at $0.55/task — cost-per-step matters as much as headline score.'] },
      { label: 'workshop', items: ['Run frontier and open-weight routes through the same Cursor eval — route when the bar is met.'] },
    ],
    footnote: 'Macro charts set context; Cursor eval is the agent benchmark — not a custom SDLC scorecard.',
  }),
];
