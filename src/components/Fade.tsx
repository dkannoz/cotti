"use client"
/**
 * @fileoverview Fade animation components using Framer Motion.
 * A collection of components that provide consistent fade-in animations
 * for creating smooth, staggered entrance animations. Useful for enhancing
 * user experience when content loads or becomes visible.
 */

import { motion } from "motion/react"

/**
 * @constant container
 * @description Animation variants for the container element.
 * Controls how child animations are orchestrated with staggering and delays.
 * - hidden: Initial state (empty as we only animate children)
 * - show: Configures children to animate with staggered timing
 */
const container = {
  hidden: {}, // Initial state is empty as we're only controlling children timing
  show: {
    transition: {
      staggerChildren: 0.05, // Delay between each child animation (in seconds)
      delayChildren: 0.2,    // Initial delay before starting children animations
    },
  },
}

/**
 * @constant item
 * @description Animation variants for individual items within the container.
 * Defines the actual animation properties for fade and movement effects.
 * - hidden: Initial state with zero opacity, vertical offset, and blur
 * - show: Final state with full opacity, no offset, and spring physics
 */
const item = {
  hidden: {
    opacity: 0,      // Start fully transparent
    y: 16,           // Start offset downward
    filter: "blur(4px)", // Start with blur effect
  },
  show: {
    opacity: 1,      // End fully visible
    scale: 1,        // Maintain original scale
    y: 0,            // End at original position
    filter: "blur(0px)", // End with no blur
    transition: {
      type: "spring",  // Use spring physics for natural motion
      stiffness: 150,  // Spring stiffness (higher = faster)
      damping: 19,     // Damping (higher = less bouncy)
      mass: 1.2,       // Mass (higher = more momentum)
    },
  },
}

/**
 * @component FadeContainer
 * @description A container component that orchestrates staggered animations for its children.
 * Children should be FadeDiv or FadeSpan components to participate in the animation sequence.
 * 
 * @param {React.ReactNode} children - Child elements to be animated
 * @param {string} [className] - Optional CSS classes
 * 
 * @example
 * // Create a staggered fade-in list
 * <FadeContainer>
 *   <FadeDiv>First item</FadeDiv>
 *   <FadeDiv>Second item</FadeDiv>
 *   <FadeDiv>Third item</FadeDiv>
 * </FadeContainer>
 */
function FadeContainer({
  children,
  className,
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * @component FadeDiv
 * @description A div element that fades and slides in when its parent FadeContainer animates.
 * Must be used within a FadeContainer to work properly with the staggered animation sequence.
 * 
 * @param {React.ReactNode} children - Content to be animated
 * @param {string} [className] - Optional CSS classes
 * 
 * @example
 * // Single element within a FadeContainer
 * <FadeContainer>
 *   <FadeDiv className="p-4 bg-white">
 *     <h2>This content will fade in</h2>
 *     <p>With a subtle upward animation</p>
 *   </FadeDiv>
 * </FadeContainer>
 */
function FadeDiv({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}

/**
 * @component FadeSpan
 * @description A span element that fades and slides in when its parent FadeContainer animates.
 * Useful for inline text animations within a staggered sequence.
 * Must be used within a FadeContainer to work properly.
 * 
 * @param {React.ReactNode} children - Content to be animated
 * @param {string} [className] - Optional CSS classes
 * 
 * @example
 * // Animate individual words in a heading
 * <FadeContainer>
 *   <h1>
 *     <FadeSpan>Welcome</FadeSpan>{" "}
 *     <FadeSpan>to</FadeSpan>{" "}
 *     <FadeSpan>our</FadeSpan>{" "}
 *     <FadeSpan>website</FadeSpan>
 *   </h1>
 * </FadeContainer>
 */
function FadeSpan({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.span variants={item} className={className}>
      {children}
    </motion.span>
  )
}

export { FadeContainer, FadeDiv, FadeSpan }
