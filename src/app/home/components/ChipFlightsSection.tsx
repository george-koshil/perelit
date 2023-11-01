import Typography from "@/app/components/common/Typography";
import { useTranslation } from "react-i18next";

const flightDirections = [
  "Мадрид–Львів",
  "Львів–Лас-Вегас",
  "Івано-Франківськ–Відень",
  "Львів–Нью-Йорк",
  "Київ–Париж",
  "Львів–Кайсері",
  "Львів–Берлін",
  "Івано-Франківськ–Харків",
  "Одеса–Тирана",
  "Львів–Шарм-еш-Шейх",
  "Одеса–Гранд-Форкс",
  "Львів–Відень",
  "Львів–Гданськ",
  "Київ–Барселона",
  "Івано-Франківськ–Бухарест",
  "Ларнака–Львів",
  "Львів–Тель-Авів",
  "Львів–Тбілісі",
  "Київ–Стамбул",
];

interface ChipFlightsSectionProps {}

const ChipFlightsSection: React.FC<ChipFlightsSectionProps> = ({}) => {
  const { t } = useTranslation();
  
  return (
    <div className="px-[10px] md:px-[20px]">
      <div className="p-[20px] md:p-[30px] rounded-[16px] max-w-[1070px] mx-auto shadow-variant1 mt-[80px] lg:mt-[110px]">
      <Typography variant="Header4" tag="h4" semibold className="mb-[20px]">
        {t("cheapflights")}
      </Typography>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[20px] gap-y-[10px]">
        {flightDirections.map((value, idx) => (
          <li className="flex items-center" key={idx}>
            <div className="w-[4px] h-[4px] rounded-full mr-[10px] bg-blue1" />
            <Typography>{value}</Typography>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default ChipFlightsSection;
