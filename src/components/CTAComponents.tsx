import { WHATSAPP_LINK } from './Header';
import { MessageCircle } from 'lucide-react';

/**
 * Floating WhatsApp button — always visible on mobile & desktop.
 * Appears after first scroll (via CSS animation delay).
 */
export function FloatingCTA() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="floating-cta"
    >
      <MessageCircle size={26} strokeWidth={2} className="floating-cta-icon" />
      <span className="floating-cta-label">TESTE GRÁTIS</span>
    </a>
  );
}

/**
 * Inline CTA strip — used between sections to catch high-intent moments.
 */
export function InlineCTA({
  headline,
  sub,
}: {
  headline: string;
  sub?: string;
}) {
  return (
    <div className="inline-cta-strip">
      <div className="inline-cta-text">
        <span className="inline-cta-headline">{headline}</span>
        {sub && <span className="inline-cta-sub">{sub}</span>}
      </div>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-cta-btn"
      >
        QUERO TESTAR GRÁTIS
      </a>
    </div>
  );
}
