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

export const contentCards: ContentCard[] = [
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
