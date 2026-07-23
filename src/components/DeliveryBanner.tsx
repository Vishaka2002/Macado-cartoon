import React, { useState } from 'react';
import { ArrowRight, Clock, ShieldCheck, Zap } from 'lucide-react';
import { getImageUrl } from '../utils/imageUtils';

interface DeliveryBannerProps {
  onShopNow: () => void;
}

export const DeliveryBanner: React.FC<DeliveryBannerProps> = ({ onShopNow }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative bg-gradient-to-r from-[#16352D] via-[#1f473d] to-[#2C6B4B] rounded-3xl p-8 sm:p-12 text-white overflow-hidden shadow-2xl border border-emerald-500/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-transform duration-300"
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x * 3}deg) rotateX(${-mousePos.y * 3}deg)`
        }}
      >
        {/* Background ambient light blur */}
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#F76B5D]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#F6B86E]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Left Side 3D Pixar Delivery Rider Illustration */}
        <div className="lg:col-span-5 flex justify-center relative z-10">
          <div 
            className="w-full max-w-[340px] sm:max-w-[400px] transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`
            }}
          >
            <img
              src={getImageUrl('/images/delivery_rider_1784805589107.png')}
              alt="3D Pixar Cartoon Delivery Rider"
              className="w-full h-auto drop-shadow-2xl animate-float-gentle"
            />
          </div>
        </div>

        {/* Right Side Typography & Highlights */}
        <div className="lg:col-span-7 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#F76B5D] text-white text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
            <Zap className="w-4 h-4 fill-white" />
            Super Express Grocery Delivery
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-white">
            Speedy & Fresh Delivery <br className="hidden sm:inline" />
            <span className="text-[#F6B86E]">Right To Your Doorstep!</span>
          </h2>

          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-xl">
            Order your organic fruits, farm-fresh vegetables, bakery, and dairy before 6:00 PM and enjoy guaranteed temperature-controlled delivery within 2 hours or next morning.
          </p>

          {/* Bullet points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-emerald-200">
            <div className="flex items-center gap-2 bg-[#2C6B4B]/40 px-3.5 py-2 rounded-xl border border-emerald-500/20">
              <Clock className="w-4 h-4 text-[#F6B86E]" />
              <span>Same-Day & Next-Day Slots</span>
            </div>
            <div className="flex items-center gap-2 bg-[#2C6B4B]/40 px-3.5 py-2 rounded-xl border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4 text-[#F76B5D]" />
              <span>100% Eco-Friendly Packaging</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onShopNow}
              className="cartoon-btn text-base py-3.5 px-8"
            >
              <span>Order Fast Delivery</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
