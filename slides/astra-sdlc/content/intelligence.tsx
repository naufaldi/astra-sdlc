import type { Page } from '@open-slide/core';
import arenaLeaderboard from '../assets/arena-agent-leaderboard.png';
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
    kicker: 'arena.ai',
    title: 'Same Arena agent board. Public ranks. Real proof.',
    subtitle: 'Arena.ai Agent Leaderboard — net improvement on identical agent tasks across frontier and open-weight models.',
    image: arenaLeaderboard,
    footerSource: 'arena.ai/leaderboard/agent · Jul 2026',
    callouts: [
      { label: 'frontier tier', items: ['Opus 4.8 #2 · GPT 5.5 xHigh #3 — premium agent baselines.'] },
      { label: 'open-weight proof', items: ['GLM 5.2 #7 MIT beats GPT 5.5 base #10; Kimi K2.7 on the board.'] },
      { label: 'workshop', items: ['Use Arena as context — route frontier and open-weight when the task rubric passes.'] },
    ],
    footnote: 'Macro Arena chart sets context — workshop rubric is the final arbiter.',
  }),
];
