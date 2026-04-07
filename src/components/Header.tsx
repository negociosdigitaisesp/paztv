import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/5588999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20testar%20a%20Paz%20TV%20gratuitamente%20%F0%9F%8E%AC";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[rgba(255,107,26,0.12)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/logo.svg"
            alt="Paz TV"
            className="h-9 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-sm font-semibold text-paz-text hover:text-paz-primary transition-colors">Início</a>
          <a href="#planos" className="text-sm font-semibold text-paz-text hover:text-paz-primary transition-colors">Planos</a>
          <a href="#como-funciona" className="text-sm font-semibold text-paz-text hover:text-paz-primary transition-colors">Como Funciona</a>
          <a href="#canais" className="text-sm font-semibold text-paz-text hover:text-paz-primary transition-colors">Canais</a>
          <a href="#contato" className="text-sm font-semibold text-paz-text hover:text-paz-primary transition-colors">Contato</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-paz-primary to-paz-secondary text-white px-5 py-2 rounded-md font-bold text-sm hover:shadow-[0_4px_14px_rgba(255,107,26,0.4)] transition-all hover:-translate-y-0.5 inline-block"
          >
            TESTAR GRÁTIS
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#080808] border-b border-[rgba(255,107,26,0.12)] p-5 flex flex-col gap-4">
          <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-paz-text">Início</a>
          <a href="#planos" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-paz-text">Planos</a>
          <a href="#como-funciona" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-paz-text">Como Funciona</a>
          <a href="#canais" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-paz-text">Canais</a>
          <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-paz-text">Contato</a>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-paz-primary to-paz-secondary text-white px-5 py-3 rounded-md font-bold text-center mt-2"
          >
            TESTAR GRÁTIS
          </a>
        </div>
      )}
    </header>
  );
}
