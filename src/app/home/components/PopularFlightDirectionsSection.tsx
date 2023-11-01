"use client"

import Typography from "@/app/components/common/Typography";
import PriceCard from "./PriceCard";
import Barselona from "../../../../public/images/barselona.png";
import London from "../../../../public/images/london.png";
import Madrid from "../../../../public/images/madrid.png";
import Kiev from "../../../../public/images/kiev.jpg";
import Franfurt from "../../../../public/images/franfurt.jpg";
import Rome from "../../../../public/images/rome.jpg";
import Zagreb from "../../../../public/images/zagreb.jpg";
import Lisabon from "../../../../public/images/lisabon.jpg";
import ProposalsCard from "./ProposalsCard";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { useTranslation } from "react-i18next";

const citiesMap = [
  { imgSrc: Barselona, cityName: "Барселона", price: 6540 },
  { imgSrc: London, cityName: "Лондон", price: 6540 },
  { imgSrc: Madrid, cityName: "Мадрид", price: 6540 },
  { imgSrc: Kiev, cityName: "Київ", price: 6540 },
  { imgSrc: Franfurt, cityName: "Франкфурт", price: 6540 },
  { imgSrc: Rome, cityName: "Рим", price: 6540 },
  { imgSrc: Zagreb, cityName: "Загреб", price: 6540 },
  { imgSrc: Lisabon, cityName: "Лісабон", price: 6540 },
];

interface PopularFlightDirectionsSectionProps {
  cityName?: string;
}

const PopularFlightDirectionsSection: React.FC<PopularFlightDirectionsSectionProps> = ({
  cityName = "m.Kassel",
}) => {
  const isTablet = useMediaQuery("md")
  const { t } = useTranslation();

  return (
    <div className="mt-[100px] max-w-[1440px] mx-auto px-[10px] md:px-[20px] lg:px-[75px]">
      <Typography
        variant={isTablet ? "Header2" : "Header4"}
        tag="h2"
        className="mb-[30px] font-semibold"
      >
        {t("popular-destination")} {cityName} ...
      </Typography>

      <div className="flex flex-col lg:flex-row gap-[20px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] max-w-[860px]">
          {citiesMap.map(({ imgSrc, cityName, price }) => (
            <PriceCard
              imgSrc={imgSrc}
              cityName={cityName}
              price={price}
              key={cityName}
            />
          ))}
        </div>
        <ProposalsCard />
      </div>
    </div>
  );
};

export default PopularFlightDirectionsSection;
