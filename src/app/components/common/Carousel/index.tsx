import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { CSSProperties } from "react";

type CarouselProps = {
  children?: React.ReactNode;
  style?: CSSProperties;
  prevArrowStyle?: CSSProperties;
  nextArrowStyle?: CSSProperties;
  settings?: Settings;
};

const Carousel = ({ children, style, settings, prevArrowStyle, nextArrowStyle }: CarouselProps) => {
  const deafultSettings = {
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow(props: any) {
    const { className, style, onClick } = props;
  
    return (
      <Image
        onClick={onClick}
        src={"./icons/slider-arrow-right.svg"}
        width={30}
        height={30}
        alt="desctop"
        className={className}
        style={{ ...style, width: 30, height: 30, ...nextArrowStyle }}
      />
    );
  }
  
  function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <Image
        onClick={onClick}
        src={"./icons/slider-arrow-left.svg"}
        width={30}
        height={30}
        alt="desctop"
        className={className}
        style={{ ...style, width: 30, height: 30, ...prevArrowStyle }}
      />
    );
  }

  return (
    <div style={style}>
      <Slider {...{ ...deafultSettings, ...settings }}>{children}</Slider>
    </div>
  );
};

export default Carousel;
