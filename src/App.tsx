import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Logos } from './components/Logos';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Devices } from './components/Devices';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-paz-bg text-paz-text font-sans selection:bg-paz-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Logos />
        <Features />
        <HowItWorks />
        <Devices />
        <Pricing />
        <SocialProof />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
