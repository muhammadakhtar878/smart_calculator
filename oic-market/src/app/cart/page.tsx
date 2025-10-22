"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { products } from "@/lib/mock-data"
import { formatPrice } from "@/lib/utils"

interface CartItem {
  id: string
  product: typeof products[0]
  quantity: number
}

export default function CartPage() {
  // Mock cart items
  const [cartItems, setCartItems] = React.useState<CartItem[]>([
    {
      id: "1",
      product: products[0],
      quantity: 2
    },
    {
      id: "2", 
      product: products[1],
      quantity: 1
    },
    {
      id: "3",
      product: products[2],
      quantity: 1
    }
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id)
      return
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  const tax = subtotal * 0.08 // 8% tax
  const shipping = subtotal > 100 ? 0 : 9.99
  const total = subtotal + tax + shipping

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven&apos;t added anything to your cart yet.</p>
          <Button size="lg" asChild>
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-emerald-600">Home</Link>
        <span>/</span>
        <span className="text-gray-900">Shopping Cart</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border">
            <div className="p-6 border-b">
              <h1 className="text-2xl font-bold">Shopping Cart</h1>
              <p className="text-gray-600">{cartItems.length} items in your cart</p>
            </div>

            <div className="divide-y">
              {cartItems.map((item) => (
                <div key={item.id} className="p-6 flex items-center space-x-4">
                  {/* Product Image */}
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link 
                      href={`/product/${item.product.slug}`}
                      className="font-medium text-gray-900 hover:text-emerald-600 line-clamp-2"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">Brand: {item.product.brand}</p>
                    
                    {/* Badges */}
                    <div className="flex items-center space-x-2 mt-2">
                      {item.product.isHalal && (
                        <Badge variant="success" className="text-xs">Halal</Badge>
                      )}
                      {item.product.isEidSpecial && (
                        <Badge className="text-xs bg-gold-500">Eid Special</Badge>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p className="font-semibold text-emerald-600">
                      {formatPrice(item.product.price)}
                    </p>
                    {item.product.originalPrice && (
                      <p className="text-sm text-gray-500 line-through">
                        {formatPrice(item.product.originalPrice)}
                      </p>
                    )}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 rounded-md border hover:bg-gray-50"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded-md border hover:bg-gray-50"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Total Price */}
                  <div className="text-right">
                    <p className="font-semibold">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-md"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Actions */}
            <div className="p-6 border-t bg-gray-50">
              <div className="flex items-center justify-between">
                <Button variant="outline" asChild>
                  <Link href="/">
                    Continue Shopping
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setCartItems([])}
                  className="text-red-600 border-red-200 hover:bg-red-50"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border p-6 sticky top-8">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal ({cartItems.length} items)</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className={shipping === 0 ? 'text-green-600' : ''}>
                  {shipping === 0 ? 'FREE' : formatPrice(shipping)}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span>Tax</span>
                <span>{formatPrice(tax)}</span>
              </div>
              
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span className="text-emerald-600">{formatPrice(total)}</span>
                </div>
              </div>
            </div>

            {/* Shipping Notice */}
            {subtotal < 100 && (
              <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                <p className="text-sm text-emerald-700">
                  Add {formatPrice(100 - subtotal)} more to get FREE shipping!
                </p>
              </div>
            )}

            {/* Checkout Button */}
            <Button 
              size="lg" 
              className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700"
              asChild
            >
              <Link href="/checkout">
                Proceed to Checkout
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>

            {/* Payment Methods */}
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-3">We accept:</p>
              <div className="flex space-x-2">
                <div className="bg-gray-100 rounded px-2 py-1">
                  <span className="text-xs font-semibold">VISA</span>
                </div>
                <div className="bg-gray-100 rounded px-2 py-1">
                  <span className="text-xs font-semibold">MC</span>
                </div>
                <div className="bg-gray-100 rounded px-2 py-1">
                  <span className="text-xs font-semibold">AMEX</span>
                </div>
                <div className="bg-gray-100 rounded px-2 py-1">
                  <span className="text-xs font-semibold">PayPal</span>
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-500">
              <span>🔒</span>
              <span>Secure SSL encrypted payment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">You might also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="bg-white rounded-lg border p-4">
              <div className="relative aspect-square mb-3">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="font-medium text-sm line-clamp-2 mb-2">{product.name}</h3>
              <p className="text-emerald-600 font-semibold">{formatPrice(product.price)}</p>
              <Button size="sm" className="w-full mt-3" variant="outline">
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}