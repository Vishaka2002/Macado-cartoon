import React, { useState } from 'react';
import { ArrowRight, Sparkles, Leaf } from 'lucide-react';
import { getImageUrl } from '../utils/imageUtils';

interface DoubleHeroProps {
  onShopNow: (category?: string) => void;
}

export const DoubleHero: React.FC<DoubleHeroProps> = ({ onShopNow }) => {
  // Parallax tilt states for left and right cards
  const [leftMousePos, setLeftMousePos] = useState({ x: 0, y: 0 });
  const [rightMousePos, setRightMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMoveLeft = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setLeftMousePos({ x, y });
  };

  const handleMouseLeaveLeft = () => setLeftMousePos({ x: 0, y: 0 });

  const handleMouseMoveRight = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRightMousePos({ x, y });
  };

  const handleMouseLeaveRight = () => setRightMousePos({ x: 0, y: 0 });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Card: Vegetables */}
        <div
          onMouseMove={handleMouseMoveLeft}
          onMouseLeave={handleMouseLeaveLeft}
          className="relative bg-[#BDEEFF] rounded-3xl p-8 sm:p-10 md:p-12 overflow-hidden shadow-lg border-2 border-sky-200/60 min-h-[380px] flex flex-col justify-between transition-transform duration-300 ease-out group"
          style={{
            transform: `perspective(1000px) rotateY(${leftMousePos.x * 6}deg) rotateX(${-leftMousePos.y * 6}deg)`
          }}
        >
          {/* Decorative floating background elements */}
          <div className="absolute top-4 right-12 w-16 h-16 bg-white/30 rounded-full blur-xl pointer-events-none" />
          <div 
            className="absolute top-6 right-6 text-sky-400/40 pointer-events-none transition-transform duration-500"
            style={{ transform: `translate(${leftMousePos.x * -20}px, ${leftMousePos.y * -20}px)` }}
          >
            <Leaf className="w-12 h-12 rotate-45" />
          </div>

          {/* Typography Content */}
          <div className="relative z-10 max-w-xs sm:max-w-sm space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#16352D] leading-[1.1] tracking-tight">
              Fresh Vegetables from Farm Vendors
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#16352D]/80 leading-relaxed">
              Every Fridays check Best Market Deals!
            </p>
            <div className="pt-2">
              <button
                onClick={() => onShopNow('Vegetables')}
                className="cartoon-btn text-base group-hover:scale-105"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* 3D Pixar Crate Image Overflowing */}
          <div 
            className="absolute right-0 bottom-0 w-64 sm:w-72 md:w-80 lg:w-88 pointer-events-none transition-transform duration-300 ease-out z-0 translate-x-4 translate-y-4 group-hover:scale-105"
            style={{
              transform: `translate(${leftMousePos.x * 25}px, ${leftMousePos.y * 25}px) scale(1.02)`
            }}
          >
            <img
              src={getImageUrl('/images/hero_veggies_crate_1784805543395.png')}
              alt="Mercado Cartoon Vegetables Crate"
              className="w-full h-auto drop-shadow-2xl object-contain animate-float-gentle"
            />
          </div>
        </div>

        {/* Right Card: Fruits */}
        <div
          onMouseMove={handleMouseMoveRight}
          onMouseLeave={handleMouseLeaveRight}
          className="relative bg-[#FFD5BF] rounded-3xl p-8 sm:p-10 md:p-12 overflow-hidden shadow-lg border-2 border-orange-200/60 min-h-[380px] flex flex-col justify-between transition-transform duration-300 ease-out group"
          style={{
            transform: `perspective(1000px) rotateY(${rightMousePos.x * 6}deg) rotateX(${-rightMousePos.y * 6}deg)`
          }}
        >
          {/* Decorative floating background elements */}
          <div className="absolute top-4 right-12 w-16 h-16 bg-white/30 rounded-full blur-xl pointer-events-none" />
          <div 
            className="absolute top-6 right-6 text-amber-500/30 pointer-events-none transition-transform duration-500"
            style={{ transform: `translate(${rightMousePos.x * -20}px, ${rightMousePos.y * -20}px)` }}
          >
            <Sparkles className="w-10 h-10" />
          </div>

          {/* Typography Content */}
          <div className="relative z-10 max-w-xs sm:max-w-sm space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#16352D] leading-[1.1] tracking-tight">
              Delicious Fruits from South Africa
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#16352D]/80 leading-relaxed">
              Fresh & Non GMO Sweet Fruits
            </p>
            <div className="pt-2">
              <button
                onClick={() => onShopNow('Fresh Fruit')}
                className="cartoon-btn text-base group-hover:scale-105"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* 3D Pixar Crate Image Overflowing */}
          <div 
            className="absolute right-0 bottom-0 w-64 sm:w-72 md:w-80 lg:w-88 pointer-events-none transition-transform duration-300 ease-out z-0 translate-x-4 translate-y-4 group-hover:scale-105"
            style={{
              transform: `translate(${rightMousePos.x * 25}px, ${rightMousePos.y * 25}px) scale(1.02)`
            }}
          >
            <img
              src={getImageUrl('/images/hero_fruits_crate_1784805559805.png')}
              alt="Delicious Cartoon Fruits Crate"
              className="w-full h-auto drop-shadow-2xl object-contain animate-float-gentle"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
