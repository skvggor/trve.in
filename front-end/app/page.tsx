"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"

// import { Button } from "@/components/ui/button"


export default function Home() {
  const [mounted, setMounted] = useState(false)
  // const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  // const clickHandler = () => {
  //   setTheme(theme === "dark" ? "light" : "dark")
  // }

  return (mounted && (
    <main className="p-5">
      <header>
        <div className="avatar
          h-24
          relative
          rounded-full
          w-24"
        >
          <Image
            src="/avatar.webp"
            alt="avatar"
            width={200}
            height={200}
            className="rounded-full
              border-2
              border-green-700
              p-0.5"
          />

          <span className="icon-status
            absolute
            bg-green-500
            border-2
            bottom-2
            h-4
            right-2
            rounded-full
            w-4"
          />
        </div>
      </header>
      {/* <Button variant="outline" onClick={clickHandler}>
        {theme === "light" && <Sun />}
        {theme === "dark" && <Moon />}

        <span className="sr-only">Toggle theme: Dark, Light</span>
      </Button> */}
    </main>)
  )
}
