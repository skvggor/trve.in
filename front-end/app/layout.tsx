import React from "react"
import type { Metadata } from "next"
import { Jost } from "next/font/google"

import ThemeProvider from "@/components/theme-provider"

import "./globals.css"

const jost = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Marcos Lima - Front-end Developer",
  description: "Front-end Developer",
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
