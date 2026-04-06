import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: "Como funciona o teste gratuito de 6 horas?",
    a: "Você solicita via WhatsApp, enviamos login e senha para testar. Sem cobrança, sem cartão de crédito."
  },
  {
    q: "Em quantos aparelhos posso usar?",
    a: "1 login para até 3 dispositivos instalados, usando 1 por vez."
  },
  {
    q: "Quais dispositivos são compatíveis?",
    a: "Smart TV, Android, iPhone, iPad, PC, Mac, Fire Stick, Chromecast e mais."
  },
  {
    q: "Os canais têm qualidade HD?",
    a: "Sim! A maioria dos canais está em HD, muitos em Full HD e 4K."
  },
  {
    q: "Tem canais de esporte ao vivo?",
    a: "Sim! Transmissões ao vivo de futebol, UFC, NBA, F1 e mais."
  },
  {
    q: "Como faço o pagamento?",
    a: "Pix, cartão de crédito ou débito. Processamento imediato."
  },
  {
    q: "Quanto tempo leva para receber o acesso?",
    a: "Após a confirmação do pagamento, em até 5 minutos no WhatsApp."
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim, sem fidelidade. O plano é pré-pago e não renova automaticamente."
  },
  {
    q: "Tem suporte em caso de problemas?",
    a: "Sim! Suporte via WhatsApp disponível todos os dias."
  },
  {
    q: "Doramas e novelas estão disponíveis?",
    a: "Sim! Amplo catálogo de doramas coreanos, japoneses e novelas brasileiras."
  }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-paz-alt py-[90px]">
      <div className="max-w-[760px] mx-auto px-5">
        <h2 className="font-display text-[52px] leading-none text-white mb-10 text-center">
          DÚVIDAS FREQUENTES
        </h2>

        <div className="flex flex-col">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="border-b border-[rgba(255,107,26,0.15)]"
              >
                <button
                  className="w-full py-[22px] flex items-center justify-between text-left focus:outline-none group"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                >
                  <span className="font-sans text-[15px] font-bold text-white group-hover:text-paz-primary transition-colors pr-4">
                    {faq.q}
                  </span>
                  <Plus 
                    size={20} 
                    className={`text-paz-primary shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[200px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-sans text-[14px] text-[#777] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
