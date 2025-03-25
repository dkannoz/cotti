/**
 * @fileoverview Map visualization component for the Solar Technologies application.
 * Renders an interactive map with activity indicators for various farm operations.
 * Demonstrates the monitoring and control capabilities of the system.
 */

import { Icons } from "@/components/Icons"
import {
  RiHome9Fill,
  RiPlaneLine,
  RiSignalTowerFill,
  RiTruckFill,
} from "@remixicon/react"
import { SVGMap } from "./SVGMap"

/**
 * @component Map
 * @description A visual representation of a farm management system showing real-time
 * activity monitoring across different locations and operations.
 * 
 * Features:
 * - Stylized map background showing terrain and fields
 * - Decorative diagonal border pattern on left and right sides
 * - Multiple activity indicators with status labels (scanning, irrigating, idle)
 * - Animated ping effects to indicate active operations
 * - Icons representing different types of equipment (planes, drones, vehicles)
 * - Signal tower indicator for connectivity
 * 
 * This component illustrates the system's capability to monitor and track
 * various agricultural operations in real-time, providing a visual demonstration
 * of the precision agriculture features.
 * 
 * @returns {JSX.Element} The rendered map visualization
 */
export const Map = () => {
  return (
    <section
      id="farm-management"
      aria-labelledby="management-title"
      className="relative flex w-full max-w-6xl scroll-my-24 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-950 px-10 shadow-2xl shadow-black/50 sm:px-16 md:px-28 lg:mx-auto"
    >
      {/* Left decorative diagonal border pattern with gradient mask */}
      <div className="absolute left-0 z-10 h-full backdrop-blur-[2px]">
        <svg
          className="h-full w-8 border-r border-zinc-900 stroke-zinc-800 sm:w-20"
          style={{
            maskImage:
              "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
          }}
        >
          <defs>
            <pattern
              id="diagonal-border-pattern"
              patternUnits="userSpaceOnUse"
              width="64"
              height="64"
            >
              {/* Generate diagonal lines for pattern */}
              {Array.from({ length: 17 }, (_, i) => {
                const offset = i * 8
                return (
                  <path
                    key={i}
                    d={`M${-106 + offset} 110L${22 + offset} -18`}
                    stroke=""
                    strokeWidth="1"
                  />
                )
              })}
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#diagonal-border-pattern)"
          />
        </svg>
      </div>

      {/* Right decorative diagonal border pattern with gradient mask */}
      <div className="absolute right-0 z-10 h-full backdrop-blur-[2px]">
        <svg
          className="h-full w-8 border-r border-zinc-900 stroke-zinc-800 sm:w-20"
          style={{
            maskImage:
              "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
          }}
        >
          <defs>
            <pattern
              id="diagonal-border-pattern"
              patternUnits="userSpaceOnUse"
              width="64"
              height="64"
            >
              {/* Generate diagonal lines for pattern */}
              {Array.from({ length: 17 }, (_, i) => {
                const offset = i * 8
                return (
                  <path
                    key={i}
                    d={`M${-106 + offset} 110L${22 + offset} -18`}
                    stroke=""
                    strokeWidth="1"
                  />
                )
              })}
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#diagonal-border-pattern)"
          />
        </svg>
      </div>

      {/* Section heading - Category label */}
      <div className="pt-12 text-base font-semibold tracking-tight text-orange-400 sm:pt-20 sm:text-lg">
        Farm Management
      </div>

      {/* Main section title */}
      <h2
        id="management-title"
        className="mt-6 max-w-[700px] text-center text-2xl font-semibold tracking-tight text-balance text-white md:text-5xl"
      >
        Monitoring & Control for Precision Agriculture
      </h2>

      {/* Description text */}
      <p className="mt-4 max-w-2xl text-center text-base text-balance text-gray-400 sm:mt-8 sm:text-xl">
        Complete oversight of your farming operations across fields, irrigation
        systems, and aerial monitoring, delivering insights even in remote rural
        locations.
      </p>

      {/* Map visualization with activity indicators */}
      <div className="relative mt-20 mb-10 ml-[17rem] scale-90 sm:mb-16 md:mt-24 md:ml-0 md:scale-100">
        {/* Main SVG map background */}
        <SVGMap className="w-[50rem] shrink-0" />

        {/* Aircraft scanning indicator - Top left */}
        <div className="absolute -top-3 left-[130px]">
          <div className="relative flex items-center justify-center">
            {/* Background circle */}
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
            {/* Status label */}
            <div className="absolute -top-4 -right-[3.7rem] flex w-fit items-center justify-center rounded-full bg-gray-950 px-1.5 py-0.5 text-xs whitespace-nowrap text-white ring-1 ring-white/15">
              Scanning
            </div>
            {/* Aircraft icon */}
            <RiPlaneLine className="relative size-5 rotate-90 text-white" />
            {/* Animated ping effect */}
            <div
              style={{
                animationDelay: "3.5s",
              }}
              className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
            ></div>
          </div>
        </div>

        {/* Quadcopter irrigation indicator - Top center */}
        <div className="absolute top-[73px] left-[243px]">
          <div className="relative flex items-center justify-center">
            {/* Background circle */}
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
            {/* Status label */}
            <div className="absolute -top-4 -right-[3.7rem] flex w-fit items-center justify-center rounded-full bg-gray-950 px-1.5 py-0.5 text-xs whitespace-nowrap text-white ring-1 ring-white/15">
              Irrigating
            </div>
            {/* Quadcopter/drone icon */}
            <Icons.QuadCopter className="relative size-5 rotate-90 text-white" />
            {/* Animated ping effect */}
            <div
              style={{
                animationDelay: "3.5s",
              }}
              className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
            ></div>
          </div>
        </div>

        {/* Aircraft scanning indicator - Right center */}
        <div className="absolute top-32 right-[300px]">
          <div className="relative flex items-center justify-center">
            {/* Background circle */}
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
            {/* Status label */}
            <div className="absolute -top-4 -right-[3.7rem] flex w-fit items-center justify-center rounded-full bg-gray-950 px-1.5 py-0.5 text-xs whitespace-nowrap text-white ring-1 ring-white/15">
              Scanning
            </div>
            {/* Aircraft icon */}
            <RiPlaneLine className="relative size-5 rotate-90 text-white" />
            {/* Animated ping effect */}
            <div
              style={{
                animationDelay: "3.5s",
              }}
              className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
            ></div>
          </div>
        </div>

        {/* Home/base indicator */}
        <div className="absolute top-20 right-[390px]">
          <div className="relative flex items-center justify-center">
            {/* Background circle */}
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
            {/* Home/base icon */}
            <RiHome9Fill className="relative size-5 text-white" />
          </div>
        </div>

        {/* Truck indicator with idle status */}
        <div className="absolute top-12 right-[430px]">
          <div className="relative flex items-center justify-center">
            {/* Background circle */}
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
            {/* Status label */}
            <div className="absolute -top-4 -right-7 flex w-fit items-center justify-center rounded-full bg-gray-950 px-1.5 py-0.5 text-xs whitespace-nowrap text-white ring-1 ring-white/15">
              Idle
            </div>
            {/* Truck icon */}
            <RiTruckFill className="relative size-5 text-white" />
          </div>
        </div>

        {/* Signal tower/connectivity indicator */}
        <div className="absolute top-9 right-56">
          <div className="relative flex items-center justify-center">
            {/* Signal tower icon */}
            <RiSignalTowerFill className="z-10 size-5 text-white" />
            {/* Background circle with blur effect */}
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
