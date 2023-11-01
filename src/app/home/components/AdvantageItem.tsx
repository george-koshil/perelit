import Typography from "@/app/components/common/Typography";
import Image from "next/image";

interface AdvantageItemProps {
  iconSrc: string;
  title: string;
  description: string;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-center lg:max-w-[300px]">
      <div className="rounded-full w-[48px] h-[48px] bg-surfaces flex items-center justify-center">
        <Image src={iconSrc} alt="advange" width={24} height={24} />
      </div>
      <Typography className="mt-[10px] font-semibold" tag="h4" variant="L">
        {title}
      </Typography>
      <Typography className="mt-[5px] text-center">{description}</Typography>
    </div>
  );
};

export default AdvantageItem;
