import { Tv, Monitor, Smartphone, Tablet, Globe, Wifi } from 'lucide-react';

const devices = [
  { icon: <Tv size={36} strokeWidth={1.25} />,       name: 'Samsung',    os: 'Tizen OS',   tag: 'Smart TV' },
  { icon: <Tv size={36} strokeWidth={1.25} />,       name: 'LG',         os: 'webOS',      tag: 'Smart TV' },
  { icon: <Monitor size={36} strokeWidth={1.25} />,  name: 'Android TV', os: 'Google TV',  tag: 'Smart TV' },
  { icon: <Tv size={36} strokeWidth={1.25} />,       name: 'Roku TV',    os: 'TCL / Philco',tag: 'Smart TV' },
  { icon: <Tv size={36} strokeWidth={1.25} />,       name: 'Fire TV',    os: 'Amazon',     tag: 'Smart TV' },
  { icon: <Smartphone size={36} strokeWidth={1.25}/>,name: 'Android',    os: 'Todos os modelos', tag: 'Celular' },
  { icon: <Smartphone size={36} strokeWidth={1.25}/>,name: 'iPhone',     os: 'iOS 14+',    tag: 'Celular' },
  { icon: <Tablet size={36} strokeWidth={1.25} />,   name: 'iPad',       os: 'iPadOS',     tag: 'Tablet' },
  { icon: <Monitor size={36} strokeWidth={1.25} />,  name: 'Windows',    os: 'Qualquer navegador', tag: 'PC / Mac' },
  { icon: <Globe size={36} strokeWidth={1.25} />,    name: 'Web',        os: 'Chrome / Safari', tag: 'Navegador' },
];

export function Devices() {
  return (
    <section className="relative bg-[#080808] py-[80px] overflow-hidden">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[300px] bg-paz-primary opacity-[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block font-sans text-[11px] font-semibold uppercase tracking-[3px] text-paz-primary mb-4">
            Compatibilidade total
          </span>
          <h2 className="font-display text-[44px] md:text-[56px] leading-none text-white mb-5">
            FUNCIONA NO SEU APARELHO
          </h2>
          <p className="font-sans text-[16px] text-[#888] max-w-[520px] mx-auto leading-relaxed">
            Não importa se é Smart TV, celular, tablet ou computador — a Paz TV roda em qualquer tela, com qualidade HD e 4K.
          </p>
        </div>

        {/* Devices grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
          {devices.map((device, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/[0.10] bg-white/[0.05] hover:border-paz-primary/40 hover:bg-white/[0.08] transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="text-white/60 group-hover:text-paz-primary transition-colors duration-300">
                {device.icon}
              </div>

              {/* Name + os */}
              <div className="text-center">
                <p className="font-sans text-[14px] font-semibold text-white/90 group-hover:text-white transition-colors leading-tight mb-1">
                  {device.name}
                </p>
                <p className="font-sans text-[11px] text-white/50 leading-tight">{device.os}</p>
              </div>

              {/* Tag badge */}
              <span className="text-[9px] font-sans font-semibold uppercase tracking-[2px] text-paz-primary/60 bg-paz-primary/[0.07] px-2 py-0.5 rounded-full">
                {device.tag}
              </span>
            </div>
          ))}
        </div>

        {/* ── Trust / Stats strip ── */}
        <div className="devices-stats">

          <div className="devices-stat-card">
            <div className="devices-stat-bar" />
            <div className="devices-stat-icon">
              <Wifi size={22} strokeWidth={1.5} />
            </div>
            <p className="devices-stat-value">Sem antena</p>
            <p className="devices-stat-label">
              Streaming direto via internet.<br />Sem cabo, sem parabólica.
            </p>
          </div>

          <div className="devices-stat-card">
            <div className="devices-stat-bar" />
            <div className="devices-stat-icon">
              <Monitor size={22} strokeWidth={1.5} />
            </div>
            <p className="devices-stat-value">3 telas</p>
            <p className="devices-stat-label">
              Simultâneas com 1 único login.<br />Família toda assistindo.
            </p>
          </div>

          <div className="devices-stat-card">
            <div className="devices-stat-bar" />
            <div className="devices-stat-icon">
              <Tv size={22} strokeWidth={1.5} />
            </div>
            <p className="devices-stat-value">HD · 4K</p>
            <p className="devices-stat-label">
              Qualidade adaptativa automática.<br />Melhor imagem disponível.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

