/**
 * @fileoverview Root layout component for the Next.js application.
 * Provides the main HTML structure and includes global components like navigation and footer.
 * Also configures metadata for SEO and social sharing.
 */

import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import "./globals.css"

import Footer from "@/components/ui/Footer"
import { NavBar } from "@/components/ui/Navbar"
import { siteConfig } from "./siteConfig"

/**
 * @constant metadata
 * @description Next.js metadata configuration for the application.
 * This metadata is used for SEO optimization and social media sharing.
 * Includes:
 * - Basic metadata (title, description, keywords)
 * - Author information
 * - OpenGraph data for social media cards
 * - Twitter card configuration
 * - Favicon settings
 * 
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://yoururl.com"),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["Marketing", "Database", "Software"],
  authors: [
    {
      name: "yourname",
      url: "",
    },
  ],
  creator: "yourname",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@yourname",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

/**
 * @component RootLayout
 * @description The root layout component that wraps all pages in the application.
 * Provides:
 * - HTML and body structure with language settings
 * - Global font application (Geist Sans)
 * - Consistent navigation header and footer on all pages
 * - Global styling including background color and selection styles
 * 
 * This is a Next.js App Router layout component that persists across page navigations
 * and only re-renders when its own props change.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content to be rendered inside the layout
 * 
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} min-h-screen overflow-x-hidden scroll-auto bg-gray-50 antialiased selection:bg-orange-100 selection:text-orange-600`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
