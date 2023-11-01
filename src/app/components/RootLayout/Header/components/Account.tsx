"use client";

import Popover from "@/app/components/common/Popover";
import Typography from "@/app/components/common/Typography";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface AccountProps {}

const Account: React.FC<AccountProps> = ({}) => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();

  function renderTrigger() {
    return (
      <div className="flex items-center cursor-pointer">
        <div className="rounded-full w-[24px] h-[24px] mr-[10px]">
          <Image
            src="./icons/default-avatar.svg"
            alt="avatar"
            width={24}
            height={24}
          />
        </div>
        <Typography className="mr-[10px]">{t("log-in")}</Typography>
        <div className={`${isOpen ? "rotate-180 ease-in duration-200" : ""}`}>
          <Image
            src="./icons/chevron.svg"
            alt="chvron"
            width={16}
            height={16}
          />
        </div>
      </div>
    );
  }

  function renderContent() {
    return (
      <div className="flex flex-col gap-[3px] shadow-sm bg-white p-[10px] mt-[10px] rounded-[10px]">
        <div className="flex p-[10px] gap-[10px] rounded-[5px] cursor-pointer hover:bg-surfaces">
          <Image src="./icons/user.svg" alt="user" width={16} height={16} />
          <Typography>{t("my-office")}</Typography>
        </div>
        <div className="flex p-[10px] gap-[10px] rounded-[5px] cursor-pointer hover:bg-surfaces">
          <Image src="./icons/ticket2.svg" alt="user" width={16} height={16} />
          <Typography>{t("my-tickets")}</Typography>
        </div>
        <div className="h-[1px] bg-lines"/>
        <div className="flex p-[10px] gap-[10px] rounded-[5px] cursor-pointer hover:bg-surfaces">
          <Image src="./icons/exit.svg" alt="user" width={16} height={16} />
          <Typography>{t("log-out")}</Typography>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Popover
        trigger={renderTrigger()}
        content={renderContent()}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        positionX="left"
      />
    </div>
  );
};

export default Account;
