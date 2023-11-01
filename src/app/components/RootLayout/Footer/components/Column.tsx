import Typography from "@/app/components/common/Typography";

interface ColumnProps {
  title: string;
  items: string[];
}

const Column: React.FC<ColumnProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-[10px] md:w-[166px] xl:w-[270px]">
      <Typography tag="h4" className="font-semibold">
        {title}
      </Typography>
      {items.map((item) => (
        <Typography variant="L" key={item} className="cursor-pointer text-secondaryText">
          {item}
        </Typography>
      ))}
    </div>
  );
};

export default Column;
