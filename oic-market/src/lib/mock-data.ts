import { Product, Category, Brand, Banner, Deal } from './types'

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    icon: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
    productCount: 1250
  },
  {
    id: '2',
    name: 'Fashion',
    slug: 'fashion',
    icon: 'Shirt',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop',
    productCount: 2100
  },
  {
    id: '3',
    name: 'Home & Garden',
    slug: 'home-garden',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop',
    productCount: 890
  },
  {
    id: '4',
    name: 'Books',
    slug: 'books',
    icon: 'Book',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop',
    productCount: 750
  },
  {
    id: '5',
    name: 'Sports',
    slug: 'sports',
    icon: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
    productCount: 640
  },
  {
    id: '6',
    name: 'Beauty',
    slug: 'beauty',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop',
    productCount: 520
  }
]

export const brands: Brand[] = [
  {
    id: '1',
    name: 'TechVision',
    logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=60&fit=crop',
    slug: 'techvision'
  },
  {
    id: '2',
    name: 'StyleCraft',
    logo: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=100&h=60&fit=crop',
    slug: 'stylecraft'
  },
  {
    id: '3',
    name: 'HomeEssentials',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=60&fit=crop',
    slug: 'homeessentials'
  },
  {
    id: '4',
    name: 'Wisdom Books',
    logo: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=100&h=60&fit=crop',
    slug: 'wisdom-books'
  }
]

export const banners: Banner[] = [
  {
    id: '1',
    title: 'Ramadan Special Collection',
    subtitle: 'Up to 50% off on Islamic books and items',
    image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1200&h=400&fit=crop',
    link: '/category/islamic-items',
    isActive: true
  },
  {
    id: '2',
    title: 'Electronics Mega Sale',
    subtitle: 'Latest gadgets at unbeatable prices',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=400&fit=crop',
    link: '/category/electronics',
    isActive: true
  },
  {
    id: '3',
    title: 'Eid Fashion Collection',
    subtitle: 'Modest fashion for the whole family',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop',
    link: '/category/fashion',
    isActive: true
  }
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    slug: 'premium-wireless-headphones',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=500&h=500&fit=crop'
    ],
    category: 'Electronics',
    brand: 'TechVision',
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    tags: ['wireless', 'bluetooth', 'noise-cancelling'],
    specs: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Weight': '250g',
      'Warranty': '2 years'
    }
  },
  {
    id: '2',
    name: 'Elegant Modest Dress',
    slug: 'elegant-modest-dress',
    description: 'Beautiful modest dress perfect for special occasions and daily wear.',
    price: 89.99,
    originalPrice: 129.99,
    discount: 31,
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop'
    ],
    category: 'Fashion',
    brand: 'StyleCraft',
    rating: 4.8,
    reviewCount: 89,
    inStock: true,
    tags: ['modest', 'elegant', 'occasion-wear'],
    specs: {
      'Material': '100% Cotton',
      'Care': 'Machine washable',
      'Sizes': 'XS to XXL',
      'Color': 'Navy Blue'
    },
    isEidSpecial: true
  },
  {
    id: '3',
    name: 'The Holy Quran - Arabic & English',
    slug: 'holy-quran-arabic-english',
    description: 'Beautiful hardcover edition of the Holy Quran with Arabic text and English translation.',
    price: 49.99,
    images: [
      'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop'
    ],
    category: 'Books',
    brand: 'Wisdom Books',
    rating: 5.0,
    reviewCount: 203,
    inStock: true,
    tags: ['islamic', 'quran', 'religious', 'bilingual'],
    specs: {
      'Pages': '604',
      'Language': 'Arabic & English',
      'Binding': 'Hardcover',
      'Publisher': 'Wisdom Books'
    },
    isHalal: true
  },
  {
    id: '4',
    name: 'Smart Fitness Watch',
    slug: 'smart-fitness-watch',
    description: 'Advanced fitness tracking with heart rate monitor, GPS, and water resistance.',
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    images: [
      'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop'
    ],
    category: 'Electronics',
    brand: 'TechVision',
    rating: 4.3,
    reviewCount: 156,
    inStock: true,
    tags: ['fitness', 'smartwatch', 'health', 'gps'],
    specs: {
      'Display': '1.4" AMOLED',
      'Battery': '7 days',
      'Water Resistance': '5ATM',
      'Sensors': 'Heart Rate, GPS, Accelerometer'
    }
  },
  {
    id: '5',
    name: 'Luxury Prayer Mat',
    slug: 'luxury-prayer-mat',
    description: 'Premium handwoven prayer mat with beautiful Islamic patterns and soft texture.',
    price: 79.99,
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop'
    ],
    category: 'Home & Garden',
    brand: 'HomeEssentials',
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    tags: ['prayer', 'islamic', 'handwoven', 'luxury'],
    specs: {
      'Material': 'Premium Wool',
      'Size': '120cm x 70cm',
      'Pattern': 'Traditional Islamic',
      'Care': 'Dry clean only'
    },
    isHalal: true
  },
  {
    id: '6',
    name: 'Professional Camera',
    slug: 'professional-camera',
    description: 'High-end DSLR camera for professional photography with advanced features.',
    price: 1299.99,
    originalPrice: 1599.99,
    discount: 19,
    images: [
      'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop'
    ],
    category: 'Electronics',
    brand: 'TechVision',
    rating: 4.7,
    reviewCount: 94,
    inStock: true,
    tags: ['camera', 'photography', 'professional', 'dslr'],
    specs: {
      'Sensor': '24MP Full Frame',
      'ISO': '100-51200',
      'Video': '4K 30fps',
      'Lens Mount': 'EF Mount'
    }
  },
  {
    id: '7',
    name: 'Islamic Calligraphy Art',
    slug: 'islamic-calligraphy-art',
    description: 'Beautiful framed Islamic calligraphy artwork for home decoration.',
    price: 159.99,
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop'
    ],
    category: 'Home & Garden',
    brand: 'HomeEssentials',
    rating: 4.6,
    reviewCount: 42,
    inStock: true,
    tags: ['islamic', 'calligraphy', 'art', 'decoration'],
    specs: {
      'Size': '60cm x 40cm',
      'Frame': 'Premium Wood',
      'Style': 'Traditional Calligraphy',
      'Origin': 'Handcrafted'
    },
    isHalal: true
  },
  {
    id: '8',
    name: 'Organic Skincare Set',
    slug: 'organic-skincare-set',
    description: 'Complete organic skincare routine with natural ingredients.',
    price: 129.99,
    originalPrice: 179.99,
    discount: 28,
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop'
    ],
    category: 'Beauty',
    brand: 'StyleCraft',
    rating: 4.4,
    reviewCount: 78,
    inStock: true,
    tags: ['organic', 'skincare', 'natural', 'beauty'],
    specs: {
      'Includes': 'Cleanser, Toner, Moisturizer, Serum',
      'Skin Type': 'All Types',
      'Certification': 'Organic Certified',
      'Size': 'Full Size Products'
    },
    isHalal: true
  }
]

export const deals: Deal[] = [
  {
    id: '1',
    title: 'Flash Sale: Premium Headphones',
    description: '24 hours only - Save 40% on premium wireless headphones',
    product: products[0],
    endTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    isActive: true
  },
  {
    id: '2',
    title: 'Ramadan Special: Islamic Books',
    description: 'Buy 2 Get 1 Free on all Islamic books',
    product: products[2],
    endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    isActive: true
  }
]