import { WHATSAPP_LINK } from './Header';

export function CTA() {
  return (
    <section className="relative py-[100px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-paz-bg">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_50%,rgba(255,107,26,0.13)_0%,transparent_80%)]"></div>
        <div 
          className="absolute inset-0 opacity-[0.035]" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,107,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,26,1) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-5 relative z-10 text-center">
        <h2 className="font-display text-[72px] leading-[0.92] text-white mb-4">
          PRONTO PARA<br />ASSISTIR TUDO?
        </h2>
        
        <p className="font-sans text-[16px] text-[#777] mb-10">
          Comece com 6 horas grátis. Sem compromisso.
        </p>

        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-paz-primary to-paz-secondary text-white px-12 py-5 rounded-[10px] font-sans text-[16px] font-black hover:-translate-y-[3px] hover:shadow-[0_15px_40px_rgba(255,107,26,0.4)] transition-all duration-300 mb-6"
        >
          QUERO MEU TESTE GRÁTIS AGORA
        </a>

        <p className="font-sans text-[12px] text-[#555]">
          🔒 Pagamento seguro · ⚡ Ativação em minutos · 📱 Funciona em todos os devices
        </p>
      </div>
    </section>
  );
}
