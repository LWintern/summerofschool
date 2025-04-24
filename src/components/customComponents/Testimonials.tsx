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
    <div className="w-full bg-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Google Reviews Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">Customer Testimonials</h2>
          <Button 
            className="bg-white hover:bg-gray-100 text-black flex items-center gap-2 rounded-full px-4 py-2 text-sm"
          >
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            Google Reviews
          </Button>
        </div>
        
        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentTestimonials.map((testimonial) => (
              <Card 
                key={testimonial.id} 
                className="bg-white rounded-lg overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-4">
                    <div className="uppercase text-xs font-medium text-gray-500">
                      {testimonial.header}
                    </div>

                    <div>
                      <p className={cn(
                        "text-gray-800 font-medium",
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

                    <div className="text-5xl text-gray-300 font-serif">"</div>

                    <div className="flex items-center pt-4">
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
                        <p className="font-medium text-sm">{testimonial.name}</p>
                        <p className="text-gray-500 text-xs">{testimonial.role}</p>
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

        {/* Medical Brunch Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Plus 250 medical brunch
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
            all over the country!
          </p>
        </div>

        {/* Circular Image Collage */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] mx-auto max-w-4xl">
          {/* Center video */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] 
                        rounded-full overflow-hidden z-20 border-4 border-white shadow-lg">
            <div className="relative w-full h-full bg-blue-100">
              <Image 
                src="/placeholder.svg" 
                alt="Medical facility" 
                fill 
                className="object-cover"
                sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, 250px"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 rounded-full p-2 sm:p-3">
                  <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="white" />
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic circular images */}
          {[
            { position: 'left-[5%] top-[20%]', size: 'w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px]' },
            { position: 'right-[20%] top-[15%]', size: 'w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px]' },
            { position: 'right-[65%] top-[45%]', size: 'w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px]' },
            { position: 'right-[2%] top-[25%]', size: 'w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px]' },
            // Add more positions as needed
          ].map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.position} ${item.size} rounded-full overflow-hidden z-10 border-4 border-white shadow-md`}
            >
              <Image
                src="/placeholder.svg"
                alt={`Medical image ${index + 1}`}
                fill
                className="object-cover"
                sizes={item.size}
              />
            </div>
          ))}

          {/* Action buttons */}
          <div className="absolute left-[25%] top-[40%] bg-white rounded-full px-2 py-1 sm:px-3 sm:py-1.5 
                        text-[10px] sm:text-xs font-medium shadow-md z-30 flex items-center cursor-pointer
                        hover:shadow-lg transition-shadow duration-300">
            <Plus className="h-2 w-2 sm:h-3 sm:w-3 mr-1" /> View All Services
          </div>

          <div className="absolute left-[35%] top-[20%] bg-white rounded-full p-1 sm:p-1.5 
                        shadow-md z-30 cursor-pointer hover:shadow-lg transition-shadow duration-300">
            <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
          </div>
        </div>
      </div>
    </div>
  )
}