/**
 * @fileoverview Utility functions for styling and UI components in the Tremor UI framework.
 * This module provides reusable styling functions and constants for consistent UI appearance.
 */

// Tremor Raw cx [v0.0.0]

import clsx, { type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * @function cx
 * @description A utility function that combines multiple class values using clsx and tailwind-merge.
 * This helps resolve Tailwind CSS class conflicts and provides a cleaner way to combine conditional classes.
 * 
 * @param {...ClassValue[]} args - Any number of class values (strings, objects, arrays, etc.)
 * @returns {string} A single, merged className string with Tailwind conflicts properly resolved
 * 
 * @example
 * // Basic usage
 * cx("text-red-500", "bg-blue-200")
 * 
 * @example
 * // With conditional classes
 * cx("btn", { "btn-primary": isPrimary, "btn-secondary": !isPrimary })
 */
export function cx(...args: ClassValue[]) {
  return twMerge(clsx(...args))
}

// Tremor Raw focusInput [v0.0.1]
/**
 * @constant focusInput
 * @description A collection of Tailwind classes for styling focused input elements.
 * These classes provide visual feedback when an input element receives focus.
 * Uses a blue ring and border effect with dark mode support.
 */
export const focusInput = [
  // base
  "focus:ring-2",
  // ring color
  "focus:ring-blue-200 dark:focus:ring-blue-700/30",
  // border color
  "focus:border-blue-500 dark:focus:border-blue-700",
]

// Tremor Raw focusRing [v0.0.1]
/**
 * @constant focusRing
 * @description A collection of Tailwind classes for styling focused interactive elements.
 * Uses an outline approach for keyboard navigation focus states, providing accessibility
 * while maintaining a clean design. Primarily used for buttons, links, and other interactive elements.
 */
export const focusRing = [
  // base
  "outline outline-offset-2 outline-0 focus-visible:outline-2",
  // outline color
  "outline-blue-500 dark:outline-blue-500",
]

// Tremor Raw hasErrorInput [v0.0.1]
/**
 * @constant hasErrorInput
 * @description A collection of Tailwind classes for styling input elements with validation errors.
 * Provides a distinctive red visual treatment to indicate invalid inputs, with dark mode support.
 * Use this on form elements when validation has failed.
 */
export const hasErrorInput = [
  // base
  "ring-2",
  // border color
  "border-red-500 dark:border-red-700",
  // ring color
  "ring-red-200 dark:ring-red-700/30",
]
