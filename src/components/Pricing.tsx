import { Check, Lock, Star } from 'lucide-react';
import { WHATSAPP_LINK } from './Header';

const features = [
  "Canais abertos e fechados ao vivo 📡",
  "Filmes sempre atualizados",
  "Séries atualizadas",
  "Novelas completas 📺",
  "Doramas legendados 🇰🇷",
  "Esportes ao vivo (futebol, UFC, NBA, F1) ⚽",
  "Funciona no celular, tablet e Smart TV",
  "1 login — instala em até 3 aparelhos",
  "Qualidade HD, Full HD e 4K",
  "Suporte via WhatsApp todos os dias",
];

export function Pricing() {
  return (
    <section id="planos" className="relative bg-[#050505] pt-10 pb-[90px] overflow-hidden">
      {/* Glowing Background Layer */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,107,26,0.25)_0%,transparent_60%)]"></div>

      {/* Top Dark Shape */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] md:w-[120%] h-[150px] md:h-[250px] bg-[#0A0A0A] rounded-b-[50%] shadow-[0_20px_60px_rgba(255,107,26,0.2)] z-0"></div>

      {/* Bottom Dark Shape */}
      <div className="absolute top-[350px] md:top-[450px] bottom-0 left-1/2 -translate-x-1/2 w-[200%] md:w-[120%] bg-[#111111] rounded-t-[50%] shadow-[0_-20px_60px_rgba(255,107,26,0.2)] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-[60px] md:pt-[80px]">
        <div className="text-center mb-16">
          <span className="font-sans text-[11px] uppercase tracking-[2px] text-paz-primary font-bold block mb-2">
            PLANO ÚNICO
          </span>
          <h2 className="font-display text-[52px] leading-none text-white mb-8">
            TUDO POR R$25/MÊS
          </h2>

          {/* Urgency Banner */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-br from-[rgba(255,107,26,0.15)] to-[rgba(212,43,43,0.15)] border border-[rgba(255,107,26,0.3)] rounded-lg px-6 py-3 backdrop-blur-sm">
            <span className="text-xl">🎁</span>
            <span className="font-sans text-sm font-semibold text-white">TESTE GRÁTIS DE 6 HORAS — Sem cartão de crédito</span>
            <span className="bg-paz-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ml-2">GRÁTIS</span>
          </div>
        </div>

        {/* Single Plan Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative rounded-[20px] p-10 flex flex-col border-2 border-paz-primary bg-gradient-to-br from-[rgba(255,107,26,0.07)] to-[#111111] shadow-[0_0_60px_rgba(255,107,26,0.2)]">

            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-paz-primary to-paz-secondary text-white text-[11px] font-bold px-5 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5">
              <Star size={12} fill="white" />
              ACESSO COMPLETO
              <Star size={12} fill="white" />
            </div>

            {/* Price */}
            <div className="mb-8 text-center">
              <div className="font-sans text-[13px] text-[#777] line-through mb-1">De R$ 90,00/mês</div>
              <div className="flex items-end justify-center gap-1 mb-1">
                <span className="font-sans text-base font-bold text-paz-muted mb-3">R$</span>
                <span className="font-display text-[80px] leading-none text-white">25</span>
                <span className="font-sans text-base text-[#777] mb-3">,00/mês</span>
              </div>
              <p className="font-sans text-[13px] text-[#999] mt-2">
                Sem fidelidade • Cancele quando quiser
              </p>
            </div>

            <div className="h-[1px] w-full bg-[rgba(255,107,26,0.15)] mb-8"></div>

            {/* Features */}
            <ul className="flex flex-col gap-4 mb-10">
              {features.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={18} className="text-paz-primary shrink-0 mt-0.5" />
                  <span className="font-sans text-[14px] text-paz-text">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl font-sans text-[15px] font-bold text-center text-white bg-gradient-to-r from-paz-primary to-paz-secondary hover:shadow-[0_12px_30px_rgba(255,107,26,0.35)] hover:-translate-y-0.5 transition-all duration-200 mb-5 block"
            >
              QUERO ACESSO AGORA →
            </a>

            <div className="flex items-center justify-center gap-1.5 text-[#555] text-[11px] font-semibold">
              <Lock size={12} />
              Acesso imediato após confirmação
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="font-sans text-sm text-[#777]">
            Todos os planos incluem 6 horas de teste gratuito antes da ativação
          </p>
        </div>
      </div>
    </section>
  );
}
