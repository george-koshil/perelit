import Image from "next/image";
import Typography from "../Typography";
import { useState } from "react";
import cn from "classnames"

interface CounterProps {
  className?: string
  iconMinusSrc?: string
  iconPlusSrc?: string
  countClassName?: string
  onChange: (count: number) => void,
  defaultValue?: number
}

const Counter: React.FC<CounterProps> = ({ className, iconMinusSrc, iconPlusSrc, countClassName, onChange, defaultValue = 0 }) => {
  const [count, setCount] = useState(defaultValue);

  const handleSetCount = (value: number) => {
    if (value >= 0) {
      setCount(value)
      onChange(value)
    }
  }

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src={iconMinusSrc ?? "./icons/minus-circle.svg"}
        alt="minus"
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={() => handleSetCount(count - 1)}
      />
      <Typography className={cn("block mx-[10px]", countClassName)}>{count}</Typography>
      <Image
        src={iconPlusSrc ?? "./icons/plus-circle.svg"}
        alt="minus"
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={() => handleSetCount(count + 1)}
      />
    </div>
  );
};

export default Counter;
