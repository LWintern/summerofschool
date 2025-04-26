"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Menu, ChevronLeft, ChevronRight } from "lucide-react"
import { contentCards } from "../../../data/contentDiscovery"

export default function ContentDiscovery() {
  const [activeTab, setActiveTab] = useState("popular")
  const [activeIndex, setActiveIndex] = useState(3)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const autoPlayDelay = 3000

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => {
          if (prevIndex >= contentCards.length - 1) {
            return 0;
          }
          return prevIndex + 1;
        });
      }, autoPlayDelay);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);
  
  // Now this function only updates the active card but doesn't navigate
  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }

  const handlePrevious = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? contentCards.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === contentCards.length - 1 ? 0 : prev + 1));
  }, []);

  const calculateCardStyle = (index: number) => {
    const isActive = index === activeIndex;
    let position = index - activeIndex;
    
    if (position > contentCards.length / 2) {
      position -= contentCards.length;
    } else if (position < -contentCards.length / 2) {
      position += contentCards.length;
    }
    
    const baseScale = isMobile ? 0.85 : 1;
    const activeScale = isMobile ? 1 : 1.15;
    const xOffset = isMobile ? 60 : 120;
    const rotationFactor = isMobile ? 10 : 15;
    
    if (isActive) {
      return {
        transform: `translateX(0) scale(${activeScale})`,
        zIndex: 50,
        opacity: 1,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
      }
    }
    
    const xPosition = position * xOffset;
    const rotationAngle = position * rotationFactor;
    const scale = Math.max(baseScale * 0.7, baseScale - Math.abs(position) * 0.15);
    const zIndex = 40 - Math.abs(position) * 10;
    const opacity = Math.max(0.4, 1 - Math.abs(position) * 0.3);
    
    return {
      transform: `translateX(${xPosition}px) rotate(${rotationAngle}deg) scale(${scale})`,
      zIndex,
      opacity,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    }
  }

  return (
    <div className="bg-gray-50 p-2 sm:p-4 md:p-8">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-2 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-8">
          Discover Unlimited Content
        </h1>

        {/* Tabs */}
        <div className="overflow-x-auto">
          <Tabs 
            defaultValue="popular" 
            className="mb-6 md:mb-12 flex justify-center min-w-max"
            onValueChange={setActiveTab}
          >
            <TabsList className="h-9 sm:h-10">
              <TabsTrigger 
                value="popular" 
                className={`text-xs sm:text-sm whitespace-nowrap ${
                  activeTab === "popular" ? "bg-purple-600 text-white" : ""
                }`}
              >
                Popular
              </TabsTrigger>
              <TabsTrigger value="latest" className="text-xs sm:text-sm whitespace-nowrap">
                Latest
              </TabsTrigger>
              <TabsTrigger value="top-rated" className="text-xs sm:text-sm whitespace-nowrap">
                Top Rated
              </TabsTrigger>
              <TabsTrigger value="recommended" className="text-xs sm:text-sm whitespace-nowrap">
                Recommended
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Carousel */}
        <div 
          className="relative h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center perspective"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 z-50 hidden md:flex"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 z-50 hidden md:flex"
            onClick={handleNext}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Cards Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {contentCards.map((card, index) => (
              <div
                key={card.id}
                className={cn(
                  "absolute transition-all duration-500 ease-out",
                  "rounded-xl overflow-hidden shadow-xl",
                  "w-[180px] sm:w-[240px] md:w-[280px]",
                  "h-[270px] sm:h-[350px] md:h-[400px]"
                )}
                style={calculateCardStyle(index)}
                onClick={() => handleCardClick(index)}
              >
                {/* This button wraps the card content and makes it clickable to go to detail page */}
                <Button 
                  asChild 
                  variant="ghost" 
                  className="p-0 h-full w-full block" 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents triggering the parent onClick
                  }}
                >
                  <Link href={`/content/${card.id}`} className="relative w-full h-full block">
                    <div className="relative w-full h-full">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 180px, (max-width: 1024px) 240px, 280px"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-2 sm:p-3 md:p-4">
                        <div className="flex justify-between">
                          <span className="bg-yellow-500 text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
                            {card.rating.toFixed(1)}
                          </span>
                          <span className="bg-black/50 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
                            {card.duration}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-white text-sm sm:text-base md:text-lg font-bold mb-0.5 sm:mb-1 line-clamp-2">
                            {card.title}
                          </h3>
                          <div className="flex items-center text-gray-300 text-[10px] sm:text-xs gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                            <span>{card.year}</span>
                            {card.seasons && (
                              <span>{card.seasons} Seasons</span>
                            )}
                            {card.episodes && (
                              <span>{card.episodes} Episodes</span>
                            )}
                          </div>
                          <span className="inline-block bg-black/30 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
                            {card.genre}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}