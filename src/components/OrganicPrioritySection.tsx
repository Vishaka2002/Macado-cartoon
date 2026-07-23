import React, { useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';


interface OrganicPrioritySectionProps {
  onReadMore?: () => void;
}

export const OrganicPrioritySection: React.FC<OrganicPrioritySectionProps> = ({ onReadMore }) => {
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
        className="bg-[#C8E6DA] rounded-3xl p-8 sm:p-12 md:p-14 overflow-hidden shadow-lg border border-emerald-300/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-transform duration-300 group"
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x * 3}deg) rotateX(${-mousePos.y * 3}deg)`
        }}
      >
        {/* Left Side Content */}
        <div className="lg:col-span-7 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#2C6B4B] text-white text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#F6B86E]" />
            Strict Quality Guarantee
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#16352D] leading-tight tracking-tight">
            We Prioritize Organic Products
          </h2>

          <div className="space-y-4 text-xs sm:text-sm font-semibold text-[#16352D]/85 leading-relaxed">
            <p>
              Were you aware that non-organic items can contain substantial pesticide residues and artificial preservatives? That's why we emphasize sourcing organic items. They not only offer a more delightful taste but also contribute to maintaining healthier soils and promoting biodiversity.
            </p>
            <p>
              Our commitment to quality is evident in our strict standards, with over 500 ingredients on our "never" list. From artificial food dyes to additives, we scrutinize every product we produce and sell to ensure they are not only healthy for you but also for the environment.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={onReadMore}
              className="bg-white text-[#16352D] font-extrabold text-sm px-8 py-3.5 rounded-full shadow-md hover:bg-[#F76B5D] hover:text-white transition-all duration-300 inline-flex items-center gap-2 group-hover:scale-105"
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Side 3D Pixar Farmer Illustration */}
        <div className="lg:col-span-5 flex justify-center relative z-10">
          <div
            className="w-full max-w-[340px] sm:max-w-[400px] transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePos.x * 22}px, ${mousePos.y * 22}px)`
            }}
          >
            <img
              src="/images/farmer_organic_1784806531560.png"
              alt="3D Pixar Cartoon Organic Farmer"
              className="w-full h-auto drop-shadow-2xl animate-float-gentle"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
