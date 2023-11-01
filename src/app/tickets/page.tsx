"use client";

import useMediaQuery from "../hooks/useMediaQuery";
import AdjacentDates from "./components/AdjacentDates";
import Filter from "./components/Filter/index";
import TicketCard from "./components/TicketCard";
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";
import { useMemo, useState } from "react";
import { observer } from "mobx-react-lite";
import { formatMinutes, formatTime } from "../utils/date";
import Accordion from "../components/common/Accordion";
import FlightInfo from "../components/FlightInfo";
import AirlineTicketSearchBar from "../components/AirlineTicketSearchBar";
import Typography from "../components/common/Typography";
import { FlightItinerary } from "@/services/tickets-service/types";
import { useTickets } from "../hooks/useTickets";
import { usePagination } from "../hooks/usePagination";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { useCurrency } from "../hooks/useCurrency";

interface TicketsPageProps {}

const TicketsPage: React.FC<TicketsPageProps> = ({}) => {
  const isDesctop = useMediaQuery("lg");
  const [isOpen, setOpen] = useState(false);
  const [isOpenFilter, setOpenFilter] = useState(false);
  const [activeTicket, setActiveTicket] = useState<FlightItinerary | null>(
    null
  );
  const { filteredTickets, saveSelectedTicket } = useTickets();
  const { currentItems, addMoreItems } = usePagination(filteredTickets, {
    itemsPerPage: 10,
    initialPage: 1,
  });
  const { t } = useTranslation();
  const { selectedCurrency, exchangeRate } = useCurrency()

  const handleShowDetaildedInfo = (ticketData: FlightItinerary) => {
    setOpen(true);
    setActiveTicket(ticketData);
    saveSelectedTicket(ticketData)
  };

  const minPrice = useMemo(() => {
    return Math.min(
      ...filteredTickets.map(
        (item) => item._pricing_information[0].total_fare.total_fare.amount
      )
    );
  }, [filteredTickets]);

  const minTravelTime = useMemo(() => {
    return Math.min(
      ...filteredTickets.map((item) => item._legs[0].elapsed_time)
    );
  }, [filteredTickets]);

  const getStatus = (ticketData: FlightItinerary) => {
    if (
      ticketData._pricing_information[0].total_fare.total_fare.amount ===
      minPrice
    ) {
      return { text: t("the-cheapest"), color: "white", bg: "#26C063" };
    }

    if (ticketData._legs[0].elapsed_time === minTravelTime) {
      return { text: t("the-fastest"), color: "#EB7F00", bg: "#FFE494" };
    }
  };

  return (
    <div className="bg-surfaces">
      {isOpenFilter ? (
        <Filter onClick={() => setOpenFilter(false)} />
      ) : (
        <>
          <div className="bg-white pb-[20px]">
            <div className="max-w-[1440px] mx-auto px-[10px] md:px-[20px] lg:px-[75px]">
              <div className="border border-lines rounded-[10px]">
                <AirlineTicketSearchBar />
              </div>
            </div>
          </div>
          <div className="bg-surfaces max-w-[1440px] mx-auto px-[10px] lg:px-[75px] py-[30px] flex flex-col lg:flex-row gap-[30px]">
            {isDesctop ? (
              <Filter />
            ) : (
              <Button
                className="bg-[#2F5AFE] w-full py-[12px] rounded-[8px] text-white"
                onClick={() => setOpenFilter(true)}
              >
                Фільтр
              </Button>
            )}
            <div className="flex flex-col gap-[10px] w-full">
              <AdjacentDates />
              {currentItems.map((ticketData, idx) => (
                <TicketCard
                  legs={ticketData._legs}
                  price={+(
                    ticketData._pricing_information[0].total_fare.total_fare
                      .amount / exchangeRate
                  ).toFixed(1)}
                  key={idx}
                  onClick={() =>
                    handleShowDetaildedInfo(
                      ticketData as any as FlightItinerary
                    )
                  }
                  withPrice
                  status={getStatus(ticketData)?.text}
                  bg={getStatus(ticketData)?.bg}
                  color={getStatus(ticketData)?.color}
                  currency={selectedCurrency}
                />
              ))}
              <Button
                onClick={addMoreItems}
                className={classNames(
                  "border border-primary px-[20px] py-[12px] flex items-center justify-center rounded-[10px]",
                  {
                    hidden: currentItems.length >= filteredTickets.length,
                  }
                )}
              >
                {t("download-more")}
              </Button>
            </div>
          </div>
        </>
      )}
      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <div className="bg-white rounded-[20px] p-[20px] border border-lines">
          <Typography
            variant="Header4"
            className="block mx-auto text-center pb-[20px]"
          >
            {t("about-route")}
          </Typography>

          <div className="flex flex-col gap-[20px]">
            {activeTicket?._legs.map((ticketData, idx) => (
              <Accordion
                key={idx}
                title=""
                className="border border-lines rounded-[10px] py-[20px] px-[10px] md:px-[40px]"
                chevronSize={30}
                chevronClassName="hidden md:block"
                contentHeight={250}
                trigger={
                  <FlightInfo
                    fromCity={ticketData.segments[0].departure.city ?? ""}
                    toCity={
                      ticketData.segments[ticketData.segments.length - 1]
                        .arrival.city ?? ""
                    }
                    fromTime={formatTime(
                      ticketData.segments[0].departure.time ?? ""
                    )}
                    toTime={formatTime(
                      ticketData.segments[ticketData.segments.length - 1]
                        .arrival.time ?? ""
                    )}
                    fromAirport={
                      ticketData.description.departure_location ?? ""
                    }
                    toAirport={ticketData.description.arrival_location ?? ""}
                    travelTime={formatMinutes(ticketData.elapsed_time ?? 0)}
                    fromDate={ticketData.description.departure_date}
                    toDate={ticketData.description.departure_date}
                    stops=""
                    className="md:mr-[30px]"
                    key={idx}
                  />
                }
              >
                <div className="flex flex-col gap-[20px]">
                  {ticketData.segments.map((segment, idx) => (
                    <FlightInfo
                      fromCity={segment.departure.city}
                      toCity={segment.arrival.city}
                      fromTime={formatTime(segment.departure.time)}
                      toTime={formatTime(segment.arrival.time)}
                      fromAirport={segment.departure.airport}
                      toAirport={segment.arrival.airport}
                      travelTime={formatMinutes(
                        segment.description.elapsed_time
                      )}
                      fromDate={ticketData.description.departure_date}
                      toDate={activeTicket?._legs[0].description.departure_date}
                      stops=""
                      key={idx}
                      className="bg-surfaces px-[20px] py-[10px] rounded-[10px]"
                    />
                  ))}
                </div>
              </Accordion>
            ))}
          </div>
          <div className="flex gap-[20px] mt-[30px]">
            <Button
              className="flex grow justify-center items-center bg-lines text-white px-[20px] py-[12px] rounded-[8px]"
              onClick={() => setOpen(false)}
            >
              {t("back")}
            </Button>
            <Button className="flex grow justify-center items-center bg-[#2F5AFE] text-white px-[20px] py-[12px] rounded-[8px]">
              {t("continue")}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default observer(TicketsPage);
