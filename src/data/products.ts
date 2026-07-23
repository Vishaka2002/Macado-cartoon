export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  originalPrice?: number;
  priceRange?: string;
  image: string;
  badges: string[];
  sold?: number;
  available?: number;
  inStock: boolean;
  stockCount?: number;
  options?: string[];
  selectedOption?: string;
  rating?: number;
}

export const PRODUCTS: Product[] = [
  {
    id: 'mint-1',
    name: 'Mint',
    category: 'Leafy Green',
    description: 'The mint plant is a herbaceous perennial that is widely known for its refreshing aroma and cooling flavor.',
    price: 8.00,
    originalPrice: 10.00,
    priceRange: '$13.00 - $22.00',
    image: '/images/mint_cocktail_1784805602002.png',
    badges: ['MARKDOWN', 'NEW', '-15%'],
    sold: 43,
    available: 21,
    inStock: true,
    options: ['Choose an option', '1 Bunch ($8.00)', '2 Bunches ($15.00)', '100g Box ($22.00)'],
    rating: 4.9
  },
  {
    id: 'oyster-mushroom-1',
    name: 'Oyster Mushroom 500 Gr',
    category: 'Mushrooms',
    description: 'Oyster Mushrooms are a healthy choice since they are very nutritious, rich in antioxidants, and low in calories.',
    price: 12.00,
    originalPrice: 15.00,
    image: '/images/oyster_mushroom_1784805616495.png',
    badges: ['-25%'],
    sold: 56,
    available: 118,
    inStock: true,
    stockCount: 118,
    rating: 4.8
  },
  {
    id: 'green-apples-1',
    name: 'Green Apples',
    category: 'Apple & Stone Fruits',
    description: 'Green apples delivered fresh! Crisp, juicy, tart and hand-picked! Essential for your kitchen and healthy snacks.',
    price: 10.00,
    originalPrice: 14.00,
    priceRange: '$10.00 - $14.00',
    image: '/images/green_apple_1784805630528.png',
    badges: ['-12%'],
    sold: 5,
    available: 15,
    inStock: true,
    options: ['0.5 kg', '1 kg', '2 kg'],
    rating: 5.0
  },
  {
    id: 'basil-1',
    name: 'Basil',
    category: 'Leafy Green',
    description: 'To keep basil fresh, trim the stems and place them in a glass or jar of water at room temperature.',
    price: 8.00,
    originalPrice: 10.00,
    image: '/images/basil_leaf_1784805644891.png',
    badges: ['NEW', '-20%'],
    inStock: true,
    stockCount: 119,
    options: ['1 Bunch', '2 Bunches', 'Bulk Box'],
    rating: 4.7
  },
  {
    id: 'kiwi-1',
    name: 'Kiwi',
    category: 'Tropical & Exotic',
    description: 'Kiwi is a small, oval-shaped fruit with a brown fuzzy exterior and vibrant sweet green interior filled with tiny seeds.',
    price: 10.00,
    originalPrice: 15.00,
    image: '/images/kiwi_fruit_1784805659269.png',
    badges: ['-33%', 'OUT OF STOCK'],
    inStock: false,
    rating: 4.6
  },
  {
    id: 'salmon-1',
    name: 'Oak Smoked Salmon 400 Gr',
    category: 'Seafood',
    description: 'Our delicious oak smoked Salmon is an excellent source of omega-3 and protein, cured over natural oak chips.',
    price: 40.00,
    originalPrice: 48.00,
    priceRange: '$10.00 - $14.00',
    image: '/images/smoked_salmon_1784805882976.png',
    badges: ['-16%', 'OUT OF STOCK'],
    inStock: false,
    rating: 4.9
  },
  {
    id: 'lobster-1',
    name: 'Fresh Live Lobster - 1.75kg',
    category: 'Seafood',
    description: '100 grams of cooked lobster is 100 calories with 19 grams of protein. Sweet and tender wild-caught lobster.',
    price: 32.00,
    originalPrice: 45.00,
    image: '/images/lobster_fresh_1784805899102.png',
    badges: ['FEATURED', '-28%'],
    sold: 29,
    available: 1,
    inStock: true,
    stockCount: 1,
    rating: 5.0
  },
  {
    id: 'ciabatta-1',
    name: 'Ciabatta Bake At Home 4 Pack',
    category: 'Bakery',
    description: 'Ciabatta is a white bread that stems from a baker in Adria, Veneto, Italy. Crisp crust with airy crumb.',
    price: 18.00,
    originalPrice: 22.00,
    image: '/images/hero_veggies_crate_1784805543395.png',
    badges: ['-20%', 'OUT OF STOCK'],
    inStock: false,
    rating: 4.8
  }
];


export const PROMO_BANNERS = [
  {
    id: 'promo-1',
    title: 'Fresh Deals Await: Shop Now!',
    tag: '-15% Fresh Deals',
    date: 'From 1 May, 2026 00:00 AM',
    bg: 'from-amber-400 to-orange-500',
    image: '/images/hero_fruits_crate_1784805559805.png'
  },
  {
    id: 'promo-2',
    title: 'Natural Fresh Drinks in Our Market',
    tag: 'Free Delivery',
    date: 'From 1 May, 2026 00:00 AM',
    bg: 'from-emerald-400 to-teal-600',
    image: '/images/mint_cocktail_1784805602002.png'
  },
  {
    id: 'promo-3',
    title: 'Cheap Meat & Seafood from Farmers',
    tag: '-25% For All Meat',
    date: 'From 1 May, 2026 00:00 AM',
    bg: 'from-rose-500 to-red-700',
    image: '/images/lobster_fresh_1784805899102.png'
  },
  {
    id: 'promo-4',
    title: 'Fresh Organic Herbs & Greens!',
    tag: 'Discount',
    date: 'From 1 May, 2026 00:00 AM',
    bg: 'from-lime-400 to-green-600',
    image: '/images/basil_leaf_1784805644891.png'
  },
  {
    id: 'promo-5',
    title: 'Quality Farm Produce Combined!',
    tag: 'Featured',
    date: 'From 1 May, 2026 00:00 AM',
    bg: 'from-purple-500 to-indigo-700',
    image: '/images/hero_veggies_crate_1784805543395.png'
  }
];
