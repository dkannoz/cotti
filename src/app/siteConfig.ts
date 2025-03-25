/**
 * @fileoverview Site configuration for the Solar Technologies application.
 * Centralizes key site metadata and navigation paths in a single location.
 * This allows for consistent usage across components and easy updates.
 */

/**
 * @constant siteConfig
 * @description Core configuration values for the application.
 * Contains essential information used across the site for branding,
 * SEO, and navigation.
 * 
 * @property {string} name - The display name of the website/company
 * @property {string} url - The canonical URL for the website
 * @property {string} description - A brief tagline/description for SEO and social sharing
 * @property {Object} baseLinks - Key navigation paths for the application
 * @property {string} baseLinks.home - The path to the homepage
 */
export const siteConfig = {
  name: "Solar Technologies",
  url: "https://solar.tremor.so",
  description: "Automation for every Farm.",
  baseLinks: {
    home: "/",
  },
}
