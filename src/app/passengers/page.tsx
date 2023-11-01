"use client";

import Image from "next/image";
import Order from "../components/Order";
import Typography from "../components/common/Typography";
import PassengerForm from "./components/PassengerForm";
import Button from "../components/common/Button";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useTickets } from "../hooks/useTickets";

export default function Passengers() {
  const { t } = useTranslation();
  const { passengers, savePassengers } = useTickets();

  const handleChangePassengers = (
    idx: number,
    {
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
    }
  ) => {
    savePassengers(
      (passengers ?? []).map((data, index) => {
        if (index === idx) {
          return {
            ...data,
            name,
          };
        }
        return data;
      })
    );
  };

  return (
    <div className="bg-surfaces">
      <div className="max-w-[1440px] mx-auto pt-[30px] pb-[60px]">
        <div className="flex gap-[30px] px-[10px] md:px-[20px]">
          <Order />
          <div className="flex flex-col gap-[20px] bg-white px-[10px] md:px-[20px] py-[30px] rounded-[10px] w-full">
            <Typography variant="XXL" semibold>
              {t("passengers")}
            </Typography>
            {passengers?.map((passenger, idx) => (
              <PassengerForm
                index={idx}
                key={idx}
                onChange={(values) => handleChangePassengers(idx, values)}
              />
            ))}

            <Button className="py-[12px] border border-dashed border-lines w-full rounded-[8px] flex justify-center items-center">
              <div className="flex items-center gap-[10px]">
                <Typography className="text-[#2F5AFE]">
                  {t("add-passenger")}
                </Typography>
                <Image
                  src="./icons/plus-blue.svg"
                  alt="plus"
                  width={24}
                  height={24}
                />
              </div>
            </Button>

            <div className="flex justify-between mt-[30px]">
              <Button className="flex justify-center items-center border border-[#2F5AFE]  px-[20px] py-[12px] rounded-[8px]">
                {t("back")}
              </Button>
              <Link href="/additional-services">
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
