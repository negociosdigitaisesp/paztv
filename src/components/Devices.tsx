import { Smartphone, Tv, Monitor, Laptop, Cast, Box, PlaySquare, Gamepad2 } from 'lucide-react';

export function Devices() {
  const devices = [
    { icon: <Smartphone size={32} strokeWidth={1.5} />, name: "Android", desc: "Phones & Tablets" },
    { icon: <Monitor size={32} strokeWidth={1.5} />, name: "Apple", desc: "iPhone & iPad" },
    { icon: <Gamepad2 size={32} strokeWidth={1.5} />, name: "Xbox", desc: "Select a model" },
    { icon: <Box size={32} strokeWidth={1.5} />, name: "infomir", desc: "Mag boxes" },
    { icon: <Laptop size={32} strokeWidth={1.5} />, name: "Windows", desc: "Select a version" },
    { icon: <Tv size={32} strokeWidth={1.5} />, name: "firetv", desc: "Fire TV & Fire Stick" },
    { icon: <Tv size={32} strokeWidth={1.5} />, name: "LG", desc: "Smart TVs & Phones" },
    { icon: <Cast size={32} strokeWidth={1.5} />, name: "Chromecast", desc: "Media center" },
    { icon: <PlaySquare size={32} strokeWidth={1.5} />, name: "xbmc", desc: "Media center" },
    { icon: <Box size={32} strokeWidth={1.5} />, name: "Nvidia", desc: "Select a model" },
    { icon: <Monitor size={32} strokeWidth={1.5} />, name: "Apple TV", desc: "Select a model" },
    { icon: <Tv size={32} strokeWidth={1.5} />, name: "Samsung", desc: "Smart TVs & Phones" },
    { icon: <Tv size={32} strokeWidth={1.5} />, name: "androidtv", desc: "Android TVs" },
  ];

  return (
    <section className="relative bg-[#080808] pt-[80px] pb-[120px] z-20 overflow-hidden">
      
      {/* Massive Glow Behind the Curve */}
      <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[120%] md:w-[80%] h-[400px] bg-paz-primary/40 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[60%] md:w-[40%] h-[200px] bg-paz-secondary/50 blur-[100px] rounded-full z-0 pointer-events-none"></div>

      {/* Curved Background Shape (The dark area containing the icons) */}
      <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[250%] md:w-[150%] h-[100%] bg-[#050505] rounded-b-[50%] z-10 border-b border-paz-primary/30 shadow-[0_40px_150px_rgba(255,107,26,0.25)] pointer-events-none">
        {/* Bright highlight at the apex of the curve */}
        <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-[300px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80 blur-[1px]"></div>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-5 text-center">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 md:gap-x-12 md:gap-y-12 max-w-4xl mx-auto">
          {devices.map((device, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="text-white/80 mb-3 group-hover:text-paz-primary transition-colors duration-300">
                {device.icon}
              </div>
              <div className="font-sans text-[13px] font-bold text-white mb-1">{device.name}</div>
              <div className="font-sans text-[10px] text-[#777]">{device.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
