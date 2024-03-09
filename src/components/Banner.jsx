"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { lines } from "@/assets";

const Banner = ({
  bannerText,
  bannerSubText,
  buttonText1,
  buttonText2,
  bannerImage,
  absolute,
}) => {
  return (
    <div className="bg-webBlue-0 h-full pt-20 relative w-full">
      <div className="absolute">
        <Image
          src={lines}
          width={20000}
          height={20000}
          alt="lines"
          className="object-cover object-center"
        />
      </div>
      <div className="layoutWidth flex flex-wrap lg:flex-nowrap justify-between h-screen items-center relative z-10">
        <div className="w-full  text-white text-center lg:text-start flex flex-col   gap-8 ">
          <Fade direction="left" cascade>
            <h1>{bannerText}</h1>
            <p>{bannerSubText}</p>
          </Fade>
          {buttonText1 && buttonText2 && (
            <div className="flex justify-center flex-wrap lg:flex-nowrap lg:justify-start  items-center gap-12 lg:gap-4">
              <Fade direction="up" cascade delay={1200}>
                <CustomButton text={buttonText1} />
                <CustomButton text={buttonText2} transparent={true} />
              </Fade>
            </div>
          )}
        </div>

        <div className={`${absolute ? " " : "hidden lg:block "} w-full `}>
          <Image
            src={bannerImage}
            width={10000}
            height={1000}
            alt="home banner"
            className={`mr-auto lg:ml-auto  w-full ${
              absolute
                ? "absolute bottom-0 right-0 w-full max-w-[350px] md:max-w-[400px] lg:max-w-[550px] 2xl:max-w-[700px]"
                : " "
            } `}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
