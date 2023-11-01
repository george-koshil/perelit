import Typography from "@/app/components/common/Typography";
import KievImage from "../../../../public/images/kiev.jpg";
import MadridImage from "../../../../public/images/madrid.jpg";
import RomeImage from "../../../../public/images/rome.jpg";
import FranfurtImage from "../../../../public/images/franfurt.jpg";
import PopularFlightCard from "./PopularFlightCard";
import Button from "@/app/components/common/Button";
import { useTranslation } from "react-i18next";

const popularFlightsMap = [
  { imgSrc: MadridImage, from: "Київ", to: "Франфурт" },
  { imgSrc: FranfurtImage, from: "Рим", to: "Мадрід" },
  { imgSrc: MadridImage, from: "Київ", to: "Мадрід" },
  { imgSrc: KievImage, from: "Київ", to: "Франфурт" },
  { imgSrc: FranfurtImage, from: "Мадрід", to: "Київ" },
  { imgSrc: MadridImage, from: "Київ", to: "Франфурт" },
  { imgSrc: RomeImage, from: "Київ", to: "Франфурт" },
  { imgSrc: MadridImage, from: "Київ", to: "Франфурт" },
  { imgSrc: MadridImage, from: "Київ", to: "Рим" },
  { imgSrc: RomeImage, from: "Франфурт", to: "Франфурт" },
  { imgSrc: KievImage, from: "Київ", to: "Франфурт" },
  { imgSrc: RomeImage, from: "Рим", to: "Франфурт" },
];

interface PopularFlightsSectionProps {}

const PopularFlightsSection: React.FC<PopularFlightsSectionProps> = ({}) => {
  const { t } = useTranslation();
  
  return (
    <div className="max-w-[1440px] mx-auto px-[10px] md:px-[20px] lg:px-[75px] mt-[80px] lg:mt-[100px]">
      <Typography
        variant="Header2"
        tag="h2"
        className="mb-[30px] font-semibold"
      >
        {t("popular-flights")}
      </Typography>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:max-h-[460px]">
        {popularFlightsMap.map(({ imgSrc, from, to }, idx) => (
          <PopularFlightCard imgSrc={imgSrc} from={from} to={to} key={idx} />
        ))}
      </div>

      <Button className="px-[20px] py-[12px] bg-surfaces rounded-[8px] mt-[40px] mx-auto block">
        {t("see-all")}
      </Button>
    </div>
  );
};

export default PopularFlightsSection;
