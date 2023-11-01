import Typography from "@/app/components/common/Typography";
import { useTranslation } from "react-i18next";

const InfoAndHelp = () => {
  const { t } = useTranslation();

  return (
    <Typography className="cursor-pointer hidden md:block">{t("help_and_support")}</Typography>
  );
};

export default InfoAndHelp;