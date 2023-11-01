"use client";

import Accordion from "@/app/components/common/Accordion";
import Typography from "@/app/components/common/Typography";
import { useTickets } from "@/app/hooks/useTickets";
import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

const getMarks = (t: TFunction) => {
  return ([
    {
      value: 0,
      label: "0",
    },
    {
      value: 5,
      label: `5 ${t("hours")}`,
    },
  ])
};

interface TransfersProps {}

const TravelTime: React.FC<TransfersProps> = ({}) => {
  const { filter, updateFilter, filteredTickets } = useTickets();
  const { t } = useTranslation();

  const onChangeTravelTime = (e: Event, value: number | number[]) => {
    updateFilter(value as number[], "travelTime");
  };

  return (
    <Accordion
      title={t("travel-time")}
      contentHeight={130}
      triggerClasssName="border-b border-lines border-dashed pb-[10px]"
      chevronSrc="./icons/chevron-gray.svg"
    >
      <div className="flex flex-col gap-[16px] mt-[16px]">
        <Typography>{t("in-general")}</Typography>
        <div className="pl-[15px] pr-[30px]">
          <Box sx={{ width: 250 }}>
          <Slider
            value={filter.travelTime ?? [0, 5]}
            aria-label="Transfer time"
            defaultValue={[0, 5]}
            step={0.5}
            valueLabelDisplay="auto"
            marks={getMarks(t)}
            min={0}
            max={5}
            onChange={onChangeTravelTime}
          />
          </Box>
        </div>
      </div>
    </Accordion>
  );
};

export default TravelTime;
