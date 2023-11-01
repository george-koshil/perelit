import Typography from "@/app/components/common/Typography";

interface CardProps {
  price: number
  date: string
  currency?: string
}

const Card: React.FC<CardProps> = ({ price, date, currency = "$" }) => {
  return (
    <div className="flex flex-col px-[15px] py-[10px] bg-white rounded-[8px] w-[120px]">
      <Typography>{`${price} ${currency}`}</Typography>
      <Typography variant="S" className="text-secondaryText">{date}</Typography>
    </div>
  );
};

export default Card;
