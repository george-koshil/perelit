"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";

export type AdditionalService = {
  description: string;
  price: number;
};

const OrderContext = createContext<{
  additionalServices: AdditionalService[];
  updateAdditionalServices: (service: AdditionalService) => void;
  totalPrice: number;
}>({ additionalServices: [], updateAdditionalServices: () => {}, totalPrice: 0 });

export const useOrder = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("OrderContext must be used within a TicketsProvider");
  }
  return context;
};

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [additionalServices, setAdditionalServices] = useState<
    AdditionalService[]
  >([]);

  const totalPrice = useMemo(() => {
    return [...additionalServices].reduce((acc, curr) => acc + curr.price, 0)
  }, [additionalServices])

  const updateAdditionalServices = (service: AdditionalService) => {
    if (service.price === 0) return
    setAdditionalServices([...additionalServices, service]);
  };

  return (
    <OrderContext.Provider
      value={{ additionalServices, updateAdditionalServices, totalPrice }}
    >
      {children}
    </OrderContext.Provider>
  );
};
