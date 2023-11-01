import Image from "next/image";
import Link from "next/link";

interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <Link href="/home">
      <Image
        src="main-logo.svg"
        alt="logo"
        width={110}
        height={37}
        className="cursor-pointer relative bottom-[7px]"
      />
    </Link>
  );
};

export default Logo;
