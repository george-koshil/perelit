"use client"

import PhoneInput from "../components/PhoneInput";
import Typography from "../components/common/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "../components/common/Button";
import FlightInfo from "../components/FlightInfo";
import Accordion from "../components/common/Accordion";
import Order from "../components/Order";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function UserContacts() {
  const { t } = useTranslation();
  
  return (
    <div className="bg-surfaces min-h-[100vh]">
      <div className="max-w-[1440px] mx-auto pt-[30px] pb-[60px]">
        <div className="flex gap-[30px] px-[10px] md:px-[20px]">
          <Order />
          <div className="flex flex-col gap-[20px] bg-white px-[20px] py-[30px] rounded-[10px] w-full">
            <Accordion
              title=""
              className="border border-lines rounded-[10px] py-[20px] px-[10px] md:px-[40px]"
              chevronSize={30}
              chevronClassName="hidden md:block"
              trigger={
                <FlightInfo
                  fromCity="Лісабон"
                  toCity="Осло"
                  fromTime="05:05"
                  toTime="17:05"
                  fromAirport="LEBL"
                  toAirport="KLAX"
                  travelTime="1д 4год 12хв"
                  stops="2 зупинки, Франкфурт-на-Майні, Осло"
                  className="md:mr-[30px]"
                  fromDate={""}
                  toDate={""}
                />
              }
            >
              {" "}
            </Accordion>

            <div className="flex flex-col gap-[20px] max-w-[350px]">
              <Typography semibold variant="L">
                {t("enter-phone")}
              </Typography>
              <PhoneInput />
            </div>

            <div className="flex flex-col gap-[5px]">
              <Typography semibold variant="L">
                {t("contact-you")}
              </Typography>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="social-media"
                  name="social-media-radio-group"
                  className="flex justify-between w-full max-w-[430px]"
                >
                  <FormControlLabel
                    value="viber"
                    control={<Radio />}
                    label="Viber"
                  />
                  <FormControlLabel
                    value="telegram"
                    control={<Radio />}
                    label="Telegram"
                  />
                  <FormControlLabel
                    value="whatsApp"
                    control={<Radio />}
                    label="WhatsApp"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div className="flex justify-between mt-[30px]">
              <Button className="flex justify-center items-center bg-lines text-white px-[20px] py-[12px] rounded-[8px]">
                {t("back")}
              </Button>
              <Link href="/passengers">
                <Button className="flex justify-center items-center bg-[#2F5AFE] text-white px-[20px] py-[12px] rounded-[8px]">
                  {t("continue")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
