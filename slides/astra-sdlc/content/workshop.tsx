import type { Page } from '@open-slide/core';
import { HeroPage, MatrixPage } from '../factories';

export const WORKSHOP_PAGES: Page[] = [
  MatrixPage({ kicker: 'routing matrix', title: 'Route by risk, context, and repeatability.', cards: [
    { title: 'Low risk + repeatable', body: 'Start with open-weight. Examples: test drafts, PRD cleanup, checklist review.' },
    { title: 'High ambiguity', body: 'Use premium baseline first, then route follow-up iterations cheaper.' },
    { title: 'Clear context', body: 'Open-weight candidates strengthen when prompts include source truth and acceptance criteria.' },
    { title: 'High blast radius', body: 'Keep human review strict. Consider premium model as second reviewer.' },
  ]}),
  HeroPage({ kicker: 'closing principle', title: 'Senior engineers choose the cheapest model that passes the bar.', subtitle: 'Not one smartest model. A routing system: task, quality bar, model candidate, cost check, human review.', source: 'Use live pricing and provider availability before final recommendation', center: true }),
];
