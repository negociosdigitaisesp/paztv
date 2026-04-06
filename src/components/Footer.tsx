import { Tv, Play, Instagram, Phone } from 'lucide-react';
import { WHATSAPP_LINK } from './Header';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[rgba(255,107,26,0.12)] pt-[52px] pb-[28px]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="relative flex items-center justify-center w-8 h-8 rounded bg-gradient-to-br from-paz-primary to-paz-secondary text-white">
                <Tv size={18} />
                <Play size={8} className="absolute fill-white" />
              </div>
              <span className="font-display text-2xl tracking-wider text-white">PAZ TV</span>
            </a>
            <p className="font-sans text-[13px] text-[#777] leading-relaxed mb-6 max-w-[300px]">
              IPTV Premium com mais de 10.000 canais, filmes, séries e doramas. 
              Servidor estável 24h para toda a família.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-paz-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-paz-primary hover:text-white transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-[11px] uppercase text-paz-primary font-bold tracking-[1px] mb-5">
              NAVEGAÇÃO
            </h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#inicio" className="font-sans text-[14px] text-[#999] hover:text-white transition-colors">Início</a></li>
              <li><a href="#planos" className="font-sans text-[14px] text-[#999] hover:text-white transition-colors">Planos</a></li>
              <li><a href="#como-funciona" className="font-sans text-[14px] text-[#999] hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#canais" className="font-sans text-[14px] text-[#999] hover:text-white transition-colors">Canais</a></li>
              <li><a href="#contato" className="font-sans text-[14px] text-[#999] hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contato">
            <h4 className="font-sans text-[11px] uppercase text-paz-primary font-bold tracking-[1px] mb-5">
              FALE CONOSCO
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="font-sans text-[14px] text-[#999]">
                <span className="text-white font-semibold">WhatsApp:</span> (88) 99999-9999
              </li>
              <li className="font-sans text-[14px] text-[#999]">
                <span className="text-white font-semibold">Instagram:</span> @paztv
              </li>
              <li className="font-sans text-[14px] text-[#999]">
                <span className="text-white font-semibold">Horário:</span> Seg–Dom, 08h–22h
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[rgba(255,255,255,0.05)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[12px] text-[#555]">
            © 2025 Paz TV. Todos os direitos reservados.
          </p>
          <p className="font-sans text-[12px] text-[#555]">
            Desenvolvido para entretenimento doméstico.
          </p>
        </div>
      </div>
    </footer>
  );
}
