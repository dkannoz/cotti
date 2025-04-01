'use client'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const images = [
    { src: '/images/Cotti-4-crunch.png', alt: 'Placeholder 1' },
    { src: '/images/Cotti-35-crunch.png', alt: 'Placeholder 2' },
    { src: '/images/Cotti-58-crunch.png', alt: 'Placeholder 3' },
]

export default function ImageCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 4000, stopOnInteraction: false }),
    ])

    return (
        // Reuse the outer section styling from Testimonial.tsx
        <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-xl shadow-2xl shadow-[#366A79]/70">
            {/* Optional: Add a background image like in Testimonial if desired */}
            {/* <div className="absolute inset-0 object-cover">
        <Image
          alt="background"
          src="/images/field.png" // Example background
          fill
          className="object-cover"
        />
      </div> */}

            {/* Carousel container */}
            {/* Adjust padding/margin as needed */}
            {/* <div className="relative z-10 p-4 sm:p-6 lg:p-8"> */}
            <div className="relative z-10">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {images.map((img, index) => (
                            <div className="relative min-w-0 flex-[0_0_100%]" key={index}>
                                {/* Adjust aspect ratio or height as needed */}
                                <div className="relative aspect-video w-full">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover"
                                        priority={index === 0} // Prioritize loading the first image
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optional: Add navigation buttons or dots if needed */}
                {/* Example buttons: */}
                {/* <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
          <button
            className="embla__prev rounded-full bg-white/50 p-2 text-black hover:bg-white"
            onClick={() => emblaApi?.scrollPrev()}
          >
            Prev
          </button>
          <button
            className="embla__next rounded-full bg-white/50 p-2 text-black hover:bg-white"
            onClick={() => emblaApi?.scrollNext()}
          >
            Next
          </button>
        </div> */}
            </div>
        </section>
    )
} 