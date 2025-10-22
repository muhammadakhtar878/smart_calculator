"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Star, Heart, ShoppingCart, Minus, Plus, Truck, Shield, RotateCcw, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product/product-card"
import { products } from "@/lib/mock-data"
import { formatPrice } from "@/lib/utils"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.slug === params.slug)
  
  if (!product) {
    notFound()
  }

  const [selectedImage, setSelectedImage] = React.useState(0)
  const [quantity, setQuantity] = React.useState(1)
  // const [selectedSize, setSelectedSize] = React.useState("")
  const [isWishlist, setIsWishlist] = React.useState(false)

  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4)

  const reviews = [
    {
      id: 1,
      name: "Ahmed Hassan",
      rating: 5,
      comment: "Excellent quality product. Very satisfied with my purchase. Fast delivery and authentic item.",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Fatima Al-Zahra",
      rating: 4,
      comment: "Good product overall. The quality is as expected and the seller was very responsive.",
      date: "2024-01-10"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-emerald-600">Home</Link>
        <span>/</span>
        <Link href={`/category/${product.category.toLowerCase()}`} className="hover:text-emerald-600">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg border">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.discount && (
                <Badge variant="destructive">-{product.discount}%</Badge>
              )}
              {product.isHalal && (
                <Badge className="bg-emerald-500">Halal Certified</Badge>
              )}
              {product.isEidSpecial && (
                <Badge className="bg-gold-500">Eid Special</Badge>
              )}
            </div>

            {/* Share Button */}
            <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
              <Share2 className="h-4 w-4" />
            </button>
          </div>

          {/* Thumbnail Images */}
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? 'border-emerald-500' : 'border-gray-200'
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-emerald-600 font-medium">{product.brand}</p>
            <h1 className="text-3xl font-bold text-gray-900 mt-1">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center space-x-2 mt-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-emerald-600">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xl text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* Quantity Selector */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <div className="flex space-x-3">
              <Button 
                size="lg" 
                className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsWishlist(!isWishlist)}
                className={isWishlist ? 'text-red-500 border-red-500' : ''}
              >
                <Heart className={`h-5 w-5 ${isWishlist ? 'fill-current' : ''}`} />
              </Button>
            </div>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
              disabled={!product.inStock}
            >
              Buy Now
            </Button>
          </div>

          {/* Features */}
          <div className="border-t pt-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-emerald-500" />
                <span className="text-sm">Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-emerald-500" />
                <span className="text-sm">2-year warranty included</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-5 w-5 text-emerald-500" />
                <span className="text-sm">30-day return policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
              <div className="mt-4 space-y-2">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="mr-2">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b">
                  <span className="font-medium text-gray-900">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Customer Reviews</h3>
                <Button variant="outline">Write a Review</Button>
              </div>
              
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{review.name}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}