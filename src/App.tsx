import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Logos } from './components/Logos';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { WhyPaz } from './components/WhyPaz';
import { Pricing } from './components/Pricing';
import { Devices } from './components/Devices';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FloatingCTA, InlineCTA } from './components/CTAComponents';

export default function App() {
  return (
    <div className="min-h-screen bg-paz-bg text-paz-text font-sans selection:bg-paz-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Logos />
        <Features />

        {/* ✦ CTA 1 — Após features: usuário viu o valor, hora de agir */}
        <div className="bg-[#0D0D0D] px-5 pb-16">
          <InlineCTA
            headline="Tudo isso por menos do que você paga num único streaming"
            sub="6 horas de teste grátis · Sem cartão de crédito · Ativação imediata"
          />
        </div>

        <HowItWorks />
        <WhyPaz />

        {/* ✦ CTA 2 — Após comparativo: usuário acabou de ver TV a cabo vs Paz TV */}
        <div className="bg-[#080808] px-5 pb-16">
          <InlineCTA
            headline="Cancele os streamings. Assine a Paz TV."
            sub="Sem fidelidade · Cancele quando quiser · Suporte 24h no WhatsApp"
          />
        </div>

        <Devices />
        <Pricing />
        <SocialProof />

        {/* ✦ CTA 3 — Após prova social: pico de confiança → conversão */}
        <div className="bg-[#0D0D0D] px-5 pb-16">
          <InlineCTA
            headline="Mais de 500 clientes que pararam de pagar caro. E você?"
            sub="Junte-se à comunidade Paz TV — tudo em um, sem complicação"
          />
        </div>

        <FAQ />
        <CTA />
      </main>
      <Footer />

      {/* ✦ Floating WhatsApp — sempre visível, aparece após 1.5s */}
      <FloatingCTA />
    </div>
  );
}

