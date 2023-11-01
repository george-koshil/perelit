"use client";

import Dropdown from "@/app/components/common/Dropdown";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export enum Langs {
  en = "en",
  pl = "pl",
  uk = "uk",
}

const langs = Object.values(Langs);
const flagsSourseMap = {
  en: "./icons/usa-flag.svg",
  pl: "./icons/pl-flag.svg",
  uk: "./icons/ua-flag.svg",
};

interface LangPickerProps {}

const LangPicker: React.FC<LangPickerProps> = ({}) => {
  const [lang, setLang] = useState<Langs>(Langs.uk);
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  function onSelectLang(lang: string) {
    setLang(lang as Langs);
    changeLanguage(lang as Langs)
  }

  function renderOption(option: string) {
    return (
      <div className="flex items-center gap-[10px]">
        <Image
          src={flagsSourseMap[option as Langs]}
          width={24}
          height={24}
          alt="flag"
        />
        {option}
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="rounded-full w-[24px] h-[24px] mr-[10px]">
        <Image src={flagsSourseMap[lang]} alt="lang" width={24} height={24} />
      </div>
      <Dropdown
        selectedOption={lang}
        onSelectOption={onSelectLang}
        options={langs}
        dropdownContentClass="translate-x-[-42px]"
        renderOption={renderOption}
      />
    </div>
  );
};

export default LangPicker;
