"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { images } from "../../../data/gallery"

export default function ImageGallery() {
  const [isMobile, setIsMobile] = useState(false)

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 lg:p-12">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
            No More Boring Stock Images
          </h1>
          <button className="bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full 
                           text-base sm:text-lg hover:bg-yellow-300 transition-colors duration-300
                           transform hover:scale-105 active:scale-95">
            Browse Gallery
          </button>
        </div>
      </header>

      {/* Image Grid Container */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square rounded-lg overflow-hidden group transition-all duration-300 
                        hover:shadow-2xl transform hover:scale-105"
            >
              <Image
                src={image.src}
                alt={image.name}
                fill
                className="object-cover transition-transform duration-300 
                         group-hover:scale-105 bg-gray-800"
                sizes="(max-width: 768px) 50vw, 
                       (max-width: 1200px) 33vw,
                       20vw"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3
                              bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-sm sm:text-base font-medium truncate">
                    {image.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </div>
  )
}