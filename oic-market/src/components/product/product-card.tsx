import Image from "next/image"
import Link from "next/link"
import { Heart, Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Product } from "@/lib/types"
import { formatPrice, formatDiscount } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  const discount = product.originalPrice 
    ? formatDiscount(product.originalPrice, product.price)
    : null

  return (
    <div className={`group bg-white rounded-lg border hover:shadow-lg transition-all duration-200 overflow-hidden ${className}`}>
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {discount && (
            <Badge variant="destructive" className="text-xs">
              -{discount}%
            </Badge>
          )}
          {product.isHalal && (
            <Badge variant="success" className="text-xs bg-emerald-500">
              Halal
            </Badge>
          )}
          {product.isEidSpecial && (
            <Badge className="text-xs bg-gold-500">
              Eid Special
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 p-2 bg-white/90 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
        </button>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
            <Link 
              href={`/product/${product.slug}`}
              className="font-medium text-gray-900 hover:text-emerald-600 line-clamp-2 text-sm leading-tight"
            >
              {product.name}
            </Link>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-emerald-600">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="flex items-center justify-between">
          <span className={`text-xs ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
          
          {/* Tags */}
          <div className="flex gap-1">
            {product.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs px-1 py-0">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}