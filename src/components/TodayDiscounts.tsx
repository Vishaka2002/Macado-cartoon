import React from 'react';
import type { Product } from '../data/products';
import { Eye, Heart, ShoppingCart, ArrowRight } from 'lucide-react';


interface TodayDiscountsProps {
  products: Product[];
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onOpenQuickView: (product: Product) => void;
  onAddToCart: (product: Product, option?: string) => void;
  onSelectCategory: (cat: string) => void;
}

export const TodayDiscounts: React.FC<TodayDiscountsProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onOpenQuickView,
  onAddToCart,
  onSelectCategory
}) => {
  const categoryLinks = [
    'Vegetables',
    'Baking',
    'Fresh Fruit',
    'Drinks',
    'Meat',
    'Cheese',
    'Seafood',
    'Milk',
    'Eggs'
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side Promo Banner with Cartoon Family */}
        <div className="lg:col-span-4 bg-[#FFD5BF] rounded-3xl p-8 flex flex-col justify-between shadow-md border-2 border-orange-200/50 relative overflow-hidden group">
          {/* Top Headline & View All */}
          <div>
            <div className="flex justify-between items-baseline mb-4">
              <h2 className="text-3xl font-black text-[#16352D] tracking-tight">
                Today Discounts
              </h2>
              <button 
                onClick={() => onSelectCategory('Shop')}
                className="text-xs font-bold text-[#F76B5D] hover:underline flex items-center gap-1 uppercase tracking-wider"
              >
                VIEW ALL <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 3D Pixar Shopping Family Illustration */}
            <div className="relative py-4 flex justify-center">
              <img
                src="/images/shopping_family_1784805574177.png"
                alt="3D Cartoon Shopping Family"
                className="w-full max-w-[260px] h-auto object-contain drop-shadow-xl animate-float-gentle group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Category List Link Columns */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm mt-4">
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs font-bold text-[#16352D]">
              {categoryLinks.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className="text-left hover:text-[#F76B5D] transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F6B86E]" />
                  {cat}
                </button>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-amber-100 flex justify-between items-center text-xs font-extrabold text-[#F76B5D]">
              <button 
                onClick={() => onSelectCategory('Shop')}
                className="hover:underline flex items-center gap-1"
              >
                VIEW ALL →
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Product Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);
            const totalStock = (product.sold || 0) + (product.available || 0) || 100;
            const soldPercentage = Math.min(100, Math.round(((product.sold || 0) / totalStock) * 100));

            return (
              <div
                key={product.id}
                className="cartoon-card relative flex flex-col justify-between p-5 border border-emerald-100/80 bg-white group hover:border-[#F6B86E]/80 transition-all duration-300"
              >
                {/* Top Action Badges & Quick View/Wishlist Buttons */}
                <div className="relative">
                  {/* Badges Stack */}
                  <div className="absolute top-0 left-0 z-10 flex flex-wrap gap-1 max-w-[80%]">
                    {product.badges.map((badge, bIdx) => {
                      let badgeStyle = 'bg-[#4361EE] text-white';
                      if (badge.includes('NEW')) badgeStyle = 'bg-[#00B4D8] text-white';
                      if (badge.includes('%') || badge.includes('MARKDOWN')) badgeStyle = 'bg-[#F76B5D] text-white';
                      if (badge.includes('OUT OF STOCK')) badgeStyle = 'bg-[#E63946] text-white';
                      return (
                        <span key={bIdx} className={`px-2 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase shadow-xs ${badgeStyle}`}>
                          {badge}
                        </span>
                      );
                    })}
                  </div>

                  {/* Top Right Wishlist & Eye Action Icons */}
                  <div className="absolute top-0 right-0 z-10 flex flex-col gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => onToggleWishlist(product)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-110 ${
                        isWishlisted ? 'bg-rose-500 text-white' : 'bg-white text-gray-500 hover:text-rose-500'
                      }`}
                      title="Add to Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
                    </button>

                    <button
                      onClick={() => onOpenQuickView(product)}
                      className="w-8 h-8 rounded-full bg-white text-gray-600 hover:text-[#16352D] hover:bg-emerald-50 flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-110"
                      title="Quick View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Product 3D Pixar Illustration Image */}
                  <div className="w-full h-44 flex items-center justify-center py-2 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-36 w-auto object-contain drop-shadow-md group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>

                {/* Stock availability bar if present */}
                {(product.sold !== undefined || product.available !== undefined) && (
                  <div className="my-2">
                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-[#F76B5D] h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${soldPercentage}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center text-[11px] font-bold text-gray-500 mt-1">
                      <span>Sold: <strong className="text-[#16352D]">{product.sold || 0}</strong></span>
                      <span>Available: <strong className="text-[#16352D]">{product.available || 0}</strong></span>
                    </div>
                  </div>
                )}

                {/* Stock Status Tag if available */}
                {product.stockCount && (
                  <div className="inline-block mt-1">
                    <span className="bg-black text-white text-[9px] font-black px-2 py-0.5 rounded-full tracking-wider">
                      {product.stockCount} IN STOCK
                    </span>
                  </div>
                )}

                {/* Content Section */}
                <div className="space-y-1.5 mt-2">
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide">
                    {product.category}
                  </span>
                  <h3 className="text-base font-extrabold text-[#16352D] leading-tight group-hover:text-[#F76B5D] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Variant Selector Dropdown if options exist */}
                {product.options && (
                  <div className="mt-3">
                    <select className="w-full bg-[#F8FAF5] border border-emerald-200 text-xs font-semibold text-[#16352D] rounded-xl px-2.5 py-1.5 outline-none focus:border-[#F76B5D] transition">
                      {product.options.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Price and Add To Cart Footer */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through font-semibold block">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-black text-[#F76B5D]">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.priceRange && (
                        <span className="text-[10px] text-gray-400 font-semibold">
                          ({product.priceRange})
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    disabled={!product.inStock}
                    onClick={() => onAddToCart(product)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
                      product.inStock
                        ? 'bg-[#16352D] text-white hover:bg-[#F76B5D] hover:scale-110 active:scale-95'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                    title={product.inStock ? "Add to Cart" : "Out of Stock"}
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
