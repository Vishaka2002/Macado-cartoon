import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface NextDayDeliveryBannerProps {
  onReadMore?: () => void;
}

export const NextDayDeliveryBanner: React.FC<NextDayDeliveryBannerProps> = ({ onReadMore }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-[#F5EFEB] rounded-3xl p-8 sm:p-12 md:p-14 overflow-hidden shadow-lg border border-amber-200/50 grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-transform duration-300 group"
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x * 3}deg) rotateX(${-mousePos.y * 3}deg)`
        }}
      >
        {/* Left Side 3D Delivery Rider on Retro Scooter */}
        <div className="md:col-span-5 flex justify-center relative z-10">
          <div
            className="w-full max-w-[320px] sm:max-w-[380px] transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`
            }}
          >
            <img
              src="/images/scooter_delivery_cream_1784806550315.png"
              alt="3D Pixar Scooter Delivery Rider"
              className="w-full h-auto drop-shadow-2xl animate-float-gentle group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right Side Headline & Read More CTA */}
        <div className="md:col-span-7 space-y-4 relative z-10 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#16352D] leading-[1.15] tracking-tight">
            We Delivery on Next Day <br className="hidden sm:inline" />
            from 10:00 AM to 08:00 PM
          </h2>

          <p className="text-xs sm:text-sm font-bold text-gray-500 tracking-wide">
            * For Orders starts from $100
          </p>

          <div className="pt-2 flex justify-center md:justify-start">
            <button
              onClick={onReadMore}
              className="cartoon-btn text-base px-8 py-3.5 shadow-lg group-hover:scale-105"
            >
              <span>Read More</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
