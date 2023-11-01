import Typography from "@/app/components/common/Typography";
import { TFunction } from "i18next";
import { useTranslation } from 'react-i18next';
interface NavMenuProps {
}

const NavMenu: React.FC<NavMenuProps> = ({  }) => {
  const { t } = useTranslation();

  return (
    <div className="gap-[15px] ml-[40px] xl:gap-[25px] xl:ml-[60px] hidden lg:flex">
      {getNavItems(t).map(label => (
        <Typography className="cursor-pointer" key={label}>{label}</Typography>
      ))}
    </div>
  );
};

export function getNavItems(t: TFunction) {
  return [
    t("flights"),
    t("car-rental"),
    t("hotels"),
    t("tourist-life-hacks"),
    t("insurance"),
  ]
}

export default NavMenu;