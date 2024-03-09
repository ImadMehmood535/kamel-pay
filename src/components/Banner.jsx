"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { homeBanner, lines, mobilehomeBanner } from "@/assets";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="bg-webBlue-0 h-full pt-20 relative w-full  ">
      <div className="absolute">
        <Image src={lines} width={20000} height={20000} alt="lines" className="object-cover object-center" />
      </div>
      <div className="layoutWidth flex flex-wrap lg:flex-nowrap justify-between h-screen items-center  z-10">
        <div className="w-full  text-white text-center lg:text-start flex flex-col   gap-8 ">
          <Fade direction="left" cascade>
            <h1>
              Unlocking <br />
              Productivity Through Employee Happiness
            </h1>
            <p>
              Welcome to Kamelpay, where we redefine payroll processing to drive
              employee happiness. Studies consistently show that happy employees
              are more productive. Our mission is to ensure the well-being and
              satisfaction of your workforce, ultimately benefiting your
              business.
            </p>
          </Fade>
          <div className="flex justify-center flex-wrap lg:flex-nowrap lg:justify-start  items-center gap-12 lg:gap-4">
            <Fade direction="up" cascade delay={1200}>
              <CustomButton text={"Learn More"} />
              <CustomButton text={"Get Kamel Pay Now"} transparent={true} />
            </Fade>
          </div>
        </div>

        <div className="hidden lg:block w-full ">
          <Image
            src={homeBanner}
            width={700}
            height={700}
            alt="home banner"
            className="mx-auto lg:ml-auto"
          />
        </div>
        {/* <div className="block lg:hidden w-full ">
          <Image
            src={mobilehomeBanner}
            width={700}
            height={700}
            alt="home banner"
            className="mx-auto lg:ml-auto"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
