"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Menu } from "lucide-react"

interface ContentCard {
  id: number
  title: string
  image: string
  year: number
  rating: number
  duration: string
  seasons?: number
  genre: string
  episodes?: number
}

export default function ContentDiscovery() {
  const [activeTab, setActiveTab] = useState("popular")
  const [activeIndex, setActiveIndex] = useState(3) // Middle card (index 3) is active by default

  const contentCards: ContentCard[] = [
    {
      id: 1,
      title: "Card One",
      image: "/placeholder.svg",
      year: 2023,
      rating: 8.5,
      duration: "2h 30m",
      genre: "Action"
    },
    {
      id: 2,
      title: "Card Two",
      image: "/placeholder.svg",
      year: 2023,
      rating: 8.7,
      duration: "2h 15m",
      genre: "Drama"
    },
    {
      id: 3,
      title: "The Morning Show",
      image: "/placeholder.svg",
      year: 2021,
      rating: 8.7,
      duration: "2h 25m",
      genre: "Drama",
      episodes: 20,
      seasons: 3
    },
    {
      id: 4,
      title: "Card Four",
      image: "/placeholder.svg",
      year: 2023,
      rating: 9.0,
      duration: "2h 20m",
      genre: "Sci-Fi"
    },
    {
      id: 5,
      title: "Card Five",
      image: "/placeholder.svg",
      year: 2023,
      rating: 8.8,
      duration: "2h 10m",
      genre: "Thriller"
    },
    {
      id: 6,
      title: "Card Six",
      image: "/placeholder.svg",
      year: 2023,
      rating: 8.6,
      duration: "2h 25m",
      genre: "Comedy"
    },
    {
      id: 7,
      title: "Card Seven",
      image: "/placeholder.svg",
      year: 2023,
      rating: 8.4,
      duration: "2h 35m",
      genre: "Horror"
    }
  ]

  const handleCardClick = (index: number) => {
    setActiveIndex(index)
  }

  // Calculate position and rotation for cards
  const calculateCardStyle = (index: number) => {
    const isActive = index === activeIndex
    const position = index - activeIndex
    
    if (isActive) {
      return {
        transform: 'translateX(0) scale(1.15)',
        zIndex: 50,
        opacity: 1
      }
    }
    
    // Calculate relative position and rotation
    const xPosition = position * 120 // Horizontal offset
    const rotationAngle = position * +15 // Rotation angle (negative for proper fan effect)
    const scale = Math.max(0.7, 1 - Math.abs(position) * 0.15)
    const zIndex = 40 - Math.abs(position) * 10
    const opacity = Math.max(0.4, 1 - Math.abs(position) * 0.3)
    
    return {
      transform: `translateX(${xPosition}px) rotate(${rotationAngle}deg) scale(${scale})`,
      zIndex,
      opacity
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-8">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-purple-600 border-b-2 border-purple-600 pb-1">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Movies
            </a>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              TV Shows
            </a>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Watchlist
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Discover Unlimited Content</h1>

        {/* Tabs */}
        <Tabs defaultValue="popular" className="mb-12 flex justify-center" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="popular" className={activeTab === "popular" ? "bg-purple-600 text-white" : ""}>
              Popular
            </TabsTrigger>
            <TabsTrigger value="latest">Latest</TabsTrigger>
            <TabsTrigger value="top-rated">Top Rated</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Card Carousel */}
        <div className="relative h-[500px] flex items-center justify-center perspective">
          <div className="relative w-full h-full flex items-center justify-center">
            {contentCards.map((card, index) => {
              const style = calculateCardStyle(index)
              const isActive = index === activeIndex

              return (
                <div
                  key={card.id}
                  className={cn(
                    "absolute transition-all duration-500 ease-out cursor-pointer",
                    "rounded-xl overflow-hidden shadow-xl",
                    "w-[280px] h-[400px]",
                  )}
                  style={{
                    transform: style.transform,
                    zIndex: style.zIndex,
                    opacity: style.opacity,
                    transformOrigin: "center bottom"
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="280px"
                    />
                    
                    {/* Card Content Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-4">
                      {/* Top section */}
                      <div className="flex justify-between">
                        <span className="bg-yellow-500 text-xs font-bold px-2 py-1 rounded-md">
                          {card.rating.toFixed(1)}
                        </span>
                        <span className="bg-black/50 text-white text-xs px-2 py-1 rounded-md">
                          {card.duration}
                        </span>
                      </div>

                      {/* Bottom section */}
                      <div>
                        <h3 className="text-white text-lg font-bold mb-1">{card.title}</h3>
                        <div className="flex items-center text-gray-300 text-xs gap-2 mb-1">
                          <span>{card.year}</span>
                          {card.seasons && (
                            <span>{card.seasons} Seasons</span>
                          )}
                          {card.episodes && (
                            <span>{card.episodes} Episodes</span>
                          )}
                        </div>
                        <span className="inline-block bg-black/30 text-white text-xs px-2 py-1 rounded-md">
                          {card.genre}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}