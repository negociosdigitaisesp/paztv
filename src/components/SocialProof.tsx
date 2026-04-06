import { Star } from 'lucide-react';

const whatsappMocks = [
  {
    name: "Cliente PAZ TV",
    messages: [
      { type: 'received', text: "Cara, o serviço de vocês é INCRÍVEL! Tô assistindo Champions League agora em HD perfeito 🔥", time: "15:42" },
      { type: 'sent', text: "Fico feliz! Qualquer dúvida estamos aqui 😊", time: "15:45" }
    ]
  },
  {
    name: "Cliente PAZ TV",
    messages: [
      { type: 'received', text: "Já testei outras IPTV antes e nunca travava assim não. A Paz TV tá de parabéns", time: "10:12" },
      { type: 'sent', text: "Obrigado! Nosso servidor é dedicado e estável 24h", time: "10:15" }
    ]
  },
  {
    name: "Cliente PAZ TV",
    messages: [
      { type: 'received', text: "Instalei no meu celular, tablet e smart tv. Funcionou direitinho nos 3!", time: "19:20" },
      { type: 'sent', text: "Perfeito! Até 3 dispositivos no mesmo plano 👍", time: "19:22" }
    ]
  },
  {
    name: "Cliente PAZ TV",
    messages: [
      { type: 'received', text: "Os doramas que eu queria tavam todos disponíveis. Amei demais 😍", time: "21:05" },
      { type: 'sent', text: "Catálogo completo! Qualquer título é só pedir", time: "21:10" }
    ]
  },
  {
    name: "Cliente PAZ TV",
    messages: [
      { type: 'received', text: "Fiz o teste de 6 horas e já assinei na hora. Vale muito a pena", time: "09:30" },
      { type: 'sent', text: "Bem-vindo à família PAZ TV! 🎉", time: "09:35" }
    ]
  }
];

const testimonials = [
  {
    text: "Assino há 6 meses. Nunca tive problema. Canais de esporte ao vivo sem travar, filmes novos toda semana. Recomendo demais!",
    author: "João S.",
    location: "Sobral/CE"
  },
  {
    text: "Testei 6 horas grátis e amei. Na mesma hora assinei o plano anual. Melhor investimento pra entretenimento da família.",
    author: "Maria A.",
    location: "Fortaleza/CE"
  },
  {
    text: "Instalei na Smart TV, no celular e no tablet. Os três funcionando ao mesmo tempo não, mas quando um não tá usando passa pro outro. Perfeito!",
    author: "Carlos M.",
    location: "Sobral/CE"
  }
];

export function SocialProof() {
  return (
    <section className="bg-[#0D0D0D] py-[90px]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="mb-12">
          <span className="font-sans text-[11px] uppercase tracking-[2px] text-paz-primary font-bold block mb-2">
            CLIENTES REAIS
          </span>
          <h2 className="font-display text-[52px] leading-none text-white">
            QUEM USA, APROVA
          </h2>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { num: "+500", label: "CLIENTES ATIVOS" },
            { num: "99%", label: "SATISFAÇÃO" },
            { num: "+10K", label: "CANAIS" },
            { num: "24/7", label: "SUPORTE" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-paz-card border border-[rgba(255,107,26,0.12)] rounded-xl p-6 text-center">
              <div className="font-display text-[48px] text-paz-primary leading-none mb-1">{stat.num}</div>
              <div className="font-sans text-[12px] uppercase text-paz-dark font-bold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* WhatsApp Screenshots */}
        <div className="flex gap-4 overflow-x-auto pb-6 mb-12 snap-x scrollbar-hide">
          {whatsappMocks.map((mock, idx) => (
            <div key={idx} className="min-w-[260px] bg-[#111B21] rounded-2xl p-4 snap-center shrink-0 border border-[rgba(255,255,255,0.05)]">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 border-b border-[rgba(255,255,255,0.05)] pb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-paz-primary to-paz-secondary flex items-center justify-center text-white font-bold text-sm">
                  C
                </div>
                <div>
                  <div className="font-sans text-[15px] font-semibold text-white">{mock.name}</div>
                  <div className="font-sans text-[12px] text-paz-whatsapp">online</div>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex flex-col gap-3">
                {mock.messages.map((msg, mIdx) => (
                  <div 
                    key={mIdx} 
                    className={`relative max-w-[85%] p-2.5 rounded-lg font-sans text-[14px] leading-snug ${
                      msg.type === 'received' 
                        ? 'bg-[#1F2C34] text-[#D1D7DB] self-start rounded-tl-none' 
                        : 'bg-[#005C4B] text-[#E9EDEF] self-end rounded-tr-none'
                    }`}
                  >
                    {msg.text}
                    <div className="text-[10px] text-[rgba(255,255,255,0.4)] text-right mt-1">{msg.time}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-paz-card border border-[rgba(255,107,26,0.15)] rounded-xl p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-paz-primary text-paz-primary" />
                ))}
              </div>
              <p className="font-sans text-[14px] text-[#ccc] leading-relaxed mb-6 italic">
                "{test.text}"
              </p>
              <div className="font-sans text-[13px] font-bold text-white">
                — {test.author}, <span className="text-paz-muted font-normal">{test.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
