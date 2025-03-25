/**
 * @fileoverview Call-to-Action component for the Solar Technologies website.
 * A conversion-focused section that encourages users to take action,
 * typically placed at the end of the landing page.
 */

import Image from "next/image"
import Link from "next/link"
import { Button } from "../Button"

/**
 * @component CallToAction
 * @description A conversion-focused section that prompts users to engage with the service.
 * Features a compelling headline, brief description, action buttons, and a supporting image.
 * 
 * The component is designed with a two-column layout:
 * - Left column contains text content and call-to-action buttons
 * - Right column displays a visual (farm image) that reinforces the message
 * 
 * This component is strategically placed at the end of the page to capture
 * user interest after they've been educated about the product/service.
 * 
 * @returns {JSX.Element} The rendered Call-to-Action section
 */
export function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="mx-auto max-w-6xl">
      <div className="grid items-center gap-8 sm:grid-cols-6">
        {/* Text content and buttons column */}
        <div className="sm:col-span-2">
          {/* Main heading - clear, action-oriented text */}
          <h2
            id="cta-title"
            className="scroll-my-60 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl"
          >
            Ready to get started?
          </h2>

          {/* Supporting description - brief explanation of next steps */}
          <p className="mt-3 mb-8 text-lg text-gray-600">
            Begin your smart farming journey today or talk to our agronomists
            about your specific needs.
          </p>

          {/* Call-to-action buttons - primary and secondary options */}
          <div className="flex flex-wrap gap-4">
            {/* Primary CTA button */}
            <Button asChild className="text-md">
              <Link href="#">Start now</Link>
            </Button>

            {/* Secondary CTA button - alternative action */}
            <Button asChild className="text-md" variant="secondary">
              <Link href="#">Find nearest dealer</Link>
            </Button>
          </div>
        </div>

        {/* Visual content column - farm image */}
        <div className="relative isolate rounded-xl sm:col-span-4 sm:h-full">
          {/* Blurred background copy of the image for visual effect */}
          <Image
            aria-hidden
            alt="Farm with vehicles"
            src="/images/farm-footer.webp"
            height={1000}
            width={1000}
            className="absolute inset-0 -z-10 rounded-2xl blur-xl"
          />

          {/* Main sharp image */}
          <Image
            alt="Farm with vehicles"
            src="/images/farm-footer.webp"
            height={1000}
            width={1000}
            className="relative z-10 rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default CallToAction
