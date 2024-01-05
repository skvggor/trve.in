import Header from "@/components/header"
import AboutMe from "@/components/aboutMe"
import Social from "@/components/social"
import Cycling from "@/components/cycling"
import ListeningNow from "@/components/listeningNow"
import MadeBy from "@/components/madeBy"

export default function Home() {
  return (
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
        <AboutMe />
        <Social />
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
          <Cycling />
          <ListeningNow />
        </div>

        <MadeBy />
      </footer>
    </main>
  )
}
