
import React from 'react';
import { FLEET } from '../constants';
import { Vehicle } from '../types';

const FleetCard: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => {
  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="group rounded-[2.5rem] overflow-hidden border border-zinc-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-500">
      <div className="h-72 overflow-hidden bg-zinc-100 relative">
        {vehicle.tag && (
          <div className="absolute top-6 right-6 bg-primary text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl z-10">
            {vehicle.tag}
          </div>
        )}
        <img 
          src={vehicle.image} 
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      <div className="p-10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-2xl font-black text-zinc-900 group-hover:text-primary transition-colors">{vehicle.name}</h3>
            <p className="text-sm text-zinc-400 font-bold uppercase tracking-widest mt-1">{vehicle.type}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest">Rate</p>
            <p className="text-primary font-black text-3xl">₹{vehicle.pricePerKm}</p>
            <p className="text-[10px] text-zinc-400 font-bold">/km</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-10 text-zinc-600 border-y border-zinc-50 py-6">
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-zinc-400">groups</span>
            <span className="font-bold text-xs uppercase">{vehicle.capacity} Seats</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-x border-zinc-100">
            <span className="material-symbols-outlined text-zinc-400">ac_unit</span>
            <span className="font-bold text-xs uppercase">Full AC</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-zinc-400">luggage</span>
            <span className="font-bold text-xs uppercase">{vehicle.luggageCount} Bags</span>
          </div>
        </div>
        
        <button 
          onClick={scrollToBooking}
          className="w-full py-5 rounded-2xl bg-zinc-900 text-white font-black hover:bg-primary transition-all transform active:scale-95 shadow-xl shadow-zinc-900/10 hover:shadow-primary/20"
        >
          Select Vehicle
        </button>
      </div>
    </div>
  );
};

const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-zinc-100 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">Our Selection</div>
          <h2 className="text-5xl font-black text-zinc-900 mb-6 tracking-tight">The Best of Ranchi Fleet</h2>
          <p className="text-zinc-500 text-xl max-w-2xl mx-auto font-medium">
            We exclusively offer the most comfortable and reliable MPVs for Ranchi's roads.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {FLEET.map(vehicle => (
            <FleetCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
