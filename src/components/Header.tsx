import { useState } from 'react';
import { Menu, X, Scissors, Calendar } from 'lucide-react';
import { SHOP_INFO } from '../data';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'F.A.Q', href: '#faq' },
    { label: 'Localização', href: '#localizacao' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-zinc-950/70 backdrop-blur-md border-b border-zinc-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-gold-400 flex items-center justify-center group-hover:border-gold-500/50 transition duration-300">
              <Scissors className="w-5 h-5 group-hover:rotate-12 transition duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base tracking-widest font-extrabold text-white uppercase group-hover:text-gold-400 transition">
                Imperium <span className="text-gold-400">Barber</span>
              </span>
              <span className="text-[10px] tracking-widest text-zinc-500 uppercase leading-none font-medium">
                Barbearia Premium
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-semibold text-zinc-400 hover:text-white uppercase tracking-wider transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Booking CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href={SHOP_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-zinc-500 hover:text-zinc-300 transition"
            >
              @imperium_barber
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-400 hover:bg-gold-500 text-black font-semibold font-display text-xs tracking-wider uppercase transition shadow-lg shadow-gold-950/20"
            >
              <Calendar className="w-4 h-4 text-black" />
              Agendar Online
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-900 transition-all duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 uppercase font-bold tracking-wider transition"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-zinc-900/60 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gold-400 hover:bg-gold-500 text-black font-semibold font-display text-sm tracking-wider uppercase transition cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-black" />
                Agendar Horário
              </button>
              <a
                href={SHOP_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-center text-xs text-zinc-500 hover:text-zinc-300 py-1"
              >
                Acompanhar no Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
