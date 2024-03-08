"use client";
import { box1, box10, box3, box4, box7, box8, box9 } from "@/assets";
import Image from "next/image";
import React from "react";
import Box from "./Box";
import BoxExtraWidth from "./BoxExtraWidth";
import { Fade } from "react-awesome-reveal";

const HowWeDrive = () => {
  return (
    <div className="w-full mx-auto  py-20 flex flex-col gap-14">
      <h2 className="text-center">
        How We Drive Employee <br /> Happiness
      </h2>
      <div className="w-full h-full">
        <Fade direction="up" cascade triggerOnce delay={200} fraction={0.2}>
          <div className=" my-4 flex flex-wrap lg:flex-nowrap justify-center gap-3 items-center lg:max-w-[75%] w-full mx-auto">
            <Box
              background={"bg-[#F8F8F8]"}
              number={"01"}
              color={"text-black"}
              picture={box1}
              widthDiv={"max-w-[50%]"}
              heading={"Comprehensive Payroll Solutions"}
              paragraph={
                "Beyond just salary processing, we offer a range of services tailored to enhance the lives of your employees."
              }
            />
            <Box
              background={"bg-[#F1F5FE]"}
              number={"02"}
              color={"text-black"}
              widthDiv={"max-w-[50%]"}
              picture={box1}
              heading={"Digital Wallets for the Unbanked"}
              paragraph={
                "Investing in employee happiness directly correlates to increased productivity and efficiency."
              }
              absolute={true}
            />
          </div>
        </Fade>
        <Fade direction="up" cascade triggerOnce delay={200} fraction={0.2}>
          <div className="flex my-4 flex-wrap lg:flex-nowrap justify-center gap-3 items-center lg:max-w-[75%] w-full mx-auto">
            <BoxExtraWidth
              background={box3}
              number={"03"}
              heading={"Secure Transactions"}
              paragraph={
                "Protect your employees from scams and fraud with our robust security measures."
              }
            />
            {/* <div className="lg:max-w-[40%] w-full"> */}
            <Box
              background={"bg-[#000080]"}
              color={"text-white"}
              number={"04"}
              pictureWidth="lg:max-w-[250px]"
              widthDiv={"max-w-[40%]"}
              picture={box4}
              heading={"Hassle-Free Card Replacement"}
              pictureWidthMobile="max-w-[250px]"
              paragraph={
                "We understand the challenges faced by laborers. That's why we offer free replacement for lost payroll cards."
              }
            />

            {/* </div> */}
          </div>
        </Fade>
        <Fade direction="up" cascade triggerOnce delay={200} fraction={0.2}>
          <div className="flex my-4 flex-wrap lg:flex-nowrap justify-center gap-3 items-center lg:max-w-[75%] w-full mx-auto">
            <Box
              background={"bg-webLightYellow-0"}
              number={"05"}
              color={"text-black"}
              picture={box1}
              widthDiv={"max-w-[40%]"}
              heading={"Streamlined Account Opening"}
              paragraph={
                "Efficiently onboard your workforce with bulk account opening and card distribution services."
              }
            />
            <Box
              background={"bg-[#E3F8FB]"}
              number={"06"}
              color={"text-black"}
              widthDiv={"max-w-[50%]"}
              picture={box1}
              heading={"Convenient Mobile App"}
              paragraph={
                "Our mobile app offers features like mobile top-ups, bill payments, and more, simplifying everyday tasks."
              }
              absolute={true}
            />
          </div>
        </Fade>

        <Fade direction="up" cascade triggerOnce delay={200} fraction={0.2}>
          <div className=" my-4 flex flex-wrap lg:flex-nowrap justify-center gap-3 items-center lg:max-w-[75%] w-full mx-auto">
            <Box
              background={"bg-[#FFE6E2]"}
              number={"07"}
              color={"text-black"}
              picture={box7}
              absolute={true}
              widthDiv={"max-w-[50%]"}
              heading={"Advance Salary Options"}
              paragraph={
                "Provide financial flexibility to your employees with our advance salary feature."
              }
            />
            <BoxExtraWidth
              background={box8}
              number={"08"}
              heading={"Global Accessibility"}
              paragraph={
                "Our payroll cards allow cash withdrawals from any ATM worldwide."
              }
            />
          </div>
        </Fade>
        <Fade direction="up" cascade triggerOnce delay={200} fraction={0.2}>
          <div className="flex my-4 flex-wrap lg:flex-nowrap justify-center gap-3 items-center lg:max-w-[75%] w-full mx-auto">
            <Box
              background={"bg-[#000080]"}
              number={"09"}
              color={"text-white"}
              picture={box9}
              widthDiv={"max-w-[60%]"}
              heading={"Transparent Financial Monitoring"}
              paragraph={
                "Keep track of funds and transactions with ease through our intuitive mobile app."
              }
            />

            <Box
              background={"bg-[#E3F8FB]"}
              number={"10"}
              color={"text-black"}
              widthDiv={"max-w-[40%]"}
              picture={box10}
              heading={"Hassle-Free Foreign Remittance"}
              paragraph={
                "Save time and effort by sending money back home with the best exchange rates, eliminating the need to visit exchange houses or stand in queues."
              }
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default HowWeDrive;
