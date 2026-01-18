
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-zinc-900 mb-4 tracking-tight">What Our Customers Say</h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto font-medium">
            Don't just take our word for it. Here's what travelers have to say about their experience with Apna Tour & Travel.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="bg-white p-10 rounded-3xl border border-zinc-50 shadow-sm relative transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="absolute -top-5 left-10 w-10 h-10 bg-primary text-white flex items-center justify-center rounded-2xl shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-lg">format_quote</span>
              </div>
              
              <div className="flex items-center gap-1 text-yellow-400 mb-6 mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`material-symbols-outlined text-lg ${i + 0.5 > review.rating ? 'opacity-30' : ''}`}>
                    {i + 1 > review.rating ? 'star_half' : 'star'}
                  </span>
                ))}
              </div>
              
              <p className="text-zinc-600 mb-8 italic leading-relaxed font-medium">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-50">
                <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-500 font-black text-sm">
                  {review.initials}
                </div>
                <div>
                  <p className="font-bold text-zinc-900">{review.author}</p>
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
