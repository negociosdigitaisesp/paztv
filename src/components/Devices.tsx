import { Tv } from 'lucide-react';

export function Devices() {
  const devices = [
    { name: "Samsung", desc: "Tizen OS" },
    { name: "LG", desc: "webOS" },
    { name: "Android TV", desc: "Google TV" },
    { name: "Roku TV", desc: "TCL / Philco" },
    { name: "Fire TV", desc: "Amazon" },
  ];

  return (
    <section className="relative bg-[#080808] pt-[40px] pb-[40px] z-20 overflow-hidden">
      
      {/* Massive Glow Behind */}
      <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[120%] md:w-[80%] h-[400px] bg-paz-primary/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      <div className="relative z-20 max-w-5xl mx-auto px-5 text-center">
        <h3 className="font-display text-2xl text-white mb-8">Compatível com as principais Smart TVs</h3>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {devices.map((device, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="text-white/60 mb-2 group-hover:text-paz-primary transition-colors duration-300">
                <Tv size={40} strokeWidth={1.5} />
              </div>
              <div className="font-sans text-[14px] font-bold text-white mb-0.5">{device.name}</div>
              <div className="font-sans text-[11px] text-[#777]">{device.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
