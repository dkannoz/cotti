"use client"
/**
 * @fileoverview Hero background component that renders Conway's Game of Life.
 * This creates an animated, interactive background effect for hero sections.
 * The component uses Canvas API to render an efficient cellular automaton.
 */

import { useEffect, useRef } from "react";

/**
 * @typedef Grid
 * @description Type definition for the Game of Life grid
 * A 2D array where each cell contains two properties:
 * - alive: boolean indicating if the cell is currently alive
 * - opacity: number (0-1) used for smooth visual transitions
 */
type Grid = { alive: boolean; opacity: number }[][]

/**
 * @component GameOfLife
 * @description Renders Conway's Game of Life simulation on an HTML canvas element.
 * Features:
 * - Smooth opacity transitions for more visually pleasing cell state changes
 * - Toroidal grid (edges wrap around) for seamless continuity
 * - Optimized rendering with controlled animation frame rate
 * 
 * The component initializes with ~15% of cells randomly alive and updates according 
 * to standard Game of Life rules (birth, survival, death based on neighbor count).
 * 
 * @returns {JSX.Element} Canvas element with the animated Game of Life visualization
 */
const GameOfLife = () => {
  // Reference to the canvas DOM element for drawing
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Get canvas element and its 2D context
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const cellSize = 6 // Size of each cell in pixels
    const cols = Math.floor(canvas.width / cellSize) // Number of columns in the grid
    const rows = Math.floor(canvas.height / cellSize) // Number of rows in the grid
    const transitionSpeed = 0.2 // Controls fade speed for smooth visual transitions

    // Initialize grid with random live cells (about 15% density)
    let grid: Grid = Array(rows)
      .fill(null)
      .map(() =>
        Array(cols)
          .fill(null)
          .map(() => ({
            alive: Math.random() > 0.85, // ~15% chance of being alive initially
            opacity: Math.random() > 0.85 ? 0.5 : 0, // Set initial opacity to match alive state
          })),
      )

    /**
     * @function countNeighbors
     * @description Counts the number of live neighbors for a cell at coordinates (x, y)
     * Uses a toroidal grid (edges wrap around) for seamless continuity
     * 
     * @param {Grid} grid - The current generation's grid state
     * @param {number} x - Row index of the cell
     * @param {number} y - Column index of the cell
     * @returns {number} Count of live neighbors (0-8)
     */
    const countNeighbors = (grid: Grid, x: number, y: number): number => {
      let sum = 0
      // Check all 8 neighboring cells in a 3x3 grid
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          // Use modulo to wrap around edges (toroidal grid)
          const row = (x + i + rows) % rows
          const col = (y + j + cols) % cols
          sum += grid[row][col].alive ? 1 : 0
        }
      }
      // Subtract the cell itself from the count (it's not its own neighbor)
      sum -= grid[x][y].alive ? 1 : 0
      return sum
    }

    /**
     * @function draw
     * @description Main animation loop that renders and updates the Game of Life
     * This function:
     * 1. Clears the canvas
     * 2. Updates cell opacities for smooth transitions
     * 3. Draws all cells with their current opacity
     * 4. Calculates the next generation based on Conway's rules
     * 5. Schedules the next animation frame
     */
    const draw = () => {
      // Clear canvas with light gray background
      ctx.fillStyle = "#F9FAFB"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update opacities and draw cells
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const cell = grid[i][j]
          // Gradually increase opacity for living cells
          if (cell.alive && cell.opacity < 1) {
            cell.opacity = Math.min(cell.opacity + transitionSpeed, 0.5)
          }
          // Gradually decrease opacity for dead cells
          else if (!cell.alive && cell.opacity > 0) {
            cell.opacity = Math.max(cell.opacity - transitionSpeed, 0)
          }

          // Draw cells with opacity > 0 as small circles
          if (cell.opacity > 0) {
            ctx.fillStyle = `rgba(0, 0, 0, ${cell.opacity})`
            ctx.beginPath()
            ctx.arc(
              j * cellSize + cellSize / 2, // x coordinate
              i * cellSize + cellSize / 2, // y coordinate
              1, // radius
              0, // start angle
              Math.PI * 2, // end angle (full circle)
            )
            ctx.fill()
          }
        }
      }

      // Calculate next generation using Conway's Game of Life rules
      const next = grid.map((row, i) =>
        row.map((cell, j) => {
          const neighbors = countNeighbors(grid, i, j)

          // Apply Conway's Game of Life rules:
          // 1. Any live cell with 2 or 3 live neighbors survives
          // 2. Any dead cell with exactly 3 live neighbors becomes alive
          // 3. All other cells die or stay dead
          const willBeAlive = cell.alive
            ? neighbors >= 2 && neighbors <= 3 // Survival rule
            : neighbors === 3 // Birth rule

          return {
            alive: willBeAlive,
            opacity: cell.opacity, // Maintain current opacity for smooth transition
          }
        }),
      )

      // Update grid to next generation
      grid = next

      // Schedule next frame with a delay to control animation speed
      setTimeout(() => {
        animationFrameId = requestAnimationFrame(draw)
      }, 125) // ~8 frames per second for performance
    }

    // Start the animation
    draw()

    // Cleanup function to cancel animation frame on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, []) // Empty dependency array ensures this effect runs once on mount

  return (
    <div className="mask pointer-events-none overflow-hidden select-none">
      <canvas ref={canvasRef} width={1500} height={600} />
    </div>
  )
}

export default GameOfLife
