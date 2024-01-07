import React from "react"
import type { Metadata } from "next"
import { Jost } from "next/font/google"

import ThemeProvider from "@/components/theme-provider"

import "./globals.css"

const jost = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://trve.in"),
  title: "Marcos Lima - Senior Front-end Developer",
  description: "Low profile problem solver",
  openGraph: {
    type: "website",
    siteName: "Marcos Lima",
    locale: "pt_BR",
    url: "https://trve.in",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Image of Marcos Lima - Senior Front-end Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@skvggor",
    title: "Marcos Lima - Senior Front-end Developer",
    description: "Low profile problem solver",
    images: "/og-image.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-br' className={jost.className}>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
