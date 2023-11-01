import useClickOutside from "@/app/hooks/useClickOutside";
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import Typography from "../Typography";
import Image from "next/image";
import cn from "classnames";

interface DropdownProps {
  options: any[];
  selectedOption: string;
  onSelectOption: (selectedOption: string) => void;
  dropdownContentClass?: string;
  renderOption?: (option: string) => React.ReactNode
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onSelectOption,
  dropdownContentClass,
  renderOption
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const DropdownOptions: React.FC = () => {
    const handleOptionClick = (option: string) => {
      onSelectOption(option);
      setIsOpen(false);
    };

    if (!dropdownRef.current) {
      return null;
    }

    const anchorRect = dropdownRef.current.getBoundingClientRect();
    const style: React.CSSProperties = {
      position: "absolute",
      top: anchorRect.bottom + 10 + "px",
      left: anchorRect.left + "px",
    };

    return (
      <ul
        className={cn(
          "flex flex-col p-[10px] rounded-[10px] shadow-variant1 gap-[5px] ease-in duration-300 bg-white",
          dropdownContentClass
        )}
        style={style}
      >
        {options.map((option, idx) => (
          <li
            className={cn(
              "px-[10px] py-[5px] rounded-[10px] hover:bg-surfaces cursor-pointer",
              {
                "bg-surfaces": option === selectedOption,
              }
            )}
            key={idx}
            onClick={() => handleOptionClick(option)}
          >
            {renderOption ? renderOption(option) : option}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="cursor-pointer" ref={dropdownRef}>
      <div className="flex items-center" onClick={toggleDropdown}>
        <Typography className="mr-[10px]">{selectedOption}</Typography>
        <div className={`${isOpen ? "rotate-180 ease-in duration-200" : ""}`}>
          <Image
            src="./icons/chevron.svg"
            alt="chvron"
            width={16}
            height={16}
          />
        </div>
      </div>
      {isOpen && ReactDOM.createPortal(<DropdownOptions />, document.body)}
    </div>
  );
};

export default Dropdown;
