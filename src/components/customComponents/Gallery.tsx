  // "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { images } from "../../../data/gallery"

// export default function ImageGallery() {
//   const [isMobile, setIsMobile] = useState(false)

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768)
//     }

//     // Initial check
//     handleResize()

//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   return (
//     <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 lg:p-12">
//       {/* Header */}
//       <header className="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
//         <div className="max-w-2xl">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
//             No More Boring Stock Images
//           </h1>
//           <button className="bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full 
//                            text-base sm:text-lg hover:bg-yellow-300 transition-colors duration-300
//                            transform hover:scale-105 active:scale-95">
//             Browse Gallery
//           </button>
//         </div>
//       </header>

//       {/* Image Grid Container */}
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
//           {images.map((image) => (
//             <div
//               key={image.id}
//               className="relative aspect-square rounded-lg overflow-hidden group transition-all duration-300 
//                         hover:shadow-2xl transform hover:scale-105"
//             >
//               <Image
//                 src={image.src}
//                 alt={image.name}
//                 fill
//                 className="object-cover transition-transform duration-300 
//                          group-hover:scale-105 bg-gray-800"
//                 sizes="(max-width: 768px) 50vw, 
//                        (max-width: 1200px) 33vw,
//                        20vw"
//               />
              
//               {/* Image Overlay */}
//               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 
//                             transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-3
//                               bg-gradient-to-t from-black/80 to-transparent">
//                   <p className="text-sm sm:text-base font-medium truncate">
//                     {image.name}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

      
//       </div>
//     </div>
//   )
// }








"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ImageCard {
    id: number
    name: string
    src: string
    width: string
    height: string
    position: {
      bottom?: string
      left?: string
      stackOn?: number
      zIndex: number
    }
  }

export const images: ImageCard[] = [
  // Bottom Base Cards (ID: 1-6)
  {
    id: 1,
    name: "base-1",
    src: "/assets/gallery/Asset_1[1].png",
    width: "150px",
    height: "280px",
    position: {
      bottom: "0px",
      left: "0px",
      zIndex: 1
    }
  },
  {
    id: 2,
    name: "base-2",
    src: "/assets/gallery/DSC02498.JPG",
    width: "150px",
    height: "180px",
    position: {
      bottom: "0px",
      left: "170px",
      zIndex: 1
    }
  },
  {
    id: 3,
    name: "base-3",
    src: "/assets/gallery/DSC02507.JPG",
    width: "150px",
    height: "160px",
    position: {
      bottom: "0px",
      left: "340px",
      zIndex: 1
    }
  },
  {
    id: 4,
    name: "base-4",
    src: "/assets/gallery/DSC03396.JPG",
    width: "150px",
    height: "220px",
    position: {
      bottom: "0px",
      left: "510px",
      zIndex: 1
    }
  },
  {
    id: 5,
    name: "base-5",
    src: "/assets/gallery/IMG_5477.JPG",
    width: "150px",
    height: "225px",
    position: {
      bottom: "0px",
      left: "680px",
      zIndex: 1
    }
  },
  {
    id: 6,
    name: "base-6",
    src: "/assets/gallery/IMG_5691.JPG",
    width: "150px",
    height: "200px",
    position: {
      bottom: "0px",
      left: "850px",
      zIndex: 1
    }
  },
  // First Layer Stack
  {
    id: 7,
    name: "stack-2-1",
    src: "/assets/gallery/IMG_5851.JPG",
    width: "150px",
    height: "190px",
    position: {
      bottom: "190px",
      left: "170px",
      stackOn: 2,
      zIndex: 2
    }
  },
  {
    id: 8,
    name: "stack-3-1",
    src: "/assets/gallery/IMG_6034.JPG",
    width: "150px",
    height: "160px",
    position: {
      bottom: "170px",
      left: "340px",
      stackOn: 3,
      zIndex: 2
    }
  },
  // Second Layer Stack
  // {
  //   id: 9,
  //   name: "stack-1-1",
  //   src: "/assets/gallery/IMG_6227.JPG",
  //   width: "150px",
  //   height: "220px",
  //   position: {
  //     bottom: "260px",
  //     left: "0px",
  //     stackOn: 1,
  //     zIndex: 2
  //   }
  // },
  {
    id: 10,
    name: "stack-4-1",
    src: "/assets/gallery/IMG_6421.JPG",
    width: "150px",
    height: "180px",
    position: {
      bottom: "230px",
      left: "510px",
      stackOn: 4,
      zIndex: 2
    }
  },
  {
    id: 11,
    name: "stack-5-1",
    src: "/assets/gallery/IMG_6431.JPG",
    width: "150px",
    height: "210px",
    position: {
      bottom: "230px",
      left: "680px",
      stackOn: 5,
      zIndex: 2
    }
  },
  {
    id: 11,
    name: "stack-5-2",
    src: "/assets/gallery/IMG_6227.JPG",
    width: "150px",
    height: "260px",
    position: {
      bottom: "210px",
      left: "850px",
      stackOn: 5,
      zIndex: 2
    }
  },
  // Third Layer Stack
  // {
  //   id: 12,
  //   name: "stack-2-2",
  //   src: "/assets/gallery/IMG_6478 (1).JPG",
  //   width: "150px",
  //   height: "190px",
  //   position: {
  //     bottom: "400px",
  //     left: "170px",
  //     stackOn: 2,
  //     zIndex: 3
  //   }
  // },
  {
    id: 13,
    name: "stack-4-2",
    src: "/assets/gallery/IMG_6557.JPG",
    width: "150px",
    height: "220px",
    position: {
      bottom: "420px",
      left: "510px",
      stackOn: 4,
      zIndex: 3
    }
  },
  // Fourth Layer Stack
  {
    id: 14,
    name: "stack-3-2",
    src: "/assets/gallery/IMG_6542.JPG",
    width: "150px",
    height: "200px",
    position: {
      bottom: "340px",
      left: "340px",
      stackOn: 3,
      zIndex: 3
    }
  },
  {
    id: 15,
    name: "stack-5-2",
    src: "/assets/gallery/Recovered_jpg_file(767).jpg",
    width: "150px",
    height: "280px",
    position: {
      bottom: "450px",
      left: "680px",
      stackOn: 5,
      zIndex: 3
    }
  },
  {
    id: 15,
    name: "stack-5-2",
    src: "/assets/gallery/IMG_6478 (1).JPG",
    width: "150px",
    height: "320px",
    position: {
      bottom: "480px",
      left: "850px",
      stackOn: 5,
      zIndex: 3
    }
  }
]

export default function ImageGallery() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-80 lg:p-20 ">
      <header className="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
        <div className="max-w-2xl -mb-80">
          <h1 className="text-3xl lg:text-7xl md:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
            No More Boring Stock Images
          </h1>
          <button 
            className="bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full 
                     text-base sm:text-lg hover:bg-yellow-300 transition-all duration-300
                     transform hover:scale-105 active:scale-95"
          >
            Browse Gallery
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto overflow-hidden">
        <div 
          className="relative mx-auto" 
          style={{ 
            height: "800px",
            maxWidth: "1000px" // Adjusted to fit 6 cards with gaps
          }}
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="absolute rounded-lg overflow-hidden group 
                       transition-all duration-300 hover:shadow-2xl hover:scale-105"
              style={{
                width: image.width,
                height: image.height,
                bottom: image.position.bottom,
                left: image.position.left,
                zIndex: image.position.zIndex,
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.name}
                  fill
                  className="object-cover"
                  sizes="150px"
                  priority={image.id <= 6} // Prioritize loading base cards
                />
              </div>
              
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
      </main>
    </div>
  )
}