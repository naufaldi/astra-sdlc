import type { Page } from '@open-slide/core';
import { BASELINE_PAGES } from './content/baseline';
import { INTRO_PAGES } from './content/intro';
import { INTELLIGENCE_PAGES } from './content/intelligence';
import { ASTRAFLOW_PAGES } from './content/provider';
import { SDLC_COMPARE_PAGES, SDLC_MAP } from './content/sdlc';
import { WORKSHOP_PAGES } from './content/workshop';

export const DECK_ORDER: Page[] = [
  ...INTRO_PAGES,
  ...INTELLIGENCE_PAGES,
  ...BASELINE_PAGES,
  ...ASTRAFLOW_PAGES,
  SDLC_MAP,
  ...SDLC_COMPARE_PAGES,
  ...WORKSHOP_PAGES,
];
