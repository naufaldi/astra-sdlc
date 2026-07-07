import type { CSSProperties } from 'react';

export const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap';

if (typeof document !== 'undefined' && !document.getElementById('osd-webfont')) {
  const link = document.createElement('link');
  link.id = 'osd-webfont';
  link.rel = 'stylesheet';
  link.href = FONT_HREF;
  document.head.appendChild(link);
}

export const c = {
  bg: '#fdfcfc',
  text: '#000000',
  taupe: '#f5f3f1',
  stone: '#ebe8e4',
  smoke: '#777169',
  ash: '#a59f97',
  ink2: '#1a1814',
  violet: '#0447ff',
  ember: '#ff4704',
  green: '#1a7a4a',
  amber: '#b86a00',
  red: '#c0392b',
};

export const font = { mono: '"JetBrains Mono", ui-monospace, Menlo, monospace' };

export const fill: CSSProperties = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  position: 'relative',
  overflow: 'hidden',
};
