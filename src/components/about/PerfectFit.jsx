"use client";
import { about1, about2 } from "@/assets";
import { perfectFit1, perfectFit2 } from "@/data/about";
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import CustomButton2 from "../CustomButton2";
import { Fade } from "react-awesome-reveal";

const PerfectFit = () => {
  return (
    <div className="w-full mx-auto layoutWidth  py-20 flex flex-col gap-14   ">
      <h2 className="text-center">
        Find Your Perfect Fit <br /> With Us
      </h2>

      <div className="flex gap-4 justify-between flex-wrap lg:flex-nowrap items-center w-full">
        <Fade direction="left" triggerOnce>
          <Image
            src={about1}
            width={1000}
            height={1000}
            alt="about1"
            className="max-w-[500px] w-full"
          />
        </Fade>

        <Fade direction="right" triggerOnce className="">
          <div className="flex  flex-col gap-4">
            <div className="flex flex-col px-4 py-3 bg-[#F1F5FE] rounded-[25px] gap-4 max-w-[550px] w-full">
              <p className="font-bold text-webBlue-0">
                Our payroll cards are designed to simplify salary processing and
                empower your workforce with convenient access to their earnings.
                Each laborer receives a personalized debit card, loaded with
                their salary, allowing them to enjoy the following benefits:
              </p>

              {perfectFit1?.map((item, index) => (
                <div key={index} className="flex justify-start gap-4 ">
                  <FaCheckCircle className="text-" />

                  <p className="text-webBlue-0">
                    <span className=" font-bold">{item?.head} </span>
                    {item?.paragh}
                  </p>
                </div>
              ))}
            </div>
            <CustomButton2 text={"Get Payroll Card"} />
          </div>
        </Fade>
      </div>
      <div className="flex gap-4  justify-between flex-wrap-reverse lg:flex-nowrap items-center w-full">
        <Fade direction="left" triggerOnce>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col px-4 py-3 bg-[#F1F5FE] rounded-[25px] gap-4 max-w-[550px] w-full">
              <p className="font-bold text-webBlue-0">
                Our corporate expenses card is designed to streamline business
                expenses for HR or Finance teams, providing a convenient and
                efficient way to manage corporate spending. Key features
                include:
              </p>

              {perfectFit2?.map((item, index) => (
                <div key={index} className="flex justify-start gap-4 ">
                  <FaCheckCircle className="text-" />

                  <p className="text-webBlue-0">
                    <span className=" font-bold">{item?.head} </span>
                    {item?.paragh}
                  </p>
                </div>
              ))}
            </div>
            <CustomButton2 text={"Get Corporate Expenses Card"} />
          </div>
        </Fade>
        <Fade direction="right" triggerOnce className="">
          <Image
            src={about2}
            width={1000}
            height={1000}
            alt="about1"
            className="max-w-[500px] w-full "
          />
        </Fade>
      </div>
    </div>
  );
};

export default PerfectFit;
