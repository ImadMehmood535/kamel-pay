"use client";
import React from "react";
import SBox from "./SBox";
import { useScroll } from "framer-motion";

const BoxScroll = () => {
  const { ScrollY } = useScroll();

  console.log(ScrollY, "ScrollY");

  return (
    <div className="grid grid-cols-4 justify-evenly h-screen px-2">
      <div className="col-span-1">
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
