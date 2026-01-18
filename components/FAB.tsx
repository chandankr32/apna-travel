
import React from 'react';
import { CONTACT_PHONE } from '../constants';

const FAB: React.FC = () => {
  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-50">
      <a 
        href="https://wa.me/918709152518" 
        target="_blank" 
        rel="noreferrer"
        className="group relative flex items-center justify-end"
      >
        <span className="absolute right-16 bg-zinc-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-xl translate-x-4 group-hover:translate-x-0">
          Chat on WhatsApp
        </span>
        <div className="w-14 h-14 bg-[#25D366] rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer">
          <span className="material-symbols-outlined text-white text-3xl">chat</span>
        </div>
      </a>
      
      <a 
        href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
        className="group relative flex items-center justify-end"
      >
        <span className="absolute right-16 bg-zinc-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-xl translate-x-4 group-hover:translate-x-0">
          Call Now
        </span>
        <div className="w-14 h-14 bg-primary rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all animate-pulse cursor-pointer">
          <span className="material-symbols-outlined text-white text-3xl">phone_in_talk</span>
        </div>
      </a>
    </div>
  );
};

export default FAB;
