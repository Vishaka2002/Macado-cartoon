import React, { useState, useEffect } from 'react';
import type { Product } from '../data/products';
import { ShoppingCart, Heart, Eye, Flame } from 'lucide-react';


interface BigSalesTodayProps {
  products: Product[];
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onOpenQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const BigSalesToday: React.FC<BigSalesTodayProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onOpenQuickView,
  onAddToCart
}) => {
  // Timer state for countdown
  const [timeLeft, setTimeLeft] = useState({
    weeks: 0,
    days: 0,
    hours: 8,
    mins: 42,
    secs: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: 59, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const featuredProducts = products.filter(p => p.badges.some(b => b.includes('-') || b.includes('FEATURED')));

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
      {/* Header with Heading & Animated Countdown */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-rose-100 text-[#F76B5D] flex items-center justify-center shadow-inner">
            <Flame className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-3xl font-black text-[#16352D] tracking-tight">
            Big Sales Today
          </h2>
        </div>

        {/* Live Countdown Timer widget matching reference */}
        <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-emerald-100">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Ends in:
          </span>
          <div className="flex items-center gap-2 text-center font-black">
            <div className="flex flex-col">
              <span className="text-lg text-[#F76B5D] leading-none">{timeLeft.weeks}</span>
              <span className="text-[9px] text-gray-400 font-bold uppercase">weeks</span>
            </div>
            <span className="text-gray-300 font-light">:</span>
            <div className="flex flex-col">
              <span className="text-lg text-[#F76B5D] leading-none">{timeLeft.days}</span>
              <span className="text-[9px] text-gray-400 font-bold uppercase">days</span>
            </div>
            <span className="text-gray-300 font-light">:</span>
            <div className="flex flex-col">
              <span className="text-lg text-[#F76B5D] leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-[9px] text-gray-400 font-bold uppercase">hours</span>
            </div>
            <span className="text-gray-300 font-light">:</span>
            <div className="flex flex-col">
              <span className="text-lg text-[#F76B5D] leading-none">{String(timeLeft.mins).padStart(2, '0')}</span>
              <span className="text-[9px] text-gray-400 font-bold uppercase">mins</span>
            </div>
            <span className="text-gray-300 font-light">:</span>
            <div className="flex flex-col">
              <span className="text-lg text-[#F76B5D] leading-none">{String(timeLeft.secs).padStart(2, '0')}</span>
              <span className="text-[9px] text-gray-400 font-bold uppercase">secs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featuredProducts.slice(0, 4).map((product) => {
          const isWishlisted = wishlistIds.includes(product.id);

          return (
            <div
              key={product.id}
              className="cartoon-card relative p-5 bg-white border border-emerald-100/80 flex flex-col justify-between group hover:border-[#F76B5D]/60 transition-all duration-300"
            >
              {/* Badges & Actions */}
              <div className="relative">
                <div className="absolute top-0 left-0 z-10 flex flex-wrap gap-1">
                  {product.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-2 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase bg-[#F76B5D] text-white shadow-xs"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="absolute top-0 right-0 z-10 flex flex-col gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => onToggleWishlist(product)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-110 ${
                      isWishlisted ? 'bg-rose-500 text-white' : 'bg-white text-gray-500 hover:text-rose-500'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
                  </button>

                  <button
                    onClick={() => onOpenQuickView(product)}
                    className="w-8 h-8 rounded-full bg-white text-gray-600 hover:text-[#16352D] flex items-center justify-center shadow-md transition-transform hover:scale-110"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Floating Product Image */}
                <div className="w-full h-48 flex items-center justify-center py-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-40 w-auto object-contain drop-shadow-lg group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Info & Price */}
              <div className="space-y-2 mt-2">
                <span className="text-[11px] font-bold text-emerald-700 uppercase">
                  {product.category}
                </span>
                <h3 className="text-base font-extrabold text-[#16352D] group-hover:text-[#F76B5D] transition-colors leading-tight">
                  {product.name}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <div>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through font-semibold block">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-xl font-black text-[#F76B5D]">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <button
                  disabled={!product.inStock}
                  onClick={() => onAddToCart(product)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all ${
                    product.inStock
                      ? 'bg-[#16352D] text-white hover:bg-[#F76B5D] hover:scale-110'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
