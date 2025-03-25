"use client"
/**
 * @fileoverview ChipViz component that renders an animated solar chip visualization.
 * Creates a multi-layered, pulsating circular icon with gradient effects that
 * represents the solar technology or processor of the application.
 */

import { motion } from "motion/react"
import { SolarMark } from "../../../public/SolarMark"

/**
 * @component ChipViz
 * @description A decorative visualization of a solar chip or processor with animated pulsing effects.
 * Features multiple layered elements with subtle scale animations and gradient overlays.
 * Used primarily for visual appeal in marketing or feature highlight sections.
 * 
 * The component creates a realistic-looking chip visualization with:
 * - Multiple nested circular layers with different animations
 * - Staggered animation timing for organic motion
 * - Gradient effects that suggest energy or heat
 * - Shadow and blur effects for depth
 * - Central branded logo (SolarMark)
 * 
 * @returns {JSX.Element} The rendered chip visualization
 */
const ChipViz = () => {
  /**
   * @function createVariants
   * @description Factory function that generates animation variants for different layers
   * Creates pulsing scale animations with customizable parameters
   * 
   * @param {Object} params - Configuration parameters
   * @param {number} params.scale - Maximum scale factor during animation
   * @param {number} params.delay - Delay in seconds before animation starts
   * @returns {Object} Animation variants object for Framer Motion
   */
  const createVariants = ({
    scale,
    delay,
  }: {
    scale: number
    delay: number
  }) => ({
    initial: { scale: 1 },
    animate: {
      scale: [1, scale, 1], // Array defines keyframes: start, peak, end
      transition: {
        duration: 2,
        times: [0, 0.2, 1], // Timing for each keyframe (normalized 0-1)
        ease: [0.23, 1, 0.32, 1], // Custom easing curve for natural motion
        repeat: Infinity,
        repeatDelay: 2, // Pause between animation cycles
        delay, // Initial delay before animation starts
      },
    },
  })

  return (
    <div className="relative flex items-center">
      <div className="relative">
        {/* Outer glow layer - creates a blurred orange/yellow halo effect */}
        <motion.div
          variants={createVariants({ scale: 1.1, delay: 0 })}
          initial="initial"
          animate="animate"
          className="absolute -inset-px z-0 rounded-full bg-linear-to-r from-yellow-500 via-amber-500 to-orange-500 opacity-30 blur-xl"
        />

        {/* Main outer container - white to orange gradient with subtle shadow */}
        <motion.div
          variants={createVariants({ scale: 1.08, delay: 0.1 })}
          initial="initial"
          animate="animate"
          className="relative z-0 min-h-[80px] min-w-[80px] rounded-full border bg-linear-to-b from-white to-orange-50 shadow-xl shadow-orange-500/20"
        >
          {/* Middle gradient ring - orange/yellow gradient with pronounced shadow */}
          <motion.div
            variants={createVariants({ scale: 1.06, delay: 0.2 })}
            initial="initial"
            animate="animate"
            className="absolute inset-1 rounded-full bg-linear-to-t from-yellow-500 via-amber-500 to-orange-500 p-0.5 shadow-xl"
          >
            {/* Inner dark panel - creates depth with shadow and transparency effects */}
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-black/40 shadow-xs shadow-white/40 will-change-transform">
              <div className="size-full bg-black/30" />

              {/* Inner glow layer - creates inner illumination effect */}
              <motion.div
                variants={createVariants({ scale: 1.04, delay: 0.3 })}
                initial="initial"
                animate="animate"
                className="absolute inset-0 rounded-full bg-linear-to-t from-yellow-500 via-amber-500 to-orange-500 opacity-50 shadow-[inset_0_0_16px_4px_rgba(0,0,0,1)]"
              />

              {/* Central chip core - contains the logo and has slight backdrop blur */}
              <motion.div
                variants={createVariants({ scale: 1.02, delay: 0.4 })}
                initial="initial"
                animate="animate"
                className="absolute inset-[6px] rounded-full bg-white/10 p-1 backdrop-blur-[1px]"
              >
                {/* Logo container - white to gray gradient with the SolarMark logo */}
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-linear-to-br from-white to-gray-300 shadow-lg shadow-black/40">
                  <SolarMark className="w-6" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ChipViz
