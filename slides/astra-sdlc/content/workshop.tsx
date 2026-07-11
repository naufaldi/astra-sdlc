import type { Page } from '@open-slide/core';
import { HeroPage, MatrixPage } from '../factories';

export const WORKSHOP_PAGES: Page[] = [
  MatrixPage({ kicker: 'conclusion', title: 'Start cheap. Escalate by difficulty. Keep humans in the loop.', cards: [
    { title: 'Start open-weight / cheap', body: 'Default to cheaper models. Escalate only when quality fails the bar.' },
    { title: 'Frontier for hard work', body: 'High ambiguity and complex tasks get the best / frontier models first.' },
    { title: 'Cost is a constraint', body: 'Treat model spend like latency or reliability — a hard development constraint.' },
    { title: 'Human in the loop', body: 'While coding, review, accept, and own the output. Models assist; engineers decide.' },
  ]}),
  HeroPage({ kicker: 'closing principle', title: 'Senior engineers choose the cheapest model that passes the bar.', subtitle: 'Not one smartest model. A routing habit: task → quality bar → model → cost check.', source: 'Use live pricing and provider availability before final recommendation', center: true }),
];
