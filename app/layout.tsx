import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Abacus Pre-school New Malden | Early Years Learning & Care",
  description:
    "Welcome to Abacus Pre-school in New Malden, Surrey. A nurturing early years setting for children aged 2-5, where we help every child reach their full potential through play-based learning.",
  generator: "v0.app",
  keywords: ["preschool", "New Malden", "early years", "childcare", "Surrey", "nursery"],
  icons: {
    icon: [
      {
        url: "/4.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/4.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/4.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "/4.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
