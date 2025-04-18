"use client"

import Image from "next/image"

interface ImageCard {
  id: number
  src: string
  width: string
  height: string
  className?: string
}

export default function ImageGallery() {
  const images: ImageCard[] = [
    { id: 1, src: "/flower.jpg", width: "w-[200px]", height: "h-[150px]", className: "col-start-1 row-start-2" },
    { id: 2, src: "/black-cat.jpg", width: "w-[200px]", height: "h-[250px]", className: "col-start-1 row-start-3" },
    { id: 3, src: "/plant.jpg", width: "w-[180px]", height: "h-[180px]", className: "col-start-2 row-start-2" },
    { id: 4, src: "/portrait.jpg", width: "w-[180px]", height: "h-[220px]", className: "col-start-2 row-start-3" },
    { id: 5, src: "/devil-cat.jpg", width: "w-[200px]", height: "h-[200px]", className: "col-start-3 row-start-2" },
    { id: 6, src: "/flowers.jpg", width: "w-[200px]", height: "h-[150px]", className: "col-start-3 row-start-3" },
    { id: 7, src: "/ruins.jpg", width: "w-[180px]", height: "h-[180px]", className: "col-start-3 row-start-4" },
    { id: 8, src: "/chair.jpg", width: "w-[220px]", height: "h-[280px]", className: "col-start-4 row-start-2" },
    { id: 9, src: "/abstract.jpg", width: "w-[220px]", height: "h-[220px]", className: "col-start-4 row-start-3" },
    { id: 10, src: "/beach.jpg", width: "w-[180px]", height: "h-[150px]", className: "col-start-4 row-start-4" },
    { id: 11, src: "/baby.jpg", width: "w-[200px]", height: "h-[260px]", className: "col-start-5 row-start-2" },
    { id: 12, src: "/interior.jpg", width: "w-[200px]", height: "h-[180px]", className: "col-start-5 row-start-3" },
  ]

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-12">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-16">
        

        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-8 leading-tight">
            No More Boring Stock Images
          </h1>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg hover:bg-yellow-300">
            Browse Gallery
          </button>
        </div>
      </header>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-5 gap-4 relative">
          {images.map((image) => (
            <div
              key={image.id}
              className={`relative rounded-2xl overflow-hidden ${image.width} ${image.height} ${image.className}`}
            >
              <Image
                src={image.src}
                alt="Gallery image"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300 bg-red-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}