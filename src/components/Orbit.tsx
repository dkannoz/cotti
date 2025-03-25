/**
 * @fileoverview Orbit component that creates an animated orbital system with elements 
 * revolving around a central point. Useful for interactive visualizations, feature showcases,
 * or decorative UI elements.
 */

/**
 * @interface OrbitingObjectProps
 * @description Props for configuring the Orbit component's appearance and behavior
 * 
 * @property {number} [radiusPx=144] - Radius of the orbital path in pixels
 * @property {React.ReactNode} children - The central element around which objects orbit
 * @property {React.ReactNode[]} orbitingObjects - Array of elements to place in orbit
 * @property {number} [defaultObjectSize=32] - Size in pixels for orbiting elements (used for positioning)
 * @property {number} [durationSeconds=8] - Time in seconds for one complete orbit revolution
 * @property {boolean} [keepUpright=false] - When true, orbiting elements remain upright instead of rotating
 */
interface OrbitingObjectProps {
  /** Radius of the orbit in pixels */
  radiusPx?: number
  /** Center element */
  children: React.ReactNode
  /** Array of elements to orbit around the center */
  orbitingObjects: React.ReactNode[]
  /** Default size of orbiting objects (in pixels) for positioning */
  defaultObjectSize?: number
  /** Duration of one complete orbit in seconds */
  durationSeconds?: number
  /** Keep orbiting upright */
  keepUpright?: boolean
}

/**
 * @component Orbit
 * @description Creates an interactive orbital visualization with elements revolving
 * around a central point. Objects are evenly distributed around the orbit and animated
 * to create continuous circular motion.
 * 
 * @example
 * // Basic usage with three orbiting icons
 * <Orbit
 *   orbitingObjects={[<Icon1 />, <Icon2 />, <Icon3 />]}
 * >
 *   <CenterLogo />
 * </Orbit>
 * 
 * @example
 * // Custom configuration
 * <Orbit
 *   radiusPx={200}
 *   durationSeconds={15}
 *   keepUpright={true}
 *   orbitingObjects={satellites}
 * >
 *   <PlanetEarth />
 * </Orbit>
 */
export const Orbit = ({
  radiusPx = 144,
  children,
  orbitingObjects = [],
  defaultObjectSize = 32,
  durationSeconds = 8,
  keepUpright = false,
}: OrbitingObjectProps) => {
  // Calculate dimensions for positioning objects
  const orbitDiameter = radiusPx * 2
  const containerSize = orbitDiameter + defaultObjectSize
  const initialOffset = radiusPx + defaultObjectSize / 2

  /**
   * Calculate and position each orbiting object with proper animation timing
   * Objects are spaced evenly around the orbit by using staggered animation delays
   */
  const positionedObjects = orbitingObjects.map((object, index) => {
    // Calculate delay to evenly distribute objects around the orbit
    const delaySeconds = -(index * (durationSeconds / orbitingObjects.length))

    return (
      <div
        key={index}
        className="absolute flex items-center justify-center"
        style={{
          animationName: "spin",
          animationDuration: `${durationSeconds}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDelay: `${delaySeconds}s`,
          transformOrigin: `calc(50% + ${radiusPx}px) 50%`,
          left: `calc(50% - ${initialOffset}px)`,
          top: `calc(50% - ${defaultObjectSize / 2}px)`,
          width: `${defaultObjectSize}px`,
          height: `${defaultObjectSize}px`,
        }}
      >
        {/* Counter-rotating container to keep object upright */}
        <div
          className="flex h-full w-full items-center justify-center"
          style={
            keepUpright
              ? {
                // If keepUpright is true, apply a counter-rotation to neutralize the orbit spin
                // This makes the orbiting object maintain its original orientation
                animationName: "spin",
                animationDuration: `${durationSeconds}s`,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                animationDelay: `${delaySeconds}s`,
                animationDirection: "reverse",
              }
              : undefined
          }
        >
          {object}
        </div>
      </div>
    )
  })

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: `${containerSize}px`,
        height: `${containerSize}px`,
      }}
    >
      {/* Orbital path - Visual indicator of the circular path */}
      <div
        className="absolute animate-pulse rounded-full border border-gray-300 bg-gray-500/5"
        style={{
          width: `${orbitDiameter}px`,
          height: `${orbitDiameter}px`,
        }}
      />

      {/* Orbiting objects - Elements revolving around the center */}
      {positionedObjects}

      {/* Center object (children) - The focal point of the orbital system */}
      {children}
    </div>
  )
}
