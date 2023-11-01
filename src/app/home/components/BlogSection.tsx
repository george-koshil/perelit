"use client";

import Typography from "@/app/components/common/Typography";
import Blog1Image from "../../../../public/images/blog1.jpg";
import Blog2Image from "../../../../public/images/blog2.jpg";
import Blog3Image from "../../../../public/images/blog3.jpg";
import Blog4Image from "../../../../public/images/blog4.jpg";
import BlogPost from "./BlogPost";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { useTranslation } from "react-i18next";

interface BlogSectionProps {}

const BlogSection: React.FC<BlogSectionProps> = ({}) => {
  const isTablet = useMediaQuery("md");
  const isDesctop = useMediaQuery("lg")
  const { t } = useTranslation();

  const renderMobileView = () => {
    return (
      <div>
        <Typography variant={isDesctop ? "Header2" : "Header4" } tag="h2" semibold>
          {t("full-of-possibilities")}
        </Typography>
        <Typography className="block mb-[20px]">
          {t("read-our-blog")}
        </Typography>

        <div className="flex flex-col gap-[20px]">
          <BlogPost imgSrc={Blog1Image} />
          <BlogPost imgSrc={Blog2Image} />
          <BlogPost imgSrc={Blog3Image} />
        </div>
      </div>
    );
  };

  const renderTabletAndDesctopView = () => {
    return (
      <>
        <div className="flex flex-col justify-between">
          <div className="lg:max-w-[370px]">
            <Typography variant="Header2" tag="h2" semibold>
            {t("full-of-possibilities")}
            </Typography>
            <Typography>
            {t("read-our-blog")}
            </Typography>
          </div>
          <BlogPost imgSrc={Blog1Image} />
        </div>

        <div className="flex flex-col gap-[30px]">
          <BlogPost imgSrc={Blog2Image} />
          <BlogPost imgSrc={Blog3Image} />
        </div>
        <BlogPost imgSrc={Blog4Image} height={486} />
      </>
    );
  };
  return (
    <div className="flex gap-[33px] my-[100px] max-w-[1440px] mx-auto px-[10px] md:px-[20px] lg:px-[75px]">
      {isTablet ? renderTabletAndDesctopView() : renderMobileView()}
    </div>
  );
};

export default BlogSection;
