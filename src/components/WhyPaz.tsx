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
  { label: 'Preço mensal',     cable: 'R$ 150 – 300',   paz: 'A partir de R$ 25' },
  { label: 'Instalação',       cable: 'Técnico + antena', paz: 'Você mesmo, em 3 min' },
  { label: 'Fidelidade',       cable: '12 a 24 meses',   paz: 'Sem fidelidade' },
  { label: 'Canais HD / 4K',   cable: 'Pacotes extras',  paz: 'Incluído em todos' },
  { label: 'Filmes e séries',  cable: 'Não inclui',      paz: 'Catálogo completo' },
  { label: 'Novelas / Doramas',cable: 'Não inclui',      paz: 'Sim, legendado' },
  { label: 'Suporte',          cable: 'Call center',     paz: 'WhatsApp 24h' },
];

// ─── Animated counter ──────────────────────────────────────────────────────────

function useCounter(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
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
            PARE DE PAGAR<br />
            <span className="whypaz-title-accent">CARO POR MENOS</span>
          </h2>
          <p className="whypaz-subtitle">
            A TV a cabo te cobra 3x mais, exige fidelidade e ainda corta o sinal.<br className="hidden sm:block" />
            A Paz TV entrega mais, por menos, sem burocracia.
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
              <span className="whypaz-cable-badge">TV a Cabo</span>
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
          Mais de <strong>10.000 clientes</strong> já trocaram a TV a cabo pela Paz TV.
          <br className="hidden sm:block" /> Você ainda está pagando mais por menos?
        </p>

      </div>
    </section>
  );
}
