"use client";
import React from "react";
import SBox from "./SBox";
import { useScroll } from "framer-motion";

const BoxScroll2 = () => {
  const { ScrollY } = useScroll();

  console.log(ScrollY, "ScrollY");

  return (
    <div className="grid grid-cols-4 justify-evenly h-screen px-2">
      <div className="col-span-1"></div>

      <div className="col-span-1 mt-[5rem]">
           <SBox
            number={"02"}
            head={
              <>
              Boost  <br />
              Productivity
              </>
            }
            paragh={
              " Investing in employee happiness directly correlates to increased productivity and efficiency. "
            }
          />
        
      </div>
      <div className="col-span-2"></div>


    </div>
  );
};

export default BoxScroll2;
