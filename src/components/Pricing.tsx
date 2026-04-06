import { Check, Lock } from 'lucide-react';
import { WHATSAPP_LINK } from './Header';

const plans = [
  {
    tag: "PLANO ESSENCIAL",
    name: "Básico",
    desc: "Tudo que você precisa pra sair da TV a cabo de uma vez por todas.",
    oldPrice: "60",
    price: "25,00",
    features: [
      "Canais abertos e fechados ao vivo",
      "Filmes sempre atualizados",
      "Séries atualizadas",
      "Funciona no celular, tablet e Smart TV",
      "1 login — instala em até 3 aparelhos"
    ],
    footer: "Acesso imediato após confirmação",
    cta: "QUERO ESSE PLANO",
    popular: false
  },
  {
    tag: "🔥 MAIS POPULAR",
    name: "Completo",
    desc: "Para quem não quer perder nada — nem novela, nem dorama, nem série nova.",
    oldPrice: "90",
    price: "30,00",
    features: [
      "Canais abertos e fechados ao vivo",
      "Filmes sempre atualizados",
      "Séries atualizadas",
      "Novelas completas 📺",
      "Doramas legendados 🇰🇷",
      "Funciona no celular, tablet e Smart TV",
      "1 login — instala em até 3 aparelhos"
    ],
    footer: "Acesso imediato após confirmação",
    cta: "QUERO O PLANO COMPLETO",
    popular: true
  }
];

export function Pricing() {
  return (
    <section id="planos" className="relative bg-[#050505] pt-10 pb-[90px] overflow-hidden">
      {/* Glowing Background Layer */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,107,26,0.25)_0%,transparent_60%)]"></div>

      {/* Top Dark Shape */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] md:w-[120%] h-[150px] md:h-[250px] bg-[#0A0A0A] rounded-b-[50%] shadow-[0_20px_60px_rgba(255,107,26,0.2)] z-0"></div>

      {/* Bottom Dark Shape (Background for Cards) */}
      <div className="absolute top-[350px] md:top-[450px] bottom-0 left-1/2 -translate-x-1/2 w-[200%] md:w-[120%] bg-[#111111] rounded-t-[50%] shadow-[0_-20px_60px_rgba(255,107,26,0.2)] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-[120px] md:pt-[180px]">
        <div className="text-center mb-24">
          <span className="font-sans text-[11px] uppercase tracking-[2px] text-paz-primary font-bold block mb-2">
            PLANOS
          </span>
          <h2 className="font-display text-[56px] leading-none text-white mb-8">
            ESCOLHA O SEU PLANO
          </h2>

          {/* Urgency Banner */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-br from-[rgba(255,107,26,0.15)] to-[rgba(212,43,43,0.15)] border border-[rgba(255,107,26,0.3)] rounded-lg px-6 py-3 backdrop-blur-sm">
            <span className="text-xl">🎁</span>
            <span className="font-sans text-sm font-semibold text-white">TESTE GRÁTIS DE 6 HORAS — Sem cartão de crédito</span>
            <span className="bg-paz-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ml-2">GRÁTIS</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative rounded-[14px] p-8 flex flex-col ${
                plan.popular 
                  ? 'border-2 border-paz-primary bg-gradient-to-br from-[rgba(255,107,26,0.07)] to-[#111111] scale-105 z-10 shadow-[0_0_30px_rgba(255,107,26,0.15)]' 
                  : 'border border-[rgba(255,107,26,0.15)] bg-[#111111]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-paz-primary to-paz-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                  {plan.tag}
                </div>
              )}
              {!plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1A1A1A] border border-[rgba(255,107,26,0.3)] text-paz-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                  {plan.tag}
                </div>
              )}

              <div className="mb-6 text-center">
                <h3 className="font-display text-4xl text-white mb-3">{plan.name}</h3>
                <p className="font-sans text-[13px] text-[#999] min-h-[40px] leading-relaxed">
                  {plan.desc}
                </p>
              </div>

              <div className="mb-6 text-center">
                <div className="font-sans text-[13px] text-[#777] line-through mb-1">
                  De R$ {plan.oldPrice}
                </div>
                <div className="flex items-end justify-center gap-1">
                  <span className="font-sans text-sm font-bold text-paz-muted mb-2">R$</span>
                  <span className="font-display text-[56px] leading-none text-white">{plan.price}</span>
                  <span className="font-sans text-sm text-[#777] mb-2">/mês</span>
                </div>
              </div>

              <div className="h-[1px] w-full bg-[rgba(255,107,26,0.12)] mb-6"></div>

              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-paz-primary shrink-0 mt-0.5" />
                    <span className="font-sans text-[13px] text-paz-text">{item}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-lg font-sans text-sm font-bold text-center transition-all mb-4 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-paz-primary to-paz-secondary text-white hover:shadow-[0_8px_20px_rgba(255,107,26,0.3)] hover:-translate-y-0.5'
                    : 'bg-transparent border border-paz-primary text-paz-primary hover:bg-[rgba(255,107,26,0.1)]'
                }`}
              >
                {plan.cta}
              </a>
              
              <div className="flex items-center justify-center gap-1.5 text-[#555] text-[11px] font-semibold">
                <Lock size={12} />
                {plan.footer}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-sans text-sm text-[#777]">
            Todos os planos incluem 6 horas de teste gratuito antes da ativação
          </p>
        </div>
      </div>
    </section>
  );
}
