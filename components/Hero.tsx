
import React, { useState, useEffect } from 'react';
import { CONTACT_PHONE } from '../constants';

const HERO_IMAGES = [
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrbaF3OryukNNNixX4GKZ79VrhNLDcxr-0aP3V35JPrv3FzVbFwDghddpof_1nRHlAMnbsxVpcvpcgWlJxiPr-l9mT7odFiTwVj56ZQp-sOYGTuXgcBjzo28fPogWgPrvpZc0Rx1L1D2A8jZ3f4zVW-nVlSskQxw0pMFjeVWHc0W3mqOO7FbOJNQAp9ANXU8afhqol7C8YTnzm65oc1eR-pQPRiIfI9Qf_xN-QsG3cFJZl5nutVheSSzek0MO3i5YtV7q4VeteHPTs",
    name: "Toyota Innova Crysta",
    tagline: "Luxury Reimagined"
  },
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMqxV6VMAJfc5AKyVCGBwqFm6rFgrgUXsL8kmPb0Gk1bq6BbUFlGSvfzElPxbpAw68UYb1_LaraL8AhLtVhWcZ_y576FbDLlGFR9PLpgiJAYFyGeP40yPjJexDUtL4ejGnkkgu0CnDcJIMiz3mhinPdnQ5ay-Kvlfen3ouNPIru6D61GNhuhJeZCzh0Pii7esL4_VHbvi5L3Q2ImNhMzvY0OGstlq8qCZdKj04Ai6HO0RgR5xhUbXlYKzNWjo6bWf7OV3vatK_nYIy",
    name: "Maruti Suzuki Ertiga",
    tagline: "Comfort for Family"
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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Quick Inquiry - Apna Tour & Travel*%0A%0A` +
      `*Vehicle:* ${formData.vehicle}%0A` +
      `*Pickup:* ${formData.pickup}%0A` +
      `*Dropoff:* ${formData.dropoff}%0A` +
      `*Date:* ${formData.date}%0A%0A` +
      `I'd like to get a quote for this trip. Please assist me.`;

    const phoneNumber = CONTACT_PHONE.replace(/\s/g, '');
    const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative w-full pt-8 pb-20 lg:pt-16 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Content & Quick Form */}
        <div className="lg:col-span-6 flex flex-col gap-8 relative z-10">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 w-fit border border-primary/10">
              <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Ranchi's Premier Travel Partner</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-zinc-900">
              Premium Travels at <span className="text-primary italic">₹1000/Day</span>
            </h1>
            <p className="text-xl text-zinc-500 max-w-lg leading-relaxed font-medium">
              Experience the best of Ranchi with our verified drivers and pristine fleet of Ertigas and Innovas.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border border-zinc-100 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            
            <form onSubmit={handleWhatsAppBooking} className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Pick-up</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-xl">location_on</span>
                    <input 
                      required
                      type="text" 
                      placeholder="Enter city/area"
                      className="w-full pl-12 pr-4 py-4 bg-zinc-50 rounded-2xl border-transparent focus:bg-white focus:border-primary/30 focus:ring-0 text-sm font-bold transition-all"
                      value={formData.pickup}
                      onChange={e => setFormData({...formData, pickup: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Drop-off</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-xl">flag</span>
                    <input 
                      required
                      type="text" 
                      placeholder="Enter destination"
                      className="w-full pl-12 pr-4 py-4 bg-zinc-50 rounded-2xl border-transparent focus:bg-white focus:border-primary/30 focus:ring-0 text-sm font-bold transition-all"
                      value={formData.dropoff}
                      onChange={e => setFormData({...formData, dropoff: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Travel Date</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-xl">calendar_today</span>
                    <input 
                      required
                      type="date" 
                      className="w-full pl-12 pr-4 py-4 bg-zinc-50 rounded-2xl border-transparent focus:bg-white focus:border-primary/30 focus:ring-0 text-sm font-bold transition-all text-zinc-600"
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Vehicle</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-xl">directions_car</span>
                    <select 
                      className="w-full pl-12 pr-4 py-4 bg-zinc-50 rounded-2xl border-transparent focus:bg-white focus:border-primary/30 focus:ring-0 text-sm font-bold transition-all appearance-none text-zinc-600"
                      value={formData.vehicle}
                      onChange={e => setFormData({...formData, vehicle: e.target.value})}
                    >
                      <option>Toyota Innova Crysta</option>
                      <option>Maruti Ertiga</option>
                      <option>Force Tempo Traveller</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 text-xl pointer-events-none">expand_more</span>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full mt-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-green-500/30 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3">
                <span className="material-symbols-outlined text-3xl">chat</span>
                Check Price on WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Right: Cinematic Slider */}
        <div className="lg:col-span-6 relative h-[500px] lg:h-[700px] flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-zinc-50 rounded-full -z-10 animate-pulse"></div>
          
          <div className="h-full w-full max-w-[550px] aspect-[3/4] rounded-[3.5rem] overflow-hidden shadow-[0_48px_80px_-20px_rgba(0,0,0,0.3)] relative group bg-zinc-900 border-[12px] border-white">
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-20"></div>
            
            {/* Images with Ken Burns Effect */}
            {HERO_IMAGES.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
                  index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img 
                  src={img.url} 
                  alt={img.name}
                  className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear ${
                    index === currentImageIndex ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
            ))}

            {/* Slider Text */}
            <div className="absolute bottom-12 left-10 z-30 text-white">
              <div className="mb-4 h-8 overflow-hidden">
                {HERO_IMAGES.map((img, index) => (
                  <p key={index} className={`text-xs font-black uppercase tracking-[0.3em] text-primary transition-all duration-1000 ${index === currentImageIndex ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 absolute'}`}>
                    {img.tagline}
                  </p>
                ))}
              </div>
              <h3 className="text-3xl font-black mb-3 drop-shadow-xl">
                 {HERO_IMAGES[currentImageIndex].name}
              </h3>
              <div className="flex items-center gap-1.5 text-yellow-400">
                {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-xl">star</span>)}
                <span className="text-white/80 text-xs ml-2 font-bold uppercase tracking-widest tracking-tighter">Premium Rated</span>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="absolute bottom-8 right-10 z-30 flex gap-3">
              {HERO_IMAGES.map((_, index) => (
                <div 
                  key={index}
                  className="h-1.5 rounded-full bg-white/20 overflow-hidden w-12"
                >
                   <div 
                     className={`h-full bg-primary transition-all duration-[5000ms] ease-linear ${
                       index === currentImageIndex ? 'w-full' : 'w-0'
                     }`}
                   />
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute -bottom-6 -left-4 sm:-left-12 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-5 animate-bounce z-40 hidden md:flex" style={{ animationDuration: '4s' }}>
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
              <span className="material-symbols-outlined text-3xl font-bold">verified_user</span>
            </div>
            <div>
              <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest mb-1">Safety First</p>
              <p className="text-lg font-black text-zinc-900">Sanitized Cars</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
