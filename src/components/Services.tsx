import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Scissors, Clock, Plus, Minus, Trash2, Check, ArrowRight } from 'lucide-react';
import { Service } from '../types';
import { SERVICES_DATA } from '../data';

interface ServicesProps {
  onOpenBookingWithService: (service: Service) => void;
}

export default function Services({ onOpenBookingWithService }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<'todos' | 'cabelo' | 'barba' | 'combos' | 'especiais'>('todos');
  const [cart, setCart] = useState<Service[]>([]);

  const categories = [
    { value: 'todos', label: 'Todos os Serviços' },
    { value: 'cabelo', label: 'Corte de Cabelo' },
    { value: 'barba', label: 'Cuidados com a Barba' },
    { value: 'combos', label: 'Combos Especiais' },
    { value: 'especiais', label: 'Acabamentos & Extras' },
  ];

  const filteredServices = selectedCategory === 'todos'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(service => service.category === selectedCategory);

  const toggleCart = (service: Service) => {
    const exists = cart.some(item => item.id === service.id);
    if (exists) {
      setCart(cart.filter(item => item.id !== service.id));
    } else {
      setCart([...cart, service]);
    }
  };

  const clearCart = () => setCart([]);

  const totalCost = cart.reduce((sum, item) => sum + item.price, 0);
  const totalDuration = cart.reduce((sum, item) => sum + item.duration, 0);

  const handleBookCart = () => {
    if (cart.length === 0) return;
    // We pass the primary service or build an aggregate name
    const combinedService: Service = {
      id: 'custom-combo',
      name: cart.map(item => item.name.split(' (')[0]).join(' + '),
      description: 'Combo de serviços selecionados dinamicamente no simulador.',
      category: 'combos',
      price: totalCost,
      duration: totalDuration
    };
    onOpenBookingWithService(combinedService);
  };

  return (
    <section id="servicos" className="py-24 relative bg-zinc-950 border-t border-zinc-900">
      
      {/* Background radial highlight */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-gold-950/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-gold-400 font-mono inline-flex items-center gap-1.5 mb-3">
            <Sparkles className="w-3 h-3 text-gold-400" /> CATEGORIAS & TABELA DE PREÇOS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Serviços & Combos de Verdade
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Profissionais atenciosos treinados nas últimas tendências. Selecione os serviços abaixo para testar nosso simulador de tempo e preço e agendar em segundos.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value as any)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition font-display border cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-gold-500 border-gold-500 text-black'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Two Columns: Tabela & Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Column 1 & 2: Services List */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => {
                const inCart = cart.some(item => item.id === service.id);
                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                      inCart 
                        ? 'bg-gold-950/10 border-gold-500/50' 
                        : 'bg-zinc-900/40 border-zinc-900 hover:border-zinc-800'
                    }`}
                  >
                    <div className="flex-1 space-y-1 pr-4">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="font-display font-extrabold text-base text-white">{service.name}</h3>
                        {service.popular && (
                          <span className="px-2 py-0.5 text-[8px] font-bold tracking-wider uppercase bg-gold-400/10 text-gold-400 border border-gold-400/20 rounded-full">
                            Mais Pedido
                          </span>
                        )}
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wide font-mono">
                          {service.category === 'cabelo' ? 'Corte' : service.category === 'barba' ? 'Barba' : service.category === 'combos' ? 'Combo' : 'Extras'}
                        </span>
                      </div>
                      <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">{service.description}</p>
                      
                      <div className="flex items-center gap-3 pt-2 text-zinc-500 text-xs font-mono">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-zinc-500" /> {service.duration} min</span>
                        <span>•</span>
                        <span>Preço Justo</span>
                      </div>
                    </div>

                    <div className="flex items-center sm:flex-col gap-3 justify-between w-full sm:w-auto border-t sm:border-t-0 border-zinc-900 pt-3 sm:pt-0 shrink-0">
                      <span className="font-display font-black text-xl text-gold-400 sm:text-right">R$ {service.price.toFixed(2).replace('.', ',')}</span>
                      
                      <div className="flex gap-2">
                        {/* Selector checkbox / action button */}
                        <button
                          onClick={() => toggleCart(service)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer select-none ${
                            inCart
                              ? 'bg-gold-500 text-black font-semibold'
                              : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
                          }`}
                        >
                          {inCart ? (
                            <>
                              <Check className="w-3.5 h-3.5 stroke-[3px]" /> Selecionado
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" /> Adicionar
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => onOpenBookingWithService(service)}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-white border border-zinc-800 text-white hover:text-black transition cursor-pointer"
                        >
                          Agendar Já
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Column 3: Simulated checkout / Estimates drawer */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 sticky top-24 backdrop-blur-sm shadow-xl flex flex-col justify-between min-h-[350px]">
              <div>
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                  <div>
                    <h3 className="font-display font-extrabold text-white text-base">Monte Sua Sacola</h3>
                    <p className="text-[10px] text-zinc-500">Simulador de tempo e valores</p>
                  </div>
                  {cart.length > 0 && (
                    <button 
                      onClick={clearCart}
                      className="p-1 px-2 rounded bg-zinc-950 hover:bg-red-950/20 text-zinc-500 hover:text-red-400 border border-zinc-800/80 transition text-[10px] flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" /> Limpar
                    </button>
                  )}
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-12 text-zinc-500 space-y-3">
                    <Scissors className="w-8 h-8 text-zinc-700 mx-auto stroke-1" />
                    <p className="text-xs max-w-[200px] mx-auto text-zinc-400">Clique em + Adicionar nos serviços ao lado para simular o valor total.</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between text-xs p-2 bg-zinc-950 border border-zinc-900 rounded-lg">
                        <div className="flex-1 pr-2">
                          <span className="font-bold text-zinc-200 block truncate">{item.name}</span>
                          <span className="text-[10px] text-zinc-500 font-mono">{item.duration} min</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gold-400 shrink-0">R$ {item.price.toFixed(2).replace('.', ',')}</span>
                          <button 
                            onClick={() => toggleCart(item)}
                            className="p-1 text-zinc-500 hover:text-red-400 transition"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart summaries */}
              {cart.length > 0 && (
                <div className="border-t border-zinc-800 pt-4 mt-6 space-y-4">
                  <div className="space-y-2 text-xs text-zinc-400">
                    <div className="flex justify-between">
                      <span>Tempo estimado:</span>
                      <span className="font-mono text-zinc-200 font-bold">{totalDuration} minutos</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white font-semibold">Valor Total:</span>
                      <span className="font-display font-extrabold text-xl text-gold-400">R$ {totalCost.toFixed(2).replace('.', ',')}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleBookCart}
                    className="w-full py-3 px-4 rounded-xl bg-gold-400 hover:bg-gold-500 text-black font-bold text-xs uppercase tracking-wider font-display flex items-center justify-center gap-2 group transition shadow-lg shadow-gold-950/20 cursor-pointer"
                  >
                    Agendar Selecionados ({cart.length})
                    <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition" />
                  </button>
                  <p className="text-[9px] text-zinc-500 text-center leading-normal">
                    Reservando pelo simulador, o barbeiro reserva o tempo exato para você no subsolo do Roldão.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
