import { useEffect, useRef, useState } from 'react';
import { X, Check } from 'lucide-react';

// ─── Copy ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: 10000, suffix: '+', label: 'Canais disponíveis', sub: 'ao vivo agora' },
  { value: 99,    suffix: '%', label: 'Uptime garantido',   sub: 'servidor estável 24h' },
  { value: 6,     suffix: 'h', label: 'Teste gratuito',     sub: 'sem cartão de crédito' },
  { value: 3,     suffix: 'x', label: 'Telas simultâneas',  sub: '1 login, 3 aparelhos' },
];

const versus = [
  { label: 'Preço mensal',      cable: 'R$ 120 – 250+',       paz: 'A partir de R$ 25' },
  { label: 'Plataformas',       cable: '4+ apps separados',    paz: 'Tudo em 1 só login' },
  { label: 'Fidelidade',        cable: 'Assinaturas mensais',  paz: 'Sem fidelidade' },
  { label: 'Canais ao vivo',    cable: 'Não inclui',           paz: '+10.000 canais HD' },
  { label: 'Futebol / Esportes',cable: 'Pacote à parte',       paz: 'Incluído em todos' },
  { label: 'Novelas / Doramas', cable: 'Não inclui',           paz: 'Sim, legendado' },
  { label: 'Suporte',           cable: 'Só email / chatbot',   paz: 'WhatsApp 24h' },
];

// ─── Animated counter (rAF — leve no mobile) ───────────────────────────────────

function useCounter(target: number, duration = 1400, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    // Respeita preferência de movimento reduzido
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setCount(target); return; }

    let rafId: number;
    let startTime: number | null = null;

    // Ease-out cúbico: rápido no início, suave no final
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(easeOut(progress) * target));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, active]);

  return count;
}

function StatCard({ value, suffix, label, sub, active }: typeof stats[0] & { active: boolean }) {
  const count = useCounter(value, 1600, active);
  return (
    <div className="whypaz-stat">
      <p className="whypaz-stat-value">
        {count.toLocaleString('pt-BR')}<span className="whypaz-stat-suffix">{suffix}</span>
      </p>
      <p className="whypaz-stat-label">{label}</p>
      <p className="whypaz-stat-sub">{sub}</p>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export function WhyPaz() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="whypaz-section">

      {/* ── Background glow ── */}
      <div className="whypaz-bg-glow" aria-hidden="true" />

      <div className="whypaz-inner">

        {/* ── Header ── */}
        <div className="whypaz-header">
          <span className="whypaz-eyebrow">Por que escolher a Paz TV?</span>
          <h2 className="whypaz-title">
            CANCELE TODOS<br />
            <span className="whypaz-title-accent">OS STREAMINGS</span>
          </h2>
          <p className="whypaz-subtitle">
            Netflix + Max + Disney+ + Prime já passam de R$ 150 por mês — e ainda falta canal ao vivo.<br className="hidden sm:block" />
            A Paz TV põe tudo isso em um único plano, por muito menos.
          </p>
        </div>

        {/* ── Stats strip ── */}
        <div className="whypaz-stats">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} active={visible} />
          ))}
        </div>

        {/* ── Versus table ── */}
        <div className="whypaz-versus">

          {/* Header row */}
          <div className="whypaz-versus-header">
            <div className="whypaz-col-feature" />
            <div className="whypaz-col-cable">
              <span className="whypaz-cable-badge">Vários Streamings</span>
            </div>
            <div className="whypaz-col-paz">
              <img src="/logo.svg" alt="Paz TV" className="h-6 w-auto" />
            </div>
          </div>

          {/* Data rows */}
          {versus.map((row, i) => (
            <div key={i} className={`whypaz-versus-row${i % 2 === 0 ? ' whypaz-versus-row--alt' : ''}`}>
              <div className="whypaz-col-feature">{row.label}</div>
              <div className="whypaz-col-cable">
                <X size={14} className="whypaz-x-icon" />
                {row.cable}
              </div>
              <div className="whypaz-col-paz">
                <Check size={14} className="whypaz-check-icon" />
                {row.paz}
              </div>
            </div>
          ))}

        </div>

        {/* ── Bottom CTA nudge ── */}
        <p className="whypaz-nudge">
          Mais de <strong>10.000 clientes</strong> já cancelaram os streamings caros e migraram para a Paz TV.
          <br className="hidden sm:block" /> Quanto você está jogando fora por mês?
        </p>

      </div>
    </section>
  );
}
