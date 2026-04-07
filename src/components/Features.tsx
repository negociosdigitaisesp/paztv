import { Tv, Film, BookOpen, Flower2, Smartphone, Zap } from 'lucide-react';

const features = [
  {
    icon: <Tv size={32} className="text-paz-primary" />,
    title: "CANAIS AO VIVO",
    desc: "Mais de 10.000 canais nacionais e internacionais em HD e 4K"
  },
  {
    icon: <Film size={32} className="text-paz-primary" />,
    title: "FILMES & SÉRIES",
    desc: "Catálogo atualizado com os maiores lançamentos do cinema e TV"
  },
  {
    icon: <BookOpen size={32} className="text-paz-primary" />,
    title: "NOVELAS COMPLETAS",
    desc: "Acervo completo das novelas brasileiras antigas e novas"
  },
  {
    icon: <Flower2 size={32} className="text-paz-primary" />,
    title: "DORAMAS",
    desc: "Séries asiáticas legendadas: coreanos, japoneses e chineses"
  },
  {
    icon: <Smartphone size={32} className="text-paz-primary" />,
    title: "3 DISPOSITIVOS",
    desc: "1 login, instale em até 3 aparelhos. Smart TV, celular, PC e mais"
  },
  {
    icon: <Zap size={32} className="text-paz-primary" />,
    title: "SERVIDOR ESTÁVEL",
    desc: "99% de uptime. Zero travamento, qualidade garantida 24h"
  }
];

export function Features() {
  return (
    <section className="bg-[#0D0D0D] py-[90px]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="mb-12">
          <span className="font-sans text-[11px] uppercase tracking-[2px] text-paz-primary font-bold block mb-2">
            O QUE VOCÊ RECEBE
          </span>
          <h2 className="font-display text-[52px] leading-none text-white">
            TUDO EM UM SÓ LUGAR
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-paz-card border border-[rgba(255,107,26,0.15)] rounded-xl p-7 border-t-[3px] border-t-paz-primary/40 hover:border-t-paz-primary hover:-translate-y-1 hover:border-[rgba(255,107,26,0.35)] transition-all duration-250 group"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="font-sans text-[19px] font-medium tracking-wide text-white mb-3 group-hover:text-paz-primary transition-colors">
                {feature.title}
              </h3>
              <p className="font-sans text-[15px] text-[#aaa] leading-[1.7]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
