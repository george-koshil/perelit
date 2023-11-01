"use client";

import useMediaQuery from "@/app/hooks/useMediaQuery";
import Column from "./components/Column";
import Logo from "./components/Logo";
import SocialSection from "./components/SocialSection";
import Accordion from "../../common/Accordion";
import Typography from "../../common/Typography";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

const getNavItems = (t: TFunction) => {
  return ([
    {
      title: t("company"),
      items: [
        t("conditions"),
        t("terms_of_use"),
        t("privacy-policy"),
        "Media Room",
        t("security"),
      ],
      contentHeight: 141,
    },
    {
      title: t("opportunities"),
      items: [t("cheapflights"), t("countries"), t("airports"), t("airlines")],
      contentHeight: 114,
    },
    {
      title: t("platform"),
      items: [
        t("about_us"),
        t("tourist-life-hacks"),
        t("team"),
        t("company-info"),
        t("cooperation"),
        t("vacancies"),
      ],
      contentHeight: 176,
    },
  ])
}

const Footer = () => {
  const isTablet = useMediaQuery("md");
  const { t } = useTranslation();

  const renderTabletAndDesctopView = () => (
    <div className="flex justify-center pt-[50px] pb-[20px] ">
      <div className="md:mr-[46px] xl:mr-[160px]">
        <Logo />
        <SocialSection />
      </div>
      <div className="flex md:gap-[20px] lg:gap-[30px]">
        {getNavItems(t).map(({ title, items }) => (
          <Column title={title} items={items} key={title} />
        ))}
      </div>
    </div>
  );

  const renderMobileView = () => (
    <div className="pt-[40px] pb-[15px]">
      <Logo />
      <SocialSection />

      <div className="mt-[20px] flex flex-col gap-[20px]">
        {getNavItems(t).map(({ title, items, contentHeight }) => (
          <Accordion key={title} title={title} contentHeight={contentHeight}>
            <div className="flex flex-col gap-[10px]">
              {items.map((item) => (
                <Typography key={item} className="text-secondaryText">
                  {item}
                </Typography>
              ))}
            </div>
          </Accordion>
        ))}
      </div>
    </div>
  );
  return (
    <footer className="bg-footer px-[20px] lg:px-[40px] xl:px-[75] block mt-auto">
      {isTablet ? renderTabletAndDesctopView() : renderMobileView()}
      <div className="flex flex-col items-center md:flex-row md:justify-between py-[15px] lg:py-[20px] max-w-[1170px] border-t-[1px] border-t-lines mx-auto">
        <Typography className="text-inputs">{t("all-rights-reserved")}</Typography>
        <Typography className="text-inputs">{t("privacy-policy")}</Typography>
      </div>
    </footer>
  );
};

export default Footer;
