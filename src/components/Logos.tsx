export function Logos() {
  return (
    <section id="canais" className="bg-paz-card border-y border-[rgba(255,107,26,0.12)] py-9">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <h3 className="font-sans text-[11px] uppercase tracking-[3px] text-paz-dark font-bold mb-6">
          MAIS DE 10.000 CANAIS DISPONÍVEIS
        </h3>
        
        <div className="flex justify-center gap-10 flex-wrap items-center mb-6">
          {['NETFLIX', 'HBO MAX', 'DISNEY+', 'PRIME VIDEO', 'GLOBOPLAY', 'SPORTV', 'TNT', 'DISCOVERY', 'BAND', 'RECORD', 'SBT', 'TELECINE'].map((logo) => (
            <span 
              key={logo} 
              className="font-display text-2xl text-white opacity-40 hover:opacity-100 transition-opacity duration-250 cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-6 flex-wrap items-center">
          {['Brasileirão', 'Libertadores', 'UEFA', 'NBA', 'NFL', 'UFC'].map((league) => (
            <span 
              key={league} 
              className="font-sans text-sm font-bold text-paz-muted opacity-40 hover:opacity-100 transition-opacity duration-250 cursor-default"
            >
              {league}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
