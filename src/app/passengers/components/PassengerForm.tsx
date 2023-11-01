"use client";

import Accordion from "@/app/components/common/Accordion";
import Button from "@/app/components/common/Button";
import Typography from "@/app/components/common/Typography";
import Image from "next/image";
import { useState } from "react";
import cn from "classnames";
import Input from "@/app/components/common/Input";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import Counter from "@/app/components/common/Counter";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { useTranslation } from "react-i18next";

interface PassengerFormProps {
  index: number;
  onChange: ({
    name,
    surname,
    dateOfBirth,
    sex,
    passport,
    passportFrom,
    passportTo,
  }: {
    name?: string;
    surname?: string;
    dateOfBirth?: string;
    sex?: string;
    passport?: string;
    passportFrom?: string;
    passportTo?: string;
  }) => void;
}

const PassengerForm: React.FC<PassengerFormProps> = ({
  index = 1,
  onChange,
}) => {
  const [isOpen, setOpen] = useState(false);
  const isTablet = useMediaQuery("md");
  const { t } = useTranslation();

  return (
    <Accordion
      contentHeight={isTablet ? 560 : 845}
      title=""
      chevronClassName="hidden"
      className={cn({
        "border-[2px] border-lines rounded-[10px]": isOpen,
      })}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      trigger={
        <div
          className={cn(
            "flex items-center justify-between px-[15px] py-[10px] w-full rounded-[10px]",
            {
              "bg-white": isOpen,
              "bg-surfaces": !isOpen,
            }
          )}
        >
          <Typography semibold>{`${t("passenger")} №${index} (${t(
            "adult"
          )})`}</Typography>
          <div className={cn("cursor-pointer", { hidden: isOpen })}>
            <div className="flex items-center gap-[10px]">
              <Image src="./icons/edit.svg" alt="edit" width={16} height={16} />
              <Typography variant="S" className="text-[#2F5AFE]">
                {t("edit")}
              </Typography>
            </div>
          </div>
        </div>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-[20px] p-[20px]">
        <TextField
          label={t("name-and-surname")}
          variant="outlined"
          onChange={(e) => onChange({ name: e.target.value })}
        />
        <TextField
          label={t("date-of-birth")}
          variant="outlined"
          onChange={(e) => onChange({ dateOfBirth: e.target.value })}
        />
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="sex"
            name="sex-radio-group"
            className="flex justify-between w-full"
          >
            <FormControlLabel
              value="famale"
              control={<Radio />}
              label={t("woman")}
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label={t("man")}
            />
          </RadioGroup>
        </FormControl>
        <TextField
          label={t("passport-series-and-number")}
          variant="outlined"
          onChange={(e) => onChange({ passport: e.target.value })}
        />
        <TextField
          label={t("passport-issue-day")}
          variant="outlined"
          onChange={(e) => onChange({ passportFrom: e.target.value })}
        />
        <TextField
          label={t("passport-until")}
          variant="outlined"
          onChange={(e) => onChange({ passportTo: e.target.value })}
        />
      </div>

      <div className="flex flex-col gap-[20px] pt-[20px] p-[20px]">
        <Typography variant="L" semibold>
          {t("checked-baggage")}
        </Typography>
        <div className="rounded-[20px] border border-[#2F5AFE] flex flex-col items-center justify-center w-[180px] h-[170px]">
          <Image src="./icons/park.svg" width={90} height={90} alt="park" />
          <Typography className="text-[#2F5AFE]">1 200 ₴</Typography>
          <div className="bg-white relative top-[28px] px-[5px]">
            <Counter
              countClassName="text-[#2F5AFE]"
              iconMinusSrc="./icons/minus-blue.svg"
              iconPlusSrc="./icons/plus-blue.svg"
              onChange={() => {}}
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-lines mt-[20px]" />

      <Button className="bg-[#2F5AFE] px-[20px] py-[12px] rounded-[8px] text-white mt-[20px] ml-[20px]">
        {t("next-passenger")}
      </Button>
    </Accordion>
  );
};

export default PassengerForm;
