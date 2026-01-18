
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">local_taxi</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900">Apna Tour & Travel</span>
          </div>
          
          <div className="hidden md:flex items-center">
            <button 
              onClick={scrollToBooking}
              className="bg-primary hover:bg-[#d41d26] text-white px-8 py-3 rounded-2xl text-sm font-black transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30 transform hover:-translate-y-0.5 active:scale-95"
            >
              Book Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-900 focus:outline-none p-2 rounded-xl bg-zinc-50">
              <span className="material-symbols-outlined text-3xl">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 p-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <button 
            onClick={scrollToBooking}
            className="w-full bg-primary text-white py-4 rounded-2xl text-base font-black shadow-xl shadow-primary/20"
          >
            Book Your Ride
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
