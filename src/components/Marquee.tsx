import { Star, Shield, Car, Heart, Smile } from 'lucide-react';

export default function Marquee() {
  const items = [
    { text: 'AVALIAÇÃO DE NOTA 5.0 NO GOOGLE', icon: Star },
    { text: 'ESTACIONAMENTO TOTALMENTE COBERTO & GRÁTIS', icon: Car },
    { text: 'ATENDIMENTO PREMIUM COM TOALHA QUENTE', icon: Shield },
    { text: 'JESUS É O DONO DO LUGAR!!', icon: Heart },
    { text: 'AMBIENTE FAMILIAR, TRANQUILO E CLIMATIZADO', icon: Smile },
    { text: 'VISAGISMO E ACABAMENTO DE ELITE', icon: Star },
  ];

  // Repeat items to fill space and guarantee continuous scroll effect
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-zinc-950 py-5 border-y border-zinc-900 z-10">
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      
      {/* Infinite scrolling block using CSS styling */}
      <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
        {repeatedItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index} 
              className="inline-flex items-center gap-3.5 mx-8 shrink-0 text-xs sm:text-sm font-semibold tracking-widest text-zinc-400 hover:text-gold-400 transition cursor-pointer"
            >
              <Icon className="w-4 h-4 text-gold-500 fill-gold-500/10" />
              <span>{item.text}</span>
              <span className="text-zinc-800 ml-4">•</span>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
