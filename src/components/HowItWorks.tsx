const steps = [
  {
    number: '01',
    title: 'Escolha seu Plano',
    description: 'Selecione o período ideal para você',
  },
  {
    number: '02',
    title: 'Faça o Pagamento',
    description: 'Pix, cartão ou boleto. 100% seguro',
  },
  {
    number: '03',
    title: 'Receba o Acesso',
    description: 'Login e senha no WhatsApp em minutos',
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-paz-alt py-[90px]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-[52px] leading-none text-white mb-2">
            COMO COMEÇAR
          </h2>
          <p className="font-sans text-paz-muted">Ative em menos de 5 minutos</p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-10 relative">

          {/* Connector Line — desktop only */}
          <div className="hidden md:block absolute top-[36px] left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,107,26,0.25)] to-transparent pointer-events-none" />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">

              {/* Circle + number — everything self-contained, no absolute trickery */}
              <div className="how-step-circle mb-6">
                <span className="how-step-number">{step.number}</span>
              </div>

              <h3 className="font-sans text-[20px] font-bold tracking-wide uppercase text-white mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-[15px] text-paz-muted leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
