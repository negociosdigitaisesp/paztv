import { useEffect, useState } from 'react';
import { WHATSAPP_LINK } from './Header';

const LANDING_URL = '/';
const WHATSAPP_DIRECT = 'https://api.whatsapp.com/send?phone=5588994955234';

interface LinkItem {
  icon: React.ReactNode;
  label: string;
  sub: string;
  href: string;
  variant: 'primary' | 'outline' | 'ghost';
  delay: number;
  external: boolean;
}

// Minimal inline SVG icons — no emoji, no weight
const IconPlay = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21" />
  </svg>
);

const IconList = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);

const IconMsg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconGlobe = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const links: LinkItem[] = [
  {
    icon: <IconPlay />,
    label: 'TESTAR 6 HORAS GRÁTIS',
    sub: 'Sem cartão · Ativação imediata',
    href: WHATSAPP_LINK,
    variant: 'primary',
    delay: 180,
    external: true,
  },
  {
    icon: <IconList />,
    label: 'VER OS PLANOS',
    sub: 'Acesso completo · R$25/mês',
    href: LANDING_URL,
    variant: 'outline',
    delay: 280,
    external: false,
  },
  {
    icon: <IconMsg />,
    label: 'FALAR COM ATENDIMENTO',
    sub: 'WhatsApp direto · Resposta rápida',
    href: WHATSAPP_DIRECT,
    variant: 'ghost',
    delay: 380,
    external: true,
  },
  {
    icon: <IconGlobe />,
    label: 'SITE OFICIAL',
    sub: 'Conheça a Paz TV',
    href: 'https://paztv.vercel.app/',
    variant: 'outline',
    delay: 480,
    external: true,
  },
];

function LinkCard({ item, visible }: { item: LinkItem; visible: boolean }) {
  const variants: Record<LinkItem['variant'], React.CSSProperties> = {
    primary: {
      background: 'linear-gradient(100deg, #FF6B1A 0%, #D42B2B 100%)',
      boxShadow: '0 4px 28px rgba(255,107,26,0.28)',
      border: '1px solid transparent',
      color: '#fff',
    },
    outline: {
      background: 'rgba(255,107,26,0.04)',
      border: '1px solid rgba(255,107,26,0.30)',
      color: '#fff',
    },
    ghost: {
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      color: '#fff',
    },
  };

  return (
    <a
      href={item.href}
      target={item.external ? '_blank' : '_self'}
      rel={item.external ? 'noopener noreferrer' : undefined}
      className="lt-card"
      style={{
        ...variants[item.variant],
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transitionDelay: `${item.delay}ms`,
      }}
    >
      {/* Shimmer */}
      <span className="lt-shimmer" aria-hidden="true" />

      {/* Icon circle */}
      <span className="lt-card-icon" style={{
        background: item.variant === 'primary' ? 'rgba(255,255,255,0.18)' : 'rgba(255,107,26,0.10)',
        color: item.variant === 'primary' ? '#fff' : '#FF6B1A',
      }}>
        {item.icon}
      </span>

      {/* Text */}
      <span className="lt-card-text">
        <span className="lt-card-label">{item.label}</span>
        <span className="lt-card-sub">{item.sub}</span>
      </span>

      {/* Arrow */}
      <svg className="lt-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </a>
  );
}

