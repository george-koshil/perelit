"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import mockTickets from "@/services/tickets-service/mockTickets.json";
import { FlightItinerary, PassengerType } from "@/services/tickets-service/types";

type Filter = {
  transfers: number[] | null;
  transfersDuration: number[] | null;
  baggageIncluded: boolean;
  travelTime: number[] | null;
  price: number[] | null;
  airlines: string[] | null;
  agencies: string[] | null;
};

const TicketsContext = createContext<{
  filter: Filter;
  selectedTicket: FlightItinerary | null;
  saveSelectedTicket: (ticket: FlightItinerary) => void;
  filteredTickets: FlightItinerary[];
  passengers: PassengerType[] | null,
  savePassengers: (passengers: PassengerType[]) => void;
  updateFilter: <T extends keyof Filter>(
    value: Filter[T],
    filterType: T
  ) => void;
} | null>(null);

export const useTickets = () => {
  const context = useContext(TicketsContext);
  if (!context) {
    throw new Error("useTicketsContext must be used within a TicketsProvider");
  }
  return context;
};

function calculateTimeDifference(time1: string, time2: string): number {
  const getTime = (time: string): number => {
    const parts = time.split(":");
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);
    return hours * 60 + minutes;
  };

  const timeZoneOffset1 = parseInt(time1.slice(-5, -3), 10);
  const timeZoneOffset2 = parseInt(time2.slice(-5, -3), 10);

  const time1InMinutes = getTime(time1) - timeZoneOffset1 * 60;
  const time2InMinutes = getTime(time2) - timeZoneOffset2 * 60;

  const timeDifferenceInMinutes = time1InMinutes - time2InMinutes;

  return timeDifferenceInMinutes / 60;
}

export const TicketsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filter, setFilter] = useState<Filter>({
    transfers: null,
    transfersDuration: null,
    baggageIncluded: false,
    travelTime: null,
    price: null,
    airlines: null,
    agencies: null,
  });
  const [filteredTickets, setFilteredTickets] = useState<FlightItinerary[]>(
    mockTickets.itineraries
  );
  const [selectedTicket, setSelectedTicket] = useState<FlightItinerary | null>(filteredTickets[0])
  const [passengers, setPassengers] = useState<PassengerType[] | null>(null)

  useEffect(() => {
    const applyFilter = () => {
      const filtered = mockTickets.itineraries.filter((ticket) => {
        const {
          transfers,
          transfersDuration,
          baggageIncluded,
          travelTime,
          price,
          airlines,
          agencies,
        } = filter;
        const elapsedTime = ticket._legs[0].elapsed_time / 60;

        if (
          price &&
          (ticket._pricing_information[0].total_fare.total_fare.amount <
            price[0] ||
            ticket._pricing_information[0].total_fare.total_fare.amount >
              price[1])
        )
          return false;

        if (
          travelTime &&
          (elapsedTime < travelTime[0] || elapsedTime > travelTime[1])
        ) {
          return false;
        }

        if (
          transfers &&
          transfers.some((transferCount) =>
            ticket._legs.some(
              (leg) => leg.segments.length - 1 !== transferCount
            )
          )
        ) {
          return false;
        }

        if (transfersDuration && ticket._legs[0].segments.length > 1) {
          const totalTransferTime = calculateTimeDifference(
            ticket._legs[0].segments[1].departure.time,
            ticket._legs[0].segments[0].arrival.time
          );
          return totalTransferTime <= transfersDuration[1] &&
            totalTransferTime >= transfersDuration[0]
            ? true
            : false;
        }

        return true;
      });

      setFilteredTickets(filtered);
    };

    applyFilter();
  }, [filter]);

  const updateFilter = <T extends keyof Filter>(
    value: Filter[T],
    filterType: T
  ) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [filterType]: value,
    }));
  };

  const saveSelectedTicket = (ticket: FlightItinerary) => {
    setSelectedTicket(ticket)
  }

  const savePassengers = (passengers: PassengerType[]) => {
    setPassengers(passengers)
  }

  return (
    <TicketsContext.Provider value={{ filter, filteredTickets, updateFilter, selectedTicket, saveSelectedTicket, passengers, savePassengers }}>
      {children}
    </TicketsContext.Provider>
  );
};
