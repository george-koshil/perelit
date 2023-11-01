import Typography from "@/app/components/common/Typography";
import Image, { StaticImageData } from "next/image";

interface PopularFlightCardProps {
  imgSrc: StaticImageData,
  from: string,
  to: string
}

const PopularFlightCard: React.FC<PopularFlightCardProps> = ({ imgSrc, from, to }) => {
  return (
    <div className="flex items-center rounded-[10px] border border-lines overflow-hidden max-w-[410px] h-[100px] cursor-pointer">
      <Image src={imgSrc} alt="city" width={130} height={100} style={{ width: 130, height: 100 }}/>

      <div className="flex ml-[20px]">
        <Typography variant="L" semibold>{from}</Typography>
        <Image src="./icons/two-arrows.svg" alt="arrows-icon" width={16} height={16} className="mx-[10px]"/>
        <Typography variant="L" semibold>{to}</Typography>
      </div>
    </div>
  );
};

export default PopularFlightCard;