import { ArrowDown } from 'lucide-react';
import { WHATSAPP_LINK } from './Header';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-paz-bg">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_65%_45%,rgba(255,107,26,0.13)_0%,transparent_65%)]"></div>
        <div 
          className="absolute inset-0 opacity-[0.035]" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,107,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,26,1) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        ></div>
        
        {/* Filmstrip Marquee */}
        <div className="absolute top-24 left-0 right-0 h-[180px] opacity-20 blur-[2px] overflow-hidden flex">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <img 
                key={i}
                src={`https://picsum.photos/seed/movie${i}/120/180`} 
                alt="Movie Thumbnail" 
                className="w-[120px] h-[180px] object-cover rounded-md"
                referrerPolicy="no-referrer"
              />
            ))}
            {[...Array(10)].map((_, i) => (
              <img 
                key={`dup-${i}`}
                src={`https://picsum.photos/seed/movie${i}/120/180`} 
                alt="Movie Thumbnail" 
                className="w-[120px] h-[180px] object-cover rounded-md"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 w-full relative z-10 flex flex-col items-center text-center pt-10 md:pt-20">
        {/* Center Content */}
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-[rgba(255,107,26,0.10)] border border-[rgba(255,107,26,0.3)] rounded-full px-3 py-1 mb-8">
            <div className="w-2 h-2 rounded-full bg-paz-primary animate-pulse-glow"></div>
            <span className="font-sans font-bold text-[11px] uppercase tracking-[1.5px] text-white">ATIVO 24/7 NO AR</span>
          </div>

          <h1 className="font-display text-[82px] md:text-[110px] leading-[0.92] mb-8">
            <span className="block text-white">ASSISTA TUDO</span>
            <span className="block bg-gradient-to-r from-paz-primary to-paz-secondary bg-clip-text text-transparent">QUE VOCÊ AMA</span>
          </h1>

          <p className="font-sans text-base md:text-lg text-paz-muted max-w-[600px] mb-10 leading-relaxed">
            Canais ao vivo, filmes, séries, novelas e doramas. 
            Um único login em até 3 dispositivos. 
            Tudo isso com qualidade HD e servidor estável 24h.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto justify-center">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-paz-primary to-paz-secondary text-white px-10 py-4 rounded-lg font-extrabold text-[15px] text-center hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,107,26,0.45)] transition-all"
            >
              COMEÇAR TESTE GRÁTIS
            </a>
            <a 
              href="#planos"
              className="bg-transparent border-[1.5px] border-[rgba(255,255,255,0.18)] text-white px-10 py-4 rounded-lg font-bold text-[15px] text-center hover:border-paz-primary hover:bg-[rgba(255,107,26,0.06)] transition-all"
            >
              VER PLANOS
            </a>
          </div>

          <div className="flex items-center justify-center gap-10 md:gap-20">
            <div className="flex flex-col items-center">
              <div className="font-display text-4xl md:text-5xl text-paz-primary mb-1">+10.000</div>
              <div className="font-sans text-[11px] uppercase text-paz-dark font-bold tracking-wider">CANAIS</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-display text-4xl md:text-5xl text-paz-primary mb-1">99%</div>
              <div className="font-sans text-[11px] uppercase text-paz-dark font-bold tracking-wider">UPTIME</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-display text-4xl md:text-5xl text-paz-primary mb-1">24/7</div>
              <div className="font-sans text-[11px] uppercase text-paz-dark font-bold tracking-wider">SUPORTE</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-paz-primary" size={24} />
      </div>
    </section>
  );
}
