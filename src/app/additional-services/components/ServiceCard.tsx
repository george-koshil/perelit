import Typography from "@/app/components/common/Typography";
import { useCurrency } from "@/app/hooks/useCurrency";
import cn from "classnames"
import { FC } from "react";


export interface ServiceCardProps {
  Icon: FC<any>
  description: string
  price: number
  active?: boolean
  onClick?: () => void
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, description, price, active, onClick }) => {
  const { selectedCurrency, exchangeRate } = useCurrency()

  return (
    <div className={cn("flex flex-col justify-center items-center w-[150px] h-[150px] rounded-[20px] border border-lines cursor-pointer", {
      "!border-[#2F5AFE] text-[#2F5AFE]": active
    })} onClick={onClick}>
      <Icon stroke={active ? "#2F5AFE": undefined} />
      <Typography variant="S" className="text-center">{description}</Typography>
      <Typography>{(price / exchangeRate).toFixed(2)} {selectedCurrency}</Typography>
    </div>
  );
};

export default ServiceCard;