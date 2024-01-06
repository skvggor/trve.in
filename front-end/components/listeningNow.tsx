import Image from "next/image"

async function getData() {
  try {
    const response = await fetch(
      (process.env.APP_ENV === "development"
        ? process.env.URL_LASTFM_API_DEV
        : process.env.URL_LASTFM_API_PROD) as string,
      { next: { revalidate: 500 } }
    )

    if (!response.ok) {
      throw new Error("Failed to fetch data")
    }

    return response.json()
  } catch (error) {
    console.error("components/cycling", error)
  }
}

export default async function ListeningNow() {
  const currentTrack = await getData().then(
    (data) => data?.recenttracks?.track[0]
  )

  const listeningNowContent = {
    coverArt:
      currentTrack?.image.reduce((acc: string, image: any) => {
        if (image.size === "large") acc = image["#text"]
        return acc
      }) || "/default-cover-art.webp",
    artist: currentTrack?.artist["#text"],
    track: currentTrack?.name,
    status: currentTrack?.["@attr"]?.nowplaying,
  }

  const label = listeningNowContent.status ? "Listening now" : "Last played"

  return (
    currentTrack && (
      <div
        className='listening-now
          bg-gray-900
          flex
          flex-row
          items-center
          justify-center
          p-3
          rounded-xl
          md:bg-gradient-to-l'
      >
        <div
          className='cover-art
            mr-3
            ring-2
            ring-green-500
            rounded-full'
        >
          <Image
            className={`image-cover
              rounded-full
              shadow-xl
              ${listeningNowContent.status ? "animate-pulse" : ""}`}
            src={listeningNowContent.coverArt}
            alt='Cover art'
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
            {label}
          </span>

          <span
            className='track
              font-bold
              mb-1
              text-lg
              text-white'
          >
            {listeningNowContent.track}
          </span>

          <span
            className='artist
              font-medium
              text-base
              text-white/50
              uppercase'
          >
            {listeningNowContent.artist}
          </span>
        </div>
      </div>
    )
  )
}
