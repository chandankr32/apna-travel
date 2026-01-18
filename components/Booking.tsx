
import React, { useState } from 'react';
import { CONTACT_PHONE } from '../constants';

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
    const message = `*Full Trip Booking - Apna Tour & Travel*%0A%0A` +
      `🚗 *Vehicle:* ${formData.vehicle}%0A` +
      `📍 *From:* ${formData.pickup}%0A` +
      `🏁 *To:* ${formData.dropoff}%0A` +
      `📅 *Date:* ${formData.date}%0A` +
      `🕒 *Time:* ${formData.time}%0A` +
      `👥 *Passengers:* ${formData.passengers}%0A%0A` +
      `Please confirm the booking.`;

    const phoneNumber = CONTACT_PHONE.replace(/\s/g, '');
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-[3.5rem] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.06)] border border-zinc-100">
          <div className="grid lg:grid-cols-5 h-full">
            <div className="lg:col-span-2 p-12 lg:p-16 bg-zinc-900 text-white flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(234,40,49,0.15),transparent)] pointer-events-none"></div>
              <div>
                <div className="w-20 h-20 bg-primary rounded-[2rem] flex items-center justify-center mb-12 shadow-2xl shadow-primary/20">
                  <span className="material-symbols-outlined text-5xl">travel_explore</span>
                </div>
                <h2 className="text-4xl font-black mb-8 leading-[1.1]">Ready for a Premium Journey?</h2>
                <p className="text-zinc-400 text-lg mb-12 leading-relaxed font-medium">
                  We specialize in high-comfort road trips across Jharkhand with our elite Ertiga and Innova fleet.
                </p>
              </div>
              <div className="space-y-6">
                {["Elite Verified Drivers", "Premium Sanitized Cars", "Transparent Per KM Billing"].map((item, i) => (
                   <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-xl">check_circle</span>
                    </div>
                    <span className="font-bold text-xs uppercase tracking-widest text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 p-10 lg:p-16">
              <form onSubmit={handleWhatsAppRedirect} className="grid sm:grid-cols-2 gap-8">
                {[
                  { label: "Pick-up Point", key: "pickup", type: "text", placeholder: "e.g. Ranchi" },
                  { label: "Destination", key: "dropoff", type: "text", placeholder: "e.g. Patratu" },
                  { label: "Travel Date", key: "date", type: "date" },
                  { label: "Travel Time", key: "time", type: "time" }
                ].map(field => (
                  <div key={field.key} className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">{field.label}</label>
                    <input required type={field.type} placeholder={field.placeholder} className="w-full px-6 py-5 bg-zinc-50 border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all text-zinc-900 font-bold" value={(formData as any)[field.key]} onChange={e => setFormData({...formData, [field.key]: e.target.value})} />
                  </div>
                ))}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Select Car</label>
                  <select className="w-full px-6 py-5 bg-zinc-50 border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all text-zinc-900 font-bold appearance-none" value={formData.vehicle} onChange={e => setFormData({...formData, vehicle: e.target.value})}>
                    <option>Toyota Innova Crysta</option>
                    <option>Maruti Suzuki Ertiga</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Total Passengers</label>
                  <input required type="number" min="1" max="7" className="w-full px-6 py-5 bg-zinc-50 border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all text-zinc-900 font-bold" value={formData.passengers} onChange={e => setFormData({...formData, passengers: e.target.value})} />
                </div>
                <button type="submit" className="sm:col-span-2 mt-4 w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-7 rounded-2xl font-black text-xl shadow-2xl shadow-green-500/30 flex items-center justify-center gap-4 transition-all transform active:scale-[0.98]">
                  <span className="material-symbols-outlined text-4xl">chat</span>
                  Book Now on WhatsApp
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
