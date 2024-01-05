export default function AboutMe() {
  const aboutMeContent = {
    title: "Low profile problem solver.",
  }

  return (
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
        {aboutMeContent.title}
      </h2>
    </section>
  )
}
