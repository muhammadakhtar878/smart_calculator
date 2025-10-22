"use client"

import * as React from "react"
import { notFound } from "next/navigation"
import { Filter, Grid, List, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product/product-card"
import { products, categories } from "@/lib/mock-data"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(c => c.slug === params.slug)
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = React.useState('popularity')
  const [showFilters, setShowFilters] = React.useState(false)
  const [selectedBrands, setSelectedBrands] = React.useState<string[]>([])
  const [selectedTags, setSelectedTags] = React.useState<string[]>([])
  const [priceRange, setPriceRange] = React.useState([0, 2000])

  if (!category) {
    notFound()
  }

  // Filter products by category
  let filteredProducts = products.filter(p => 
    p.category.toLowerCase() === category.name.toLowerCase()
  )

  // Apply brand filters
  if (selectedBrands.length > 0) {
    filteredProducts = filteredProducts.filter(p => 
      selectedBrands.includes(p.brand)
    )
  }

  // Apply tag filters
  if (selectedTags.length > 0) {
    filteredProducts = filteredProducts.filter(p => 
      p.tags.some(tag => selectedTags.includes(tag))
    )
  }

  // Apply price range filter
  filteredProducts = filteredProducts.filter(p => 
    p.price >= priceRange[0] && p.price <= priceRange[1]
  )

  // Sort products
  filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'newest':
        return b.id.localeCompare(a.id)
      default:
        return b.reviewCount - a.reviewCount
    }
  })

  const allTags = Array.from(new Set(products.flatMap(p => p.tags)))
  const categoryBrands = Array.from(new Set(
    products
      .filter(p => p.category.toLowerCase() === category.name.toLowerCase())
      .map(p => p.brand)
  ))

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <a href="/" className="hover:text-emerald-600">Home</a>
        <span>/</span>
        <span className="text-gray-900">{category.name}</span>
      </nav>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
          <p className="text-gray-600 mt-2">
            {filteredProducts.length} products found
          </p>
        </div>

        {/* View and Sort Controls */}
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>

          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="popularity">Most Popular</option>
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <aside className={`w-64 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          {/* Brand Filter */}
          <div className="bg-white rounded-lg border p-4">
            <h3 className="font-semibold mb-4">Brand</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {categoryBrands.map((brand) => (
                <label key={brand} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedBrands([...selectedBrands, brand])
                      } else {
                        setSelectedBrands(selectedBrands.filter(b => b !== brand))
                      }
                    }}
                    className="rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="bg-white rounded-lg border p-4">
            <h3 className="font-semibold mb-4">Price Range</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Tags Filter */}
          <div className="bg-white rounded-lg border p-4">
            <h3 className="font-semibold mb-4">Features</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {allTags.slice(0, 10).map((tag) => (
                <label key={tag} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedTags([...selectedTags, tag])
                      } else {
                        setSelectedTags(selectedTags.filter(t => t !== tag))
                      }
                    }}
                    className="rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm capitalize">{tag}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Islamic Filters (for relevant categories) */}
          <div className="bg-white rounded-lg border p-4">
            <h3 className="font-semibold mb-4">Islamic Certification</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-sm">Halal Certified</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-sm">Eid Special</span>
              </label>
            </div>
          </div>

          {/* Clear Filters */}
          <Button
            variant="outline"
            onClick={() => {
              setSelectedBrands([])
              setSelectedTags([])
              setPriceRange([0, 2000])
            }}
            className="w-full"
          >
            Clear All Filters
          </Button>
        </aside>

        {/* Products Grid */}
        <main className="flex-1">
          {/* Active Filters */}
          {(selectedBrands.length > 0 || selectedTags.length > 0) && (
            <div className="mb-6">
              <div className="flex items-center space-x-2 flex-wrap">
                <span className="text-sm text-gray-600">Active filters:</span>
                {selectedBrands.map((brand) => (
                  <Badge
                    key={brand}
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() => setSelectedBrands(selectedBrands.filter(b => b !== brand))}
                  >
                    {brand} ×
                  </Badge>
                ))}
                {selectedTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() => setSelectedTags(selectedTags.filter(t => t !== tag))}
                  >
                    {tag} ×
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
                : 'space-y-4'
            }`}>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className={viewMode === 'list' ? 'flex flex-row' : ''}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedBrands([])
                  setSelectedTags([])
                  setPriceRange([0, 2000])
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {filteredProducts.length > 12 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}