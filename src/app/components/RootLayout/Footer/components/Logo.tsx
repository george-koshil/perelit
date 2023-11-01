import Image from "next/image";

interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <Image
      src="main-logo.svg"
      alt="logo"
      width={110}
      height={37}
    />
  );
};

export default Logo;
