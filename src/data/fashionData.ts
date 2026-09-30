export interface ProductItem {
  id: string;
  name: string;
  category: 'dresses' | 'tops' | 'bottoms' | 'coords' | 'accessories' | 'outerwear';
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
  reviewCount: number;
  image: string;
  hoverImage?: string;
  colors: string[];
  sizes: string[];
  stockText?: string;
  badge?: 'NEW' | 'BESTSELLER' | 'SALE';
  description?: string;
}

export const FASHION_PRODUCTS: ProductItem[] = [
  {
    id: 'fp-1',
    name: 'Relaxed Pure Linen Shirt Dress',
    category: 'dresses',
    price: 3499,
    originalPrice: 4999,
    discount: '30% OFF',
    rating: 4.9,
    reviewCount: 148,
    image: '/images/fashion/prod-1.jpg',
    colors: ['#F5EBE1', '#2C2B29', '#8C9A86'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stockText: 'Only 3 left in size M',
    badge: 'NEW',
    description: 'Woven from European flax linen with mother-of-pearl buttons and relaxed drop shoulders.',
  },
  {
    id: 'fp-2',
    name: 'Pleated Silk Blend Midi Dress',
    category: 'dresses',
    price: 4299,
    originalPrice: 5999,
    discount: '28% OFF',
    rating: 4.8,
    reviewCount: 92,
    image: '/images/fashion/prod-2.jpg',
    colors: ['#3A2F4C', '#D4AF37', '#1A1A1A'],
    sizes: ['S', 'M', 'L'],
    badge: 'BESTSELLER',
    description: 'Graceful micro-pleated midi silhouette featuring an asymmetric hem and waist tie.',
  },
  {
    id: 'fp-3',
    name: 'Wide-Leg Linen Trousers',
    category: 'bottoms',
    price: 2999,
    originalPrice: 3899,
    discount: '23% OFF',
    rating: 4.9,
    reviewCount: 215,
    image: '/images/fashion/prod-3.jpg',
    colors: ['#E6DFD5', '#2B2B2B', '#7A6B58'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stockText: 'Selling fast',
    badge: 'BESTSELLER',
    description: 'High-waisted tailored wide leg with subtle front pleats and deep slash pockets.',
  },
  {
    id: 'fp-4',
    name: 'Structured Cotton Poplin Shirt',
    category: 'tops',
    price: 2499,
    originalPrice: 3199,
    discount: '22% OFF',
    rating: 4.7,
    reviewCount: 76,
    image: '/images/fashion/prod-4.jpg',
    colors: ['#FFFFFF', '#C4D4E3', '#F2E8DC'],
    sizes: ['S', 'M', 'L', 'XL'],
    badge: 'NEW',
    description: 'Crisp organic cotton poplin cut with clean oversized tailoring and French cuffs.',
  },
  {
    id: 'fp-5',
    name: 'Breezy Chanderi Co-ord Set',
    category: 'coords',
    price: 4999,
    originalPrice: 6500,
    discount: '23% OFF',
    rating: 5.0,
    reviewCount: 64,
    image: '/images/fashion/prod-5.jpg',
    colors: ['#E8D8C8', '#D8B4A6', '#2E382E'],
    sizes: ['XS', 'S', 'M', 'L'],
    badge: 'NEW',
    description: 'Harmonious two-piece set featuring a relaxed tunic blouse and cropped straight trousers.',
  },
  {
    id: 'fp-6',
    name: 'Italian Leather Crossbody Bag',
    category: 'accessories',
    price: 3899,
    originalPrice: 5200,
    discount: '25% OFF',
    rating: 4.9,
    reviewCount: 110,
    image: '/images/fashion/prod-6.jpg',
    colors: ['#5A3825', '#1A1A1A', '#C8B097'],
    sizes: ['One Size'],
    stockText: 'Only 4 in stock',
    badge: 'BESTSELLER',
    description: 'Handcrafted smooth saddle leather with gold-tone custom hardware and adjustable strap.',
  },
];

export const CATEGORY_CARDS = [
  { id: 'dresses', label: 'DRESSES', image: 'https://www.bangaloredesignerboutique.com/wp-content/uploads/2022/06/LEHENGA.jpg', count: '64 Styles' },
  { id: 'tops', label: 'TOPS', image: 'https://i.pinimg.com/1200x/bf/28/cb/bf28cbc0dcf11e2d7d5ce6e2329f49d2.jpg', count: '48 Styles' },
  { id: 'bottoms', label: 'BOTTOMS', image: 'https://i.pinimg.com/736x/54/59/1d/54591d6c2e4748d4ce6d64f78c674234.jpg', count: '36 Styles' },
  { id: 'coords', label: 'CO-ORDS', image: 'https://i.pinimg.com/736x/af/c3/3b/afc33bb788380d15c375b54aaf80c45f.jpg', count: '28 Styles' },
  { id: 'outerwear', label: 'OUTERWEAR', image: 'https://i.pinimg.com/1200x/e3/f1/26/e3f1267c3e10df06cb156c4e3d15c910.jpg', count: '22 Styles' },
  { id: 'accessories', label: 'ACCESSORIES', image: 'https://i.pinimg.com/736x/c4/0b/04/c40b04babbe69db8fdb4ad69d384fe84.jpg', count: '52 Styles' },
];

export const OCCASION_CARDS = [
  { id: 'workwear', title: 'WORKWEAR', subtitle: 'Refined tailoring for modern professionalism', image: '/images/fashion/occ-workwear.jpg' },
  { id: 'datenight', title: 'DATE NIGHT', subtitle: 'Sensual silhouettes and graceful drapes', image: '/images/fashion/occ-datenight.jpg' },
  { id: 'wedding', title: 'WEDDING', subtitle: 'Royal celebrations and statement ensembles', image: '/images/fashion/occ-wedding.jpg' },
  { id: 'vacation', title: 'VACATION', subtitle: 'Breezy linens and sun-kissed textures', image: '/images/fashion/occ-vacation.jpg' },
  { id: 'weekend', title: 'WEEKEND', subtitle: 'Effortless relaxed comfort for slow days', image: '/images/fashion/occ-weekend.jpg' },
  { id: 'evening', title: 'EVENING', subtitle: 'Cocktail hour glamour with subtle sheen', image: '/images/fashion/occ-evening.jpg' },
];

export const SHOP_THE_LOOK_ITEMS = [
  { id: 'stl-1', name: 'Relaxed Linen Oversized Shirt', price: 2499, image: '/images/fashion/prod-4.jpg' },
  { id: 'stl-2', name: 'High-Waist Wide Leg Trousers', price: 3299, image: '/images/fashion/prod-3.jpg' },
  { id: 'stl-3', name: 'Handcrafted Leather Saddle Bag', price: 1999, image: '/images/fashion/prod-6.jpg' },
];

export const JOURNAL_POSTS = [
  {
    id: 'j-1',
    title: '5 Ways to Style a Linen Shirt',
    readTime: '4 min read',
    date: 'Sep 28, 2026',
    category: 'STYLING GUIDE',
    image: '/images/fashion/journal-1.jpg',
  },
  {
    id: 'j-2',
    title: 'What to Wear to a Summer Wedding',
    readTime: '6 min read',
    date: 'Sep 24, 2026',
    category: 'OCCASION EDIT',
    image: '/images/fashion/journal-2.jpg',
  },
  {
    id: 'j-3',
    title: 'How to Build a Capsule Wardrobe',
    readTime: '5 min read',
    date: 'Sep 18, 2026',
    category: 'WARDROBE ESSENTIALS',
    image: '/images/fashion/journal-3.jpg',
  },
  {
    id: 'j-4',
    title: 'The Ultimate Guide to Office Style',
    readTime: '5 min read',
    date: 'Sep 12, 2026',
    category: 'WORKWEAR',
    image: '/images/fashion/journal-4.jpg',
  },
];

export const CUSTOMER_REVIEWS = [
  {
    id: 'cr-1',
    author: 'Priya M.',
    badge: 'Verified Buyer',
    rating: 5,
    productPurchased: 'Relaxed Pure Linen Shirt Dress',
    comment:
      '"The quality exceeded my expectations. The fit was perfect and the packaging was beautiful. It drapes naturally and stays breathable in the heat."',
    city: 'Mumbai',
  },
  {
    id: 'cr-2',
    author: 'Simran Kaur',
    badge: 'Verified Buyer',
    rating: 5,
    productPurchased: 'Wide-Leg Linen Trousers',
    comment:
      '"I rarely write reviews, but these trousers are perfection. The high-waist cut is so flattering and the linen feels genuinely premium."',
    city: 'New Delhi',
  },
  {
    id: 'cr-3',
    author: 'Natasha D\'Souza',
    badge: 'Verified Buyer',
    rating: 5,
    productPurchased: 'Breezy Chanderi Co-ord Set',
    comment:
      '"Wore this to a festive brunch and received so many compliments. Beautiful artisanal stitching and fast doorstep delivery."',
    city: 'Bengaluru',
  },
];

export const ANNOUNCEMENT_MESSAGES = [
  'FREE SHIPPING ON ORDERS OVER ₹1,999',
  'FIRST ORDER? USE CODE "WELCOME10" FOR 10% OFF',
  'NEW SEASON EDIT IS NOW LIVE',
  '7-DAY HASSLE-FREE RETURNS & EXCHANGES',
  'EXPRESS WORLDWIDE COURIER TO 80+ COUNTRIES',
];
