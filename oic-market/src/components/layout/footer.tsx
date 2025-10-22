import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-emerald-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Stay Connected</h3>
              <p className="text-emerald-100">Subscribe to get updates on new arrivals and exclusive offers</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900 border-0 rounded-r-none"
              />
              <Button className="bg-gold-600 hover:bg-gold-700 text-white rounded-l-none border-l-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-emerald-600 text-white p-2 rounded-lg">
                <div className="text-xl font-bold font-arabic">OIC</div>
              </div>
              <div>
                <div className="text-xl font-bold gradient-text">OIC Markeït</div>
                <div className="text-sm text-gray-400">Islamic Marketplace</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted Islamic marketplace offering authentic halal products, modest fashion, 
              Islamic books, and more. Serving the global Muslim community with faith-based commerce.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span>support@oicmarket.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span>123 Islamic Center Blvd, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/press" className="text-gray-300 hover:text-white transition-colors">Press</Link></li>
              <li><Link href="/affiliate" className="text-gray-300 hover:text-white transition-colors">Become Seller</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/track-order" className="text-gray-300 hover:text-white transition-colors">Track Your Order</Link></li>
              <li><Link href="/returns" className="text-gray-300 hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/shipping" className="text-gray-300 hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link href="/size-guide" className="text-gray-300 hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link href="/warranty" className="text-gray-300 hover:text-white transition-colors">Warranty</Link></li>
            </ul>
          </div>

          {/* Islamic Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Islamic Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/islamic-books" className="text-gray-300 hover:text-white transition-colors">Islamic Books</Link></li>
              <li><Link href="/category/prayer-items" className="text-gray-300 hover:text-white transition-colors">Prayer Items</Link></li>
              <li><Link href="/category/modest-fashion" className="text-gray-300 hover:text-white transition-colors">Modest Fashion</Link></li>
              <li><Link href="/category/halal-cosmetics" className="text-gray-300 hover:text-white transition-colors">Halal Cosmetics</Link></li>
              <li><Link href="/category/home-decor" className="text-gray-300 hover:text-white transition-colors">Islamic Home Decor</Link></li>
              <li><Link href="/ramadan" className="text-gray-300 hover:text-white transition-colors">Ramadan Collection</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Payment Methods */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-sm text-gray-400">Follow us:</span>
              <div className="flex space-x-3">
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Secure payments:</span>
              <div className="flex space-x-2">
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-semibold text-gray-900">VISA</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-semibold text-gray-900">MC</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-semibold text-gray-900">AMEX</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-semibold text-gray-900">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-2 md:mb-0">
              <p>&copy; 2024 OIC Markeït. All rights reserved. Built with faith and dedication.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}