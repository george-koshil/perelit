import { useTranslation } from "react-i18next";
import AdvantageItem from "./AdvantageItem";
import { TFunction } from "i18next";

const getAdvantagesData = (t: TFunction) => {
  return ([
    {
      iconSrc: "./icons/search.svg",
      title: t("air-ticket-search"),
      description:
        t("idea"),
    },
    {
      iconSrc: "./icons/map.svg",
      title: t("travel-more"),
      description: t("idea"),
    },
    {
      iconSrc: "./icons/thumbs-up.svg",
      title: t("trust-us"),
      description: t("idea"),
    },
    {
      iconSrc: "./icons/shield.svg",
      title: t("additional-insurance"),
      description: t("idea"),
    },
  ])
}

interface AdvantagesSectionProps {}

const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({}) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col md:grid md:grid-rows-2 md:grid-cols-2 lg:flex lg:flex-row gap-[20px] justify-between mt-[60px] md:mt-[120px] max-w-[1440px] mx-auto px-[10px] lg:px-[75px]">
      {getAdvantagesData(t).map(({ iconSrc, title, description }) => (
        <AdvantageItem
          iconSrc={iconSrc}
          title={title}
          description={description}
          key={iconSrc}
        />
      ))}
    </div>
  );
};

export default AdvantagesSection;
