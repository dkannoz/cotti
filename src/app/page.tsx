/**
 * @fileoverview Main homepage for the Solar Technologies application.
 * Assembles the complete landing page by combining multiple UI section components
 * in a structured layout with appropriate spacing.
 */

import { CallToAction } from "@/components/ui/CallToAction"
import FeatureDivider from "@/components/ui/FeatureDivider"
import Features from "@/components/ui/Features"
import { Hero } from "@/components/ui/Hero"
import ImageCarousel from "@/components/ui/ImageCarousel"
import { Map } from "@/components/ui/Map/Map"
import { SolarAnalytics } from "@/components/ui/SolarAnalytics"
import Testimonial from "@/components/ui/Testimonial"

/**
 * @component Home
 * @description The main landing page component that assembles all marketing sections.
 * 
 * This page follows a standard marketing site structure with:
 * 1. Hero section at the top with main value proposition
 * 2. Features section showcasing product capabilities
 * 3. Testimonial section for social proof
 * 4. Map visualization showing geographic product usage
 * 5. Analytics section demonstrating data capabilities
 * 6. Call-to-action section for conversion
 * 
 * Each section is a separate component, allowing for modular maintenance
 * and independent updates. The spacing between sections is carefully
 * designed for visual balance and readability.
 * 
 * @returns {JSX.Element} The complete homepage component
 */
export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      {/* Hero section with significant top padding for visual impact */}
      <div className="pt-56">
        <Hero />
      </div>

      {/* Testimonial section */}
      <div className="mt-22 px-4 xl:px-0">
        <ImageCarousel />
      </div>

      {/* Features section with large separation from hero */}
      <div className="mt-52 px-4 xl:px-0">
        <Features />
      </div>

      {/* Testimonial section */}
      <div className="mt-32 px-4 xl:px-0">
        <Testimonial />
      </div>

      {/* Divider before map visualization */}
      <FeatureDivider className="my-16 max-w-6xl" />

      {/* Map visualization section */}
      <div className="px-4 xl:px-0">
        <Map />
      </div>

      {/* Divider after map visualization */}
      <FeatureDivider className="my-16 max-w-6xl" />

      {/* Analytics section with bottom margin for spacing */}
      <div className="mt-12 mb-40 px-4 xl:px-0">
        <SolarAnalytics />
      </div>

      {/* Call-to-action section at the bottom of the page */}
      <div className="mt-10 mb-40 px-4 xl:px-0">
        <CallToAction />
      </div>
    </main>
  )
}
