import Input from "../../common/Input";
import Image from "next/image";
import Popover from "../../common/Popover";
import { useState } from "react";
import cn from "classnames";
import Typography from "../../common/Typography";
import RangeCalendar from "../../common/RangeCalendar";
import Button from "../../common/Button";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { useTranslation } from "react-i18next";

interface CalendarTriggerProps {
  iconLeft?: boolean;
  iconRight?: boolean;
  label: string;
  positionX?: "left" | "right";
  border?: boolean;
  onChange: (value: string) => void
}

const CalendarTrigger: React.FC<CalendarTriggerProps> = ({
  iconLeft,
  iconRight,
  label,
  positionX = "left",
  border = false,
  onChange
}) => {
  const [isOpen, setOpen] = useState(false);
  const isTablet = useMediaQuery("md")
  const { t } = useTranslation();

  const renderTrigger = () => (
    <div
      className={cn(
        "flex md:justify-between w-full relative h-[50px] lg:h-[65px] items-center px-[10px] md:px-[20px] cursor-pointer",
        {
          "md:after:content-[''] md:after:h-[24px] md:after:w-[1px] md:after:bg-lines md:after:absolute md:after:right-0 md:after:top-1/2 md:after:translate-y-[-50%]":
            !isOpen && border,
        }
      )}
    >
      {iconLeft && (
        <Image
          src="./icons/calendar.svg"
          alt="calendar"
          width={24}
          height={24}
        />
      )}
      <Typography className="px-[10px]">{label}</Typography>
      {iconRight && (
        <Image
          src="./icons/calendar.svg"
          alt="calendar"
          width={24}
          height={24}
        />
      )}
    </div>
  );

  const renderContent = () => {
    return (
      <div>
        <div className="flex flex-col gap-[10px] md:flex-row md:justify-between items-center mb-[10px]">
          <Typography variant="L" semibold>
            {t("date-choose")}
          </Typography>
          <Button className="bg-surfaces rounded-[8px] py-[12px] px-[20px]">
            {t("no-need-return-ticket")}
          </Button>
        </div>
        <RangeCalendar isTablet={isTablet} onChange={onChange} />
      </div>
    );
  };

  return (
    <Popover
      trigger={renderTrigger()}
      content={renderContent()}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      positionX={positionX}
      contentClassName="mobile-container md:w-[auto] shadow-variant2 bg-white rounded-b-[10px] p-[10px] md:p-[20px] translate-y-[-1px] lg:translate-y-[-13px] z-50 border-lines border-t md:border-t-0"
      triggerClassname={cn(
        "w-full h-[52px]  lg:h-[65px] flex items-center relative md:w-[25%] lg:w-full border-lines border-b md:border-b-0",
        { "md:shadow-sm md:z-50": isOpen }
      )}
    />
  );
};

export default CalendarTrigger;
