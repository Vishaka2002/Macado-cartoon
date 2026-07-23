import React, { useState } from 'react';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  User, 
  ChevronDown, 
  Mail, 
  Phone, 
  Truck,
  Sparkles,
  X
} from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  cartTotal: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onSearchQuery: (query: string) => void;
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  cartTotal,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onSearchQuery,
  activeCategory,
  onSelectCategory
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchQuery(searchInput);
  };

  const navCategories = [
    'Shop',
    'Vegetables',
    'Fresh Fruit',
    'Meat',
    'Seafood',
    'Baking',
    'Drinks',
    'Other'
  ];

  return (
    <header className="w-full bg-[#16352D] text-white shadow-lg sticky top-0 z-40 transition-all">
      {/* Top Utility Bar */}
      <div className="border-b border-[#2C6B4B]/40 py-2 px-4 sm:px-8 text-xs font-medium text-emerald-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left menu items */}
          <div className="flex items-center gap-5">
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-emerald-300">
              <span>Home</span>
              <ChevronDown className="w-3 h-3 opacity-80" />
            </div>
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-emerald-300">
              <span>Shop</span>
              <ChevronDown className="w-3 h-3 opacity-80" />
            </div>
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-emerald-300">
              <span>Blog</span>
              <ChevronDown className="w-3 h-3 opacity-80" />
            </div>
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-emerald-300">
              <span>Pages</span>
              <ChevronDown className="w-3 h-3 opacity-80" />
            </div>
          </div>

          {/* Center delivery message */}
          <div className="hidden md:flex items-center gap-2 text-emerald-200 bg-[#2C6B4B]/30 px-3 py-1 rounded-full border border-emerald-500/20">
            <Truck className="w-3.5 h-3.5 text-[#F6B86E] animate-bounce" />
            <span>Delivery on Next Day from 10:00 AM to 08:00 PM</span>
          </div>

          {/* Right contact details */}
          <div className="flex items-center gap-4 text-emerald-200">
            <a href="mailto:info@mercado-daily.com" className="flex items-center gap-1.5 hover:text-white transition">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">info@mercado-daily.com</span>
            </a>
            <a href="tel:+1900777525" className="flex items-center gap-1.5 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+1 900 777525</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-11 h-11 bg-gradient-to-br from-[#F76B5D] to-[#F6B86E] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-6 h-6 text-white animate-spin-slow" />
          </div>
          <div>
            <div className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
              Mercado <span className="text-[#F6B86E]">Daily</span>
            </div>
            <div className="text-[10px] tracking-widest uppercase text-emerald-300 font-bold">
              3D Cartoon Organic Market
            </div>
          </div>
        </div>

        {/* Category Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#2C6B4B] text-white shadow-sm'
                  : 'text-emerald-100 hover:bg-[#2C6B4B]/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Action Icons Right */}
        <div className="flex items-center gap-3">
          {/* Search Toggle */}
          <div className="relative">
            {isSearchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center bg-[#2C6B4B] rounded-full px-3 py-1.5 border border-emerald-400/30 shadow-inner">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    onSearchQuery(e.target.value);
                  }}
                  className="bg-transparent text-sm text-white placeholder-emerald-200 outline-none w-36 sm:w-48 px-1"
                  autoFocus
                />
                <button type="button" onClick={() => setIsSearchOpen(false)} className="text-emerald-200 hover:text-white p-1">
                  <X className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-10 h-10 rounded-full bg-[#2C6B4B]/60 hover:bg-[#2C6B4B] flex items-center justify-center text-emerald-100 hover:text-white transition shadow-sm"
                title="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Account */}
          <button
            className="w-10 h-10 rounded-full bg-[#2C6B4B]/60 hover:bg-[#2C6B4B] flex items-center justify-center text-emerald-100 hover:text-white transition shadow-sm"
            title="Account"
          >
            <User className="w-5 h-5" />
          </button>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            className="w-10 h-10 rounded-full bg-[#2C6B4B]/60 hover:bg-[#2C6B4B] flex items-center justify-center text-emerald-100 hover:text-white transition shadow-sm relative"
            title="Wishlist"
          >
            <Heart className="w-5 h-5 text-rose-300" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#F76B5D] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#16352D] animate-pulse">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-gradient-to-r from-[#F76B5D] to-[#F6B86E] text-white px-4 py-2 rounded-full font-bold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-[#F76B5D] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-[#F76B5D]">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-sm font-extrabold hidden sm:inline">
              ${cartTotal.toFixed(2)}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
