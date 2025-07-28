import { HeroCarousel } from "@/components/home/hero-carousel"
import { CategoriesGrid } from "@/components/home/categories-grid"
import { ProductCard } from "@/components/product/product-card"
import { products, deals } from "@/lib/mock-data"
import { Clock, Zap, Star, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const featuredProducts = products.slice(0, 8)
  const islamicProducts = products.filter(p => p.isHalal || p.isEidSpecial).slice(0, 4)

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-8">
        <HeroCarousel />
      </section>

      {/* Categories */}
      <CategoriesGrid />

      {/* Flash Deals Section */}
      <section className="bg-red-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="bg-red-500 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Flash Deals</h2>
                <p className="text-gray-600">Limited time offers - Don&apos;t miss out!</p>
              </div>
            </div>
            <Link href="/deals">
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                View All Deals
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals.map((deal) => (
              <div key={deal.id} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="destructive" className="text-xs">
                    Flash Deal
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>24h left</span>
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{deal.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{deal.description}</p>
                <ProductCard product={deal.product} className="border-0 shadow-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-500 p-2 rounded-lg">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
              <p className="text-gray-600">Handpicked products just for you</p>
            </div>
          </div>
          <Link href="/products">
            <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white">
              View All Products
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Islamic Products Highlight */}
      <section className="bg-gradient-to-r from-emerald-500 to-emerald-600 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Islamic Collection</h2>
            <p className="text-emerald-100 max-w-2xl mx-auto">
              Discover authentic Islamic products including halal items, modest fashion, 
              Islamic literature, and prayer accessories - all verified for authenticity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {islamicProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/category/islamic-products">
                Explore Islamic Collection
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-500 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
              <p className="text-gray-600">What&apos;s popular in our community</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(4, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Newsletter & Trust Signals */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Trust Signals */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚛</span>
                  </div>
                  <h3 className="font-semibold mb-2">Free Shipping</h3>
                  <p className="text-gray-600 text-sm">Free delivery on orders over $100</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="font-semibold mb-2">100% Halal Certified</h3>
                  <p className="text-gray-600 text-sm">All products verified for authenticity</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💝</span>
                  </div>
                  <h3 className="font-semibold mb-2">Easy Returns</h3>
                  <p className="text-gray-600 text-sm">30-day hassle-free returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
