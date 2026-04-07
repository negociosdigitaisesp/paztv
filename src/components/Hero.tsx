import { ArrowDown } from 'lucide-react';
import { WHATSAPP_LINK } from './Header';

// ─── Capas reais — 100% verificadas via TMDB API ──────────────────────────────
const BASE = 'https://image.tmdb.org/t/p/w300';

const ROW_1 = [
  `${BASE}/1OsQJEoSXBjduuCvDOlRhoEUaHu.jpg`,  // Oppenheimer       (872585)
  `${BASE}/twfKp60THrcOIep9sjHODOOfO8d.jpg`,  // Stranger Things   (66732)
  `${BASE}/hGwm9Cj3CdbJIqQWNExQqiYmCd4.jpg`,  // Breaking Bad      (1396)
  `${BASE}/eDn8XWA0a4U3zOhd1gh7HExdt4Y.jpg`,  // Game of Thrones   (1399)
  `${BASE}/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg`,  // Interstellar      (157336)
  `${BASE}/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg`,  // Avengers Endgame  (299534)
  `${BASE}/74xTEgt7R36Fpooo50r9T25onhq.jpg`,  // The Batman        (414906)
  `${BASE}/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg`,  // House of Dragon   (94997)
  `${BASE}/6gcHdboppvplmBWxvROc96NJnmm.jpg`,  // Squid Game        (93405)
  `${BASE}/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg`,  // The Last of Us    (100088)
];

const ROW_2 = [
  `${BASE}/62HCnUTziyWcpDaBO2i1DX17ljH.jpg`,  // Top Gun: Maverick (361743) ✅
  `${BASE}/36xXlhEpQqVVPuiZhfoQuaY4OlA.jpg`,  // Wednesday         (119051) ✅
  `${BASE}/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg`,  // Spider-Man NWH    (634649) ✅
  `${BASE}/gDzOcq0pfeCeqMBwKIJlSmQpjkZ.jpg`,  // Dune              (438631) ✅
  `${BASE}/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg`,  // Parasite          (496243) ✅
  `${BASE}/xnoLcKNVBsCwL0yBaD7ZWfKQBoh.jpg`,  // Squid Game S1     (93405)  ✅
  `${BASE}/pMfG5XIlmvCL9bQQiJKdTvmF2FW.jpg`,  // The Last of Us S1 (100088) ✅
  `${BASE}/lx6hsqWXq4aVrXPjCqnMHFrGL5u.jpg`,  // House of Dragon S1(94997)  ✅
  `${BASE}/fEfGcBJys0HWAPHFRBwxq99qpPz.jpg`,  // Stranger Things S1(66732)  ✅
  `${BASE}/igAdP4mObNTZRzGrgQfUEKPlXou.jpg`,  // Breaking Bad S5   (1396)   ✅
];

// Duplica pra garantir loop sem gap
const TRACK_1 = [...ROW_1, ...ROW_1];
const TRACK_2 = [...ROW_2, ...ROW_2];

// ─── Filmstrip row ─────────────────────────────────────────────────────────────
function FilmRow({
  posters,
  reverse,
  rowClass,
}: {
  posters: string[];
  reverse?: boolean;
  rowClass: string;
}) {
  return (
    <div className={`absolute left-0 right-0 h-[160px] md:h-[200px] overflow-hidden pointer-events-none ${rowClass}`}>
      <div
        className={`flex gap-2 md:gap-3 will-change-transform ${reverse ? 'hero-film-rev' : 'hero-film-fwd'}`}
        style={{ width: 'max-content' }}
      >
        {posters.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            width={107}
            height={160}
            className="w-[107px] h-[160px] md:w-[133px] md:h-[200px] object-cover rounded-md md:rounded-lg flex-shrink-0 select-none"
          />
        ))}
      </div>
    </div>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-paz-bg">

      {/* ── Film background ── */}
      <div className="absolute inset-0 z-0">
        {/* Grid subtle */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,107,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,26,1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Radial glow centro */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,107,26,0.10)_0%,transparent_70%)]" />

        {/* Filmstrip row 1 — topo */}
        <FilmRow posters={TRACK_1} rowClass="top-[64px]" />

        {/* Filmstrip row 2 — abaixo */}
        <FilmRow posters={TRACK_2} reverse rowClass="top-[240px] md:top-[280px]" />

        {/* Gradient overlay — mais forte no mobile p/ legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/50 via-[#080808]/75 to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/70 via-transparent to-[#080808]/70" />
      </div>

      {/* ── Conteúdo central ── */}
      <div className="max-w-5xl mx-auto px-5 w-full relative z-10 flex flex-col items-center text-center pt-[200px] sm:pt-[240px] md:pt-[320px] pb-16">
        <div className="flex flex-col items-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(255,107,26,0.10)] border border-[rgba(255,107,26,0.3)] rounded-full px-3 py-1 mb-8">
            <div className="w-2 h-2 rounded-full bg-paz-primary animate-pulse-glow" />
            <span className="font-sans font-bold text-[11px] uppercase tracking-[1.5px] text-white">ATIVO 24/7 NO AR</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-[64px] sm:text-[82px] md:text-[110px] leading-[0.92] mb-6 md:mb-8">
            <span className="block text-white">ASSISTA TUDO</span>
            <span className="block bg-gradient-to-r from-paz-primary to-paz-secondary bg-clip-text text-transparent">
              QUE VOCÊ AMA
            </span>
          </h1>

          {/* Sub */}
          <p className="font-sans text-base md:text-lg text-paz-muted max-w-[600px] mb-10 leading-relaxed">
            Canais ao vivo, filmes, séries, novelas e doramas.{' '}
            Um único login em até 3 dispositivos.{' '}
            Tudo isso com qualidade HD e servidor estável 24h.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-paz-primary to-paz-secondary text-white px-10 py-4 rounded-lg font-extrabold text-[15px] text-center hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,107,26,0.45)] transition-all"
            >
              COMEÇAR TESTE GRÁTIS
            </a>
            <a
              href="#planos"
              className="bg-transparent border-[1.5px] border-[rgba(255,255,255,0.18)] text-white px-10 py-4 rounded-lg font-bold text-[15px] text-center hover:border-paz-primary hover:bg-[rgba(255,107,26,0.06)] transition-all"
            >
              VER PLANOS
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-10 md:gap-20">
            <div className="flex flex-col items-center">
              <div className="font-display text-4xl md:text-5xl text-paz-primary mb-1">+10.000</div>
              <div className="font-sans text-[11px] uppercase text-paz-dark font-bold tracking-wider">CANAIS</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-display text-4xl md:text-5xl text-paz-primary mb-1">99%</div>
              <div className="font-sans text-[11px] uppercase text-paz-dark font-bold tracking-wider">UPTIME</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-display text-4xl md:text-5xl text-paz-primary mb-1">24/7</div>
              <div className="font-sans text-[11px] uppercase text-paz-dark font-bold tracking-wider">SUPORTE</div>
            </div>
          </div>

        </div>
      </div>

      {/* Bounce arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-paz-primary" size={24} />
      </div>
    </section>
  );
}
