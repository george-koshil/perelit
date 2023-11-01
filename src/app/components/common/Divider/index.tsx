import cn from "classnames";

interface DividerProps {
  direction?: "vertical" | "horizontal";
  className?: string;
  length?: number | string;
}

const Divider: React.FC<DividerProps> = ({
  direction = "vertical",
  className,
  length = 24,
}) => {
  return (
    <div
      className={cn("bg-lines", className)}
      style={{
        width: direction === "vertical" ? 1 : length,
        height: direction === "vertical" ? length : 1,
      }}
    />
  );
};

export default Divider;
