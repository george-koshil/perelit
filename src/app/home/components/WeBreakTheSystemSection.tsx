"use client"

import Typography from "@/app/components/common/Typography";
import TicketIcon from "../../../../public/icons/ticket.svg";
import HandMoneyIcon from "../../../../public/icons/hand-money.svg";
import PlaneIcon from "../../../../public/icons/plane.svg";
import InfoItem from "./InfoItem";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

const getInfoMap = (t: TFunction) => {
  return ([
    {
      imgSrc: TicketIcon,
      title: t("trusted-milions"),
      description: t("join-over"),
    },
    {
      imgSrc: PlaneIcon,
      title: t("one_search"),
      description: t("kivi-code"),
    },
    {
      imgSrc: HandMoneyIcon,
      title: t("travel_more"),
      description: t("look_for-travel"),
    },
    {
      imgSrc: TicketIcon,
      title: t("trusted-milions"),
      description: t("join-over"),
    },
  ])
};

interface WeBreakTheSystemSectionProps {}

const WeBreakTheSystemSection: React.FC<
  WeBreakTheSystemSectionProps
> = ({}) => {
  const isDesctop = useMediaQuery("lg")
  const { t } = useTranslation();

  return (
    <div className="bg-surfaces px-[10px] py-[50px] md:px-[20px] lg:px-[75px] lg:py-[60px] mt-[80px] lg:mt-[100px]">
      <div className="max-w-[1440px] mx-auto lg:px-[75px]">
        <Typography className="text-secondaryText">
          {t("more_opportunities")}
        </Typography>
        <Typography variant={isDesctop ? "Header2" : "Header4"} tag="h2" className="mb-[20px] lg:mb-[30px]" semibold>
          {t("breaking-system")}
        </Typography>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-[30px] justify-between">
          {getInfoMap(t).map(({ imgSrc, title, description }, idx) => (
            <InfoItem
              imgSrc={imgSrc}
              title={title}
              description={description}
              key={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeBreakTheSystemSection;
