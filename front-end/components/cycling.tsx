import { Bike } from "lucide-react"

async function getData() {
  try {
    const response = await fetch(
      (process.env.APP_ENV === "development"
        ? process.env.URL_STRAVA_API_DEV
        : process.env.URL_STRAVA_API_PROD) as string,
      { cache: "no-cache" }
    )

    if (!response.ok) {
      throw new Error("Failed to fetch data")
    }

    return response.json()
  } catch (error) {
    console.error("components/cycling", error)
  }
}

export default async function Cycling() {
  const cyclingContent: {
    currentYear: number;
    distance: string;
  } = {
    currentYear: new Date().getFullYear(),
    distance: await getData().then((data) => data?.distance),
  };

  return (
    cyclingContent.distance && (
      <div
        className="cycling
        flex
        flex-row
        items-center
        justify-center
        mb-3
        p-3
        rounded-xl
        w-full
        md:h-auto
        md:justify-center
        md:mb-0
        md:mr-3
        md:w-auto"
      >
        <div
          className="icon
          mr-3
          -rotate-45"
        >
          <Bike color="#22c55e" width={28} height={28} />
        </div>

        <div
          className="total
          flex
          flex-col"
        >
          <h3
            className="year
            font-bold
            mb-1
            text-sm
            text-white"
          >
            {cyclingContent.currentYear}
          </h3>

          <span
            className="distance
            font-light
            text-lg
            text-white/50"
          >
            {cyclingContent.distance} km
          </span>
        </div>
      </div>
    )
  );
}
