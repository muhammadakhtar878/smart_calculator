import Image from "next/image"
import Link from "next/link"
import { categories } from "@/lib/mock-data"
import * as LucideIcons from "lucide-react"

export function CategoriesGrid() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of products across different categories, 
            carefully curated for the Muslim community worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            // Dynamically get the icon component
            const IconComponent = LucideIcons[category.icon as keyof typeof LucideIcons] as React.ComponentType<{className?: string}>
            
            return (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="group flex flex-col items-center p-6 bg-white rounded-lg border hover:border-emerald-500 hover:shadow-lg transition-all duration-200"
              >
                <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {IconComponent && (
                        <IconComponent className="h-8 w-8 text-white drop-shadow-lg" />
                      )}
                    </div>
                  </div>
                </div>
                
                <h3 className="font-semibold text-center text-gray-900 group-hover:text-emerald-600 transition-colors mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  {category.productCount.toLocaleString()} items
                </p>
              </Link>
            )
          })}
        </div>

        {/* Islamic Categories Highlight */}
        <div className="mt-12 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">Islamic Products</h3>
            <p className="text-emerald-700 mb-6 max-w-3xl mx-auto">
              Explore our special collection of authentic Islamic products including halal items, 
              modest fashion, Islamic books, prayer accessories, and more - all verified for authenticity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/category/islamic-books"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Islamic Books
              </Link>
              <Link
                href="/category/prayer-items"
                className="bg-white text-emerald-600 border border-emerald-600 hover:bg-emerald-600 hover:text-white px-6 py-2 rounded-lg transition-colors"
              >
                Prayer Items
              </Link>
              <Link
                href="/category/halal-products"
                className="bg-white text-emerald-600 border border-emerald-600 hover:bg-emerald-600 hover:text-white px-6 py-2 rounded-lg transition-colors"
              >
                Halal Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}