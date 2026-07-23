import React from 'react';
import { Sparkles, Mail, Send, Heart, ShieldCheck, Truck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#16352D] text-white pt-16 pb-12 mt-16 border-t border-[#2C6B4B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Newsletter Banner */}
        <div className="bg-gradient-to-r from-[#2C6B4B] to-[#16352D] rounded-3xl p-8 sm:p-10 border border-emerald-500/20 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2 justify-center md:justify-start">
              Get $15 Off Your First Order <Sparkles className="w-6 h-6 text-[#F6B86E]" />
            </h3>
            <p className="text-emerald-200 text-xs sm:text-sm">
              Subscribe to our weekly organic harvest newsletter and receive secret discount codes!
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert('🎉 Thank you for subscribing to Mercado Daily newsletter!'); }} className="w-full md:w-auto flex items-center bg-white rounded-full p-1.5 shadow-lg max-w-md">
            <Mail className="w-5 h-5 text-gray-400 ml-3" />
            <input
              type="email"
              placeholder="Enter your email address..."
              required
              className="bg-transparent text-xs text-[#16352D] placeholder-gray-400 outline-none px-3 py-2 flex-1 font-semibold"
            />
            <button
              type="submit"
              className="bg-[#F76B5D] hover:bg-[#e55849] text-white font-extrabold text-xs px-6 py-2.5 rounded-full transition shadow-md flex items-center gap-1.5"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-xs font-semibold">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#F76B5D] to-[#F6B86E] rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black text-white">Tasty <span className="text-[#F6B86E]">Daily</span></span>
            </div>
            <p className="text-emerald-200/80 leading-relaxed">
              Your premium 3D cartoon organic grocery store bringing farm-fresh vegetables, juicy fruits, bakery, and meats straight to your home with love.
            </p>
            <div className="flex items-center gap-4 text-emerald-300">
              <Truck className="w-5 h-5" />
              <ShieldCheck className="w-5 h-5" />
              <Heart className="w-5 h-5 text-rose-400" />
            </div>
          </div>

          {/* Quick Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#F6B86E]">Categories</h4>
            <ul className="space-y-2 text-emerald-200">
              <li><a href="#" className="hover:text-white transition">Fresh Organic Vegetables</a></li>
              <li><a href="#" className="hover:text-white transition">South African Sweet Fruits</a></li>
              <li><a href="#" className="hover:text-white transition">Artisanal Bakery & Bread</a></li>
              <li><a href="#" className="hover:text-white transition">Farm Meat & Wild Seafood</a></li>
              <li><a href="#" className="hover:text-white transition">Natural Fresh Drinks</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#F6B86E]">Customer Care</h4>
            <ul className="space-y-2 text-emerald-200">
              <li><a href="#" className="hover:text-white transition">Help Center & FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Order Express Tracking</a></li>
              <li><a href="#" className="hover:text-white transition">Returns & Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Same-Day Delivery Cities</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Customer Support</a></li>
            </ul>
          </div>

          {/* Opening Hours & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#F6B86E]">Delivery Hours</h4>
            <p className="text-emerald-200 leading-relaxed">
              Monday - Sunday: <br />
              <strong className="text-white">10:00 AM - 08:00 PM</strong>
            </p>
            <p className="text-emerald-200">
              Hotline: <strong className="text-[#F76B5D]">+1 900 777525</strong>
            </p>
          </div>
        </div>

        {/* Copyright & Payment Badges */}
        <div className="pt-8 border-t border-[#2C6B4B] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-emerald-300">
          <p>© 2026 Mercado Daily Organic Market. Recreated with Pixar 3D Cartoon Aesthetic.</p>
          <div className="flex items-center gap-3 font-bold text-white">
            <span className="bg-[#2C6B4B] px-3 py-1 rounded-md text-[10px]">VISA</span>
            <span className="bg-[#2C6B4B] px-3 py-1 rounded-md text-[10px]">MASTERCARD</span>
            <span className="bg-[#2C6B4B] px-3 py-1 rounded-md text-[10px]">PAYPAL</span>
            <span className="bg-[#2C6B4B] px-3 py-1 rounded-md text-[10px]">APPLE PAY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
