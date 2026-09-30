export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  image: string;
  rating?: number;
  isNew?: boolean;
}

export interface Review {
  id: string;
  name: string;
  country: string;
  rating: number;
  comment: string;
}

export interface OccasionItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  gridSpan: 'tall' | 'standard';
}

export interface CategoryCircleItem {
  id: string;
  title: string;
  image: string;
  link: string;
}

export const CATEGORIES: CategoryCircleItem[] = [
  {
    id: 'sarees',
    title: 'SAREES',
    image: '/images/cat-sarees.jpg',
    link: '#sarees',
  },
  {
    id: 'silk-sarees',
    title: 'SILK SAREES',
    image: '/images/cat-silks.jpg',
    link: '#silk-sarees',
  },
  {
    id: 'suits-dresses',
    title: 'SUITS & DRESSES',
    image: '/images/cat-suits.jpg',
    link: '#suits-dresses',
  },
  {
    id: 'gowns',
    title: 'GOWNS',
    image: '/images/cat-gowns.jpg',
    link: '#gowns',
  },
  {
    id: 'kurti',
    title: 'KURTI',
    image: '/images/cat-kurti.jpg',
    link: '#kurti',
  },
  {
    id: 'wedding-collections',
    title: 'WEDDING COLLECTIONS',
    image: '/images/cat-wedding.jpg',
    link: '#wedding-collections',
  },
];

export const OCCASIONS: OccasionItem[] = [
  {
    id: 'wedding',
    title: 'The Wedding Edit',
    subtitle: 'Royal bridal trousseau & heavy lehengas',
    ctaText: 'EXPLORE',
    image: '/images/wedding-edit.jpg',
    gridSpan: 'tall',
  },
  {
    id: 'haldi-mehendi',
    title: 'Haldi & Mehendi',
    subtitle: 'Vibrant marigold yellows & festive greens',
    ctaText: 'SHOP YELLOWS & GREENS',
    image: '/images/haldi-mehendi.jpg',
    gridSpan: 'standard',
  },
  {
    id: 'cocktail',
    title: 'Cocktail Night',
    subtitle: 'Chic silhouettes & pre-draped luxury',
    ctaText: 'SHOP GOWNS',
    image: '/images/occ-cocktail.jpg',
    gridSpan: 'standard',
  },
  {
    id: 'festive',
    title: 'Festive Ready',
    subtitle: 'Rich brocades & resplendent silks',
    ctaText: 'SHOP SILKS',
    image: '/images/occ-festive.jpg',
    gridSpan: 'standard',
  },
  {
    id: 'casual-ethnic',
    title: 'Casual Ethnic',
    subtitle: 'Breezy chanderi & handblock prints',
    ctaText: 'SHOP KURTAS & SUITS',
    image: '/images/occ-casual.jpg',
    gridSpan: 'standard',
  },
];

export const NEW_ARRIVALS: Product[] = [
  {
    id: 'na-1',
    name: 'Chiffon Silk Party Wear - Embroidered',
    brand: 'GG FASHION',
    price: 1914,
    originalPrice: 2200,
    discount: '13% OFF',
    image: '/images/prod-blue-saree.jpg',
  },
  {
    id: 'na-2',
    name: 'Banarasi Soft Silk Saree - White',
    brand: 'WEAVES OF INDIA',
    price: 1880,
    originalPrice: 2400,
    discount: '22% OFF',
    image: '/images/prod-white-saree.jpg',
  },
  {
    id: 'na-3',
    name: 'Festive Collection Georgette - Red',
    brand: 'GG FASHION',
    price: 1531,
    image: '/images/prod-red-georgette.jpg',
  },
  {
    id: 'na-4',
    name: 'Vichitra Silk - Full Border Work',
    brand: 'DESIGNER EDIT',
    price: 4148,
    originalPrice: 5100,
    discount: '19% OFF',
    image: '/images/prod-border-silk.jpg',
  },
  {
    id: 'na-5',
    name: 'Organza Floral Threadwork Saree',
    brand: 'GG FASHION',
    price: 2899,
    originalPrice: 3499,
    discount: '17% OFF',
    image: '/images/prod-na-5.jpg',
  },
  {
    id: 'na-6',
    name: 'Mulberry Silk Banarasi Brocade',
    brand: 'HERITAGE ATELIER',
    price: 6450,
    originalPrice: 7800,
    discount: '17% OFF',
    image: '/images/hero-slide2.jpg',
  },
];

