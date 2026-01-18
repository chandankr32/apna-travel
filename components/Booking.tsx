
import React, { useState } from 'react';
import { CONTACT_PHONE, FLEET } from '../constants';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    vehicle: 'Toyota Innova Crysta',
    passengers: '4'
  });

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Trip Booking Request - Apna Tour & Travel*%0A%0A` +
      `*Vehicle:* ${formData.vehicle}%0A` +
      `*From:* ${formData.pickup}%0A` +
      `*To:* ${formData.dropoff}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Time:* ${formData.time}%0A` +
      `*Passengers:* ${formData.passengers}%0A%0A` +
      `Please confirm availability and share the best price.`;

    const phoneNumber = CONTACT_PHONE.replace(/\s/g, '');
    const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-zinc-100">
          <div className="grid lg:grid-cols-5 h-full">
            {/* Left Content */}
            <div className="lg:col-span-2 p-10 lg:p-14 bg-zinc-900 text-white flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-primary/20">
                  <span className="material-symbols-outlined text-4xl">travel_explore</span>
                </div>
                <h2 className="text-4xl font-black mb-6 leading-tight">Ready to explore Jharkhand?</h2>
                <p className="text-zinc-400 text-lg mb-10 leading-relaxed font-medium">
                  Complete the form and our team will get back to you on WhatsApp within minutes.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">verified</span>
                  </div>
                  <span className="font-bold text-xs uppercase tracking-widest text-zinc-300">Verified Professional Drivers</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">payments</span>
                  </div>
                  <span className="font-bold text-xs uppercase tracking-widest text-zinc-300">No Hidden Charges</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-3 p-8 sm:p-12 lg:p-14">
              <form onSubmit={handleWhatsAppRedirect} className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Pick-up From</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Ranchi Junction"
                    className="w-full px-5 py-4 bg-zinc-50 border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all text-zinc-900 font-bold"
                    value={formData.pickup}
                    onChange={e => setFormData({...formData, pickup: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Drop-off To</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Patratu Valley"
                    className="w-full px-5 py-4 bg-zinc-50 border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all text-zinc-900 font-bold"
                    value={formData.dropoff}
                    onChange={e => setFormData({...formData, dropoff: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Date</label>
                  <input 
                    required
                    type="date" 
                    className="w-full px-5 py-4 bg-zinc-50 border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all text-zinc-900 font-bold"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Time</label>
                  <input 
                    required
                    type="time" 
                    className="w-full px-5 py-4 bg-zinc-50 border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all text-zinc-900 font-bold"
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Vehicle</label>
                  <select 
                    className="w-full px-5 py-4 bg-zinc-50 border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all text-zinc-900 font-bold appearance-none"
                    value={formData.vehicle}
                    onChange={e => setFormData({...formData, vehicle: e.target.value})}
                  >
                    <option>Toyota Innova Crysta</option>
                    <option>Maruti Ertiga</option>
                    <option>Force Tempo Traveller</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Passengers</label>
                  <input 
                    required
                    type="number" 
                    min="1"
                    className="w-full px-5 py-4 bg-zinc-50 border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all text-zinc-900 font-bold"
                    value={formData.passengers}
                    onChange={e => setFormData({...formData, passengers: e.target.value})}
                  />
                </div>

                <button type="submit" className="sm:col-span-2 mt-4 w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-6 rounded-2xl font-black text-xl shadow-xl shadow-green-500/30 flex items-center justify-center gap-4 transition-all transform active:scale-[0.98]">
                  <span className="material-symbols-outlined text-4xl">chat</span>
                  Book Now via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
