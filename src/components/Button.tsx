/**
 * @fileoverview Button component from the Tremor UI framework.
 * A versatile, accessible button component with multiple style variants and loading state support.
 * Part of the core UI primitives for building consistent interfaces.
 */

// Tremor Button [v0.2.0]

import { Slot } from "@radix-ui/react-slot"
import { RiLoader2Fill } from "@remixicon/react"
import React from "react"
import { tv, type VariantProps } from "tailwind-variants"

import { cx, focusRing } from "@/lib/utils"

/**
 * @constant buttonVariants
 * @description Defines the visual styling for different button variants using tailwind-variants.
 * Creates a cohesive set of button styles with consistent theming across variants.
 * 
 * Variants include:
 * - primary: Orange background, white text (main CTA buttons)
 * - secondary: White background, dark text with border (secondary actions)
 * - light: Light gray background (subtle actions)
 * - ghost: Transparent with hover effect (minimal visual impact)
 * - destructive: Red background for dangerous actions
 */
const buttonVariants = tv({
  base: [
    // base 
    "relative inline-flex items-center justify-center rounded-sm border px-3 py-2 text-center text-sm font-medium whitespace-nowrap shadow-xs transition-all duration-100 ease-in-out",
    // disabled
    "disabled:pointer-events-none disabled:shadow-none",
    // focus
    focusRing,
  ],
  variants: {
    variant: {
      primary: [
        // border
        "border-transparent",
        // text color
        "text-white",
        // background color
        "bg-orange-500",
        // hover color
        "hover:bg-orange-600",
        // disabled
        "disabled:bg-orange-300 disabled:text-white",
      ],
      secondary: [
        // border
        "border-gray-300",
        // text color
        "text-gray-900",
        // background color
        "bg-white",
        //hover color
        "hover:bg-gray-50",
        // disabled
        "disabled:text-gray-400",
      ],
      light: [
        // base
        "shadow-none",
        // border
        "border-transparent",
        // text color
        "text-gray-900",
        // background color
        "bg-gray-200",
        // hover color
        "hover:bg-gray-300/70",
        // disabled
        "disabled:bg-gray-100 disabled:text-gray-400",
      ],
      ghost: [
        // base
        "shadow-none",
        // border
        "border-transparent",
        // text color
        "text-gray-900",
        // hover color
        "bg-transparent hover:bg-gray-100",
        // disabled
        "disabled:text-gray-400",
      ],
      destructive: [
        // text color
        "text-white",
        // border
        "border-transparent",
        // background color
        "bg-red-600",
        // hover color
        "hover:bg-red-700",
        // disabled
        "disabled:bg-red-300 disabled:text-white",
      ],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

/**
 * @interface ButtonProps
 * @description Props for the Button component, combining standard button attributes with custom props
 * 
 * @extends React.ComponentPropsWithoutRef<"button"> - Inherits standard button HTML attributes
 * @extends VariantProps<typeof buttonVariants> - Adds style variant props
 * 
 * @property {boolean} [asChild] - When true, renders children as the root element using Radix UI's Slot
 * @property {boolean} [isLoading] - Shows loading spinner and disables button when true
 * @property {string} [loadingText] - Text to display alongside the spinner when in loading state
 */
interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  loadingText?: string
}

/**
 * @component Button
 * @description A versatile button component with multiple style variants and loading state support.
 * Uses React.forwardRef to properly handle ref forwarding for accessibility and DOM manipulation.
 * 
 * @example
 * // Primary button (default)
 * <Button>Submit</Button>
 * 
 * @example
 * // Secondary button with loading state
 * <Button 
 *   variant="secondary" 
 *   isLoading={isSubmitting} 
 *   loadingText="Saving..."
 * >
 *   Save Changes
 * </Button>
 * 
 * @example
 * // Using as child to preserve semantics but apply button styling
 * <Button asChild>
 *   <Link href="/dashboard">Go to Dashboard</Link>
 * </Button>
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      isLoading = false,
      loadingText,
      className,
      disabled,
      variant,
      children,
      ...props
    }: ButtonProps,
    forwardedRef,
  ) => {
    // Use Radix UI Slot when asChild is true to render children as the root element
    const Component = asChild ? Slot : "button"
    return (
      <Component
        ref={forwardedRef}
        className={cx(buttonVariants({ variant }), className)}
        // Disable button when explicitly disabled or in loading state
        disabled={disabled || isLoading}
        tremor-id="tremor-raw"
        {...props}
      >
        {isLoading ? (
          // Loading state UI with spinner and optional loading text
          <span className="pointer-events-none flex shrink-0 items-center justify-center gap-1.5">
            <RiLoader2Fill
              className="size-4 shrink-0 animate-spin"
              aria-hidden="true"
            />
            <span className="sr-only">
              {loadingText ? loadingText : "Loading"}
            </span>
            {loadingText ? loadingText : children}
          </span>
        ) : (
          // Normal state just renders children
          children
        )}
      </Component>
    )
  },
)

// Set display name for debugging and dev tools
Button.displayName = "Button"

export { Button, buttonVariants, type ButtonProps }
