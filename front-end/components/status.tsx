import {
  BatteryCharging,
  Bike,
  BatteryWarning,
  Disc2,
  Laptop,
  Laugh
} from "lucide-react";

import Loading from "@/components/loading";

interface Status {
  color: string;
  text: string;
  icon: JSX.Element;
}

interface StatusData {
  time: string;
  status: Status;
}

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

const statuses: Record<string, Status> = {
  weekend: {
    color: "text-green-500",
    text: "Enjoying the weekend.",
    icon: <Laugh
      color="#22c55e"
      className="mr-1"
      width={24}
      height={24}
    />,
  },
  sleep: {
    color: "gray-500",
    text: "Sleeping.",
    icon: <BatteryWarning
      color="#6b7280"
      className="mr-1"
      width={24}
      height={24}
    />,
  },
  lunch: {
    color: "text-yellow-500",
    text: "Having lunch.",
    icon: <BatteryCharging
      color="#eab308"
      className="mr-1"
      width={24}
      height={24}
    />,
  },
  work: {
    color: "text-green-500",
    text: "At work.",
    icon: <Laptop
      color="#22c55e"
      className="mr-1"
      width={24}
      height={24}
    />,
  },
  free: {
    color: "text-green-500",
    text: "Enjoying the life.",
    icon: <Bike
      color="#22c55e"
      className="mr-1"
      width={24}
      height={24}
    />,
  },
  listening: {
    color: "text-green-500",
    text: "Listening to music.",
    icon: <Disc2
      color="#22c55e"
      className="mr-1"
      width={24}
      height={24}
    />,
  },
};

export default async function Status() {
  const data = await getData().then((data) => data);

  const statusContent: StatusData = {
    time: data?.time,
    status: statuses[data?.status],
  };

  return statusContent.status ? (
    <span
      className="status
        block
        center-x
        flex
        items-center
        mt-2
        text-gray-400
        w-full
        md:ml-4"
    >
      <span
        className={
          `flex
          items-center
          mr-1
          ${statusContent.status.color}`
        }
      >
        {statusContent.status.icon}
        <span className="time
          font-bold
          mr-1"
        >
          {statusContent.time}
        </span>

        <span className="utc-time
          text-xs"
        >
          (UTC -03:00):
        </span>
      </span>

      {statusContent.status.text}
    </span >
  ) : (
    <Loading />
  );
}
