import Image from "next/image"

export default function Header() {
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

  return (
    <header
      className='site-header
        flex
        flex-col
        group
        items-center
        justify-center
        w-full
        md:flex-row'
    >
      <section
        className='avatar
          h-24
          mb-3
          relative
          rounded-full
          w-24
          md:h-32
          md:mb-0
          md:mr-5
          md:w-32'
      >
        <Image
          src={headerContent.image.src}
          alt={headerContent.image.alt}
          width={headerContent.image.width}
          height={headerContent.image.height}
          className='image-avatar
            border-2
            border-gray-700
            duration-500
            group-hover:border-gray-500
            p-0.5
            rounded-full
            transition-all'
        />

        <span
          className='icon-status
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
            md:w-5'
        />
      </section>

      <section className='holder-text'>
        <h1
          className='name
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
            md:tracking-tighter'
        >
          {headerContent.title}
        </h1>

        <section
          className='border-gradient
            bg-gradient-to-r from-green-900 to-green-300
            p-px
            rounded-full'
        >
          <section
            className='bg-[#020817]
              p-px
              rounded-full'
          >
            <h2
              className='current-position
                font-normal
                group-hover:text-white
                text-center
                text-green-100
                text-lg
                transition-all
                md:text-xl
                md:tracking-tight'
            >
              {headerContent.currentPosition}
            </h2>
          </section>
        </section>
      </section>
    </header>
  )
}
