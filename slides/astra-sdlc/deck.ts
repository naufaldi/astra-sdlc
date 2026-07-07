import type { Page } from '@open-slide/core';
import { INTRO_PAGES } from './content/intro';
import { INTELLIGENCE_PAGES } from './content/intelligence';
import { PROVIDER_PAGES } from './content/provider';
import { EVIDENCE_PAGES } from './content/evidence';
import { SDLC_COMPARE_PAGES, SDLC_MAP } from './content/sdlc';
import { WORKSHOP_PAGES } from './content/workshop';

export const DECK_ORDER: Page[] = [
  ...INTRO_PAGES,
  ...INTELLIGENCE_PAGES,
  ...PROVIDER_PAGES,
  ...EVIDENCE_PAGES,
  SDLC_MAP,
  ...SDLC_COMPARE_PAGES,
  ...WORKSHOP_PAGES,
];
