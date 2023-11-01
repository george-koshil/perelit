"use client"
import Image from "next/image"
import Typography from "../common/Typography"
import cn from "classnames"
import { useTranslation } from "react-i18next"

interface FlightInfoProps {
  fromTime: string
  toTime: string
  fromCity: string
  toCity: string
  fromAirport: string
  toAirport: string
  travelTime: string
  stops: string
  className?: string
  fromDate: string
  toDate: string
}

const FlightInfo: React.FC<FlightInfoProps> = ({  fromTime, toTime, fromCity, toCity, travelTime, stops, toAirport, fromAirport, className, fromDate, toDate }) => {
  const { t } = useTranslation();

  return (
    <div className={cn("flex items-center gap-[10px] md:gap-[30px] w-full", className)}>
      <div className="flex flex-col">
        <Typography variant="Header4" semibold>
          {fromTime}
        </Typography>
        <Typography variant="S" className="text-secondaryText">
          {fromCity}
        </Typography>
        <Typography variant="S" className="text-secondaryText">
          {fromDate}
        </Typography>
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between">
          <Image src="./icons/plane.svg" alt="plane" width={24} height={24} />
          <Typography variant="S" semibold className="hidden md:block">{`${t("on-the-road")}: ${travelTime}`}</Typography>
          <Image src="./icons/plane-down.svg" alt="plane" width={24} height={24} />
        </div>

        <div className="flex items-center my-[10px] w-full">
          <div className="h-[3px] w-[20%] rounded-[2px] bg-lines"></div>
          <div className="h-[1px] w-[60%] rounded-[2px] bg-lines"></div>
          <div className="h-[3px] w-[20%] rounded-[2px] bg-lines"></div>
        </div>

        <div className="flex items-center justify-between">
          <Typography variant="S">{fromAirport}</Typography>
          <Typography variant="S" className="hidden md:block">{stops}</Typography>
          <Typography variant="S">{toAirport}</Typography>
        </div>
      </div>

      <div className="flex flex-col">
        <Typography variant="Header4" semibold>
          {toTime}
        </Typography>
        <Typography variant="S" className="text-secondaryText">
          {toCity}
        </Typography>
        <Typography variant="S" className="text-secondaryText">
          {toDate}
        </Typography>
      </div>
    </div>
  );
};

export default FlightInfo;