import React, { useState } from 'react';
import type { Product } from '../data/products';
import { X, Star, ShoppingCart, Heart, ShieldCheck, Truck, RefreshCw } from 'lucide-react';


interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, option?: string, quantity?: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}) => {
  if (!isOpen || !product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string>(
    product.options && product.options.length > 0 ? product.options[0] : ''
  );

  const handleAdd = () => {
    onAddToCart(product, selectedOption, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-emerald-100 relative animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-[#F76B5D] hover:text-white flex items-center justify-center transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side Pixar Illustration */}
          <div className="bg-[#F8FAF5] p-8 flex items-center justify-center relative overflow-hidden border-b md:border-b-0 md:border-r border-emerald-100">
            <div className="absolute top-4 left-4 flex flex-col gap-1 z-10">
              {product.badges.map((b, idx) => (
                <span key={idx} className="bg-[#F76B5D] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                  {b}
                </span>
              ))}
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="max-h-60 w-auto object-contain drop-shadow-xl animate-float-gentle"
            />
          </div>

          {/* Right Side Content & Actions */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-700 uppercase">
                <span>{product.category}</span>
                <span>•</span>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating || 4.9}</span>
                </div>
              </div>

              <h2 className="text-2xl font-black text-[#16352D] mt-1">
                {product.name}
              </h2>

              <p className="text-xs text-gray-600 leading-relaxed mt-2">
                {product.description}
              </p>

              {/* Price & Original Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl font-black text-[#F76B5D]">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through font-semibold">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.priceRange && (
                  <span className="text-xs text-gray-400">({product.priceRange})</span>
                )}
              </div>

              {/* Variant Selector */}
              {product.options && product.options.length > 0 && (
                <div className="mt-4">
                  <label className="block text-xs font-extrabold text-[#16352D] mb-1.5">
                    Select Size / Option:
                  </label>
                  <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full bg-[#F8FAF5] border border-emerald-200 text-xs font-semibold text-[#16352D] rounded-xl px-3 py-2 outline-none focus:border-[#F76B5D]"
                  >
                    {product.options.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Quantity Counter */}
              <div className="mt-4 flex items-center gap-4">
                <label className="text-xs font-extrabold text-[#16352D]">Quantity:</label>
                <div className="flex items-center border border-emerald-200 rounded-xl overflow-hidden bg-[#F8FAF5]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-sm font-bold text-[#16352D] hover:bg-emerald-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-xs font-extrabold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-sm font-bold text-[#16352D] hover:bg-emerald-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex gap-3">
              <button
                disabled={!product.inStock}
                onClick={handleAdd}
                className={`flex-1 cartoon-btn text-sm py-3 ${
                  !product.inStock ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>{product.inStock ? 'Add To Cart' : 'Out of Stock'}</span>
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition ${
                  isWishlisted 
                    ? 'bg-rose-500 text-white border-rose-500' 
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-rose-300 hover:text-rose-500'
                }`}
                title="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-white' : ''}`} />
              </button>
            </div>

            {/* Micro guarantees */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100 text-[10px] font-bold text-gray-500 text-center">
              <div className="flex items-center gap-1 justify-center">
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Next Day</span>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>Organic</span>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <RefreshCw className="w-3.5 h-3.5 text-rose-600" />
                <span>Easy Return</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
