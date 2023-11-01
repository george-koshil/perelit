import Button from "@/app/components/common/Button";
import Typography from "@/app/components/common/Typography";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { useTranslation } from "react-i18next";

interface ProposalsCardProps {}

const ProposalsCard: React.FC<ProposalsCardProps> = ({}) => {
  const isDesctop = useMediaQuery("lg");
  const { t } = useTranslation();

  return (
    <div className="bg-blue1 p-[40px] flex flex-col md:flex-row lg:flex-col justify-center rounded-[20px] lg:max-w-[410px]">
      <div className="md:max-w-[438px] lg:w-full">
        <Typography variant="Header4" tag="h4" className="text-white">
          {t("want-fly-cheaper")}
        </Typography>
        <Typography variant={isDesctop ? "XL" : "XS"} className="text-white ">
          {t("best-deals")}
        </Typography>
      </div>
      <Button className="bg-white px-[20px] py-[12px] rounded-[8px] mt-[20px] h-[50px] text-[14px]">
        {t("view offers")}
      </Button>
    </div>
  );
};

export default ProposalsCard;
