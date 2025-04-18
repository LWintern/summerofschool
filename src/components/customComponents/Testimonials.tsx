

"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Play, Plus } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  avatar: string
  rating?: number
  header: string
}

export default function EnhancedMedicalServices() {
  const [currentPage, setCurrentPage] = useState(2)
  const totalPages = 30

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jenna Milton",
      role: "Nail Cosmetician",
      quote: "The cosmetician isn't just about enhancing beauty, but crafting confidence.",
      avatar: "/placeholder.svg?height=60&width=60",
      header: "NEW VISIT BY MEDICAL CENTER",
    },
    {
      id: 2,
      name: "Maria Reed",
      role: "MD Female Doctor - Dr. Nita Pinkose",
      quote: "In the realm of care, my doctor here isn't just a practitioner; they're a guardian of health.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4.2,
      header: "MEDICAL CENTER PATIENT",
    },
    {
      id: 3,
      name: "Michiko Miller",
      role: "Surgeon",
      quote: "Trust isn't given; it's earned. And my surgeon here didn't just earn my trust, but my admiration.",
      avatar: "/placeholder.svg?height=60&width=60",
      header: "BRUNCH 047",
    },
    {
      id: 4,
      name: "Sharon Roberts",
      role: "Dental Clinic",
      quote: "My dental clinic isn't just about fixing smiles; it's about creating them.",
      avatar: "/placeholder.svg?height=60&width=60",
      header: "DENTIST VISIT",
    },
  ]

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
  }

  return (
    <div className="w-full bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white rounded-lg overflow-hidden border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="uppercase text-xs font-medium text-gray-500">{testimonial.header}</div>

                    {/* Quote */}
                    <p className="text-gray-800 font-medium">{testimonial.quote}</p>

                    {/* Rating if available */}
                    {testimonial.rating && (
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={cn(
                                "w-4 h-4",
                                star <= Math.floor(testimonial.rating || 0)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300 fill-gray-300",
                              )}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-yellow-500 font-medium">{testimonial.rating}</span>
                      </div>
                    )}

                    {/* Quote mark */}
                    <div className="text-5xl text-gray-300 font-serif">"</div>

                    {/* Author */}
                    <div className="flex items-center pt-4">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
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
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">
                {currentPage}/{totalPages}
              </span>
              <div className="w-24 h-1 bg-gray-200 rounded-full">
                <div
                  className="h-1 bg-gray-800 rounded-full"
                  style={{ width: `${(currentPage / totalPages) * 100}%` }}
                ></div>
              </div>
              <Button variant="ghost" size="icon" className="ml-2" onClick={handleNextPage}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Medical Brunch Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Plus 250 medical brunch</h2>
          <p className="text-3xl md:text-4xl font-bold">all over the country!</p>
        </div>

        {/* Circular Image Collage - More accurate to the reference */}
        <div className="relative h-[400px] md:h-[500px] mx-auto max-w-4xl">
          {/* Center video */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden z-20 border-4 border-white shadow-lg">
            <div className="relative w-full h-full bg-blue-100">
              <Image src="/placeholder.svg?height=250&width=250" alt="Medical facility" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 rounded-full p-3">
                  <Play className="h-8 w-8 text-white" fill="white" />
                </div>
              </div>
            </div>
          </div>

          {/* Nurse in blue uniform */}
          <div className="absolute left-[5%] top-[20%] w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full overflow-hidden z-10 border-4 border-white shadow-md bg-blue-100">
            <Image src="/placeholder.svg?height=140&width=140" alt="Nurse in blue" fill className="object-cover" />
          </div>

          {/* Doctor with stethoscope */}
          <div className="absolute right-[10%] top-[15%] w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden z-10 border-4 border-white shadow-md">
            <Image src="/placeholder.svg?height=160&width=160" alt="Doctor" fill className="object-cover" />
          </div>

          {/* Nurse in dark uniform */}
          <div className="absolute left-[20%] bottom-[15%] w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full overflow-hidden z-10 border-4 border-white shadow-md">
            <Image
              src="/placeholder.svg?height=140&width=140"
              alt="Nurse in dark uniform"
              fill
              className="object-cover"
            />
          </div>

          {/* Patient touching face */}
          <div className="absolute right-[20%] bottom-[10%] w-[130px] h-[130px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden z-10 border-4 border-white shadow-md">
            <Image src="/placeholder.svg?height=150&width=150" alt="Patient" fill className="object-cover" />
          </div>

          {/* Medical equipment */}
          <div className="absolute left-[40%] bottom-[5%] w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden z-10 border-4 border-white shadow-md bg-green-100">
            <Image src="/placeholder.svg?height=130&width=130" alt="Medical equipment" fill className="object-cover" />
          </div>

          {/* Pattern image */}
          <div className="absolute right-[5%] bottom-[30%] w-[150px] h-[150px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden z-10 border-4 border-white shadow-md bg-gray-100">
            <Image src="/placeholder.svg?height=180&width=180" alt="Medical pattern" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/50 rounded-full p-2">
                <Play className="h-6 w-6 text-white" fill="white" />
              </div>
            </div>
          </div>

          {/* Doctor in white coat */}
          <div className="absolute left-[15%] top-[50%] w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden z-10 border-4 border-white shadow-md">
            <Image src="/placeholder.svg?height=120&width=120" alt="Doctor in white" fill className="object-cover" />
          </div>

          {/* View All Services Button */}
          <div className="absolute left-[25%] top-[40%] bg-white rounded-full px-3 py-1.5 text-xs font-medium shadow-md z-30 flex items-center">
            <Plus className="h-3 w-3 mr-1" /> View All Services
          </div>

          {/* Plus button */}
          <div className="absolute left-[35%] top-[20%] bg-white rounded-full p-1.5 shadow-md z-30">
            <Plus className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