export const FEATURED_COLLECTION: Product[] = [
  {
    id: 'fc-1',
    name: 'Embellished Gown',
    brand: 'EVENING WEAR',
    price: 5500,
    image: '/images/feat-gown.jpg',
  },
  {
    id: 'fc-2',
    name: 'Printed Anarkali Suit',
    brand: 'SUMMER SOIRÉE',
    price: 2450,
    image: '/images/feat-anarkali.jpg',
  },
  {
    id: 'fc-3',
    name: 'Sequin Work Lehenga',
    brand: 'WEDDING COUTURE',
    price: 15999,
    image: '/images/feat-lehenga.jpg',
  },
  {
    id: 'fc-4',
    name: 'Kanjivaram Silk',
    brand: 'HERITAGE SILK',
    price: 8500,
    image: '/images/feat-kanjivaram.jpg',
  },
  {
    id: 'fc-5',
    name: 'Pastel Chanderi Gharara Set',
    brand: 'ROYAL HERITAGE',
    price: 7200,
    image: '/images/feat-fc-5.jpg',
  },
  {
    id: 'fc-6',
    name: 'Bespoke Zardozi Raw Silk Ensemble',
    brand: 'ATELIER COUTURE',
    price: 18500,
    originalPrice: 22000,
    discount: '15% OFF',
    image: '/images/hero-slide3.jpg',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Hetal Shah',
    country: 'India',
    rating: 5.0,
    comment:
      '"Beautiful dress perfect size. I ordered for my sister\'s wedding and it arrived on time. The fabric quality is exceptional."',
  },
  {
    id: 'rev-2',
    name: 'Indu Valavala',
    country: 'India',
    rating: 5.0,
    comment:
      '"This is my second jewelry order from GG Fashion. I loved them 100%. They arrived well packed and exactly as shown in pictures."',
  },
  {
    id: 'rev-3',
    name: 'Rayn',
    country: 'Germany',
    rating: 5.0,
    comment:
      '"Beautiful necklace. Good experience shopping here. The customer support was very helpful with size customization."',
  },
  {
    id: 'rev-4',
    name: 'Pooja Kashyap',
    country: 'United Kingdom',
    rating: 5.0,
    comment:
      '"The Banarasi saree drape is stunning! The colors are vibrant and zari finish is extremely neat. Will definitely purchase again."',
  },
  {
    id: 'rev-5',
    name: 'Ananya Deshmukh',
    country: 'United States',
    rating: 5.0,
    comment:
      '"Ordered my bridal trousseau from San Francisco. The stitching, embroidery precision, and express delivery completely exceeded expectations!"',
  },
];

export const TRUST_FEATURES = [
  {
    title: 'AUTHENTIC QUALITY',
    desc: 'Handpicked premium fabrics and subtle craftsmanship you can rely on.',
    icon: 'sparkles',
  },
  {
    title: 'MODERN TRADITION',
    desc: 'Designs that blend timeless Indian heritage with contemporary elegance.',
    icon: 'gem',
  },
  {
    title: 'EXPRESS DELIVERY',
    desc: 'Fast shipping worldwide with secure packaging at your doorstep.',
    icon: 'truck',
  },
  {
    title: 'EASY RETURNS',
    desc: '7-day hassle-free returns and exchange policy for your peace of mind.',
    icon: 'refresh',
  },
  {
    title: '100% SECURE PAYMENT',
    desc: 'Safe payment gateways ensuring your transactions are secure.',
    icon: 'shield',
  },
];

export const NAV_LINKS = [
  { label: 'NEW ARRIVALS', href: '#new-arrivals', badge: true },
  { label: 'SILK SAREES', href: '#categories' },
  { label: 'SUIT SETS', href: '#categories' },
  { label: 'WEDDING COLLECTION', href: '#occasions' },
  { label: 'KURTIS', href: '#categories' },
  { label: 'LEHENGAS', href: '#occasions' },
  { label: 'GOWNS', href: '#categories' },
  { label: 'HERITAGE WEAVES', href: '#heritage-crafts' },
  { label: 'REAL BRIDES', href: '#real-brides' },
  { label: 'READY TO SHIP', href: '#featured' },
];

export interface CraftStory {
  id: string;
  name: string;
  region: string;
  weavingPeriod: string;
  tagline: string;
  description: string;
  points: string[];
  image: string;
}

