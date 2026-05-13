
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Mountain",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    alt: "Beach",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    alt: "Forest",
  },
]

const PreviewHeader = () => {
  return (
    <section className="flex justify-center">
      <Carousel className="relative w-full max-w-[12rem] sm:max-w-xs h-50">
        <CarouselContent className="relative bg-red-50 h-50">
          {images.map((image) => (
            <CarouselItem key={image.id}>

                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full"
                    />

            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2"  />
        <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
      </Carousel>
    </section>
  )
}

export default PreviewHeader