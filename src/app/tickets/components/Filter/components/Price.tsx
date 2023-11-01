"use client";

import Accordion from "@/app/components/common/Accordion";
import Typography from "@/app/components/common/Typography";
import { useTickets } from "@/app/hooks/useTickets";
import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import { useTranslation } from "react-i18next";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 12000,
    label: "12000₴",
  },
];

interface TransfersProps {}

const Price: React.FC<TransfersProps> = ({}) => {
  const { filter, updateFilter } = useTickets();
  const { t } = useTranslation();

  const onChangeTravelTime = (e: Event, value: number | number[]) => {
    updateFilter(value as number[], "price");
  };

  return (
    <Accordion
      title={t("price")}
      contentHeight={130}
      triggerClasssName="border-b border-lines border-dashed pb-[10px]"
      chevronSrc="./icons/chevron-gray.svg"
    >
      <div className="flex flex-col gap-[16px] mt-[16px]">
        <Typography>{t("in-general")}</Typography>
        <div className="pr-[30px] pl-[15px]">
          <Box sx={{ width: 250 }}>
          <Slider
            value={filter.price ?? [0, 12000]}
            aria-label="Transfer time"
            defaultValue={[0, 12000]}
            step={100}
            valueLabelDisplay="auto"
            marks={marks}
            min={0}
            max={12000}
            onChange={onChangeTravelTime}
          />
          </Box>
        </div>
      </div>
    </Accordion>
  );
};

export default Price;
