import Image from "next/image";

const socialLogosSrc = [
  "./icons/telegram.svg",
  "./icons/facebook.svg",
  "./icons/instagram.svg",
];

const SocialSection = () => {
  return (
    <div className="flex gap-[10px] mt-[20px] md:mt-[40px] lg:mt-[60px]">
      {socialLogosSrc.map((logoSrc) => (
        <div
          className="rounded-full w-[40px] h-[40px] bg-lines flex items-center justify-center cursor-pointer"
          key={logoSrc}
        >
          <Image src={logoSrc} alt="social-icon" width={24} height={24} />
        </div>
      ))}
    </div>
  );
};

export default SocialSection;
