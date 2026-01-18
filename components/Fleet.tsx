
import React from 'react';
import { FLEET } from '../constants';
import { Vehicle } from '../types';

const FleetCard: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => {
  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="group rounded-3xl overflow-hidden border border-zinc-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="h-64 overflow-hidden bg-zinc-100 relative">
        {vehicle.tag && (
          <div className={`absolute top-5 right-5 ${vehicle.tag === 'Premium Choice' ? 'bg-primary text-white' : 'bg-white/90 text-zinc-900'} backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold shadow-sm z-10`}>
            {vehicle.tag}
          </div>
        )}
        <img 
          src={vehicle.image} 
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-bold text-zinc-900 group-hover:text-primary transition-colors">{vehicle.name}</h3>
            <p className="text-sm text-zinc-400 font-medium">{vehicle.type}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Starting at</p>
            <p className="text-primary font-black text-2xl">₹{vehicle.pricePerKm}/km</p>
          </div>
        </div>
        
        <div className="flex gap-6 mb-8 text-sm text-zinc-500 border-t border-zinc-50 pt-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-zinc-400">{vehicle.features[0]}</span>
            <span className="font-bold">{vehicle.capacity}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-zinc-400">{vehicle.features[1]}</span>
            <span className="font-bold">{vehicle.hasAC ? 'AC' : 'Non-AC'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-zinc-400">{vehicle.features[2]}</span>
            <span className="font-bold">{vehicle.luggageCount}</span>
          </div>
        </div>
        
        <button 
          onClick={scrollToBooking}
          className="w-full py-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all transform active:scale-95"
        >
          Book This Car
        </button>
      </div>
    </div>
  );
};

const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-zinc-900 mb-4 tracking-tight">Our Premium Fleet</h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            From luxury sedans to group travellers, we have the perfect ride for every occasion.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLEET.map(vehicle => (
            <FleetCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
