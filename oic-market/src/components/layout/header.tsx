"use client"

import * as React from "react"
import Link from "next/link"
import { Search, ShoppingCart, User, Heart, Menu, Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { categories } from "@/lib/mock-data"

export function Header() {
  const [isSearchFocused, setIsSearchFocused] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [showMegaMenu, setShowMegaMenu] = React.useState(false)

  const searchSuggestions = [
    "wireless headphones",
    "modest fashion",
    "islamic books",
    "prayer mat",
    "smartphone",
    "skincare products"
  ]

  const filteredSuggestions = searchSuggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-emerald-600 text-white py-1">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>Free shipping on orders over $100</span>
            <span>•</span>
            <span>Ramadan Sale: Up to 50% off</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 hover:text-emerald-200">
              <Globe className="h-4 w-4" />
              <span>EN</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            <span>USD</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-emerald-600 text-white p-2 rounded-lg">
              <div className="text-xl font-bold font-arabic">OIC</div>
            </div>
            <div>
              <div className="text-xl font-bold gradient-text">OIC Markeït</div>
              <div className="text-xs text-gray-500">Islamic Marketplace</div>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 relative">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products, brands, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="w-full pl-4 pr-12 py-3 text-base border-2 border-gray-200 focus:border-emerald-500"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1 bg-emerald-600 hover:bg-emerald-700"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Search Suggestions */}
            {isSearchFocused && (searchQuery.length > 0 || true) && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-lg shadow-lg z-50">
                <div className="p-2">
                  {searchQuery.length > 0 ? (
                    <>
                      <div className="text-sm text-gray-500 mb-2">Suggestions</div>
                      {filteredSuggestions.length > 0 ? (
                        filteredSuggestions.map((suggestion, index) => (
                          <div
                            key={index}
                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                            onClick={() => {
                              setSearchQuery(suggestion)
                              setIsSearchFocused(false)
                            }}
                          >
                            <Search className="inline h-3 w-3 mr-2 text-gray-400" />
                            {suggestion}
                          </div>
                        ))
                      ) : (
                        <div className="px-3 py-2 text-sm text-gray-500">No suggestions found</div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="text-sm text-gray-500 mb-2">Popular Searches</div>
                      {searchSuggestions.slice(0, 4).map((suggestion, index) => (
                        <div
                          key={index}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                          onClick={() => {
                            setSearchQuery(suggestion)
                            setIsSearchFocused(false)
                          }}
                        >
                          <Search className="inline h-3 w-3 mr-2 text-gray-400" />
                          {suggestion}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/wishlist" className="flex items-center space-x-1">
                <Heart className="h-5 w-5" />
                <span className="hidden md:inline">Wishlist</span>
              </Link>
            </Button>

            <Button variant="ghost" size="sm" asChild>
              <Link href="/cart" className="flex items-center space-x-1 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden md:inline">Cart</span>
                <Badge className="absolute -top-2 -right-2 bg-emerald-600 text-xs">3</Badge>
              </Link>
            </Button>

            <Button variant="ghost" size="sm" asChild>
              <Link href="/account" className="flex items-center space-x-1">
                <User className="h-5 w-5" />
                <span className="hidden md:inline">Account</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="border-t bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-8">
              <button
                className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                <Menu className="h-4 w-4" />
                <span>All Categories</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/deals" className="text-red-600 font-semibold hover:text-red-700">
                  Today&apos;s Deals
                </Link>
                <Link href="/category/electronics" className="text-gray-700 hover:text-emerald-600">
                  Electronics
                </Link>
                <Link href="/category/fashion" className="text-gray-700 hover:text-emerald-600">
                  Fashion
                </Link>
                <Link href="/category/books" className="text-gray-700 hover:text-emerald-600">
                  Islamic Books
                </Link>
                <Link href="/category/home-garden" className="text-gray-700 hover:text-emerald-600">
                  Home & Garden
                </Link>
                <Link href="/ramadan" className="text-gold-600 font-semibold hover:text-gold-700">
                  Ramadan Special
                </Link>
              </nav>
            </div>

            <div className="hidden md:flex items-center space-x-4 text-sm">
              <Link href="/track-order" className="text-gray-600 hover:text-emerald-600">
                Track Order
              </Link>
              <Link href="/help" className="text-gray-600 hover:text-emerald-600">
                Customer Service
              </Link>
            </div>
          </div>

          {/* Mega Menu */}
          {showMegaMenu && (
            <div
              className="absolute left-0 right-0 bg-white border-t shadow-lg z-40"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-6 gap-6">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/category/${category.slug}`}
                      className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                        <span className="text-emerald-600 text-sm">{category.icon}</span>
                      </div>
                      <span className="text-sm font-medium text-center">{category.name}</span>
                      <span className="text-xs text-gray-500">{category.productCount} items</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}