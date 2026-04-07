import { Star } from 'lucide-react';

// ────────────────────────────────────────────────────────────────────────────
// WhatsApp Design Tokens — dark mode (Android build ~2024)
// BG: #0B141A  |  Header/Input: #202C33
// Bubble-in: #202C33  |  Bubble-out: #005C4B
// Text: #E9EDEF  |  Sub/Time: #8696A0  |  Read-ticks: #53BDEB
// ────────────────────────────────────────────────────────────────────────────

const conversations = [
  {
    initials: 'JR',
    color: '#D97223',        // warm orange — faithful to WA's generated avatars
    name: 'João R.',
    status: 'online',
    date: 'Hoje',
    messages: [
      { dir: 'in',  text: 'Cara, o serviço de vocês é INCRÍVEL! Tô assistindo Champions League em HD perfeito agora 🔥', time: '15:42' },
      { dir: 'out', text: 'Que bom demais! Qualquer dúvida estamos aqui 😊', time: '15:44', read: true },
      { dir: 'in',  text: 'Já indiquei pra 3 amigos. Todos adoraram também!', time: '15:45' },
    ],
  },
  {
    initials: 'MA',
    color: '#7B5EA7',
    name: 'Maria A.',
    status: 'online',
    date: 'Hoje',
    messages: [
      { dir: 'in',  text: 'Testei outras IPTV antes e sempre travava. A Paz TV tá de parabéns, nunca vi travar 👏', time: '10:11' },
      { dir: 'out', text: 'Obrigada! Servidor dedicado 24h é nossa prioridade 💪', time: '10:13', read: true },
      { dir: 'in',  text: 'Renovei por mais 6 meses na hora!', time: '10:14' },
    ],
  },
  {
    initials: 'CM',
    color: '#1A7FC1',
    name: 'Carlos M.',
    status: 'online',
    date: 'Ontem',
    messages: [
      { dir: 'in',  text: 'Instalei no celular, tablet e Smart TV. Funcionou direitinho nos 3 ao mesmo tempo! 📺📱💻', time: '19:18' },
      { dir: 'out', text: 'Perfeito! Até 3 dispositivos simultâneos no mesmo plano 👍', time: '19:20', read: true },
      { dir: 'in',  text: 'Fiz o upgrade pro Completo. Vale cada centavo!', time: '19:21' },
    ],
  },
  {
    initials: 'AM',
    color: '#C2185B',
    name: 'Ana M.',
    status: 'online',
    date: 'Hoje',
    messages: [
      { dir: 'in',  text: 'Os doramas que eu procurava tavam TODOS disponíveis. Amei demais 😍🇰🇷', time: '21:03' },
      { dir: 'out', text: 'Catálogo completo com legenda! Boa maratona 😄', time: '21:05', read: true },
      { dir: 'in',  text: 'Melhor serviço que já usei. Recomendo!', time: '21:06' },
    ],
  },
  {
    initials: 'FS',
    color: '#2E7D32',
    name: 'Felipe S.',
    status: 'online',
    date: 'Hoje',
    messages: [
      { dir: 'in',  text: 'Fiz o teste de 6h grátis ontem. Acordei hoje e já comprei o plano. INCRÍVEL! 🤩', time: '09:28' },
      { dir: 'out', text: 'Bem-vindo à família PAZ TV! 🎉 Qualquer coisa estamos aqui!', time: '09:30', read: true },
      { dir: 'in',  text: 'Recomendei já pra família toda!', time: '09:31' },
    ],
  },
];

