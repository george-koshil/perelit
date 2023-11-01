"use client";

import Popover from "@/app/components/common/Popover";
import Image from "next/image";
import Typography from "../../common/Typography";
import { useState } from "react";
import cn from "classnames";
import Counter from "../../common/Counter";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { PassengerTypeEnum } from "@/services/tickets-service/types";
import { useTranslation } from "react-i18next";

interface PassengersProps {
  onChange: (type: PassengerTypeEnum, count: number) => void;
}

const Passengers: React.FC<PassengersProps> = ({ onChange }) => {
  const [isOpen, setOpen] = useState(false);
  const isTablet = useMediaQuery("md");
  const { t } = useTranslation();

  const handleChange = (type: PassengerTypeEnum, count: number) => {
    onChange(type, count)
  }

  const renderTrigger = () => (
    <div
      className={cn(
        "flex items-center w-full cursor-pointer h-[52px] lg:h-[65px] lg:w-full px-[10px] md:px-[20px]",
        {
          "md:after:content-[''] md:after:z-10 md:after:h-[24px] md:after:w-[1px] md:after:bg-lines md:after:absolute md:after:left-0 md:after:top-1/2 md:after:translate-y-[-50%]":
            !isOpen,
        }
      )}
    >
      <Image src="./icons/users.svg" alt="users" width={24} height={24} />
      <Typography className="px-[10px] text-secondaryText">{t("passengers")}</Typography>
      <Image
        src="./icons/chevron.svg"
        alt="users"
        width={16}
        height={16}
        className={cn("block ml-auto md:ml-[10px] lg:ml-auto", {
          "rotate-180 duration-200": isOpen,
        })}
      />
    </div>
  );

  const renderContent = () => (
    <div className="flex flex-col justify-center gap-[25px] p-[10px] md:p-[20px] rounded-b-[10px] bg-white w-full shadow-variant2">
      <div className="flex">
        <Image src="./icons/user2.svg" alt="user" width={24} height={24} />
        <div className="flex flex-col px-[10px]">
          <Typography semibold>{t("adults")}</Typography>
          <Typography className="text-secondaryText" variant="S">
            {t("older-than-11-years")}
          </Typography>
        </div>
        <Counter
          className="ml-auto"
          onChange={(count) => handleChange("ADT", count)}
          defaultValue={1}
        />
      </div>

      <div className="flex">
        <Image src="./icons/child.svg" alt="user" width={24} height={24} />
        <div className="flex flex-col px-[10px]">
          <Typography semibold>{t("children")}</Typography>
          <Typography className="text-secondaryText" variant="S">
          {t("2-11-years")}
          </Typography>
        </div>
        <Counter
          className="ml-auto"
          onChange={(count) => handleChange("CNN", count)}
        />
      </div>

      <div className="flex">
        <Image src="./icons/sharp.svg" alt="sharp" width={24} height={24} />
        <div className="flex flex-col px-[10px]">
          <Typography semibold>{t("babies")}</Typography>
          <Typography className="text-secondaryText" variant="S">
          {t("up-to-2-years")}
          </Typography>
        </div>
        <Counter
          className="ml-auto"
          onChange={(count) => handleChange("INS", count)}
        />
      </div>
    </div>
  );

  return (
    <Popover
      trigger={renderTrigger()}
      content={renderContent()}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      positionX="left"
      topLeftShadow={isTablet}
      contentClassName="md:max-w-[320px] lg:max-w-[427px] mobile-container border-lines border-t md:border-t-0"
      triggerClassname={cn(
        "w-full h-[52px]  lg:h-[65px] flex items-center relative md:w-[26%] lg:w-full",
        { "md:shadow-sm md:z-50": isOpen }
      )}
    />
  );
};

export default Passengers;
