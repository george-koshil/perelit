"use client";

import Dropdown from "@/app/components/common/Dropdown";
import { useCurrency } from "@/app/hooks/useCurrency";

export enum Currencies {
  dollar = "$",
  zloty = "zł",
  euro = "€",
  hryvnia = "₴",
}

const currencies = Object.values(Currencies);

interface CurrencyPickerProps {}

const CurrencyPicker: React.FC<CurrencyPickerProps> = ({}) => {
  const { selectedCurrency, setCurrency } = useCurrency()

  const onSelectCurrency = (value: string) => {
    setCurrency(value as Currencies)
  }

  function renderOption(option: string) {
    return <div className="flex items-center">{option}</div>;
  }

  return (
    <Dropdown
      selectedOption={selectedCurrency}
      onSelectOption={onSelectCurrency}
      options={currencies}
      dropdownContentClass="translate-x-[-10px]"
      renderOption={renderOption}
    />
  );
};

export default CurrencyPicker;
