import Typography from "@/app/components/common/Typography";
import Image, { StaticImageData } from "next/image";

interface InfoItemProps {
  imgSrc: StaticImageData,
  title: string,
  description: string
}

const InfoItem: React.FC<InfoItemProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col lg:max-w-[300px]">
      <Image src={imgSrc} alt="info-icon" width={36} height={36} />
      <Typography variant="L" semibold className="mb-[5px] mt-[10px]">{title}</Typography>
      <Typography>{description}</Typography>
    </div>
  );
};

export default InfoItem;