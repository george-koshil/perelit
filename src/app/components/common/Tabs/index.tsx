import React, { ReactNode, useState } from "react";
import Typography from "../Typography";
import Image, { StaticImageData } from "next/image";
import cn from "classnames";

type Tab = {
  label: string;
  icon?: StaticImageData;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  initialTab?: number;
  className?: string;
  activeIcon: StaticImageData;
};

const Tabs: React.FC<TabsProps> = ({
  tabs,
  initialTab = 0,
  className,
  activeIcon,
}) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="flex gap-[5px]">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={
              `cursor-pointer flex justify-center items-center gap-[10px] 
              w-full h-[40px] md:w-[120px] bg-ultraLightGray rounded-t-[16px] 
              ${index === activeTab ? "bg-white" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.icon && (
              <Image
                src={index === activeTab ? activeIcon : tab.icon}
                alt="icon"
                width={20}
                height={20}
              />
            )}
            <Typography
              className={index === activeTab ? "text-text" : "text-white"}
            >
              {tab.label}
            </Typography>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-b-[16px] md:rounded-tr-[16px] shadow-variant1 flex items-center">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
