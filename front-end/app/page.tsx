"use client"

import { useEffect, useState } from "react"

import Image from "next/image"

import { Bike, Code2, Disc3, GithubIcon, Linkedin, Twitter } from "lucide-react"

import Header from "@/components/header"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const currentYear = new Date().getFullYear()

  return (
    mounted && (
      <main
        className='main-content
          flex
          flex-col
          justify-between
          min-h-[100dvh]
          pt-10
          px-3
          md:pt-20
          md:px-5'
      >
        <Header />

        <section
          className='site-content
            flex
            flex-col
            items-center
            justify-center
            w-full'
        >
          <section
            className='about-me
              flex
              flex-col
              items-center
              justify-center
              mb-3
              md:mb-10'
          >
            <h2
              className='title
                font-bold
                text-2xl
                md:text-4xl'
            >
              Low profile problem solver.
            </h2>
          </section>

          <section
            className='social
              flex
              flex-col
              items-center
              justify-center'
          >
            <ul
              className='icon-list
                gap-x-5
                grid
                grid-cols-6
                md:gap-x-10'
            >
              <li className='item'>
                <a
                  className='link
                    block
                    duration-500
                    hover:outline-white
                    outline
                    outline-2
                    outline-green-500
                    outline-offset-1
                    p-2
                    rounded-full
                    transition-all'
                  href='https://github.com/skvggor'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GithubIcon color='#22c55e' width={28} height={28} />
                </a>
              </li>

              <li className='item'>
                <a
                  className='link
                    block
                    duration-500
                    hover:outline-white
                    outline
                    outline-2
                    outline-green-500
                    outline-offset-1
                    p-2
                    rounded-full
                    transition-all'
                  href='https://leetcode.com/skvggor/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Code2 color='#22c55e' width={28} height={28} />
                </a>
              </li>

              <li className='item'>
                <a
                  className='link
                    block
                    duration-500
                    hover:outline-white
                    outline
                    outline-2
                    outline-green-500
                    outline-offset-1
                    p-2
                    rounded-full
                    transition-all'
                  href='https://www.linkedin.com/in/marcker'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin color='#22c55e' width={28} height={28} />
                </a>
              </li>

              <li className='item'>
                <a
                  className='link
                    block
                    duration-500
                    hover:outline-white
                    outline
                    outline-2
                    outline-green-500
                    outline-offset-1
                    p-2
                    rounded-full
                    transition-all'
                  href='https://twitter.com/skvggor'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Twitter color='#22c55e' width={28} height={28} />
                </a>
              </li>

              <li className='item'>
                <a
                  className='link
                    block
                    duration-500
                    hover:outline-white
                    outline
                    outline-2
                    outline-green-500
                    outline-offset-1
                    p-2
                    rounded-full
                    transition-all'
                  href='https://www.strava.com/athletes/18616728'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Bike color='#22c55e' width={28} height={28} />
                </a>
              </li>

              <li className='item'>
                <a
                  className='link
                    block
                    duration-500
                    hover:outline-white
                    outline
                    outline-2
                    outline-green-500
                    outline-offset-1
                    p-2
                    rounded-full
                    transition-all'
                  href='https://last.fm/user/skvggor'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Disc3 color='#22c55e' width={28} height={28} />
                </a>
              </li>
            </ul>
          </section>
        </section>

        <footer
          className='site-footer
            flex
            flex-col
            items-center
            justify-center
            w-full'
        >
          <div
            className='holder
              flex
              flex-col
              items-center
              items-stretch
              justify-center
              max-w-[768px]
              md:flex-row'
          >
            <div
              className='cycling
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
                md:w-auto'
            >
              <div
                className='icon
                  mr-3
                  -rotate-45'
              >
                <Bike color='#22c55e' width={28} height={28} />
              </div>

              <div
                className='total
                  flex
                  flex-col'
              >
                <h3
                  className='year
                    font-bold
                    mb-1
                    text-sm
                    text-white'
                >
                  {currentYear}
                </h3>

                <span
                  className='distance
                    font-light
                    text-lg
                    text-white/50'
                >
                  4.745 km
                </span>
              </div>
            </div>

            <div
              className='listening-now
                bg-gradient-to-t from-gray-950 to-gray-900
                flex
                flex-row
                items-center
                justify-center
                p-3
                rounded-b-xl
                md:bg-gradient-to-l
                md:rounded-xl'
            >
              <div
                className='cover-art
                  mr-3
                  ring-2
                  ring-green-500
                  rounded-full'
              >
                <Image
                  className='image-cover
                    rounded-full
                    shadow-xl'
                  src='/coverart.jpg'
                  alt='cover-art'
                  width={100}
                  height={100}
                />
              </div>

              <div
                className='track-info
                  flex
                  flex-col
                  max-w-md'
              >
                <span
                  className='label
                    font-light
                    max-w-fit
                    mb-3
                    p-2
                    ring-1
                    ring-green-900
                    rounded-full
                    text-green-500
                    text-xs
                    uppercase'
                >
                  Last track played
                </span>

                <span
                  className='track
                    font-bold
                    mb-1
                    text-lg
                    text-white'
                >
                  Fugiat sit Lorem incididunt labore ullamco voluptate
                </span>

                <span
                  className='artist
                    font-medium
                    text-base
                    text-white/50
                    uppercase'
                >
                  Ea magna laboris quis consequat
                </span>
              </div>
            </div>
          </div>

          <div
            className='made-by
              flex
              flex-row
              items-center
              justify-center
              my-3'
          >
            <span
              className='line
                bg-green-500
                block
                h-0.5
                rounded-full
                w-10'
            />

            <span
              className='text
                font-bold
                mx-3
                text-sm
                text-white'
            >
              Made by{" "}
              <a
                className='link
                  duration-500
                  hover:text-green-500
                  transition-all
                  underline'
                href='https://github.com/skvggor'
              >
                Marcos Lima
              </a>
            </span>

            <span
              className='line
                bg-green-500
                block
                h-0.5
                rounded-full
                w-10'
            />
          </div>
        </footer>
      </main>
    )
  )
}
