// ─── Dados ────────────────────────────────────────────────────────────────────

const row1: Item[] = [
  { label: 'Netflix',       color: '#E50914' },
  { label: 'HBO Max',       color: '#9B59B6' },
  { label: 'Disney+',       color: '#113CCF' },
  { label: 'Prime Video',   color: '#00A8E0' },
  { label: 'Apple TV+',     color: '#A0A0A0' },
  { label: 'Star+',         color: '#1B6AE4' },
  { label: 'Paramount+',    color: '#0064FF' },
  { label: 'Globoplay',     color: '#FF5A1F' },
  { label: 'Telecine',      color: '#00B4D8' },
  { label: 'Mubi',          color: '#D4451B' },
  { label: 'Globo',         color: '#0097D6' },
  { label: 'SBT',           color: '#3A7BFF' },
  { label: 'Record',        color: '#CC0000' },
  { label: 'Band',          color: '#4444BB' },
  { label: 'RedeTV',        color: '#E83030' },
  { label: 'CNN Brasil',    color: '#CC0000' },
  { label: 'Jovem Pan',     color: '#D4A800' },
  { label: 'TV Cultura',    color: '#2979FF' },
  { label: 'Canal Brasil',  color: '#006633' },
  { label: 'GNT',           color: '#9B59B6' },
];

const row2: Item[] = [
  { label: 'SporTV',        color: '#009B3A' },
  { label: 'ESPN',          color: '#CC0000' },
  { label: 'TNT Sports',    color: '#FF0066' },
  { label: 'DAZN',          color: '#F0D000' },
  { label: 'Twitch',        color: '#9146FF' },
  { label: 'YouTube',       color: '#FF0000' },
  { label: 'Kick',          color: '#53FC18' },
  { label: 'Discovery',     color: '#009BDE' },
  { label: 'National Geo',  color: '#F0C000' },
  { label: 'History',       color: '#8B4513' },
  { label: 'Brasileirão',   color: '#009B3A' },
  { label: 'Libertadores',  color: '#C8A400' },
  { label: 'UEFA Champions',color: '#003087' },
  { label: 'NBA',           color: '#C9082A' },
  { label: 'NFL',           color: '#013369' },
  { label: 'UFC',           color: '#CC0000' },
  { label: 'Fórmula 1',     color: '#E10600' },
  { label: 'Fórmula E',     color: '#00BFFF' },
  { label: 'MotoGP',        color: '#CC4400' },
  { label: 'WTA / ATP',     color: '#A0A000' },
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface Item {
  label: string;
  color: string;
}

// ─── Item individual ──────────────────────────────────────────────────────────

function StreamItem({ label, color }: Item) {
  return (
    <span className="stream-item" style={{ '--item-color': color } as React.CSSProperties}>
      {/* Dot colorido — identidade discreta da marca */}
      <span className="stream-dot" />
      <span className="stream-label">{label}</span>
    </span>
  );
}

// ─── Separador entre itens ────────────────────────────────────────────────────

function Sep() {
  return <span className="stream-sep" aria-hidden="true" />;
}

// ─── Row com loop perfeito ────────────────────────────────────────────────────

function MarqueeRow({
  items,
  reverse,
  duration,
}: {
  items: Item[];
  reverse?: boolean;
  duration: number;
}) {
  // Duplicar é suficiente p/ loop contínuo sem salto
  const doubled = [...items, ...items];

  return (
    <div className="stream-track-wrap">
      <ul
        className={`stream-track${reverse ? ' stream-track--rev' : ''}`}
        style={{ '--dur': `${duration}s` } as React.CSSProperties}
        aria-hidden="true"
      >
        {doubled.map((item, i) => (
          <li key={i} className="stream-track-item">
            <StreamItem {...item} />
            <Sep />
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function Logos() {
  return (
    <section id="canais" className="stream-section">

      {/* Label topo */}
      <p className="stream-eyebrow">
        <span className="stream-eyebrow-line" />
        Mais de 10.000 canais disponíveis
        <span className="stream-eyebrow-line" />
      </p>

      {/* Fila 1 — move para esquerda */}
      <MarqueeRow items={row1} duration={65} />

      {/* Divisor */}
      <div className="stream-divider" aria-hidden="true">
        <span />
        <span className="stream-divider-label">Streamings · TV aberta · TV paga · Games · Esportes</span>
        <span />
      </div>

      {/* Fila 2 — move para direita */}
      <MarqueeRow items={row2} reverse duration={80} />

    </section>
  );
}
