
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-zinc-900 mb-4 tracking-tight">Why Choose Apna Travels?</h2>
          <p className="text-zinc-600 text-lg max-w-2xl">
            We prioritize safety, affordability, and reliability for every journey across Jharkhand.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-10 rounded-3xl border border-zinc-100 hover:shadow-2xl hover:shadow-primary/5 transition-all hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 ${feature.colorClass} rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300`}>
                <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-900">{feature.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
