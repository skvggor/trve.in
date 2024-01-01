"use client"

import { Bike } from "lucide-react"

const Cycling = () => {
  const cyclingContent = {
    currentYear: new Date().getFullYear(),
  }

  return (
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
          {cyclingContent.currentYear}
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
  )
}

export default Cycling
