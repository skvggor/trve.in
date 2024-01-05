import Image from "next/image"

export default function ListeningNow() {
  const listeningNowContent = {
    label: "Last track played",
  }

  return (
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
          {listeningNowContent.label}
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
  )
}
