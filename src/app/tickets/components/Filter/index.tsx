"use client";

import Button from "@/app/components/common/Button";
import Transfers from "./components/Transfers";
import Accordion from "@/app/components/common/Accordion";
import TravelTime from "./components/TravelTime";
import Price from "./components/Price";
import { useTranslation } from "react-i18next";

interface FilterProps {
  onClick?: () => void
}

const Filter: React.FC<FilterProps> = ({ onClick }) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col gap-[30px] lg:w-[300px] px-[10px] py-[20px] md:px-[20px] lg:p-0">
      <Transfers />
      <Accordion
        title={t("baggage")}
        triggerClasssName="border-b border-lines border-dashed pb-[10px]"
        chevronSrc="./icons/chevron-gray.svg"
      >
        {" "}
      </Accordion>
      <Accordion
        title={t("airline")}
        triggerClasssName="border-b border-lines border-dashed pb-[10px]"
        chevronSrc="./icons/chevron-gray.svg"
      >
        {" "}
      </Accordion>
      <TravelTime />
      <Price />
      <Accordion
        title={t("agencies")}
        triggerClasssName="border-b border-lines border-dashed pb-[10px]"
        chevronSrc="./icons/chevron-gray.svg"
      >
        {" "}
      </Accordion>
      {onClick && (
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px]">
        <Button className="bg-lines px-[20px] py-[12px] w-full rounded-[8px] text-white" onClick={onClick}>Скинути усе</Button>
        <Button className="bg-[#2F5AFE] px-[20px] py-[12px] w-full rounded-[8px] text-white" onClick={onClick}>{t("search")}</Button>
      </div>
      )}
    </div>
  );
};

export default Filter;