export const HERITAGE_CRAFTS: CraftStory[] = [
  {
    id: 'banarasi',
    name: 'Banarasi Brocade',
    region: 'Varanasi, Uttar Pradesh',
    weavingPeriod: '14 - 28 Days per Saree',
    tagline: 'The Gold Standard of Imperial Trousseau',
    description:
      'Woven on traditional pit-looms in the sacred ghats of Varanasi, each pure Katan silk saree incorporates real silver and gold zari threads interlaced with botanical Mughal jaal motifs.',
    points: ['Pure Mulberry Katan Silk', 'Intricate Kadwa & Kadhwan Weave', 'GI (Geographical Indication) Certified'],
    image: '/images/craft-banarasi.jpg',
  },
  {
    id: 'kanjivaram',
    name: 'Kanjeevaram Temple Silk',
    region: 'Kanchipuram, Tamil Nadu',
    weavingPeriod: '21 - 35 Days per Saree',
    tagline: 'Korvai Borders & Heavy 3-Ply Zari Pallu',
    description:
      'Renowned for its structural weight and luminous contrast borders, Kanjeevaram features the ancient Korvai technique where the body and temple pallu are interlocked seamlessly by two master weavers.',
    points: ['3-Ply Mulberry Silk Warp & Weft', 'Authentic Gold Dipped Zari', 'Mythological Yali & Peacocks Motifs'],
    image: '/images/craft-kanjivaram.jpg',
  },
  {
    id: 'chanderi',
    name: 'Chanderi Gossamer',
    region: 'Chanderi, Madhya Pradesh',
    weavingPeriod: '10 - 18 Days per Saree',
    tagline: 'Sheer Weightless Elegance & Royal Bootis',
    description:
      'Patronized by Scindia royalty, Chanderi combines fine cotton with raw silk yarn to create a distinctive gossamer shimmer adorned with delicate hand-spun gold coin ashrafi bootis.',
    points: ['Feather-light Organza-like Feel', 'Traditional Zari Borders', 'Breathable All-Season Royal Drape'],
    image: '/images/craft-chanderi.jpg',
  },
  {
    id: 'bandhani',
    name: 'Bandhani & Leheriya',
    region: 'Kutch & Rajasthan',
    weavingPeriod: '15 - 30 Days per Saree',
    tagline: 'Centuries-Old Royal Resist Dye Art',
    description:
      'The sacred art of tying thousands of micro-dots by hand before natural immersion dyeing. Each Leheriya wave represents the arrival of festive monsoon celebrations and joyous auspiciousness.',
    points: ['10,000+ Hand-Tied Micro Knots', 'Rich Georgette & Gaji Silk Base', 'Vibrant Festive Jewel Tones'],
    image: '/images/craft-bandhani.jpg',
  },
];

export interface InstaBride {
  id: string;
  handle: string;
  name: string;
  city: string;
  outfit: string;
  image: string;
}

export const INSTA_BRIDES: InstaBride[] = [
  {
    id: 'b1',
    handle: '@divyasharma_wedding',
    name: 'Divya & Rohan',
    city: 'Udaipur Palace Wedding',
    outfit: 'Royal Crimson Banarasi Lehenga',
    image: '/images/bride-insta-1.jpg',
  },
  {
    id: 'b2',
    handle: '@radhika.mehta',
    name: 'Radhika Mehta',
    city: 'London Anand Karaj',
    outfit: 'Pastel Organza Floral Saree',
    image: '/images/bride-insta-2.jpg',
  },
  {
    id: 'b3',
    handle: '@tanya_singh',
    name: 'Tanya Singh',
    city: 'Mumbai Cocktail Gala',
    outfit: 'Midnight Velvet Pre-Draped Gown',
    image: '/images/bride-insta-3.jpg',
  },
  {
    id: 'b4',
    handle: '@ananya_kapoor',
    name: 'Ananya Kapoor',
    city: 'Jaipur Haldi Ceremony',
    outfit: 'Marigold Yellow Chanderi Gharara',
    image: '/images/bride-insta-4.jpg',
  },
  {
    id: 'b5',
    handle: '@priyanka_reddy',
    name: 'Priyanka Reddy',
    city: 'Hyderabad Muhurtham',
    outfit: 'Temple Border Kanjeevaram Saree',
    image: '/images/bride-insta-5.jpg',
  },
];

