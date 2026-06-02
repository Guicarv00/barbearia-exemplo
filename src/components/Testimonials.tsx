import { motion } from 'motion/react';
import { Star, MessageSquareQuote, ShieldAlert } from 'lucide-react';
import { TESTIMONIALS_DATA, SHOP_INFO } from '../data';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Decorative gradient sphere */}
      <div className="absolute bottom-10 left-12 w-[400px] h-[400px] bg-gold-950/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs uppercase tracking-widest font-extrabold text-gold-400 font-mono block mb-3">CONFIANÇA TOTAL</span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Quem Conhece, Recomenda
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Mantemos um histórico incomparável de satisfação masculina em São Paulo. Leia depoimentos reais importados diretamente do Google Maps.
            </p>
          </div>

          {/* Social Proof Stats summary block */}
          <div className="bg-zinc-900/60 p-6 border border-zinc-800 rounded-2xl flex items-center gap-5 text-left shrink-0">
            <div className="text-center bg-zinc-950 p-4 border border-zinc-800 rounded-xl relative">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 absolute top-2 right-2 animate-ping" />
              <span className="block font-display text-3xl font-black text-white">5.0</span>
              <span className="text-[10px] text-zinc-500 font-mono">GOOGLE MAPS</span>
            </div>
            <div>
              <div className="flex text-yellow-500 gap-1.5 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-sm font-bold text-white leading-tight">307+ Avaliações Reais</p>
              <p className="text-xs text-zinc-500 mt-1">Confiado por homens exigentes</p>
            </div>
          </div>
        </div>

        {/* Testimonials cards gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative flex flex-col justify-between hover:border-zinc-800 transition duration-300 shadow-md group"
            >
              {/* Quote bubble decorative icon */}
              <div className="absolute top-6 right-6 text-zinc-800 group-hover:text-gold-950/25 transition-colors duration-300 pointer-events-none">
                <MessageSquareQuote className="w-8 h-8" />
              </div>

              <div>
                {/* Visual stars */}
                <div className="flex text-yellow-500 gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed mb-6 italic">
                  “ {item.content} ”
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-zinc-950 pt-4 mt-auto">
                <img 
                  src={item.avatarUrl} 
                  alt={item.author} 
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-zinc-800 ring-2 ring-gold-500/10 shrink-0" 
                />
                <div>
                  <span className="block text-xs font-bold text-white font-display">{item.author}</span>
                  <span className="text-[10px] text-zinc-500 block leading-none mt-1">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to link directly to Google Business reviews or maps */}
        <div className="text-center mt-12 bg-zinc-900/40 p-6 border border-zinc-900 rounded-2xl max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-semibold text-zinc-500 font-mono block">QUER CONFERIR TODOS?</span>
            <span className="text-sm font-bold text-white mt-1 block">Visite nosso perfil oficial e comprove</span>
          </div>
          <a
            href={SHOP_INFO.googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-gold-500 hover:text-gold-400 text-xs font-bold text-white transition flex items-center justify-center gap-2 cursor-pointer"
          >
            Ver Avaliações no Google Maps
          </a>
        </div>

      </div>
    </section>
  );
}
