"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Bike } from "lucide-react"
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
    currentPosition: "Front-end Developer",
    image: {
      src: "/avatar.webp",
      alt: "avatar",
      width: 200,
      height: 200,
    },
  }

  const currentYear = new Date().getFullYear()

  return (mounted && (
    <main className="main-content
      flex
      flex-col
      justify-between
      min-h-[100dvh]
      pt-10
      px-3
      md:pt-20
      md:px-5"
    >
      <header className="site-header
        flex
        flex-col
        group
        items-center
        justify-center
        w-full
        md:flex-row"
      >
        <section className="avatar
          h-24
          mb-3
          relative
          rounded-full
          w-24
          md:h-32
          md:mb-0
          md:mr-5
          md:w-32"
        >
          <Image
            src={headerContent.image.src}
            alt={headerContent.image.alt}
            width={headerContent.image.width}
            height={headerContent.image.height}
            className="image-avatar
              border-2
              border-gray-700
              duration-500
              group-hover:border-gray-500
              p-0.5
              rounded-full
              transition-all"
          />

          <span className="icon-status
            absolute
            bg-green-500
            border-[#020817]
            border-2
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
        </section>

        <section className="holder-text">
          <h1 className="name
            duration-500
            font-medium
            group-hover:text-white
            mb-3
            text-5xl
            text-green-100
            transition-all
            uppercase
            md:mb-5
            md:text-6xl
            md:tracking-tighter"
          >{headerContent.title}</h1>

          <section className="border-gradient
            bg-gradient-to-r from-green-900 to-green-300
            p-px
            rounded-full"
          >
            <section className="bg-[#020817]
              p-px
              rounded-full"
            >
              <h2 className="current-position
                font-normal
                group-hover:text-white
                text-center
                text-green-100
                text-lg
                transition-all
                md:text-xl
                md:tracking-tight"
              >{headerContent.currentPosition}</h2>
            </section>
          </section>
        </section>
      </header>

      <section className="site-content
        flex
        flex-col
        items-center
        justify-center
        w-full"
      >
        <section className="about-me
          flex
          flex-col
          items-center
          justify-center"
        >
          <h2 className="title
            font-bold
            text-2xl"
          >Low profile problem solver.</h2>
        </section>
      </section>

      <footer className="site-footer
        flex
        flex-col
        items-center
        justify-center
        w-full"
      >
        <div className="holder
          flex
          flex-col
          items-center
          items-stretch
          justify-center
          max-w-[768px]
          md:flex-row"
        >
          <div className="cycling
            bg-gray-900
            flex
            flex-row
            items-center
            mb-3
            p-3
            rounded-t-xl
            w-full
            md:h-auto
            md:justify-center
            md:mb-0
            md:mr-3
            md:rounded-xl
            md:w-auto"
          >
            <div className="icon
              mr-3
              -rotate-45"
            >
              <Bike
                color="#22c55e"
                width={28}
                height={28}
              />
            </div>

            <div className="total
              flex
              flex-col"
            >
              <h3 className="year
                font-bold
                mb-1
                text-sm
                text-white"
              >{currentYear}</h3>

              <span className="distance
                font-light
                text-lg
                text-white/50"
              >4.745 km</span>
            </div>
          </div>

          <div className="listening-now
            bg-gradient-to-t from-gray-950 to-gray-900
            flex
            flex-row
            items-center
            justify-center
            p-3
            rounded-b-xl
            md:bg-gradient-to-l
            md:rounded-xl"
          >
            <div className="cover-art
              mr-3
              ring-2
              ring-green-500
              rounded-full"
            >
              <Image
                className="image-cover
                  rounded-full
                  shadow-xl"
                src="/coverart.jpg"
                alt="cover-art"
                width={100}
                height={100}
              />
            </div>

            <div className="track-info
              flex
              flex-col
              max-w-md"
            >
              <span className="label
                font-light
                max-w-fit
                mb-3
                p-2
                ring-1
                ring-green-900
                rounded-full
                text-green-500
                text-xs
                uppercase"
              >Last track played</span>

              <span className="track
                font-bold
                mb-1
                text-lg
                text-white"
              >Fugiat sit Lorem incididunt labore ullamco voluptate</span>

              <span className="artist
                font-medium
                text-base
                text-white/50
                uppercase"
              >Ea magna laboris quis consequat</span>
            </div>
          </div>
        </div>

        <div className="made-by
          flex
          flex-row
          items-center
          justify-center
          my-3"
        >
          <span className="line
            bg-green-500
            block
            h-0.5
            rounded-full
            w-10"
          />

          <span className="text
            font-bold
            mx-3
            text-sm
            text-white"
          >Made by <a
            className="link
            duration-500
            hover:text-green-500
            transition-all
            underline"
            href="https://github.com/skvggor">Marcos Lima</a></span>

          <span className="line
            bg-green-500
            block
            h-0.5
            rounded-full
            w-10"
          />
        </div>
      </footer>

      {/* <Button variant="outline" onClick={clickHandler}>
        {theme === "light" && <Sun />}
        {theme === "dark" && <Moon />}

        <span className="sr-only">Toggle theme: Dark, Light</span>
      </Button> */}
    </main>)
  )
}
