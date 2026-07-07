import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import './tokens';
import { DECK_ORDER } from './deck';

export const design: DesignSystem = {
  palette: { bg: '#fdfcfc', text: '#000000', accent: '#0447ff' },
  fonts: {
    display: '"Inter", system-ui, -apple-system, sans-serif',
    body: '"Inter", system-ui, -apple-system, sans-serif',
  },
  typeScale: { hero: 120, body: 36 },
  radius: 20,
};

export const meta: SlideMeta = {
  title: 'Stop Reading, Start Vibe-ing · Which AI Model Wins',
  createdAt: '2026-07-06T12:57:53.415Z',
};

export default DECK_ORDER satisfies Page[];
