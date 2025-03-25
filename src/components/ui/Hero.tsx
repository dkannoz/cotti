/**
 * @fileoverview Hero section component for the Solar Technologies website.
 * The main landing section that presents the primary message and call-to-action.
 * Uses animation components for visual appeal and includes a Game of Life background.
 */

import { RiArrowRightUpLine } from "@remixicon/react"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"
import GameOfLife from "./HeroBackground"

/**
 * @component Hero
 * @description The main hero section displayed at the top of the homepage.
 * Features:
 * - Animated entry with staggered fade-in effects for text elements
 * - Announcement banner with blog link
 * - Main headline with large, attention-grabbing typography
 * - Supporting description text
 * - Primary call-to-action button
 * - Interactive Game of Life background visualization
 * 
 * This component establishes the brand identity and main value proposition
 * for visitors, serving as the entry point to the user journey.
 * 
 * Text is in Italian, targeting the Italian market for vehicle services.
 * 
 * @returns {JSX.Element} The rendered Hero section
 */
export function Hero() {
  return (
    <section aria-label="hero">
      <FadeContainer className="relative flex flex-col items-center justify-center">
        {/* Announcement banner - Blog link with subtle hover effect */}
        <FadeDiv className="mx-auto">
          <a
            aria-label="View latest update the changelog page"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-full"
          >
            <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-white/5 px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-gray-900 ring-1 shadow-lg shadow-orange-400/20 ring-black/10 filter backdrop-blur-[1px] transition-colors hover:bg-orange-500/[2.5%] focus:outline-hidden sm:text-sm">
              {/* Tag/badge element */}
              <span className="shrink-0 truncate rounded-full border bg-gray-50 px-2.5 py-1 text-sm text-gray-600 sm:text-xs">
                Blog
              </span>
              {/* Announcement text with arrow icon */}
              <span className="flex items-center gap-1 truncate">
                <span className="w-full truncate">
                  Le ultime novità, servizi e certificazioni
                </span>
                {/* Arrow icon indicating external link */}
                <RiArrowRightUpLine className="size-4 shrink-0 text-gray-700" />
              </span>
            </div>
          </a>
        </FadeDiv>

        {/* Main headline - Large, bold text with animated fade-in by word */}
        <h1 className="mt-8 text-center text-5xl font-semibold tracking-tighter text-gray-900 sm:text-8xl sm:leading-[5.5rem]">
          <FadeSpan>Attenzione</FadeSpan> <FadeSpan>al</FadeSpan>
          <br />
          <FadeSpan>tuo</FadeSpan> <FadeSpan>veicolo</FadeSpan>
        </h1>

        {/* Supporting description text - Provides additional context */}
        <p className="mt-5 max-w-xl text-center text-base text-balance text-gray-700 sm:mt-8 sm:text-xl">
          <FadeSpan>Dal 1980 presenti</FadeSpan>{" "}
          <FadeSpan>sul territorio come costruttori</FadeSpan>{" "}
          <FadeSpan>e riparatori di veicoli industriali.</FadeSpan>
        </p>

        {/* Primary call-to-action button */}
        <FadeDiv>
          <a
            className="mt-6 inline-flex cursor-pointer flex-row items-center justify-center gap-1 rounded-md border-b-[1.5px] border-orange-700 bg-linear-to-b from-orange-400 to-orange-500 px-5 py-3 leading-4 font-medium tracking-wide whitespace-nowrap text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all duration-200 ease-in-out hover:shadow-orange-300"
            href="#"
          >
            Contattaci
          </a>
        </FadeDiv>

        {/* Background visualization - Game of Life animation */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <GameOfLife />
        </div>
      </FadeContainer>
    </section>
  )
}
