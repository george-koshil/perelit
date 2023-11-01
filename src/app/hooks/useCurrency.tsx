"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { Currencies } from "../components/CurrencyPicker";

const CurrencyContext = createContext<
  | {
      selectedCurrency: Currencies;
      setCurrency: (currency: Currencies) => void;
      exchangeRate: number
    }
  | undefined
>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currencies>(
    Currencies.hryvnia
  );
  
  const exchangeRate = useMemo(() => {
    if (selectedCurrency === Currencies.zloty) return 8.6
    if (selectedCurrency === Currencies.dollar) return 37
    if (selectedCurrency === Currencies.euro) return 39

    return 1
  }, [selectedCurrency])

  const setCurrency = (currency: Currencies) => {
    setSelectedCurrency(currency);
  };

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, setCurrency, exchangeRate }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error(
      "useCurrencyContext must be used within a CurrencyProvider"
    );
  }
  return context;
};
