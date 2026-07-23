import { useState } from 'react';
import { PRODUCTS } from './data/products';
import type { Product } from './data/products';
import { Header } from './components/Header';
import { DoubleHero } from './components/DoubleHero';
import { FeaturesStrip } from './components/FeaturesStrip';
import { TodayDiscounts } from './components/TodayDiscounts';
import { NextDayDeliveryBanner } from './components/NextDayDeliveryBanner';
import { PromotionsCarousel } from './components/PromotionsCarousel';
import { BigSalesToday } from './components/BigSalesToday';
import { OrganicPrioritySection } from './components/OrganicPrioritySection';
import { DeliveryBanner } from './components/DeliveryBanner';
import { InstagramGalleryFooter } from './components/InstagramGalleryFooter';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import type { CartItem } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  // State management
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Mint
      quantity: 1,
      option: '1 Bunch ($8.00)'
    }
  ]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['oyster-mushroom-1']);
  const [activeCategory, setActiveCategory] = useState<string>('Shop');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Add to cart handler
  const handleAddToCart = (product: Product, option?: string, quantity: number = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity, option: option || product.options?.[0] }];
    });
    showToast(`🛒 Added ${product.name} to Cart!`);
  };

  // Cart quantity update
  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  // Remove cart item
  const handleRemoveCartItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Wishlist toggle
  const handleToggleWishlist = (product: Product) => {
    if (wishlistIds.includes(product.id)) {
      setWishlistIds((prev) => prev.filter((id) => id !== product.id));
      showToast(`Removed ${product.name} from Wishlist`);
    } else {
      setWishlistIds((prev) => [...prev, product.id]);
      showToast(`❤️ Added ${product.name} to Wishlist!`);
    }
  };

  // Computed totals
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  // Filtered products list based on category and search
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch =
      searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeCategory === 'Shop' ||
      product.category.toLowerCase().includes(activeCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  const scrollToShop = () => {
    const el = document.getElementById('today-discounts');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAF5] text-[#16352D] font-['Nunito',sans-serif] relative">
      {/* Toast Notification Popup */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#16352D] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 border border-emerald-400/30 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-[#F6B86E]" />
          <span className="text-xs font-black tracking-wide">{toastMessage}</span>
        </div>
      )}

      {/* SECTION 1: HEADER */}
      <Header
        cartCount={cartCount}
        cartTotal={cartTotal}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <main className="space-y-4">
        {/* Active Filter Indicator if Search or Category active */}
        {(activeCategory !== 'Shop' || searchQuery !== '') && (
          <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6">
            <div className="bg-emerald-100/60 rounded-2xl p-4 flex justify-between items-center text-xs font-bold text-[#16352D]">
              <span>
                Showing results for:{' '}
                <strong className="text-[#F76B5D]">
                  {activeCategory !== 'Shop' ? activeCategory : ''}{' '}
                  {searchQuery ? `"${searchQuery}"` : ''}
                </strong>
              </span>
              <button
                onClick={() => {
                  setActiveCategory('Shop');
                  setSearchQuery('');
                }}
                className="text-[#F76B5D] hover:underline"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* SECTION 2: DOUBLE HERO BANNER */}
        <DoubleHero
          onShopNow={(cat) => {
            if (cat) setActiveCategory(cat);
            scrollToShop();
          }}
        />

        {/* SECTION 3: FEATURES STRIP */}
        <FeaturesStrip />

        {/* SECTION 4: TODAY DISCOUNTS */}
        <div id="today-discounts">
          <TodayDiscounts
            products={filteredProducts}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onOpenQuickView={(p) => setQuickViewProduct(p)}
            onAddToCart={handleAddToCart}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* NEW SECTION 5: NEXT DAY DELIVERY SCOOTER BANNER (Reference Image 1) */}
        <NextDayDeliveryBanner onReadMore={scrollToShop} />

        {/* SECTION 6: PROMOTION CAROUSEL */}
        <PromotionsCarousel />

        {/* SECTION 7: BIG SALES TODAY (COUNTDOWN TIMER & FEATURED CARDS - Reference Image 4) */}
        <BigSalesToday
          products={PRODUCTS}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onOpenQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
        />

        {/* NEW SECTION 8: WE PRIORITIZE ORGANIC PRODUCTS FARMER BANNER (Reference Image 3) */}
        <OrganicPrioritySection onReadMore={scrollToShop} />

        {/* SECTION 9: EXPRESS DELIVERY RIDER BANNER */}
        <DeliveryBanner onShopNow={scrollToShop} />
      </main>

      {/* INSTAGRAM GALLERY & DEEP GREEN FOOTER (Reference Image 2) */}
      <InstagramGalleryFooter />

      {/* QUICK VIEW MODAL */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={() => setCartItems([])}
      />

      {/* WISHLIST DRAWER */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;
