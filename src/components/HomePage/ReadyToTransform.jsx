"use client";
import React from "react";
import CustomButton2 from "../CustomButton2";
import Image from "next/image";
import { getReady } from "@/assets";
import { Fade } from "react-awesome-reveal";

const ReadyToTransform = () => {
  return (
    <div className="w-full mx-auto  pt-20 flex flex-col gap-14 bg-white">
      <div className="flex flex-col justify-center items-center gap-8">
        {/* <Fade direction="left" cascade> */}
        <h2 className="text-center">
          Ready to Transform Your <br /> Workforce?
        </h2>
        <p className="text-center">
          Get in touch with us today to learn how Kamelpay can elevate employee
          satisfaction <br />
          and drive productivity in your organization.
        </p>
        <CustomButton2 text={"Schedule for a Demo"} />
        {/* </Fade> */}

        {/* <Fade direction="up" triggerOnce fraction={0.2}> */}
        <Image
          src={getReady}
          width={2000}
          height={2000}
          alt="getReady"
          className="max-w-[80%] w-full mx-auto mt-12 "
        />
        {/* </Fade> */}
      </div>
    </div>
  );
};

export default ReadyToTransform;
