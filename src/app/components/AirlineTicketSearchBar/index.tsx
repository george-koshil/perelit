"use client";

import CalendarTrigger from "./components/CalendarTrigger";
import Image from "next/image";
import Passengers from "./components/Passengers";
import Button from "../common/Button";
import Typography from "../common/Typography";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import From from "./components/From";
import Where from "./components/Where";
import Link from "next/link";
import { useEffect, useState } from "react";
import ticketsService from "@/services/tickets-service/tickets-service";
import { PassengerType, PassengerTypeEnum } from "@/services/tickets-service/types";
import { useTranslation } from "react-i18next";
import { useTickets } from "@/app/hooks/useTickets";

interface AirlineTicketSearchBarProps {
  withSearchButton?: boolean
}

const AirlineTicketSearchBar: React.FC<AirlineTicketSearchBarProps> = ({ withSearchButton }) => {
  const isTablet = useMediaQuery("md");
  const isDesctop = useMediaQuery("lg");
  const [flightData, setFlightData] = useState({
    departure_date: "",
    origin_location: "",
    destination_location: "",
    passengers: [{ type: "ADT", number: 1 }, { type: "CNN", number: 0 }, { type: "INS", number: 0 } ] as PassengerType[],
  });
  const { t } = useTranslation();
  const { savePassengers } = useTickets()

  useEffect(() => {
    savePassengers(flightData.passengers)
  }, [flightData, savePassengers])

  const handleChangeDepartureDate = (value: string) => {
    setFlightData({ ...flightData, departure_date: value });
  };

  const handleChangeOriginLocation = (value: string) => {
    setFlightData({ ...flightData, origin_location: value });
  };

  const handleChangeDestinationLocation = (value: string) => {
    setFlightData({ ...flightData, destination_location: value });
  };

  const handleChangePassengersCount = (type: PassengerTypeEnum, count: number) => {
    setFlightData({ ...flightData, passengers: [...flightData.passengers.map(passengerData => {
      if (passengerData.type === type) return { type, number: count }
      return passengerData
    })] });
  };

  const onSubmit = () => {
    const { departure_date, origin_location, destination_location, passengers } = flightData
    ticketsService.getTickets({
      itinerary: [
        {
          departure_date,
          origin_location,
          destination_location,
          rph: "1",
        },
      ],
      passengers,
    });
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center w-full overflow-hidden relative lg:h-[65px] rounded-b-[16px]">
      <From onChange={handleChangeOriginLocation} value={flightData.origin_location} />
      <Where onChange={handleChangeDestinationLocation} value={flightData.destination_location} />
      <CalendarTrigger
        onChange={handleChangeDepartureDate}
        label={t("when")}
        iconLeft={!isTablet}
        iconRight={isTablet}
        positionX="right"
        border
      />
      <CalendarTrigger
        onChange={handleChangeDepartureDate}
        label={t("back")}
        iconLeft={!isTablet}
        positionX={isDesctop ? "left" : "right"}
      />
      <Passengers onChange={handleChangePassengersCount}/>
      {withSearchButton && (
        <div className="w-full md:w-[24%] md:pl-[30px] md:pr-[15px] flex items-center">
        <Link href="/tickets" className="w-full">
          <Button className="flex justify-center w-full py-[10px] px-[20px] bg-primary md:rounded-[8px] md:min-w-[130px]" onClick={onSubmit}>
            <Typography variant="L" className="text-white mr-[10px]">
              {t("search")}
            </Typography>
            <Image
              src="./icons/search-white.svg"
              width={24}
              height={24}
              alt="search icon"
            />
          </Button>
        </Link>
      </div>
      )}

      <div className="hidden md:block lg:hidden  w-full h-[1px] bg-lines absolute top-1/2 translate-y-[-50%] left-0" />
    </div>
  );
};

export default AirlineTicketSearchBar;
