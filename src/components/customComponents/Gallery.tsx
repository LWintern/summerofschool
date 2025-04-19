"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { images } from "../../../data/gallery"

export default function ImageGallery() {
  const [isMobile, setIsMobile] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setWindowWidth(window.innerWidth)
    }

    // Initial check
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Adjust image positions based on screen size
  const getResponsivePosition = (image: any) => {
    if (isMobile) {
      // Mobile layout adjustments
      return {
        bottom: `${parseInt(image.position.bottom) * 0.6}px`, // Scale down positions
        left: `${parseInt(image.position.left) * 0.6}px`,
        zIndex: image.position.zIndex,
      }
    }
    return image.position
  }

  // Adjust image dimensions based on screen size
  const getResponsiveSize = (width: string, height: string) => {
    if (isMobile) {
      // Scale down sizes for mobile
      return {
        width: `w-${parseInt(width.split('-')[1]) * 0.6}`,
        height: `h-${parseInt(height.split('-')[1]) * 0.6}`,
      }
    }
    return { width, height }
  }

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

      {/* Image Stack Container */}
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full overflow-x-auto scrollbar-hide">
          <div className={`relative h-[400px] sm:h-[600px] md:h-[800px] 
                          min-w-[320px] sm:min-w-[640px] md:min-w-[1080px]
                          transition-all duration-300`}>
            <div className="absolute inset-0 flex justify-center">
              {images.map((image) => {
                const responsivePosition = getResponsivePosition(image)
                const { width, height } = getResponsiveSize(image.width, image.height)

                return (
                  <div
                    key={image.id}
                    className={`
                      absolute rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden
                      ${width} ${height}
                      transition-all duration-300 ease-in-out
                      hover:shadow-2xl
                      transform hover:scale-[1.02]
                    `}
                    style={{
                      bottom: responsivePosition.bottom,
                      left: responsivePosition.left,
                      zIndex: responsivePosition.zIndex,
                      transform: `translateY(${image.position.stackOn ? '-5px' : '0'})`,
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.name}
                        fill
                        className="object-cover transition-transform duration-300 
                                 hover:scale-105 bg-gray-800"
                        sizes="(max-width: 768px) 100vw, 
                               (max-width: 1200px) 50vw,
                               33vw"
                        priority={image.position.zIndex > 10} // Prioritize loading for top images
                      />
                      
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 
                                    transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4
                                      bg-gradient-to-t from-black/80 to-transparent">
                          <p className="text-sm sm:text-base font-medium truncate">
                            {image.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        {isMobile && (
          <div className="mt-4 text-center text-sm text-gray-400">
            Scroll horizontally to view more images
          </div>
        )}
      </div>
    </div>
  )
}