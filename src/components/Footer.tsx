import { MapPin, Phone, Instagram, Clock, Car, Scissors, Heart } from 'lucide-react';
import { SHOP_INFO } from '../data';

export default function Footer() {
  return (
    <footer id="localizacao" className="bg-[#050505] border-t border-zinc-900 pt-20 pb-10 relative overflow-hidden">
      
      {/* Visual background element */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-950/2 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core elements: Location visual + Shop facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Col 1: Brand details (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-gold-400 flex items-center justify-center">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display text-base font-extrabold tracking-widest text-white uppercase navbar-logo">
                  CONVENTI <span className="text-gold-400">III</span>
                </h4>
                <p className="text-[10px] uppercase text-zinc-500 tracking-wider">Barbearia Profissional</p>
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Mais de uma década moldando a autoestima paulistana. Localizada convenientemente dentro do Roldão Atacadista do Carandiru para o seu total conforto e segurança.
            </p>

            <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs">
              <Heart className="w-3.5 h-3.5 text-zinc-600 fill-zinc-600" />
              <span>{SHOP_INFO.motto}</span>
            </div>

            {/* Socials row */}
            <div className="flex items-center gap-3">
              <a 
                href={SHOP_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 hover:border-gold-500 hover:text-gold-400 text-zinc-400 flex items-center justify-center transition duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${SHOP_INFO.phoneRaw}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 hover:border-emerald-500 hover:text-emerald-400 text-zinc-400 flex items-center justify-center transition duration-300"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Fast Information (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-display text-sm font-extrabold text-white uppercase tracking-wider">CONTATOS & HORÁRIOS</h4>
            
            <ul className="space-y-4 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-450 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-white block font-semibold">Edifício Office Premium</span>
                  <span>{SHOP_INFO.address}</span>
                  <span className="block text-[11px] text-zinc-500 font-mono">{SHOP_INFO.neighborhood}</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-450 shrink-0" />
                <div>
                  <span className="text-white block font-semibold">Telefone / WhatsApp</span>
                  <a href={`tel:${SHOP_INFO.phoneRaw}`} className="hover:text-gold-400 transition hover:underline">
                    {SHOP_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-450 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-semibold">Horário Oficial</span>
                  <span>{SHOP_INFO.hours}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Car className="w-4 h-4 text-emerald-450 shrink-0 mt-0.5" />
                <div>
                  <span className="text-emerald-400 block font-semibold">Estacionamento Amplo</span>
                  <span className="text-xs text-zinc-500">Sem tarifa, monitorado e coberto</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3: Visual Location Map (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display text-sm font-extrabold text-white uppercase tracking-wider">COMO CHEGAR</h4>
            <div className="w-full h-44 rounded-xl overflow-hidden border border-zinc-900 bg-zinc-950/80 relative group shadow-lg">
              {/* Dynamic Google Maps embed iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.6293967812547!2d-46.61909879999999!3d-23.510344499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58af90dfcc7d%3A0xe54e38bf34fe55dc!2sRold%C3%A3o%20Atacadista!5e0!3m2!1spt-BR!2sbr!4v1717326000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.1) brightness(0.9)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Imperium Barber Club Map Location"
              />
              {/* Light glow banner inside */}
              <a
                href={SHOP_INFO.googleReviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 bg-black/45 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 text-xs font-bold text-white text-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-gold-400" /> Abrir no Google Maps Rotas
              </a>
            </div>
            <a
              href={SHOP_INFO.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-1 hover:underline cursor-pointer"
            >
              Exibir rota no Waze & Google Maps &rarr;
            </a>
          </div>

        </div>

        {/* Separator */}
        <div className="border-t border-zinc-900 pb-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            <p>&copy; 2026 {SHOP_INFO.name}. Todos os direitos reservados.</p>
            <p className="text-[10px] text-zinc-600 mt-1">Av. Gen. Ataliba Leonel, 1555 - Subsolo - Carandiru, São Paulo - SP</p>
          </div>
          <div className="flex items-center gap-4 text-zinc-600">
            <span>Privacidade</span>
            <span>•</span>
            <span>Termos</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
