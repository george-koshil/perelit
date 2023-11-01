"use client"

import Image from "next/image";
import MainImageDesctop from "../../../../public/images/main-desctop.png";
import Typography from "@/app/components/common/Typography";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import useViewportWidth from "@/app/hooks/useViewportWidth";
import Tabs from "@/app/components/common/Tabs";
import PlaneIcon from "../../../../public/icons/plane.svg"
import PlaneUpWhite from "../../../../public/icons/plane-up-white.svg";
import AirlineTicketSearchBar from "@/app/components/AirlineTicketSearchBar";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

const getTabs = (t: TFunction) => {
  return ([
    {
      label: t("flights"),
      content: <AirlineTicketSearchBar withSearchButton />,
      icon: PlaneUpWhite,
    },
    {
      label: t("hotels"),
      content: <div className="p-[20px]">Готелі в розробці...</div>,
      icon: PlaneUpWhite,
    },
    {
      label: t("auto"),
      content: <div className="p-[20px]">Авто в розробці...</div>,
      icon: PlaneUpWhite,
    },
  ])
}

interface SearchFlightsSectionProps {}

const SearchFlightsSection: React.FC<SearchFlightsSectionProps> = ({}) => {
  const isTablet = useMediaQuery("md");
  const isDesctop = useMediaQuery("xl")
  const width = useViewportWidth()
  const { t } = useTranslation();

  return (
    <div className="relative max-w-[1440px] mx-auto">
      <Image
        src={MainImageDesctop}
        alt="main-image"
        width={isTablet ? width - 40 : isDesctop ? width : width - 20}
        height={isTablet ? 380 : 550}
        className="rounded-[16px] mx-auto h-[550px] md:h-[380px]"
      />
      <div className="absolute top-[30px] md:top-[130px] left-1/2 translate-x-[-50%] flex flex-col items-center text-center">
        <Typography variant={isTablet ? "Header2" : "Header4"} tag="h1" semibold className="w-[240px] md:w-max">
          {t("search-cheap-tickets")}
        </Typography>
        <Typography className="text-secondaryText mt-[10px]">
          {t("book-cheap")}
        </Typography>
      </div>

      <Tabs tabs={getTabs(t)} className="w-full !absolute px-[15px] md:px-[40px] top-[180px] md:top-[282px] lg:top-[305px]" activeIcon={PlaneIcon} />
    </div>
  );
};

export default SearchFlightsSection;
