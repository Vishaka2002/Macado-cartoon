import React from 'react';
import type { Product } from '../data/products';
import { X, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';


export interface CartItem {
  product: Product;
  quantity: number;
  option?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const freeShippingThreshold = 100;
  const freeShippingProgress = Math.min(
    100,
    Math.round((subtotal / freeShippingThreshold) * 100)
  );

  const handleCheckout = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
    alert('🎉 Order Placed Successfully! Your Marcado Daily 3D Cartoon Groceries will arrive tomorrow!');
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-emerald-100">
          {/* Top Header */}
          <div className="p-6 bg-[#16352D] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#2C6B4B] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-[#F6B86E]" />
              </div>
              <div>
                <h2 className="text-lg font-black tracking-tight">Your Cart</h2>
                <p className="text-xs text-emerald-200">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected
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

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#F8FAF5] p-4 border-b border-emerald-100">
            <div className="flex justify-between text-xs font-extrabold text-[#16352D] mb-1.5">
              <span>
                {subtotal >= freeShippingThreshold ? (
                  <span className="text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free Shipping Unlocked!
                  </span>
                ) : (
                  `Add $${(freeShippingThreshold - subtotal).toFixed(2)} more for Free Shipping!`
                )}
              </span>
              <span>{freeShippingProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#F6B86E] to-[#F76B5D] h-2 rounded-full transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-12">
                <div className="w-20 h-20 rounded-3xl bg-emerald-50 text-emerald-400 flex items-center justify-center">
                  <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-bold text-[#16352D]">Your Cart is Empty</h3>
                <p className="text-xs text-gray-500 max-w-xs">
                  Looks like you haven't added any 3D organic fruits or vegetables yet.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-4 p-3 bg-white rounded-2xl border border-gray-100 shadow-xs hover:border-emerald-200 transition"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-contain bg-[#F8FAF5] rounded-xl p-1"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-extrabold text-[#16352D] truncate">
                      {item.product.name}
                    </h4>
                    {item.option && (
                      <p className="text-[10px] text-gray-400 font-semibold">{item.option}</p>
                    )}
                    <div className="text-sm font-black text-[#F76B5D] mt-0.5">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 text-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="px-2 py-0.5 font-bold hover:bg-gray-200 text-gray-700"
                        >
                          -
                        </button>
                        <span className="px-2 font-bold text-[#16352D]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="px-2 py-0.5 font-bold hover:bg-gray-200 text-gray-700"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-gray-400 hover:text-rose-500 p-2 transition"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-[#F8FAF5] border-t border-emerald-100 space-y-4">
              <div className="space-y-2 text-xs font-bold text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#16352D] font-extrabold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span className="text-[#16352D] font-extrabold">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="text-emerald-600 font-extrabold">
                    {subtotal >= freeShippingThreshold ? 'FREE' : '$4.99'}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200 text-base font-black text-[#16352D]">
                  <span>Total</span>
                  <span className="text-[#F76B5D]">
                    ${(subtotal + (subtotal >= freeShippingThreshold ? 0 : 4.99)).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full cartoon-btn text-base py-3.5"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
