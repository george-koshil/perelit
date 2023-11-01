import Input from "../../common/Input";
import Image from "next/image";
import Popover from "../../common/Popover";
import { useState } from "react";
import cn from "classnames";
import Typography from "../../common/Typography";
import useLocationSearch from "@/app/hooks/useLocationSearch";
import Popper from "@mui/material/Popper";
import { useTranslation } from "react-i18next";

interface WhereProps {
  onChange: (value: string) => void;
  value: string;
}

const Where: React.FC<WhereProps> = ({ onChange, value }) => {
  const { setQuery, results } = useLocationSearch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { t } = useTranslation();

  const handleChange = (e: { target: { value: string } }) => {
    onChange(e.target.value);
    setQuery(e.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl) || results.length > 0;
  const id = open ? "simple-popper" : undefined;

  const renderTrigger = () => (
    <div
      className={cn(
        "relative h-[50px] lg:h-[65px] flex items-center w-full px-[10px] md:px-[20px]",
        {
          "md:after:content-[''] md:after:h-[24px] md:after:w-[1px] md:after:bg-lines md:after:absolute md:after:right-0 md:after:top-1/2 md:after:translate-y-[-50%]":
            !open,
        }
      )}
      onClick={handleClick}
    >
      <Image src="./icons/plane.svg" width={24} height={24} alt="icon" />
      <Input label={t("to-where")} onChange={handleChange} value={value} />
    </div>
  );

  const renderContent = () => {
    return results.length > 0 ? (
      <div className="bg-white p-[20px] shadow-sm max-h-[400px] overflow-y-auto rounded-b-[10px] w-[500px]">
        {results.map(({ city, country, iata, airport }, idx) => (
          <div
            key={idx}
            className="flex items-center p-[10px] cursor-pointer hover:bg-surfaces rounded-[8px]"
          >
            <Typography>{city}</Typography>,
            <Typography className="text-lines block ml-[5px]">
              {country}
            </Typography>
            <Typography className="text-lines block ml-[5px]">
              {airport}
            </Typography>
            <Typography className="block ml-auto">
              {iata === `\\N` ? "" : iata}
            </Typography>
          </div>
        ))}
      </div>
    ) : null;
  };

  return (
    <>
      {renderTrigger()}
      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
        {renderContent()}
      </Popper>
    </>
  );
};

export default Where;
