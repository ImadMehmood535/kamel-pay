"use client";
import React from "react";
import SBox from "./SBox";
import { useScroll } from "framer-motion";

const BoxScroll3 = () => {
  const { ScrollY } = useScroll();

  console.log(ScrollY, "ScrollY");

  return (
    <div className="grid grid-cols-4 justify-evenly h-screen px-2">
      <div className="col-span-2"></div>

      <div className="col-span-1 mt-[10rem]">
        <SBox
          number={"03"}
          head={
            <>
             Simplify Payroll <br />
             Processing
            </>
          }
          paragh={
            " Let us handle the complexities of payroll, while you focus on growing your business."
          }
        />
      </div>
      <div className="col-span-1"></div>

    
    </div>
  );
};

export default BoxScroll3;