export function LinkTree() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="lt-root">
      {/* ── SVG film grain filter ── */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <filter id="lt-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="overlay" />
        </filter>
      </svg>

      {/* ── Ambient background ── */}
      <div className="lt-bg-radial" aria-hidden="true" />
      <div className="lt-bg-grid" aria-hidden="true" />

      {/* ── Film grain overlay ── */}
      <div className="lt-grain" aria-hidden="true" />

      {/* ── Broadcast scanlines ── */}
      <div className="lt-scanlines" aria-hidden="true" />

      {/* ── Soft top beam ── */}
      <div className="lt-beam" aria-hidden="true" />

      {/* ── Signal rings (broadcast) ── */}
      <div className="lt-signal" aria-hidden="true">
        <span className="lt-ring lt-ring-1" />
        <span className="lt-ring lt-ring-2" />
        <span className="lt-ring lt-ring-3" />
      </div>

      {/* ── Floating content tiles (OOF poster blur) ── */}
      <div className="lt-tiles" aria-hidden="true">
        <span className="lt-tile lt-tile-1" />
        <span className="lt-tile lt-tile-2" />
        <span className="lt-tile lt-tile-3" />
        <span className="lt-tile lt-tile-4" />
        <span className="lt-tile lt-tile-5" />
        <span className="lt-tile lt-tile-6" />
      </div>

      {/* ── Floating play particles ── */}
      <div className="lt-plays" aria-hidden="true">
        <span className="lt-play lt-play-1">▶</span>
        <span className="lt-play lt-play-2">▶</span>
        <span className="lt-play lt-play-3">▶</span>
        <span className="lt-play lt-play-4">▶</span>
      </div>

      {/* ── Content ── */}
      <div className="lt-wrap">

        {/* ══ BRAND MARK ═══════════════════════════════════ */}
        <header
          className="lt-brand"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(-12px)',
            transition: 'opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* Horizontal rule before */}
          <div className="lt-rule">
            <span className="lt-rule-line" />
            <span className="lt-live-dot" aria-hidden="true" />
            <span className="lt-rule-line" />
          </div>

          {/* Logo */}
          <div className="lt-logo-wrap">
            <img
              src="/logo.svg"
              alt="Paz TV"
              className="lt-logo-img"
            />
          </div>

          {/* Tagline */}
          <p className="lt-tagline">
            <span>Canais</span>
            <span className="lt-dot" />
            <span>Filmes</span>
            <span className="lt-dot" />
            <span>Séries</span>
            <span className="lt-dot" />
            <span>Doramas</span>
          </p>

          {/* Live badge */}
          <div className="lt-badge">
            <span className="lt-badge-dot" />
            <span>AO VIVO 24H</span>
          </div>
        </header>

        {/* ══ DIVIDER ══════════════════════════════════════ */}
        <div
          className="lt-divider"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 500ms ease 350ms',
          }}
          aria-hidden="true"
        />

        {/* ══ LINKS ════════════════════════════════════════ */}
        <nav className="lt-links" aria-label="Links rápidos">
          {links.map((item) => (
            <LinkCard key={item.label} item={item} visible={visible} />
          ))}
        </nav>

        {/* ══ FOOTER ═══════════════════════════════════════ */}
        <footer
          className="lt-footer"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 500ms ease 600ms',
          }}
        >
          <span>paztv.com.br</span>
          <span className="lt-dot" />
          <span>Suporte via WhatsApp</span>
        </footer>
      </div>

      {/* ── All styles scoped here ── */}
      <style>{`

        /* ── Root ── */
        .lt-root {
          position: relative;
          min-height: 100vh;
          background: #050505;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3.5rem 1.25rem;
          overflow: hidden;
        }

        /* ── Background layers ── */
        .lt-bg-radial {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(ellipse 80% 55% at 50% -5%,
            rgba(255,107,26,0.14) 0%, transparent 65%);
        }
        .lt-bg-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.022;
          background-image:
            linear-gradient(rgba(255,107,26,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,26,1) 1px, transparent 1px);
          background-size: 44px 44px;
        }
        .lt-beam {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 220px;
          background: linear-gradient(to bottom, rgba(255,107,26,0.5), transparent);
          pointer-events: none;
        }

        /* ── Film grain ── */
        .lt-grain {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.045;
          filter: url(#lt-grain);
          background: #888;
          z-index: 1;
        }

        /* ── Broadcast scanlines ── */
        .lt-scanlines {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.06) 2px,
            rgba(0,0,0,0.06) 4px
          );
        }

        /* ── Signal broadcast rings ── */
        .lt-signal {
          position: absolute;
          bottom: -80px;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
          z-index: 1;
        }
        .lt-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,107,26,0.18);
          transform: translate(-50%, -50%);
          animation: ltRingPulse 4s ease-out infinite;
        }
        .lt-ring-1 { width: 280px; height: 280px; animation-delay: 0s; }
        .lt-ring-2 { width: 480px; height: 480px; animation-delay: 1.2s; }
        .lt-ring-3 { width: 680px; height: 680px; animation-delay: 2.4s; }

        /* ── Content tiles (blurred OOF posters) ── */
        .lt-tiles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }
        .lt-tile {
          position: absolute;
          border-radius: 10px;
          opacity: 0;
          filter: blur(18px) saturate(1.4);
          will-change: transform, opacity;
        }
        /* Tile colors simulate movie poster palettes */
        .lt-tile-1 {
          width: 80px; height: 110px;
          top: 8%; left: -2%;
          background: linear-gradient(135deg, #1a0a2e 0%, #6b21a8 50%, #c026d3 100%);
          animation: ltTileFloat1 14s ease-in-out infinite;
        }
        .lt-tile-2 {
          width: 65px; height: 95px;
          top: 55%; left: 5%;
          background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #2563eb 100%);
          animation: ltTileFloat2 18s ease-in-out infinite;
        }
        .lt-tile-3 {
          width: 75px; height: 105px;
          top: 20%; right: 2%;
          background: linear-gradient(135deg, #1c0a0a 0%, #7f1d1d 50%, #dc2626 100%);
          animation: ltTileFloat3 16s ease-in-out infinite;
        }
        .lt-tile-4 {
          width: 60px; height: 88px;
          top: 68%; right: 4%;
          background: linear-gradient(135deg, #0d1f12 0%, #14532d 50%, #16a34a 100%);
          animation: ltTileFloat4 20s ease-in-out infinite;
        }
        .lt-tile-5 {
          width: 90px; height: 60px;
          bottom: 18%; left: 3%;
          background: linear-gradient(135deg, #1e1008 0%, #92400e 50%, #f59e0b 100%);
          animation: ltTileFloat5 15s ease-in-out infinite;
        }
        .lt-tile-6 {
          width: 55px; height: 80px;
          top: 38%; right: -1%;
          background: linear-gradient(135deg, #0f0f1e 0%, #312e81 50%, #6366f1 100%);
          animation: ltTileFloat6 17s ease-in-out infinite;
        }

        /* ── Floating ▶ particles ── */
        .lt-plays {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }
        .lt-play {
          position: absolute;
          font-size: 11px;
          color: rgba(255,107,26,0.18);
          animation: ltPlayRise linear infinite;
          will-change: transform, opacity;
        }
        .lt-play-1 { left: 12%; bottom: -20px; animation-duration: 12s; animation-delay: 0s; }
        .lt-play-2 { left: 78%; bottom: -20px; animation-duration: 17s; animation-delay: 4s; }
        .lt-play-3 { left: 35%; bottom: -20px; animation-duration: 14s; animation-delay: 8s; }
        .lt-play-4 { left: 58%; bottom: -20px; animation-duration: 19s; animation-delay: 2s; }

        /* ── Content wrapper ── */
        .lt-wrap {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 420px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        /* ══ BRAND MARK ═════════════════════════════════════ */
        .lt-brand {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.7rem;
          margin-bottom: 2rem;
          width: 100%;
        }

        /* Rule */
        .lt-rule {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          max-width: 280px;
        }
        .lt-rule-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,107,26,0.30));
        }
        .lt-rule-line:last-child {
          background: linear-gradient(270deg, transparent, rgba(255,107,26,0.30));
        }
        .lt-live-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #FF6B1A;
          box-shadow: 0 0 8px rgba(255,107,26,0.80);
          flex-shrink: 0;
          animation: ltDotPulse 2s ease-in-out infinite;
        }

        /* Logo image */
        .lt-logo-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lt-logo-img {
          height: clamp(72px, 18vw, 100px);
          width: auto;
          display: block;
          position: relative;
          z-index: 1;
        }
        /* Tagline */
        .lt-tagline {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 0;
        }

        /* Live badge */
        .lt-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(255,107,26,0.07);
          border: 1px solid rgba(255,107,26,0.20);
          border-radius: 100px;
          padding: 5px 14px;
          font-family: var(--font-sans);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,107,26,0.80);
        }
        .lt-badge-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #FF6B1A;
          animation: ltDotPulse 1.4s ease-in-out infinite;
        }

        /* Separator dot */
        .lt-dot {
          display: inline-block;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255,107,26,0.40);
          vertical-align: middle;
        }

        /* ══ DIVIDER ═════════════════════════════════════════ */
        .lt-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(255,107,26,0.20) 30%,
            rgba(255,107,26,0.20) 70%,
            transparent 100%
          );
          margin-bottom: 1.75rem;
        }

        /* ══ LINKS ═══════════════════════════════════════════ */
        .lt-links {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 2rem;
        }

        .lt-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          border-radius: 14px;
          text-decoration: none;
          overflow: hidden;
          cursor: pointer;
          transition:
            opacity 450ms cubic-bezier(0.16,1,0.3,1),
            transform 450ms cubic-bezier(0.16,1,0.3,1),
            box-shadow 250ms ease,
            background 250ms ease,
            border-color 250ms ease;
          will-change: transform, opacity;
          -webkit-tap-highlight-color: transparent;
        }

        @media (hover: hover) {
          .lt-card:hover {
            transform: translateY(-2px) scale(1.005);
          }
          .lt-card:hover .lt-shimmer {
            transform: translateX(200%);
          }
          .lt-card:hover .lt-arrow {
            transform: translateX(3px);
            opacity: 1;
          }
        }
        .lt-card:active {
          transform: scale(0.985);
        }

        /* Shimmer sweep */
        .lt-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            100deg,
            transparent 0%,
            rgba(255,255,255,0.06) 50%,
            transparent 100%
          );
          transform: translateX(-200%);
          transition: transform 600ms ease;
          pointer-events: none;
        }

        /* Icon pill */
        .lt-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          flex-shrink: 0;
          transition: background 250ms ease;
        }

        /* Text group */
        .lt-card-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
          min-width: 0;
        }
        .lt-card-label {
          font-family: var(--font-display);
          font-size: 19px;
          line-height: 1;
          letter-spacing: 0.5px;
          color: #fff;
        }
        .lt-card-sub {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.42);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Arrow */
        .lt-arrow {
          color: rgba(255,255,255,0.25);
          flex-shrink: 0;
          transition: transform 200ms ease, opacity 200ms ease;
          opacity: 0.5;
        }

        /* ══ FOOTER ══════════════════════════════════════════ */
        .lt-footer {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* ══ KEYFRAMES ═══════════════════════════════════════ */
        @keyframes ltDotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.35; transform: scale(0.75); }
        }
        @keyframes ltGlow {
          0%, 100% { filter: drop-shadow(0 0 14px rgba(255,107,26,0.45)); }
          50%       { filter: drop-shadow(0 0 28px rgba(255,107,26,0.70)); }
        }

        /* Signal rings */
        @keyframes ltRingPulse {
          0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          15%  { opacity: 1; }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
        }

        /* Content tile floats — each has different trajectory */
        @keyframes ltTileFloat1 {
          0%,100% { opacity: 0.10; transform: translateY(0px) rotate(-2deg); }
          50%     { opacity: 0.20; transform: translateY(-18px) rotate(1deg); }
        }
        @keyframes ltTileFloat2 {
          0%,100% { opacity: 0.08; transform: translateY(0px) rotate(3deg); }
          50%     { opacity: 0.18; transform: translateY(-22px) rotate(-1deg); }
        }
        @keyframes ltTileFloat3 {
          0%,100% { opacity: 0.12; transform: translateY(0px) rotate(1deg); }
          50%     { opacity: 0.22; transform: translateY(-14px) rotate(-3deg); }
        }
        @keyframes ltTileFloat4 {
          0%,100% { opacity: 0.07; transform: translateY(0px) rotate(-1deg); }
          50%     { opacity: 0.16; transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes ltTileFloat5 {
          0%,100% { opacity: 0.09; transform: translateY(0px) rotate(2deg); }
          50%     { opacity: 0.19; transform: translateY(-16px) rotate(-2deg); }
        }
        @keyframes ltTileFloat6 {
          0%,100% { opacity: 0.11; transform: translateY(0px) rotate(-3deg); }
          50%     { opacity: 0.20; transform: translateY(-24px) rotate(1deg); }
        }

        /* Play ▶ rising particles */
        @keyframes ltPlayRise {
          0%   { transform: translateY(0) scale(0.6);  opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(1.2); opacity: 0; }
        }

        /* ══ MOBILE SAFETY ═══════════════════════════════════ */
        @media (max-width: 480px) {
          .lt-root { padding: 3rem 1rem; }
          .lt-card { padding: 14px 16px; }
          .lt-card-label { font-size: 17px; }
          .lt-card-sub { font-size: 10.5px; }
          .lt-card-icon { width: 32px; height: 32px; border-radius: 9px; }
          /* Tiles smaller on mobile — less distraction */
          .lt-tile { filter: blur(22px) saturate(1.2); }
          .lt-tile-1, .lt-tile-2 { display: none; }
          .lt-ring-3 { display: none; }
        }

        /* Reduce motion */
        @media (prefers-reduced-motion: reduce) {
          .lt-badge-dot, .lt-live-dot, .lt-word-tv,
          .lt-tile, .lt-ring, .lt-play { animation: none !important; }
          .lt-tile { opacity: 0 !important; }
          .lt-ring { opacity: 0 !important; }
        }
      `}</style>
    </div>
  );
}
