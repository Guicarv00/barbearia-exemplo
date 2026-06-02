import { motion } from 'motion/react';
import { ShieldCheck, Star, Calendar, ArrowDown } from 'lucide-react';
import { SHOP_INFO } from '../data';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section 
      id="inicio" 
      className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(5,5,5,0.4) 0%, rgba(5,5,5,0.7) 30%, rgba(5,5,5,0.98) 100%), url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1920')`
      }}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(197,164,21,0.06),transparent_40%)]" />

      {/* Floating badges */}
      <div className="absolute top-32 left-10 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24 z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Faith-based upper sticker & trust seal */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex flex-wrap justify-center items-center gap-3 bg-zinc-900/90 border border-zinc-800/80 backdrop-blur-md px-4 py-2 rounded-full mb-8"
          >
            <span className="flex items-center gap-1.5 text-xs text-gold-300 font-medium">
              <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
              Selo 4.9 Estrelas no Google
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="text-xs text-zinc-300 font-medium font-mono uppercase tracking-wider">
              {SHOP_INFO.motto}
            </span>
          </motion.div>

          {/* Main Title display */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-none"
          >
            Corte e Barba de Elite no <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500">Edifício Office Premium</span>
          </motion.h1>

          {/* Core pitch subtitled */}
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
          >
            A <strong className="text-white font-medium">{SHOP_INFO.name}</strong> traz o mais alto padrão de visagismo masculino de São Paulo para a Avenida Paulista. Máxima segurança, estacionamento coberto e atendimento de excelência.
          </motion.p>

          {/* Action buttons with glows */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold-400 hover:bg-gold-500 text-black font-bold font-display text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(197,164,21,0.25)] hover:shadow-gold-500/30 scale-100 hover:scale-[1.02] cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-black" />
              Agendar Meu Horário
            </button>
            <a
              href="#servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-zinc-950/90 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-semibold font-display text-sm uppercase tracking-wider transitionduration-200"
            >
              Conhecer Serviços
            </a>
          </motion.div>

          {/* Highlights Ribbon */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t border-zinc-900/60"
          >
            <div>
              <span className="block font-display text-2xl sm:text-3xl font-extrabold text-gold-400 leading-none">4.9 ★</span>
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest block mt-1">Nota no Google</span>
            </div>
            <div>
              <span className="block font-display text-2xl sm:text-3xl font-extrabold text-white leading-none">450+</span>
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest block mt-1">Avaliações Reais</span>
            </div>
            <div>
              <span className="block font-display text-2xl sm:text-3xl font-extrabold text-white leading-none">Grátis</span>
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest block mt-1">Estacionamento</span>
            </div>
            <div>
              <span className="block font-display text-2xl sm:text-3xl font-extrabold text-gold-400 leading-none">09h-21h</span>
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest block mt-1">Segunda a Sábado</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative wave and divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce opacity-40">
        <span className="text-[10px] tracking-wider font-mono text-zinc-500">ROLO DE TELA</span>
        <ArrowDown className="w-4 h-4 text-zinc-500" />
      </div>
    </section>
  );
}
