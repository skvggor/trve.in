import Image from "next/image";

async function getData() {
  try {
    const response = await fetch(
      (process.env.APP_ENV === "development"
        ? process.env.URL_LASTFM_API_DEV
        : process.env.URL_LASTFM_API_PROD) as string,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (error) {
    console.error("components/listeningNow", error);
  }
}

export default async function ListeningNow() {
  const currentTrack = await getData().then(
    (data) => data?.recenttracks?.track[0]
  );

  const listeningNowContent = {
    coverArt:
      currentTrack?.image.reduce(
        (
          acc: string,
          image: {
            size: string;
            "#text": string;
          }
        ) => {
          if (image.size === "large") acc = image["#text"];
          return acc;
        }
      ) || "/default-cover-art.webp",
    artist: currentTrack?.artist["#text"],
    track: currentTrack?.name,
    status: currentTrack?.["@attr"]?.nowplaying,
  };

  const label = listeningNowContent.status ? "Listening now" : "Last played";

  return (
    currentTrack && (
      <div
        className="listening-now
          flex
          flex-row
          items-center
          justify-start
          min-w-[350px]
          p-3
          relative
          rounded-xl
          shadow-2xl"
      >
        <div
          className="cover-art
            mr-3
            rounded-full
            shadow-2xl
            z-10"
        >
          <Image
            className={`image-cover
              rounded-full
              shadow-2xl
              ${listeningNowContent.status ? "animate-pulse" : ""}`}
            src={listeningNowContent.coverArt}
            alt="Cover art"
            width={100}
            height={100}
          />
        </div>
        <div
          className="track-info
            flex
            flex-col
            max-w-md
            z-10"
        >
          <span
            className="label
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
          >
            {label}
          </span>

          <span
            className="track
              font-bold
              mb-1
              text-lg
              text-white"
          >
            {listeningNowContent.track}
          </span>

          <span
            className="artist
              font-medium
              text-base
              text-white/50
              uppercase"
          >
            {listeningNowContent.artist}
          </span>
        </div>
        <div
          className="background-with-blur
            absolute
            bg-gray-900
            h-full
            inset-0
            opacity-50
            overflow-hidden
            rounded-xl
            w-full
            z-0"
        >
          <Image
            className="image-background
              blur-2xl
              rounded-xl
              saturate-200"
            src={listeningNowContent.coverArt}
            alt="Cover art"
            width={150}
            height={150}
          />
        </div>
      </div>
    )
  );
}
