/**
 * @fileoverview Custom React hook for tracking page scroll position relative to a threshold.
 * Used primarily for implementing UI changes based on scroll position, such as sticky headers,
 * scroll-to-top buttons, or scroll-triggered animations.
 */

import { useCallback, useEffect, useState } from "react"

/**
 * @function useScroll
 * @description A React hook that tracks whether the page has been scrolled beyond a specified threshold.
 * Returns a boolean value that can be used to conditionally apply styles or behaviors.
 * Automatically handles scroll event listeners and cleanup on unmount.
 * 
 * @param {number} threshold - The scroll position in pixels at which the state should change
 * @returns {boolean} scrolled - True if the page has been scrolled beyond the threshold, false otherwise
 * 
 * @example
 * // Add shadow to header when scrolled
 * const isScrolled = useScroll(50);
 * return <header className={isScrolled ? "with-shadow" : ""}>;
 * 
 * @example
 * // Show a back-to-top button when scrolled
 * const isScrolled = useScroll(200);
 * return isScrolled ? <BackToTopButton /> : null;
 */
export default function useScroll(threshold: number) {
  // Track whether we've scrolled past the threshold
  const [scrolled, setScrolled] = useState(false)

  // Memoized callback to reduce re-renders and improve performance
  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold)
  }, [threshold])

  // Setup and cleanup scroll event listener
  useEffect(() => {
    // Add event listener when component mounts
    window.addEventListener("scroll", onScroll)

    // Initialize state based on current scroll position
    onScroll()

    // Remove event listener when component unmounts
    return () => window.removeEventListener("scroll", onScroll)
  }, [onScroll]) // Only re-run when onScroll function reference changes

  return scrolled
}
