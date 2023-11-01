"use client"

import Image from "next/image";
import { useState } from "react";
import cn from "classnames";

interface CheckboxProps {
  onChange?: (checked: boolean) => void;
  checked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ onChange, checked = false }) => {
  const [isChecked, setChecked] = useState(checked);

  const handleChange = () => {
    setChecked(!isChecked);
    onChange?.(!checked);
  };

  return (
    <div
      className={cn(
        "flex justify-center items-center w-[24px] h-[24px] rounded-[4px] border border-lines cursor-pointer",
        {
          "bg-primary border-none": checked,
        }
      )}
      onClick={handleChange}
    >
      {checked && (
        <Image src="./icons/check.svg" alt="check" width={8} height={6} />
      )}
    </div>
  );
};

export default Checkbox;
