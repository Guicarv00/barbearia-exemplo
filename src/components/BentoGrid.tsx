import { motion } from 'motion/react';
import { Star, Car, Scissors, Coffee, Clock, Heart } from 'lucide-react';
import { BENTO_ITEMS, SHOP_INFO } from '../data';

export default function BentoGrid() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'google':
        return <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />;
      case 'car':
        return <Car className="w-6 h-6 text-blue-400" />;
      case 'scissors':
        return <Scissors className="w-6 h-6 text-gold-400" />;
      case 'door':
        return <Heart className="w-6 h-6 text-rose-500 fill-rose-500/20" />;
      case 'coffee':
        return <Coffee className="w-6 h-6 text-amber-500" />;
      case 'clock':
        return <Clock className="w-6 h-6 text-emerald-400" />;
      default:
        return <Scissors className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <section id="diferenciais" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[30vw] bg-gold-950/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 max-w-2xl">
          <span className="text-xs uppercase tracking-widest font-extrabold text-gold-400 font-mono block mb-3">CONVENIÊNCIA REINVENTADA</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Por que escolher a {SHOP_INFO.name}?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Muito além do corte. Criamos um ecossistema focado no bem-estar, na praticidade e na excelência visual de quem vive na correria de São Paulo.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          
          {/* Card 1: Google Score (Large - spans 2 cols, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 rounded-3xl p-8 bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between group hover:border-gold-500/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-cover bg-right-bottom opacity-10 mix-blend-luminosity bg-[url('https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?auto=format&fit=crop&q=80&w=600')]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-[80px]" />
            
            <div className="flex items-start justify-between relative z-10">
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl">
                {getIcon('google')}
              </div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-yellow-500/80 bg-yellow-950/30 border border-yellow-500/20 px-2.5 py-1 rounded-full">
                MAIS DE {SHOP_INFO.reviewsCount} AVALIAÇÕES REAIS
              </span>
            </div>

            <div className="relative z-10 mt-6 md:mt-0">
              <div className="space-y-1">
                <span className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight flex items-center gap-2">
                  {SHOP_INFO.rating} <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                </span>
                <p className="font-display font-bold text-lg text-white">Nossa Excelente Nota de Avaliação no Google Maps</p>
              </div>
              <p className="text-zinc-400 text-sm mt-3 leading-relaxed max-w-lg">
                É difícil agradar a todos em São Paulo, mas nós conseguimos. Nossos clientes elogiam a consistência dos cortes de cabelo, o respeito total, a clareza e o profissionalismo insuperável da equipe.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Parking (Medium - spans 1 col, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl p-6 bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between group hover:border-gold-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-xl">
                {getIcon('car')}
              </div>
              <span className="text-[10px] text-zinc-500 font-semibold uppercase font-mono">Praticidade</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-white mb-2">Estacionamento Coberto Grátis</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Pare na sombra e com total segurança no subsolo do Edifício Office Premium. Sem estresse para procurar vaga na rua.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Precise Scissors (Medium - spans 1 col, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl p-6 bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between group hover:border-gold-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-xl">
                {getIcon('scissors')}
              </div>
              <span className="text-[10px] text-gold-500 font-semibold uppercase font-mono">Domínio de Arte</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-white mb-2">Cortes Precisos & Visagismo</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Técnicos especialistas em degrades ultra fader, cortes clássicos e perfilados simétricos com navalha.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Convenient Hours (Small - spans 1 col, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl p-6 bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between group hover:border-gold-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-xl">
                {getIcon('clock')}
              </div>
              <span className="text-[10px] text-zinc-500 font-semibold uppercase font-mono">Disponibilidade</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-white mb-2">Segunda a Sábado 09h-21h</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Facilidade para vir no horário de almoço ou logo após seu expediente. Aberto o dia inteiro sem pausas.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Comfort & Spa (Small - spans 1 col, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-3xl p-6 bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between group hover:border-gold-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-xl">
                {getIcon('coffee')}
              </div>
              <span className="text-[10px] text-zinc-500 font-semibold uppercase font-mono font-bold">Respiro</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-white mb-2">Ambiente Confortável</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Ar-condicionado forte, água fresca, poltronas estofadas ergonômicas e toalha quente na barba.
              </p>
            </div>
          </motion.div>

          {/* Card 6: Faith-guided & Family environment (Tall/Spans 1 col, spans 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl p-6 bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between group hover:border-gold-500/30 transition-all duration-300 md:row-span-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[50px]" />
            <div className="flex items-center justify-between">
              <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-xl">
                {getIcon('door')}
              </div>
              <span className="text-[9px] font-mono font-bold tracking-widest text-red-400 bg-red-950/20 border border-red-500/20 px-2 py-0.5 rounded">
                NOSSA PREMISSA
              </span>
            </div>

            <div className="mt-8">
              <span className="text-2xl block font-mono font-extrabold text-gold-400 leading-none mb-1">★</span>
              <h3 className="font-display font-black text-xl text-white mb-3">
                “{SHOP_INFO.motto}”
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                Dedicamos nosso trabalho à precisão técnica, ao cuidado personalizado com cada cliente e à elegância contemporânea.
              </p>
              <p className="text-zinc-500 text-xs italic leading-relaxed">
                Aqui você encontra um refúgio moderno e sofisticado para relaxar, tomar um ótimo café e renovar o seu estilo com barbeiros de elite.
              </p>
            </div>

            <div className="border-t border-zinc-900 pt-3">
              <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">Atmosfera Premium</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
