import Typography from "@/app/components/common/Typography";
import { StaticImageData } from "next/image";
import Image from "next/image";
import cn from "classnames";

interface BlogPostProps {
  width?: number;
  height?: number;
  imgSrc: StaticImageData;
  title?: string;
  className?: string
}

const BlogPost: React.FC<BlogPostProps> = ({
  width = 408,
  height = 228,
  imgSrc,
  title = "Дуже довгий заголовок, він вам вже набрид",
  className
}) => {
  return (
    <div className={cn("relative", className)}>
      <Image
        src={imgSrc}
        alt="blog-image"
        width={width}
        height={height}
        className="rounded-[20px]"
        style={{ width, height }}
      />
      <Typography
        className="block text-white absolute bottom-[15px] lg:bottom-[50px] left-1/2 translate-x-[-50%] w-[310px] md:w-[208px] lg:w-max"
        variant="L"
        semibold
      >
        {title}
      </Typography>
    </div>
  );
};

export default BlogPost;
