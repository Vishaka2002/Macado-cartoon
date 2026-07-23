import React from 'react';
import { Sparkles, Phone } from 'lucide-react';
import { getImageUrl } from '../utils/imageUtils';

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
  </svg>
);

export const InstagramGalleryFooter: React.FC = () => {
  const galleryItems = [
    { title: 'Crisp Green Apple', image: '/images/green_apple_1784805630528.png', bg: 'bg-[#C8E6DA]' },
    { title: 'Fresh Fruit Crate', image: '/images/hero_fruits_crate_1784805559805.png', bg: 'bg-[#BDEEFF]' },
    { title: 'Artisanal Bakery', image: '/images/hero_veggies_crate_1784805543395.png', bg: 'bg-[#FFD5BF]' },
    { title: 'Tropical Kiwi', image: '/images/kiwi_fruit_1784805659269.png', bg: 'bg-[#F5EFEB]' },
    { title: 'Fresh Orange Juice', image: '/images/mint_cocktail_1784805602002.png', bg: 'bg-[#F6B86E]/30' },
    { title: 'Organic Farm Milk', image: '/images/basil_leaf_1784805644891.png', bg: 'bg-emerald-100' }
  ];

  return (
    <footer className="w-full mt-16 bg-[#16352D] text-white">
      {/* 6-Tile Instagram Gallery Strip */}
      <div className="relative w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-0">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`relative h-40 ${item.bg} flex items-center justify-center overflow-hidden group cursor-pointer`}
            >
              <img
                src={getImageUrl(item.image)}
                alt={item.title}
                className="max-h-28 w-auto object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <InstagramIcon className="w-8 h-8" />
              </div>
            </div>
          ))}
        </div>

        {/* Center Floating Glassmorphism Instagram Handle Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/95 backdrop-blur-md px-6 py-4 rounded-3xl shadow-2xl border border-white/60 flex flex-col items-center justify-center gap-1 group hover:scale-105 transition-transform"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-xs">
              <InstagramIcon className="w-4 h-4" />
            </div>
            <span className="text-sm font-extrabold text-[#16352D] tracking-tight">
              tasty_daily
            </span>
          </a>
        </div>
      </div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left Column: Brand & Story */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#F76B5D] to-[#F6B86E] rounded-2xl flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black text-white">
                Tasty <span className="text-[#F6B86E]">Daily</span>
              </span>
            </div>

            <p className="text-emerald-100/75 text-xs sm:text-sm leading-relaxed max-w-md">
              We're Tasty Daily Shop, an innovative team of food engineers. Our unique model minimizes fresh food handling by up to 85%, sourcing locally and dispatching within 6 hours through cold-chain logistics in eco-friendly containers.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-[#2C6B4B] hover:bg-[#F76B5D] text-white flex items-center justify-center transition shadow-xs">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#2C6B4B] hover:bg-[#F76B5D] text-white flex items-center justify-center transition shadow-xs">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#2C6B4B] hover:bg-[#F76B5D] text-white flex items-center justify-center transition shadow-xs">
                <Phone className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#2C6B4B] hover:bg-[#F76B5D] text-white flex items-center justify-center transition shadow-xs">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[11px] text-emerald-200/60 font-semibold pt-4">
              © 2026 Tasty Daily Grocery WordPress Theme. All rights reserved.
            </p>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs font-semibold text-emerald-100/80">
              <li><a href="#" className="hover:text-[#F6B86E] transition">About Us</a></li>
              <li><a href="#" className="hover:text-[#F6B86E] transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#F6B86E] transition">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-[#F6B86E] transition">Refund Policy</a></li>
              <li><a href="#" className="hover:text-[#F6B86E] transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#F6B86E] transition">Delivery Info</a></li>
              <li><a href="#" className="hover:text-[#F6B86E] transition">Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Right Column: Subscribe Box & Payment Badges */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-base font-black text-[#F76B5D]">
              Subscribe for Get News
            </h4>
            <p className="text-xs text-emerald-100/75 leading-relaxed">
              Sign up to get 10% off your first order and stay up to date on the latest product releases, special offers and news
            </p>

            {/* Newsletter Form */}
            <form onSubmit={(e) => { e.preventDefault(); alert('🎉 Thank you for subscribing!'); }} className="space-y-2">
              <div className="flex items-center bg-[#2C6B4B]/60 rounded-full p-1.5 border border-emerald-500/30">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-transparent text-xs text-white placeholder-emerald-200/60 outline-none px-3 py-1.5 flex-1 font-semibold"
                />
                <button
                  type="submit"
                  className="bg-[#F76B5D] hover:bg-[#e55849] text-white font-extrabold text-xs px-5 py-2 rounded-full transition shadow-md flex items-center gap-1"
                >
                  <span>Subscribe</span>
                </button>
              </div>
            </form>

            {/* Payment Icons */}
            <div className="pt-4 flex flex-wrap items-center gap-2">
              <span className="bg-white text-[#16352D] px-2.5 py-1 rounded text-[10px] font-black">VISA</span>
              <span className="bg-white text-[#16352D] px-2.5 py-1 rounded text-[10px] font-black">Mastercard</span>
              <span className="bg-white text-[#16352D] px-2.5 py-1 rounded text-[10px] font-black">Apple Pay</span>
              <span className="bg-white text-[#16352D] px-2.5 py-1 rounded text-[10px] font-black">PayPal</span>
              <span className="bg-white text-[#16352D] px-2.5 py-1 rounded text-[10px] font-black">AMEX</span>
              <span className="bg-[#F6B86E] text-[#16352D] px-2.5 py-1 rounded text-[10px] font-black">Bitcoin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
