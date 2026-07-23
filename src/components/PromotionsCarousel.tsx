import React, { useRef } from 'react';
import { PROMO_BANNERS } from '../data/products';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const PromotionsCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      {/* Header with Navigation Controls */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-black text-[#16352D] tracking-tight flex items-center gap-2">
            Promotions <Sparkles className="w-6 h-6 text-[#F6B86E] animate-pulse" />
          </h2>
          <p className="text-xs font-bold text-emerald-800/60 mt-1">
            Hand-picked weekly offers & organic market savings
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-white text-[#16352D] border border-emerald-200 hover:bg-[#16352D] hover:text-white flex items-center justify-center shadow-sm transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-white text-[#16352D] border border-emerald-200 hover:bg-[#16352D] hover:text-white flex items-center justify-center shadow-sm transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Track of Horizontal Scrolling Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar pb-4 pt-1 snap-x snap-mandatory"
      >
        {PROMO_BANNERS.map((promo) => (
          <div
            key={promo.id}
            className="flex-none w-[280px] sm:w-[320px] bg-white rounded-3xl overflow-hidden shadow-md border border-emerald-100/80 snap-start hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
          >
            {/* Top Visual Container */}
            <div className={`relative h-44 bg-gradient-to-br ${promo.bg} p-6 flex items-center justify-center overflow-hidden`}>
              <span className="absolute top-4 left-4 bg-white/90 text-[#16352D] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                {promo.tag}
              </span>

              <img
                src={promo.image}
                alt={promo.title}
                className="max-h-36 w-auto object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Bottom Content */}
            <div className="p-6 space-y-2">
              <h3 className="text-lg font-black text-[#16352D] leading-snug group-hover:text-[#F76B5D] transition-colors">
                {promo.title}
              </h3>
              <p className="text-xs font-semibold text-gray-400">
                {promo.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
