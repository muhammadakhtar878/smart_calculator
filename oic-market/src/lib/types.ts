export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  images: string[]
  category: string
  brand: string
  rating: number
  reviewCount: number
  inStock: boolean
  tags: string[]
  specs: Record<string, string>
  isHalal?: boolean
  isEidSpecial?: boolean
}

export interface Category {
  id: string
  name: string
  slug: string
  icon: string
  image: string
  productCount: number
}

export interface Brand {
  id: string
  name: string
  logo: string
  slug: string
}

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  avatar?: string
  addresses: Address[]
}

export interface Address {
  id: string
  name: string
  street: string
  city: string
  state: string
  country: string
  zipCode: string
  isDefault: boolean
}

export interface CartItem {
  id: string
  product: Product
  quantity: number
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  subtotal: number
  tax: number
  shipping: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  createdAt: string
  shippingAddress: Address
}

export interface Banner {
  id: string
  title: string
  subtitle?: string
  image: string
  link: string
  isActive: boolean
}

export interface Deal {
  id: string
  title: string
  description: string
  product: Product
  endTime: string
  isActive: boolean
}