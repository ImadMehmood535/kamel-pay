"use client";
import React from "react";
import SBox from "./SBox";
import { useScroll } from "framer-motion";
import Image from "next/image";
import { circle } from "@/assets";

const BoxScroll = () => {
  const { ScrollY } = useScroll();

  console.log(ScrollY, "ScrollY");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 justify-evenly h-screen px-2 relative">
      <div className="absolute -top-[40%] ">
        <Image
          src={circle}
          alt="circle"
          width={1000}
          height={1000}
          className="max-w-[100px] w-full"
        />
      </div>
      <div className="absolute -top-[20%]  right-0 ">
        <Image
          src={circle}
          alt="circle"
          width={1000}
          height={1000}
          className="max-w-[100px] w-full"
        />
      </div>
      <div className="col-span-1 mt-[20%]">
        <SBox
          number={"01"}
          head={
            <>
              Empower Your <br />
              WorkForce
            </>
          }
          paragh={
            "Give your employees the tools they need to thrive both personally and professionally."
          }
        />
      </div>

      <div className="col-span-3"></div>
    </div>
  );
};

export default BoxScroll;
