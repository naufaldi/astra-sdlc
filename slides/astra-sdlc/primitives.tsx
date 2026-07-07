import type { CSSProperties, ReactNode } from 'react';
import { useSlidePageNumber } from '@open-slide/core';
import { c, fill, font } from './tokens';

export const Footer = ({ source }: { source?: string }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <div style={{ position: 'absolute', left: 120, right: 120, bottom: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: c.ash, fontSize: 22 }}>
      <div style={{ fontFamily: font.mono }}>AstraFlow SDLC Model Routing</div>
      <div style={{ maxWidth: 880, textAlign: 'right' }}>{source}</div>
      <div style={{ fontFamily: font.mono }}>{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>
    </div>
  );
};

export const Slide = ({ children, source, pad = '104px 120px 116px' }: { children: ReactNode; source?: string; pad?: string }) => (
  <section style={fill}>
    <div style={{ position: 'relative', zIndex: 1, height: '100%', padding: pad }}>{children}</div>
    <Footer source={source} />
  </section>
);

export const PillLabel = ({ children }: { children: ReactNode }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', height: 40, padding: '0 18px', border: `1px solid ${c.stone}`, borderRadius: 9999, fontFamily: font.mono, fontSize: 20, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'lowercase' }}>{children}</div>
);

export const Heading = ({ kicker, title, subtitle, size = 'default' }: { kicker?: string; title: ReactNode; subtitle?: ReactNode; size?: 'default' | 'compact' }) => {
  const compact = size === 'compact';
  return (
    <header style={{ maxWidth: 1420, flexShrink: 0 }}>
      {kicker && <PillLabel>{kicker}</PillLabel>}
      <h1 style={{ margin: kicker ? (compact ? '20px 0 0' : '28px 0 0') : 0, fontFamily: 'var(--osd-font-display)', fontSize: compact ? 72 : 96, lineHeight: 1.04, letterSpacing: '-0.02em', fontWeight: 300 }}>{title}</h1>
      {subtitle && <p style={{ margin: compact ? '16px 0 0' : '28px 0 0', color: c.smoke, fontSize: compact ? 28 : 36, lineHeight: 1.4, maxWidth: 1280 }}>{subtitle}</p>}
    </header>
  );
};

export const Card = ({ children, style }: { children: ReactNode; style?: CSSProperties }) => (
  <div style={{ background: c.taupe, borderRadius: 'var(--osd-radius)', padding: 32, ...style }}>{children}</div>
);

export const BigRule = ({ children, style }: { children: ReactNode; style?: CSSProperties }) => (
  <div style={{ padding: '32px 36px', background: c.taupe, borderRadius: 20, fontSize: 40, lineHeight: 1.24, fontWeight: 600, ...style }}>{children}</div>
);

export const Hairline = () => <div style={{ height: 1, background: c.stone, margin: '24px 0' }} />;

export const GradientSphere = ({ size = 200, style }: { size?: number; style?: CSSProperties }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: `radial-gradient(circle at 35% 35%, ${c.violet}, ${c.ember} 55%, #f5a3b8 100%)`,
      filter: 'blur(0px)',
      opacity: 0.9,
      ...style,
    }}
  />
);