const testimonials = [
  {
    text: 'Assino há 6 meses. Nunca tive problema. Canais de esporte ao vivo sem travar, filmes novos toda semana. Recomendo demais!',
    author: 'João S.',
    location: 'Sobral/CE',
  },
  {
    text: 'Testei 6 horas grátis e amei. Na mesma hora assinei o plano anual. Melhor investimento pra entretenimento da família.',
    author: 'Maria A.',
    location: 'Fortaleza/CE',
  },
  {
    text: 'Instalei na Smart TV, no celular e no tablet. Os três funcionando perfeitamente, sem congestionamento. Perfeito!',
    author: 'Carlos M.',
    location: 'Sobral/CE',
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// WhatsApp real double-tick SVG (two overlapping check-marks)
// ──────────────────────────────────────────────────────────────────────────────
function DoubleTick({ read }: { read?: boolean }) {
  const c = read ? '#53BDEB' : '#8696A0';
  // Two minimalist check paths that overlap like the real WA ticks
  return (
    <svg
      width="16"
      height="11"
      viewBox="0 0 16 11"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
      aria-hidden
    >
      {/* left tick */}
      <path d="M1 5.5 L4.5 9 L10 2" stroke={c} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* right tick (shifted) */}
      <path d="M6 5.5 L9.5 9 L15 2" stroke={c} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// WhatsApp curved bubble tail — curved bezier matching the real WA tail shape
// ──────────────────────────────────────────────────────────────────────────────
function BubbleTail({ dir, color }: { dir: 'in' | 'out'; color: string }) {
  return (
    <div
      className={`wa-tail wa-tail--${dir}`}
      aria-hidden
      style={{ position: 'absolute', top: 0, [dir === 'in' ? 'left' : 'right']: -8, width: 9, height: 13, overflow: 'visible' }}
    >
      <svg
        width="9"
        height="13"
        viewBox="0 0 9 13"
        xmlns="http://www.w3.org/2000/svg"
        style={ dir === 'out' ? { transform: 'scaleX(-1)' } : undefined }
      >
        {/* Curved tail matching WhatsApp's bezier */}
        <path d="M0 0 C0 0, 0 9, 4 11 C6.5 12, 9 13, 9 13 L0 13 Z" fill={color} />
      </svg>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// Pixel-perfect WhatsApp phone mockup
// ──────────────────────────────────────────────────────────────────────────────
function WAPhone({ convo }: { convo: typeof conversations[0] }) {
  return (
    <div className="wa-phone">

      {/* ── Status bar ── */}
      <div className="wa-statusbar">
        <span className="wa-time-status">9:41</span>
        <div className="wa-statusbar-icons">
          {/* Cell signal — 3 full bars + 1 ghost bar */}
          <svg width="16" height="11" viewBox="0 0 16 11" fill="white" aria-hidden>
            <rect x="0"    y="6"  width="2.8" height="5"  rx="0.6"/>
            <rect x="4.4"  y="4"  width="2.8" height="7"  rx="0.6"/>
            <rect x="8.8"  y="2"  width="2.8" height="9"  rx="0.6"/>
            <rect x="13.2" y="0"  width="2.8" height="11" rx="0.6" opacity="0.3"/>
          </svg>

          {/* WiFi icon — 3 arcs + dot */}
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none" aria-hidden>
            <circle cx="7" cy="10.2" r="1.3" fill="white"/>
            <path d="M3.7 7 a4.7 4.7 0 0 1 6.6 0"
              stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
            <path d="M1.1 4.4 a8.3 8.3 0 0 1 11.8 0"
              stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
            <path d="M0 2 C1.9.7 4.3 0 7 0 s5.1.7 7 2"
              stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.5"/>
          </svg>

          {/* Battery — outline + fill + nub */}
          <svg width="24" height="11" viewBox="0 0 24 11" aria-hidden>
            <rect x="0.5" y="0.5" width="20" height="10" rx="2.5"
              stroke="white" strokeWidth="1" fill="none" opacity="0.4"/>
            <rect x="2" y="2" width="16" height="7" rx="1.5" fill="white"/>
            <path d="M21.5 3.5 v4 c.9-.5 1.5-1.3 1.5-2 s-.6-1.5-1.5-2z" fill="white" opacity="0.5"/>
          </svg>
        </div>
      </div>

      {/* ── Chat header ── */}
      <div className="wa-header">
        {/* Back chevron */}
        <div className="wa-back">
          <svg width="8" height="15" viewBox="0 0 8 15" fill="none" aria-hidden>
            <path d="M7 1 L1 7.5 L7 14"
              stroke="#E9EDEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {/* Tiny dot (unread indicator from chat list) */}
          <span className="wa-back-dot" />
        </div>

        {/* Avatar — solid colour, no gradient */}
        <div
          className="wa-avatar"
          style={{ background: convo.color }}
        >
          {convo.initials}
        </div>

        {/* Name + status */}
        <div className="wa-header-info">
          <span className="wa-contact-name">{convo.name}</span>
          <span className="wa-contact-status">{convo.status}</span>
        </div>

        {/* Action icons */}
        <div className="wa-header-actions">
          {/* Video call */}
          <svg width="20" height="14" viewBox="0 0 20 14" fill="#8696A0" aria-hidden>
            <rect x="0" y="1" width="12.5" height="12" rx="1.8"/>
            <path d="M12.5 4.2 L19 1 v12 L12.5 9.8 V4.2z"/>
          </svg>
          {/* Voice call */}
          <svg width="17" height="17" viewBox="0 0 24 24" fill="#8696A0" aria-hidden>
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 4.5c0-.55.45-1 1-1H7.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.23 1.01L6.6 10.8z"/>
          </svg>
          {/* Three-dot menu */}
          <svg width="4" height="16" viewBox="0 0 4 16" fill="#8696A0" aria-hidden>
            <circle cx="2" cy="2"  r="1.8"/>
            <circle cx="2" cy="8"  r="1.8"/>
            <circle cx="2" cy="14" r="1.8"/>
          </svg>
        </div>
      </div>

      {/* ── Chat body ── */}
      <div className="wa-chat-bg">

        {/* Date chip */}
        <div className="wa-date-chip">{convo.date}</div>

        {/* Encryption notice */}
        <div className="wa-e2e-notice">
          <span style={{ marginRight: 4 }}>🔒</span>
          As mensagens são protegidas com criptografia de ponta a ponta.
        </div>

        {/* Messages */}
        {convo.messages.map((msg, i) => {
          const isOut = msg.dir === 'out';
          const bubbleColor = isOut ? '#005C4B' : '#202C33';
          return (
            <div
              key={i}
              className={`wa-bubble-wrap${isOut ? ' wa-bubble-wrap--out' : ''}`}
              style={{ position: 'relative' }}
            >
              {/* Curved SVG tail on first bubble only */}
              {i === 0 && (
                <BubbleTail dir={msg.dir as 'in' | 'out'} color={bubbleColor} />
              )}

              <div className={`wa-bubble wa-bubble--${isOut ? 'out' : 'in'}`}>
                <span className="wa-bubble-text">{msg.text}</span>
                <span className="wa-bubble-meta">
                  <span className="wa-bubble-time">{msg.time}</span>
                  {isOut && <DoubleTick read={msg.read} />}
                </span>
              </div>
            </div>
          );
        })}

      </div>

      {/* ── Input bar ── */}
      <div className="wa-input-bar">
        {/* Emoji */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#8696A0" style={{ flexShrink: 0 }} aria-hidden>
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
        </svg>

        {/* Input pill */}
        <div className="wa-input-field">Mensagem</div>

        {/* Attach (paperclip) */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#8696A0" style={{ flexShrink: 0 }} aria-hidden>
          <path d="m16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V6H9v9.5a2.5 2.5 0 0 0 5 0V5c0-2.21-1.79-4-4-4S6 2.79 6 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6z"/>
        </svg>

        {/* Mic button — green circle */}
        <div className="wa-mic-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden>
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.49 6-3.31 6-6.72h-1.7z"/>
          </svg>
        </div>
      </div>

    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// Section
// ──────────────────────────────────────────────────────────────────────────────
export function SocialProof() {
  return (
    <section className="bg-[#0D0D0D] py-[90px]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="mb-12">
          <span className="font-sans text-[11px] uppercase tracking-[2px] text-paz-primary font-bold block mb-2">
            CLIENTES REAIS
          </span>
          <h2 className="font-display text-[52px] leading-none text-white">
            QUEM USA, APROVA
          </h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { num: '+500', label: 'Clientes Ativos' },
            { num: '99%',  label: 'Satisfação' },
            { num: '+10K', label: 'Canais' },
            { num: '24/7', label: 'Suporte' },
          ].map((s, i) => (
            <div key={i} className="bg-paz-card border border-[rgba(255,107,26,0.12)] rounded-xl p-6 text-center">
              <div className="font-display text-[48px] text-paz-primary leading-none mb-1">{s.num}</div>
              <div className="font-sans text-[12px] uppercase text-paz-dark font-bold">{s.label}</div>
            </div>
          ))}
        </div>

        {/* WA phones horizontal scroll */}
        <div className="wa-scroll-track">
          {conversations.map((c, i) => <WAPhone key={i} convo={c} />)}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-paz-card border border-[rgba(255,107,26,0.15)] rounded-xl p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-paz-primary text-paz-primary" />
                ))}
              </div>
              <p className="font-sans text-[14px] text-[#ccc] leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="font-sans text-[13px] font-bold text-white">
                — {t.author}, <span className="text-paz-muted font-normal">{t.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
