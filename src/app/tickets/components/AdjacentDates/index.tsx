import Carousel from "@/app/components/common/Carousel";
import Card from "./components/Card";
import Typography from "@/app/components/common/Typography";
import useViewportWidth from "@/app/hooks/useViewportWidth";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { useTranslation } from "react-i18next";

interface AdjacentDatesProps {}

const slides = [
  { price: 5000, date: "Пн, 20 вересня" },
  { price: 7500, date: "Вт, 21 вересня" },
  { price: 6200, date: "Ср, 22 вересня" },
  { price: 100, date: "Ср, 22 вересня" },
  { price: 2300, date: "Ср, 22 вересня" },
  { price: 4100, date: "Ср, 22 вересня" },
  { price: 4400, date: "Ср, 22 вересня" },
  { price: 1100, date: "Ср, 22 вересня" },
  { price: 100, date: "Ср, 22 вересня" },
  { price: 2300, date: "Ср, 22 вересня" },
  { price: 4100, date: "Ср, 22 вересня" },
  { price: 4400, date: "Ср, 22 вересня" },
  { price: 1100, date: "Ср, 22 вересня" },
];

const AdjacentDates: React.FC<AdjacentDatesProps> = ({}) => {
  const viewportWidth = useViewportWidth();
  const isTablet = useMediaQuery("md");
  const isDesctop = useMediaQuery("lg");
  const { t } = useTranslation();

  const desctopOffset = isDesctop ? 340 : 0;
  const offsetLeft = isTablet ? 30 : 55;
  const width = isDesctop ? 1440 : viewportWidth;
  const padding = isDesctop ? 75 : isTablet ? 20 : 10;
  const labelWidth = isTablet ? 118 + 40 : 0;
  const carouselWidth =
    width - padding - labelWidth - offsetLeft - desctopOffset;

  const slidesToShow = isDesctop ? 6 : isTablet ? 4 : 2;

  return (
    <div className="flex">
      <Typography
        variant="L"
        semibold
        className="max-w-[118px] hidden md:block mr-[40px]"
      >
        {t("prices-for-adjacent-dates")}
      </Typography>
      <Carousel
        style={{ width: carouselWidth, marginLeft: !isTablet ? 43 : 0 }}
        settings={{ slidesToShow }}
        prevArrowStyle={{ left: -42 }}
        nextArrowStyle={{ right: isTablet ? -25 : 0 }}
      >
        {slides.map((item, idx) => (
          <Card key={idx} price={item.price} date={item.date} />
        ))}
      </Carousel>
    </div>
  );
};

export default AdjacentDates;
