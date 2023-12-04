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

  const headerContent = {
    title: "Skvggor",
    description: "Front-end Developer",
    image: {
      src: "/avatar.webp",
      alt: "avatar",
      width: 200,
      height: 200,
    },
  }

  return (mounted && (
    <main className="px-3
      py-10
      md:px-5
      md:py-20"
    >
      <header className="group
        flex
        flex-row
        items-center
        justify-center
        w-full"
      >
        <div className="avatar
          h-24
          relative
          rounded-full
          mr-3
          w-24
          md:h-32
          md:mr-5
          md:w-32"
        >
          <Image
            src={headerContent.image.src}
            alt={headerContent.image.alt}
            width={headerContent.image.width}
            height={headerContent.image.height}
            className="image-avatar
              rounded-full
              border-2
              border-gray-700
              p-0.5
              group-hover:border-gray-500
              transition-all
              duration-500"
          />

          <span className="icon-status
            absolute
            bg-green-500
            border-2
            border-[#020817]
            bottom-2
            duration-500
            h-4
            right-2
            rounded-full
            transition-all
            w-4
            md:h-5
            md:right-3
            md:w-5"
          />
        </div>

        <div className="holder-text">
          <h1 className="name
            font-medium
            group-hover:text-white
            text-5xl
            text-green-100
            mb-3
            transition-all
            duration-500
            uppercase
            md:mb-5
            md:text-6xl
            md:tracking-tighter"
          >{headerContent.title}</h1>

          <div className="border-gradient
            bg-gradient-to-r from-green-900 to-green-300
            p-px
            rounded-full"
          >
            <div className="bg-[#020817]
              p-px
              rounded-full"
            >
              <h2 className="current-position
                font-normal
                group-hover:text-white
                text-lg
                text-center
                text-green-100
                transition-all
                md:text-xl
                md:tracking-tight"
              >{headerContent.description}</h2>
            </div>
          </div>
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
