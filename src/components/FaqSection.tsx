import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS_DATA } from '../data';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <HelpCircle className="w-8 h-8 text-gold-400 mx-auto mb-4 stroke-[1.5]" />
          <span className="text-xs uppercase tracking-widest font-extrabold text-gold-400 font-mono block mb-3">TIRA DÚVIDAS</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">Dúvidas Frequentes</h2>
          <p className="text-zinc-500 text-sm mt-3">
            Tudo o que você precisa saber para ter a sua melhor experiência de corte e barba no Carandiru.
          </p>
        </div>

        {/* Accordeon List */}
        <div className="space-y-4">
          {FAQS_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border border-zinc-900 rounded-2xl overflow-hidden transition-all duration-300 bg-zinc-950`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex items-center justify-between text-base font-bold text-white font-display hover:bg-zinc-900/40 select-none transition cursor-pointer"
                >
                  <span>{item.question}</span>
                  <span className={`p-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="p-6 pt-0 text-sm text-zinc-400 leading-relaxed font-light bg-zinc-900/10 border-t border-zinc-900/60">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
