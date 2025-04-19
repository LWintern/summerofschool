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
        src: "/flower.jpg",
        width: "w-[160px]",
        height: "h-[250px]",
        position: {
          bottom: "0",
          left: "0",
          zIndex: 1
        }
      },
      {
        id: 2,
        name: "base-2",
        src: "/plant.jpg",
        width: "w-[160px]",
        height: "h-[180px]",
        position: {
          bottom: "0",
          left: "180px",
          zIndex: 1
        }
      },
      {
        id: 3,
        name: "base-3",
        src: "/chair.jpg",
        width: "w-[160px]",
        height: "h-[200px]",
        position: {
          bottom: "0",
          left: "360px",
          zIndex: 1
        }
      },
      {
        id: 4,
        name: "base-4",
        src: "/abstract.jpg",
        width: "w-[160px]",
        height: "h-[220px]",
        position: {
          bottom: "0",
          left: "540px",
          zIndex: 1
        }
      },
      {
        id: 5,
        name: "base-5",
        src: "/nature.jpg",
        width: "w-[160px]",
        height: "h-[190px]",
        position: {
          bottom: "0",
          left: "720px",
          zIndex: 1
        }
      },
      {
        id: 6,
        name: "base-6",
        src: "/urban.jpg",
        width: "w-[160px]",
        height: "h-[230px]",
        position: {
          bottom: "0",
          left: "900px",
          zIndex: 1
        }
      },
      // First Layer Stack
      {
        id: 7,
        name: "stack-2-1",
        src: "/urban.jpg",
        width: "w-[160px]",
        height: "h-[200px]",
        position: {
          bottom: "190px",
          left: "180px",
          stackOn: 2,
          zIndex: 2
        }
      },
      {
        id: 8,
        name: "stack-3-1",
        src: "/urban.jpg",
        width: "w-[160px]",
        height: "h-[200px]",
        position: {
          bottom: "210px",
          left: "360px",
          stackOn: 3,
          zIndex: 2
        }
      },
      // Second Layer Stack
      {
        id: 9,
        name: "stack-1-1",
        src: "/portrait.jpg",
        width: "w-[160px]",
        height: "h-[220px]",
        position: {
          bottom: "260px",
          left: "0",
          stackOn: 1,
          zIndex: 2
        }
      },
      {
        id: 10,
        name: "stack-4-1",
        src: "/landscape.jpg",
        width: "w-[160px]",
        height: "h-[180px]",
        position: {
          bottom: "230px",
          left: "540px",
          stackOn: 4,
          zIndex: 2
        }
      },
      {
        id: 11,
        name: "stack-5-1",
        src: "/city.jpg",
        width: "w-[160px]",
        height: "h-[210px]",
        position: {
          bottom: "200px",
          left: "720px",
          stackOn: 5,
          zIndex: 2
        }
      },
      // Third Layer Stack
      {
        id: 12,
        name: "stack-2-2",
        src: "/abstract2.jpg",
        width: "w-[160px]",
        height: "h-[190px]",
        position: {
          bottom: "400px",
          left: "180px",
          stackOn: 2,
          zIndex: 3
        }
      },
      {
        id: 13,
        name: "stack-4-2",
        src: "/nature2.jpg",
        width: "w-[160px]",
        height: "h-[170px]",
        position: {
          bottom: "420px",
          left: "540px",
          stackOn: 4,
          zIndex: 3
        }
      },
      // Fourth Layer Stack
      {
        id: 14,
        name: "stack-3-2",
        src: "/portrait2.jpg",
        width: "w-[160px]",
        height: "h-[200px]",
        position: {
          bottom: "420px",
          left: "360px",
          stackOn: 3,
          zIndex: 3
        }
      },
      {
        id: 15,
        name: "stack-5-2",
        src: "/urban2.jpg",
        width: "w-[160px]",
        height: "h-[190px]",
        position: {
          bottom: "420px",
          left: "720px",
          stackOn: 5,
          zIndex: 3
        }
      }
    ]