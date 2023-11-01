"use client";

import Accordion from "@/app/components/common/Accordion";
import Checkbox from "@/app/components/common/Checkbox";
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
      value: 4,
      label: "4",
    },
    {
      value: 8,
      label: "8",
    },
    {
      value: 12,
      label: "12",
    },
    {
      value: 16,
      label: "16",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 30,
      label: `30 ${t("hours")}`,
    },
  ])
};

interface TransfersProps {}

const Transfers: React.FC<TransfersProps> = ({}) => {
  const { filter, updateFilter, filteredTickets } = useTickets();
  const { t } = useTranslation();

  const onChangeTransfers = (value: number) => {
    if (filter.transfers?.includes(value)) {
      const updatedTransfers = filter.transfers.filter((item) => item != value);
      updateFilter(updatedTransfers, "transfers");
    } else {
      const updatedTransfers = [...(filter.transfers ?? []), value];
      updateFilter(updatedTransfers, "transfers");
    }
  };

  const onChangeTransfersDuration = (e: Event, value: number | number[]) => {
    updateFilter(value as number[], "transfersDuration");
  };

  return (
    <Accordion
      title={t("transfers")}
      contentHeight={200}
      triggerClasssName="border-b border-lines border-dashed pb-[10px]"
      chevronSrc="./icons/chevron-gray.svg"
      open
    >
      <div className="flex flex-col gap-[14px]">
        <div className="flex items-center gap-[10px]">
          <Checkbox
            checked={filter.transfers?.includes(0)}
            onChange={() => onChangeTransfers(0)}
          />
          <Typography>{t("no-transfers")}</Typography>
        </div>

        <div className="flex items-center gap-[10px]">
          <Checkbox
            checked={filter.transfers?.includes(1)}
            onChange={() => onChangeTransfers(1)}
          />
          <Typography>{t("1-transplant")}</Typography>
        </div>
      </div>

      <div className="flex flex-col gap-[16px] mt-[16px]">
        <Typography>{t("plane-transfer-duration")}</Typography>
        <div className="pl-[15px] pr-[30px]">
          <Box sx={{ width: 250 }}>
          <Slider
            value={filter.transfersDuration ?? [0,30]}
            aria-label="Transfer time"
            defaultValue={[0, 30]}
            step={0.5}
            valueLabelDisplay="auto"
            marks={getMarks(t)}
            min={0}
            max={30}
            onChange={onChangeTransfersDuration}
          />
          </Box>
        </div>
      </div>
    </Accordion>
  );
};

export default Transfers;
