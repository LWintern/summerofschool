"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Play, Plus, Star } from "lucide-react"
import { testimonials } from "../../../data/testimonials"

export default function Testimonials() {
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1)
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(4)
  const totalTestimonials = testimonials.length
  const totalPages = Math.ceil(totalTestimonials / testimonialsPerPage)
  
  // Track expanded state for each testimonial
  const [expandedTestimonials, setExpandedTestimonials] = useState<Record<string, boolean>>({})

  // Get current testimonials
  const indexOfLastTestimonial = currentPage * testimonialsPerPage
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage
  const currentTestimonials = testimonials.slice(
    indexOfFirstTestimonial,
    indexOfLastTestimonial
  )

  // Update testimonials per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTestimonialsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setTestimonialsPerPage(2)
      } else {
        setTestimonialsPerPage(4)
      }
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Toggle expanded state for a testimonial
  const toggleExpanded = (id: string) => {
    setExpandedTestimonials(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // Pagination handlers
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
  }

  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={cn(
              "w-4 h-4",
              star <= Math.floor(rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300 fill-gray-300"
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <span className="ml-2 text-yellow-500 font-medium">{rating}</span>
    </div>
  )

  return (
    <div className="w-full bg-white text-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Google Reviews Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold ">Testimonials</h2>
          {/* <Button 
            className="bg-white hover:bg-gray-100 text-black flex items-center gap-2 rounded-full px-4 py-2 text-sm"
          >
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            Google Reviews
          </Button> */}
        </div>
        
        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentTestimonials.map((testimonial) => (
              <Card 
                key={testimonial.id} 
                className="bg-black rounded-lg overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-4">
                    <div className="uppercase text-xs font-medium text-gray-500">
                      {testimonial.header}
                    </div>

                    <div>
                      <p className={cn(
                        "text-white font-medium",
                        expandedTestimonials[testimonial.id] ? "" : "line-clamp-3"
                      )}>
                        {testimonial.quote}
                      </p>
                      <button 
                        onClick={() => toggleExpanded(testimonial.id.toString())}
                        className="text-blue-600 text-sm font-medium mt-2 hover:underline"
                      >
                        {expandedTestimonials[testimonial.id] ? "Show Less" : "Read More"}
                      </button>
                    </div>

                    {testimonial.rating && (
                      <StarRating rating={testimonial.rating} />
                    )}

                    <div className="text-5xl text-white font-serif">"</div>

                    <div className="flex items-center pt-4 text-white">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-white text-sm">{testimonial.name}</p>
                        <p className="text-white text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="opacity-75 hover:opacity-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">
                {currentPage}/{totalPages}
              </span>
              <div className="w-24 h-1 bg-gray-200 rounded-full">
                <div
                  className="h-1 bg-gray-800 rounded-full transition-all duration-300"
                  style={{ width: `${(currentPage / totalPages) * 100}%` }}
                ></div>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="opacity-75 hover:opacity-100"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Medical Brunch Section - Improved */}
        <div className="px-4 sm:px-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Plus 250 medical brunch
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
              all over the country!
            </p>
          </div>

          {/* Image container with adjusted diensions to prevent cropping */}
          <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image 
                src="/assets/Artboard 1.png" 
                alt="Medical brunch events nationwide" 
                fill 
                className="object-contain"
                sizes="(max-width:740px) 90vw, (max-width: 1024px) 70vw, 900px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}