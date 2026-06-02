import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import BentoGrid from './components/BentoGrid';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Service } from './types';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<Service | null>(null);

  const handleOpenBooking = (service: Service | null = null) => {
    setPreselectedService(service);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setPreselectedService(null);
  };

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseBooking();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 overflow-x-hidden antialiased">
      {/* Header component */}
      <Header onOpenBooking={() => handleOpenBooking(null)} />

      {/* Main Single-page Layout */}
      <main>
        {/* Cinematic Hero Intro */}
        <Hero onOpenBooking={() => handleOpenBooking(null)} />

        {/* Ticker authority numbers */}
        <Marquee />

        {/* Benefits modern bento display */}
        <BentoGrid />

        {/* Categories catalog of services & live cost bag simulator */}
        <Services onOpenBookingWithService={(service) => handleOpenBooking(service)} />

        {/* Verified Google maps rating references */}
        <Testimonials />

        {/* Helpful FAQs accordion lists */}
        <FaqSection />
      </main>

      {/* Footer contacts, coordinates & map routings */}
      <Footer />

      {/* High-end interactive appointment selector booking modal */}
      <BookingModal 
        isOpen={bookingOpen} 
        onClose={handleCloseBooking} 
        preselectedService={preselectedService} 
      />
    </div>
  );
}
