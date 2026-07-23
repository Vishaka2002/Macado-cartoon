import React from 'react';
import type { Product } from '../data/products';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';


interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveWishlist,
  onAddToCart
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-emerald-100">
          {/* Top Header */}
          <div className="p-6 bg-[#16352D] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#2C6B4B] flex items-center justify-center">
                <Heart className="w-5 h-5 text-rose-300 fill-rose-300" />
              </div>
              <div>
                <h2 className="text-lg font-black tracking-tight">Your Wishlist</h2>
                <p className="text-xs text-emerald-200">
                  {wishlistProducts.length} saved favorites
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#2C6B4B] text-emerald-100 hover:text-white flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Wishlist Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-12">
                <div className="w-20 h-20 rounded-3xl bg-rose-50 text-rose-300 flex items-center justify-center">
                  <Heart className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-bold text-[#16352D]">Your Wishlist is Empty</h3>
                <p className="text-xs text-gray-500 max-w-xs">
                  Tap the heart icon on any 3D cartoon item to save it for later.
                </p>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 p-3 bg-white rounded-2xl border border-gray-100 shadow-xs hover:border-emerald-200 transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain bg-[#F8FAF5] rounded-xl p-1"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-extrabold text-[#16352D] truncate">
                      {product.name}
                    </h4>
                    <span className="text-[10px] text-emerald-700 font-bold uppercase">
                      {product.category}
                    </span>
                    <div className="text-sm font-black text-[#F76B5D] mt-0.5">
                      ${product.price.toFixed(2)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        onAddToCart(product);
                        onRemoveWishlist(product);
                      }}
                      className="w-8 h-8 rounded-xl bg-[#16352D] text-white hover:bg-[#F76B5D] flex items-center justify-center transition"
                      title="Move to Cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onRemoveWishlist(product)}
                      className="text-gray-400 hover:text-rose-500 p-1 transition"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
