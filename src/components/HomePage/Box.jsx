import { box1 } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";

const Box = ({
  background,
  number,
  picture,
  heading,
  paragraph,
  absolute,
  widthDiv,
  pictureWidth = "lg:max-w-[380px]",
  pictureWidthMobile = "max-w-[350px]",
  color,
}) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${background} lg:${widthDiv} hover:bg-black     cursor-pointer transition-all w-full px-6 py-4 relative rounded-[25px] h-[350px]`}
    >
      <div
        className={`  ${
          hover ? "hover:text-white/70 " : color
        }   flex flex-col items-start justify-start gap-4`}
      >
        <h3 className="opacity-25">{number}</h3>
        <h4>{heading}</h4>
        <p>{paragraph}</p>
        <Image
          src={picture}
          width={400}
          height={500}
          alt="box1"
          className={` ${
            absolute
              ? "absolute bottom-0 left-1/2 transform -translate-x-1/2"
              : ""
          } ${pictureWidthMobile} ${pictureWidth} w-full mx-auto`}
        />
      </div>
    </div>
  );
};

export default Box;
