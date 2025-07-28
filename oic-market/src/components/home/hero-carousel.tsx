"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { banners } from "@/lib/mock-data"

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const activeBanners = banners.filter(banner => banner.isActive)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activeBanners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [activeBanners.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activeBanners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activeBanners.length) % activeBanners.length)
  }

  if (!activeBanners.length) return null

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {activeBanners.map((banner, index) => (
          <div key={banner.id} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/30 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    {banner.title}
                  </h2>
                  {banner.subtitle && (
                    <p className="text-lg md:text-xl mb-6 opacity-90">
                      {banner.subtitle}
                    </p>
                  )}
                  <Button 
                    size="lg" 
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
                    asChild
                  >
                    <Link href={banner.link}>
                      Shop Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {activeBanners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-white" 
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  )
}