import Image from "next/image";

import Status from "@/components/status";
import { IHeaderContent, IStatusIndicator } from "@/types";

async function getData() {
  try {
    const response = await fetch(
      (process.env.APP_ENV === "development"
        ? process.env.URL_STATUS_API_DEV
        : process.env.URL_STATUS_API_PROD) as string,
      { cache: "no-cache" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (error) {
    console.error("components/status", error);
  }
}

export default async function Header() {
  const data = await getData().then((data) => data);

  const headerContent: IHeaderContent = {
    title: "skvggor",
    currentPosition: [
      "Senior Front-end Developer at ",
      <a
        key="employer"
        href="https://www.radixeng.com/"
        target="_blank"
        aria-label="New window link."
        className="link
          text-green-500
          underline"
      >
        @radixeng
      </a>,
    ],
    image: {
      src: "/avatar.webp",
      alt: "avatar",
      width: 200,
      height: 200,
    },
    statusFromAPI: {
      time: data.time,
      status: data.status,
    },
  };

  const statusIndicators: Record<string, IStatusIndicator> = {
    weekend: {
      indicatorBg: "bg-green-500",
      animate: "animate-ping",
    },
    sleep: {
      indicatorBg: "bg-gray-400",
      animate: "animate-none",
    },
    lunch: {
      indicatorBg: "bg-yellow-500",
      animate: "animate-none",
    },
    work: {
      indicatorBg: "bg-red-700",
      animate: "animate-none",
    },
    free: {
      indicatorBg: "bg-green-500",
      animate: "animate-ping",
    },
    listening: {
      indicatorBg: "bg-violet-600",
      animate: "animate-ping",
    },
  };

  return (
    <header
      className="site-header
        flex
        flex-col
        group
        items-center
        justify-center
        w-full
        md:flex-row"
    >
      <section
        className="avatar
          h-24
          mb-3
          relative
          rounded-full
          w-24
          md:h-32
          md:mb-0
          md:mr-5
          md:w-32"
      >
        <Image
          src={headerContent.image.src}
          alt={headerContent.image.alt}
          width={headerContent.image.width}
          height={headerContent.image.height}
          className="image-avatar
            border-2
            border-gray-700
            duration-500
            group-hover:border-gray-500
            p-0.5
            rounded-full
            transition-all"
        />

        <span
          className={`icon-status
            absolute
            ${statusIndicators[headerContent.statusFromAPI.status].indicatorBg}
            border-[#020817]
            border-2
            bottom-2
            duration-500
            h-4
            right-2
            rounded-full
            transition-all
            z-[2]
            w-4
            md:h-5
            md:right-3
            md:w-5`}
        />
        <span
          className={`icon-status-ping
            absolute
            ${statusIndicators[headerContent.statusFromAPI.status].animate}
            ${statusIndicators[headerContent.statusFromAPI.status].indicatorBg}
            bottom-2
            duration-1000
            ease-in-out
            h-4
            right-2
            rounded-full
            transition
            w-4
            z-[1]
            md:h-5
            md:right-3
            md:w-5`}
        />
      </section>

      <section
        className="holder-text
          flex
          flex-col
          items-center
          md:items-start
        "
      >
        <h1
          className="name
            duration-500
            font-medium
            group-hover:text-white
            mb-3
            text-5xl
            text-green-100
            transition-all
            uppercase
            md:mb-5
            md:ml-3
            md:text-6xl
            md:tracking-tighter"
        >
          {headerContent.title}
        </h1>

        <section
          className="border-gradient
            bg-gradient-to-r from-green-900 to-green-300
            px-px
            py-px
            rounded-full"
        >
          <section
            className="bg-[#020817]
              px-4
              py-px
              rounded-full"
          >
            <h2
              className="current-position
                font-normal
                group-hover:text-white
                text-center
                text-green-100
                text-lg
                transition-all
                md:text-xl
                md:tracking-tight"
            >
              {headerContent.currentPosition}
            </h2>
          </section>
        </section>

        <section className="holder-status">
          <Status dataFromAPI={headerContent.statusFromAPI} />
        </section>
      </section>
    </header>
  );
}
