"use client"
import XCircle from "@/icons/XCircle";
import Order from "../components/Order";
import Button from "../components/common/Button";
import Typography from "../components/common/Typography";
import ServiceItem from "./components/ServiceItem";
import CabinCare from "@/icons/CabinCare";
import CatIcon from "@/icons/CatIcon";
import NotebookAndPen from "@/icons/NotebookAndPen";
import Taxi from "@/icons/Taxi";
import UserBusines from "@/icons/UserBusines";
import { useTranslation } from "react-i18next";
import { useOrder } from "../hooks/useOrder";

export default function AdditionalServices() {
  const { t } = useTranslation();
  const { updateAdditionalServices } = useOrder()


  return (
    <div className="bg-surfaces min-h-[100vh]">
      <div className="max-w-[1440px] mx-auto pt-[30px] pb-[60px]">
        <div className="flex gap-[30px] px-[10px] md:px-[20px]">
          <Order />
          <div className="flex flex-col gap-[20px] bg-white px-[10px] md:px-[20px] py-[30px] rounded-[10px] w-full">
            <Typography variant="XXL" semibold>{t("additional-services")}</Typography>
            <div className="w-full border border-lines border-dashed"/>
            <ServiceItem
              label={t("choose-place")}
              description={t("place-with-additional-leg")}
              onClick={updateAdditionalServices}
              services={[
                {
                  Icon: CabinCare,
                  description: t("common-place"),
                  price: 0,
                },
                {
                  Icon: CabinCare,
                  description: t("seat-with-legroom"),
                  price: 50,
                },
              ]}
            />
            <div className="w-full border border-lines border-dashed"/>
            <ServiceItem
              onClick={updateAdditionalServices}
              label={t("take-your-pet")}
              description={t("cat-and-dogs")}
              services={[
                {
                  Icon: XCircle,
                  description: t("without-animal"),
                  price: 0,
                },
                {
                  Icon: CatIcon,
                  description: t("in-the-cabin"),
                  price: 350,
                },
              ]}
            />
            <div className="w-full border border-lines border-dashed"/>
            <ServiceItem
              onClick={updateAdditionalServices}
              label={t("insurance")}
              description={t("travel-safely")}
              services={[
                {
                  Icon: XCircle,
                  description: t("without-insurance"),
                  price: 0,
                },
                {
                  Icon: UserBusines,
                  description: t("with-insurance"),
                  price: 200,
                },
              ]}
            />
            <div className="w-full border border-lines border-dashed"/>
             <ServiceItem
              onClick={updateAdditionalServices}
              label={t("online-reg-title")}
              description={t("read-mock")}
              services={[
                {
                  Icon: NotebookAndPen,
                  description: t("online-reg"),
                  price: 125,
                },
                {
                  Icon: XCircle,
                  description: t("offline-reg"),
                  price: 0,
                },
              ]}
            />
            <div className="w-full border border-lines border-dashed"/>
            <ServiceItem
              onClick={updateAdditionalServices}
              label={t("transfer-from-to-airport")}
              description={t("read-mock")}
              services={[
                {
                  Icon: Taxi,
                  description: t("transfer"),
                  price: 400,
                },
                {
                  Icon: XCircle,
                  description: t("not-needed"),
                  price: 0,
                },
              ]}
            />
            <div className="w-full border border-lines border-dashed"/>
            <ServiceItem
              onClick={updateAdditionalServices}
              label={t("official-hall")}
              description={t("read-mock")}
              services={[
                {
                  Icon: UserBusines,
                  description: t("official-hall"),
                  price: 500,
                },
                {
                  Icon: XCircle,
                  description: t("not-needed"),
                  price: 0,
                },
              ]}
            />
            <div className="w-full border border-lines border-dashed"/>

            <div className="flex justify-between mt-[30px]">
            <Button className="flex justify-center items-center border border-[#2F5AFE]  px-[20px] py-[12px] rounded-[8px]">
              {t("back")}
            </Button>
            <Button className="flex justify-center items-center bg-[#2F5AFE] text-white px-[20px] py-[12px] rounded-[8px]">
              {t("continue")}
            </Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
