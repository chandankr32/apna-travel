
import React from 'react';
import { CONTACT_PHONE } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 rounded-t-[4rem] relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20">
                <span className="material-symbols-outlined text-3xl">local_taxi</span>
              </div>
              <span className="text-3xl font-black tracking-tight">Apna Tour & Travel</span>
            </div>
            <p className="text-zinc-400 text-lg mb-10 max-w-sm leading-relaxed font-medium">
              Your trusted partner for safe, reliable, and affordable journeys in Ranchi and beyond. Book your ride today and experience the difference.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'TW'].map((social) => (
                <a key={social} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                  <span className="text-xs font-black">{social}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-5">
              {['About Us', 'Our Fleet', 'Pricing', 'Contact Support', 'Terms & Conditions'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0">chevron_right</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Visit Us
            </h4>
            <div className="space-y-8">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                <div>
                  <p className="text-zinc-300 leading-relaxed font-medium">
                    Roshpa Tower, 4th Floor,<br/>
                    Main Road,<br/>
                    Ranchi 834001
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/vjYtpqE5d2Qs7zG36" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-xs font-black text-primary hover:text-white transition-all uppercase tracking-widest border border-primary/20 hover:bg-primary/10 px-4 py-2 rounded-xl"
                  >
                    View Location
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4 items-center group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-white">phone_in_talk</span>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-0.5">Call Us 24/7</p>
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-2xl font-black text-white hover:text-primary transition-colors tracking-tight">
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500 font-medium">
          <p>© {currentYear} Apna Tour & Travel. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
