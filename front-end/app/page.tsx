"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


export default function Home() {
  // const [theme, setTheme] = React.useState<"dark" | "light">("dark")
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => setMounted(true), [])

  const clickHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <main className="p-5">
      <Button variant="outline" onClick={clickHandler}>
        {theme === "light" && <Sun />}
        {theme === "dark" && <Moon />}

        <span className="sr-only">Toggle theme: Dark, Light</span>
      </Button>
    </main>
  )
}
