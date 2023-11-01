import Typography from "@/app/components/common/Typography";
import Image, { StaticImageData } from "next/image";

interface PriceCardProps {
  imgSrc: StaticImageData;
  cityName: string;
  price: number;
}

const PriceCard: React.FC<PriceCardProps> = ({ imgSrc, cityName, price }) => {
  return (
    <div className="flex flex-col">
      <Image
        src={imgSrc}
        alt="city"
        width={200}
        height={200}
        style={{ width: 200, height: 200, borderRadius: 8 }}
      />
      <div className="flex flex-col px-[20px] pb-[20px] pt-[10px]">
        <Typography variant="L" semibold className=" mb-[5px]">
          {cityName}
        </Typography>
        <Typography variant="L" className="text-secondaryText">
          Від {price} грн
        </Typography>
      </div>
    </div>
  );
};

export default PriceCard;
