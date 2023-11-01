"use client";

import { useOrder } from "@/app/hooks/useOrder";
import Accordion from "../common/Accordion";
import Typography from "../common/Typography";
import { useTickets } from "@/app/hooks/useTickets";
import { useTranslation } from "react-i18next";
import { useCurrency } from "@/app/hooks/useCurrency";
import { formatTime } from "@/app/utils/date";

interface OrderProps {}

const Order: React.FC<OrderProps> = ({}) => {
  const { additionalServices, totalPrice } = useOrder();
  const { selectedTicket, passengers } = useTickets();
  const { t } = useTranslation();
  const { selectedCurrency } = useCurrency();
  console.log(passengers, "asdsad");

  return (
    <div className="bg-white rounded-[10px] hidden lg:flex flex-col max-w-[270px] w-full h-max overflow-hidden">
      <Accordion
        title={t("route")}
        className="px-[20px] py-[12px]"
        titleClassName="!text-[14px]"
        contentHeight={200}
      >
        <div className="flex flex-col gap-[15px]">
          <div className="flex items-center gap-[10px]">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6667 3.16663H3.33333C2.59695 3.16663 2 3.76358 2 4.49996V13.8333C2 14.5697 2.59695 15.1666 3.33333 15.1666H12.6667C13.403 15.1666 14 14.5697 14 13.8333V4.49996C14 3.76358 13.403 3.16663 12.6667 3.16663Z"
                stroke="#2F5AFE"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6666 1.83337V4.50004"
                stroke="#2F5AFE"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.33337 1.83337V4.50004"
                stroke="#2F5AFE"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 7.16663H14"
                stroke="#2F5AFE"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="flex flex-col">
              <Typography bold>
                {selectedTicket?._legs[0].description.departure_date}
              </Typography>
              <Typography className="text-secondaryText">
                {passengers?.length ?? 1} пассажири
              </Typography>
            </div>
          </div>

          {selectedTicket?._legs.map((leg, idx) => (
            <div key={idx} className="flex gap-[10px]">
              <svg
                width="17"
                height="46"
                viewBox="0 0 17 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6.5"
                  y="6.5"
                  width="4"
                  height="4"
                  rx="2"
                  stroke="#D1D2DF"
                />
                <path
                  d="M8 12.5C8 12.2239 8.22386 12 8.5 12C8.77614 12 9 12.2239 9 12.5V16H8V12.5Z"
                  fill="#D1D2DF"
                />
                <path
                  d="M8 16H9V20C9 20.2761 8.77614 20.5 8.5 20.5C8.22386 20.5 8 20.2761 8 20V16Z"
                  fill="#D1D2DF"
                />
                <rect
                  x="7"
                  y="21.5"
                  width="3"
                  height="3"
                  rx="1.5"
                  fill="#D1D2DF"
                />
                <path
                  d="M8 26C8 25.7239 8.22386 25.5 8.5 25.5C8.77614 25.5 9 25.7239 9 26V30H8V26Z"
                  fill="#D1D2DF"
                />
                <path
                  d="M8 30H9V33.5C9 33.7761 8.77614 34 8.5 34C8.22386 34 8 33.7761 8 33.5V30Z"
                  fill="#D1D2DF"
                />
                <rect
                  x="6.5"
                  y="35.5"
                  width="4"
                  height="4"
                  rx="2"
                  stroke="#D1D2DF"
                />
              </svg>

              <div className="flex flex-col gap-[12px]">
                <div className="flex items-center gap-[10px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.41524 12.4762H14.8903M15.2713 5.25871C15.1703 4.95006 14.953 4.69487 14.6672 4.54927C14.3814 4.40367 14.0504 4.37959 13.7471 4.48233L10.7399 5.50323C10.5193 5.57811 10.2795 5.57363 10.0619 5.49057L4.7356 3.45776C4.52808 3.37856 4.29675 3.39085 4.09879 3.49158V3.49158C3.5656 3.76291 3.51889 4.50674 4.01395 4.84264L6.00289 6.19214C6.63269 6.61946 6.57326 7.56571 5.89496 7.91089L4.86322 8.43592C4.57826 8.58093 4.24113 8.58093 3.95616 8.43592L1.82195 7.34986C1.57984 7.22666 1.2858 7.27464 1.09541 7.46841V7.46841C0.857388 7.71065 0.857388 8.09895 1.09541 8.3412L3.20251 10.4857C3.48106 10.7692 3.90105 10.8608 4.27237 10.7191L14.5512 6.79623C14.8433 6.68459 15.0816 6.46202 15.2159 6.17529C15.3502 5.88857 15.3701 5.56002 15.2713 5.25871Z"
                      stroke="#8E8F9B"
                      stroke-linecap="round"
                    />
                  </svg>
                  <Typography variant="S">
                    {leg.segments[0].departure.city}
                  </Typography>
                  <Typography variant="S" className="text-secondaryText">
                    {formatTime(leg.segments[0].departure.time)}
                  </Typography>
                </div>

                <div className="flex items-center gap-[10px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.12479 12.5014H14.6666M13.0431 10.4753C13.35 10.5392 13.6698 10.482 13.9353 10.3158C14.2006 10.1498 14.391 9.88771 14.4664 9.58475C14.4665 9.58451 14.4665 9.58426 14.4665 9.58401V9.58401C14.4665 9.58377 14.4665 9.58352 14.4666 9.58328C14.5048 9.42959 14.5121 9.26992 14.4883 9.11338C14.4645 8.95672 14.4099 8.80628 14.3277 8.67064C14.2455 8.53501 14.1372 8.41686 14.0091 8.32293C13.8809 8.22901 13.7355 8.16116 13.581 8.12326L10.4815 7.35891C10.2595 7.30416 10.0629 7.175 9.92463 6.99294L6.46421 2.43817C6.33359 2.26623 6.1374 2.1563 5.92255 2.13465V2.13465C5.32756 2.0747 4.89008 2.68031 5.13395 3.22633L6.0877 5.36178C6.40102 6.06329 5.83907 6.84141 5.07462 6.76457L3.94065 6.65059C3.62806 6.61917 3.34841 6.44267 3.18554 6.17402L1.93517 4.11157C1.79753 3.88453 1.53034 3.77067 1.27124 3.82864V3.82864C0.93749 3.90331 0.727694 4.23467 0.802941 4.56829L1.45781 7.4718C1.5441 7.85438 1.84607 8.15121 2.23008 8.23091L13.0431 10.4753Z"
                      stroke="#8E8F9B"
                      stroke-linecap="round"
                    />
                  </svg>

                  <Typography variant="S">
                    {leg.segments[leg.segments.length - 1].arrival.city}
                  </Typography>
                  <Typography variant="S" className="text-secondaryText">
                    {formatTime(
                      leg.segments[leg.segments.length - 1].arrival.time
                    )}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Accordion>

      <Accordion
        title={t("passengers")}
        className="px-[20px] py-[12px]"
        titleClassName="!text-[14px]"
        contentHeight={200}
      >
        <div className="flex flex-col gap-[12px]">
          {(passengers ?? [])
            .filter((item) => Boolean(item.name))
            .map((data, idx) => (
              <div className="flex gap-[10px]" key={idx}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3180_1078)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 0H24V24H0V0Z"
                      fill="#EFEFF5"
                    />
                    <path
                      d="M17.6596 18.3064C15.0372 17.3511 14.1989 16.5447 14.1989 14.8181C14.1989 13.7819 15.0582 13.1104 15.351 12.2224C15.644 11.3343 15.8134 10.2829 15.9542 9.51808C16.0951 8.75327 16.151 8.45745 16.2276 7.64255C16.3213 6.62553 15.6404 4 12 4C8.36065 4 7.67765 6.62553 7.7734 7.64255C7.85 8.45745 7.90627 8.7533 8.0468 9.51808C8.18735 10.2829 8.35513 11.3342 8.64785 12.2224C8.94055 13.1105 9.80102 13.7819 9.80102 14.8181C9.80102 16.5447 8.96272 17.3511 6.34038 18.3064C3.70852 19.2638 2 20.208 2 20.875V24H22V20.875C22 20.2091 20.2904 19.2649 17.6596 18.3064Z"
                      fill="#D1D2DF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3180_1078">
                      <rect width="24" height="24" rx="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Typography semibold>{data.name}</Typography>
              </div>
            ))}
        </div>
      </Accordion>

      <Accordion
        title={t("services")}
        className="px-[20px] py-[12px]"
        titleClassName="!text-[14px]"
        contentHeight={230}
      >
        <div className="flex flex-col gap-[12px]">
          {additionalServices.map((service) => (
            <div
              key={service.description}
              className="flex justify-between items-center gap-[20px]"
            >
              <Typography variant="S" className="text-secondaryText">
                {service.description}
              </Typography>
              <Typography variant="S" semibold className="whitespace-nowrap">
                {service.price} {selectedCurrency}
              </Typography>
            </div>
          ))}
        </div>
      </Accordion>

      <Accordion
        title={t("payment")}
        className="px-[20px] py-[12px]"
        titleClassName="!text-[14px]"
      ></Accordion>

      <div className="flex items-center justify-between bg-[#2F5AFE] px-[20px] pt-[10px] pb-[15px]">
        <Typography className="text-white">{t("in-total")}</Typography>
        <Typography className="text-white">
          {totalPrice} {selectedCurrency}
        </Typography>
      </div>
    </div>
  );
};

export default Order;
