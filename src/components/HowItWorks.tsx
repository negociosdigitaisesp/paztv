export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-paz-alt py-[90px]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="font-display text-[52px] leading-none text-white mb-2">
            COMO COMEÇAR
          </h2>
          <p className="font-sans text-paz-muted">Ative em menos de 5 minutos</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[rgba(255,107,26,0.3)] to-transparent"></div>

          {/* Step 1 */}
          <div className="relative text-center z-10">
            <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <span className="absolute font-display text-[72px] text-[rgba(255,107,26,0.15)] select-none">01</span>
              <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-paz-primary to-paz-secondary flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(255,107,26,0.3)]">
                <span className="font-display text-[28px] text-white mt-1">1</span>
              </div>
            </div>
            <h3 className="font-sans text-xl font-bold text-white mb-2">Escolha seu Plano</h3>
            <p className="font-sans text-sm text-paz-muted">Selecione o período ideal para você</p>
          </div>

          {/* Step 2 */}
          <div className="relative text-center z-10">
            <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <span className="absolute font-display text-[72px] text-[rgba(255,107,26,0.15)] select-none">02</span>
              <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-paz-primary to-paz-secondary flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(255,107,26,0.3)]">
                <span className="font-display text-[28px] text-white mt-1">2</span>
              </div>
            </div>
            <h3 className="font-sans text-xl font-bold text-white mb-2">Faça o Pagamento</h3>
            <p className="font-sans text-sm text-paz-muted">Pix, cartão ou boleto. 100% seguro</p>
          </div>

          {/* Step 3 */}
          <div className="relative text-center z-10">
            <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <span className="absolute font-display text-[72px] text-[rgba(255,107,26,0.15)] select-none">03</span>
              <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-paz-primary to-paz-secondary flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(255,107,26,0.3)]">
                <span className="font-display text-[28px] text-white mt-1">3</span>
              </div>
            </div>
            <h3 className="font-sans text-xl font-bold text-white mb-2">Receba o Acesso</h3>
            <p className="font-sans text-sm text-paz-muted">Login e senha no WhatsApp em minutos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
