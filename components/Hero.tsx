
import React, { useState, useEffect } from 'react';
import { CONTACT_PHONE } from '../constants';

const HERO_IMAGES = [
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrbaF3OryukNNNixX4GKZ79VrhNLDcxr-0aP3V35JPrv3FzVbFwDghddpof_1nRHlAMnbsxVpcvpcgWlJxiPr-l9mT7odFiTwVj56ZQp-sOYGTuXgcBjzo28fPogWgPrvpZc0Rx1L1D2A8jZ3f4zVW-nVlSskQxw0pMFjeVWHc0W3mqOO7FbOJNQAp9ANXU8afhqol7C8YTnzm65oc1eR-pQPRiIfI9Qf_xN-QsG3cFJZl5nutVheSSzek0MO3i5YtV7q4VeteHPTs",
    name: "Toyota Innova Crysta",
    tagline: "The Luxury Standard"
  },
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMqxV6VMAJfc5AKyVCGBwqFm6rFgrgUXsL8kmPb0Gk1bq6BbUFlGSvfzElPxbpAw68UYb1_LaraL8AhLtVhWcZ_y576FbDLlGFR9PLpgiJAYFyGeP40yPjJexDUtL4ejGnkkgu0CnDcJIMiz3mhinPdnQ5ay-Kvlfen3ouNPIru6D61GNhuhJeZCzh0Pii7esL4_VHbvi5L3Q2ImNhMzvY0OGstlq8qCZdKj04Ai6HO0RgR5xhUbXlYKzNWjo6bWf7OV3vatK_nYIy",
    name: "Maruti Suzuki Ertiga",
    tagline: "Comfort for Families"
  }
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    vehicle: 'Toyota Innova Crysta'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Quick Inquiry - Apna Tour & Travel*%0A%0A` +
      `🚗 *Vehicle:* ${formData.vehicle}%0A` +
      `📍 *Pickup:* ${formData.pickup}%0A` +
      `🏁 *Dropoff:* ${formData.dropoff}%0A` +
      `📅 *Date:* ${formData.date}%0A%0A` +
      `I would like to get a final quote. Please assist!`;

    const phoneNumber = CONTACT_PHONE.replace(/\s/g, '');
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative w-full pt-6 pb-20 lg:pt-12 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div className="lg:col-span-6 flex flex-col gap-8 relative z-10 animate-in fade-in slide-in-from-left duration-1000">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 w-fit border border-primary/20">
              <span className="material-symbols-outlined text-primary text-sm">stars</span>
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Ranked #1 Taxi Service in Ranchi</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter text-zinc-900">
              Ride Premium. <br/>Pay <span className="text-primary italic">Smart.</span>
            </h1>
            <p className="text-xl text-zinc-500 max-w-lg leading-relaxed">
              Exclusively offering Ranchi's best-maintained <span className="text-zinc-900 font-bold">Ertiga</span> and <span className="text-zinc-900 font-bold">Innova</span> fleet.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_32px_80px_-16px_rgba(234,40,49,0.1)] border border-zinc-100 relative group">
            <form onSubmit={handleWhatsAppBooking} className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Pick-up Location</label>
                  <input required type="text" placeholder="Enter area..." className="w-full px-5 py-4 bg-zinc-50 rounded-2xl border-transparent focus:bg-white focus:border-primary/30 focus:ring-0 text-sm font-bold transition-all" value={formData.pickup} onChange={e => setFormData({...formData, pickup: e.target.value})} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Drop-off Location</label>
                  <input required type="text" placeholder="Enter destination..." className="w-full px-5 py-4 bg-zinc-50 rounded-2xl border-transparent focus:bg-white focus:border-primary/30 focus:ring-0 text-sm font-bold transition-all" value={formData.dropoff} onChange={e => setFormData({...formData, dropoff: e.target.value})} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Travel Date</label>
                  <input required type="date" className="w-full px-5 py-4 bg-zinc-50 rounded-2xl border-transparent focus:bg-white focus:border-primary/30 focus:ring-0 text-sm font-bold transition-all" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Select Premium Car</label>
                  <select className="w-full px-5 py-4 bg-zinc-50 rounded-2xl border-transparent focus:bg-white focus:border-primary/30 focus:ring-0 text-sm font-bold transition-all" value={formData.vehicle} onChange={e => setFormData({...formData, vehicle: e.target.value})}>
                    <option>Toyota Innova Crysta</option>
                    <option>Maruti Suzuki Ertiga</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full mt-2 bg-primary hover:bg-zinc-900 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3">
                <span className="material-symbols-outlined text-2xl">local_taxi</span>
                Get Instant Quote on WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Right: Cinematic Slider */}
        <div className="lg:col-span-6 relative h-[500px] lg:h-[750px] flex items-center justify-center animate-in zoom-in duration-1000">
          <div className="h-full w-full max-w-[550px] aspect-[3/4] rounded-[4rem] overflow-hidden shadow-[0_64px_120px_-24px_rgba(0,0,0,0.4)] relative bg-zinc-900 border-[16px] border-white ring-1 ring-zinc-100">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-20"></div>
            
            {HERO_IMAGES.map((img, index) => (
              <div key={index} className={`absolute inset-0 transition-opacity duration-[2000ms] ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                <img src={img.url} alt={img.name} className={`w-full h-full object-cover transition-transform duration-[10000ms] ${index === currentImageIndex ? 'scale-115' : 'scale-100'}`} />
              </div>
            ))}

            <div className="absolute bottom-12 left-12 z-30 text-white">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-2">{HERO_IMAGES[currentImageIndex].tagline}</p>
              <h3 className="text-4xl font-black mb-4 drop-shadow-2xl">{HERO_IMAGES[currentImageIndex].name}</h3>
              <div className="flex items-center gap-1.5 text-yellow-400">
                {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-xl">star</span>)}
                <span className="text-white/60 text-[10px] ml-2 font-bold uppercase tracking-widest">5.0 Star Rated</span>
              </div>
            </div>

            <div className="absolute bottom-10 right-12 z-30 flex gap-4">
              {HERO_IMAGES.map((_, index) => (
                <div key={index} className="h-1.5 rounded-full bg-white/20 overflow-hidden w-16">
                   <div className={`h-full bg-primary transition-all duration-[6000ms] linear ${index === currentImageIndex ? 'w-full' : 'w-0'}`} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute -top-10 -right-4 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-5 animate-pulse z-40 hidden lg:flex border border-zinc-50">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
              <span className="material-symbols-outlined text-4xl font-bold">verified_user</span>
            </div>
            <div>
              <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest mb-1">Elite Fleet</p>
              <p className="text-xl font-black text-zinc-900">Sanitized Daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
