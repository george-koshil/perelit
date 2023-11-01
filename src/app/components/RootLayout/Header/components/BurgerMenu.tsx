import Drawer from "react-modern-drawer";
import { useState } from "react";
import "react-modern-drawer/dist/index.css";
import Button from "@/app/components/common/Button";
import Image from "next/image";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { getNavItems } from "./NavMenu";
import Typography from "@/app/components/common/Typography";
import { useTranslation } from "react-i18next";

interface BurgerMenuProps {}

const BurgerMenu: React.FC<BurgerMenuProps> = ({}) => {
  const isTablet = useMediaQuery("md");
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="flex items-center">
      <Button
        className="border-none w-[24px] h-[24px] lg:hidden"
        onClick={toggleDrawer}
      >
        <Image
          src="./icons/burger-menu.svg"
          alt="burger-menu"
          width={24}
          height={24}
          style={{ width: 24, height: 24 }}
        />
      </Button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size={isTablet ? "65%" : "85%"}
        className="rounded-tl-[20px] rounded-bl-[20px] pt-[80px] pb-[20px] pl-[80px] pr-[20px]"
      >
       <div className="relative">
       <Typography className="block mb-[40px]" variant="XXL" semibold>
          МЕНЮ
        </Typography>

        <div className="flex flex-col gap-[40px]">
          {getNavItems(t).map((label) => (
            <Typography key={label} variant="XL" className="cursor-pointer">
              {label}
            </Typography>
          ))}
        </div>

          <Image
            src="./icons/close.svg"
            alt="close"
            width={24}
            height={24}
            className="block border-none absolute top-[-60px] right-0"
            onClick={() => setIsOpen(false)}
          />
       </div>
      </Drawer>
    </div>
  );
};

export default BurgerMenu;
