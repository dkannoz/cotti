/**
 * @fileoverview Divider component from the Tremor UI framework.
 * A horizontal divider line with optional centered text content.
 * Used to visually separate content sections with a subtle horizontal rule.
 */

// Tremor Divider [v0.0.2]

import React from "react"

import { cx } from "@/lib/utils"

/**
 * @typedef DividerProps
 * @description Props interface for the Divider component
 * Extends standard div element props to maintain full HTML attribute compatibility
 */
type DividerProps = React.ComponentPropsWithoutRef<"div">

/**
 * @component Divider
 * @description A horizontal divider that creates visual separation between content sections.
 * Features:
 * - Optional centered text content
 * - Gradient styling for elegant fade effects
 * - Consistent spacing with margins
 * - Full width by default with centered alignment
 * 
 * The divider has two visual modes:
 * 1. Plain divider: A single gradient line when no children are provided
 * 2. Text divider: A centered text element with lines on either side
 * 
 * @example
 * // Plain divider
 * <Divider />
 * 
 * @example
 * // Divider with text
 * <Divider>or</Divider>
 * 
 * @example
 * // Custom styled divider
 * <Divider className="my-10 text-blue-500">Continue</Divider>
 */
const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <div
      ref={forwardedRef}
      className={cx(
        // base
        "mx-auto my-6 flex w-full items-center justify-between gap-3 text-sm",
        // text color
        "text-gray-500",
        className,
      )}
      tremor-id="tremor-raw"
      {...props}
    >
      {children ? (
        // Text divider mode: Lines on both sides of the text content
        <>
          {/* Left gradient line */}
          <div
            className={cx(
              // base
              "h-[1px] w-full",
              // background color
              "bg-linear-to-r from-transparent to-gray-200",
            )}
          />
          {/* Center text content */}
          <div className="whitespace-nowrap text-inherit">{children}</div>
          {/* Right gradient line */}
          <div
            className={cx(
              // base
              "h-[1px] w-full",
              // background color
              "bg-linear-to-l from-transparent to-gray-200",
            )}
          />
        </>
      ) : (
        // Plain divider mode: Single centered gradient line
        <div
          className={cx(
            // base
            "h-[1px] w-full",
            // background color - fades in from left and right
            "bg-linear-to-l from-transparent via-gray-200 to-transparent",
          )}
        />
      )}
    </div>
  ),
)

// Set display name for better debugging and dev tools identification
Divider.displayName = "Divider"

export { Divider }
