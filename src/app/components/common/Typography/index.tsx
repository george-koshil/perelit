import cn from "classnames";

interface TypographyProps {
  variant?: "S" | "XS" | "L" | "XL" | "XXL" | "XXXL" | "Header1" | "Header2" | "Header3" | "Header4",
  tag?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string
  bold?: boolean
  semibold?: boolean
}

const Typography: React.FC<TypographyProps> = ({  variant = "XS", tag = "span", children, className, bold, semibold }) => {
  const Tag = tag as keyof JSX.IntrinsicElements; 
  return (
    <Tag className={cn("leading-[150%]", className, {
      "text-[12px]": variant === "S",
      "text-[14px]": variant === "XS",
      "text-[16px]": variant === "L",
      "text-[18px]": variant === "XL",
      "text-[20px]": variant === "XXL",
      "text-[24px]": variant === "XXXL",
      "text-[28px]": variant === "Header4",
      "text-[32px]": variant === "Header3",
      "text-[36px]": variant === "Header2",
      "text-[48px]": variant === "Header1",
      "font-bold": bold,
      "font-semibold": semibold,
    })}>
      {children}
    </Tag>
  );
};

export default Typography;