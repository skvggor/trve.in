"use client"

import { Bike, Code2, Disc3, GithubIcon, Linkedin, Twitter } from "lucide-react"

const Social = () => {
  const socialContent = {
    links: [
      {
        id: 1,
        title: "GitHub",
        href: "https://github.com/skvggor",
        icon: <GithubIcon color='#22c55e' width={28} height={28} />,
      },
      {
        id: 2,
        title: "LeetCode",
        href: "https://leetcode.com/skvggor/",
        icon: <Code2 color='#22c55e' width={28} height={28} />,
      },
      {
        id: 3,
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/marcker",
        icon: <Linkedin color='#22c55e' width={28} height={28} />,
      },
      {
        id: 4,
        title: "Twitter",
        href: "https://twitter.com/skvggor",
        icon: <Twitter color='#22c55e' width={28} height={28} />,
      },
      {
        id: 5,
        title: "Strava",
        href: "https://www.strava.com/athletes/18616728",
        icon: <Bike color='#22c55e' width={28} height={28} />,
      },
      {
        id: 6,
        title: "Last.fm",
        href: "https://last.fm/user/skvggor",
        icon: <Disc3 color='#22c55e' width={28} height={28} />,
      },
    ],
  }

  const renderSocialLinks = socialContent.links.map((link) => (
    <li key={link.id} className='item'>
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
        href={link.href}
        title={link.title}
        target='_blank'
        rel='noopener noreferrer'
      >
        {link.icon}
      </a>
    </li>
  ))

  return (
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
        {renderSocialLinks}
      </ul>
    </section>
  )
}

export default Social
