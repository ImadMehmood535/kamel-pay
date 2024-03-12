"use client";
import React from "react";
import SBox from "./SBox";
import { useScroll } from "framer-motion";

const BoxScroll4 = () => {
  const { ScrollY } = useScroll();

  return (
    <div className="grid grid-cols-4 justify-evenly h-screen px-2">
      <div className="col-span-3"></div>

      <div className="col-span-1 mt-[15rem]">
        <SBox
          number={"04"}
          head={
            <>
              Dedicated <br />
              Customer Support
            </>
          }
          paragh={
            " Our team is always available to assist with any queries or concerns, ensuring a seamless experience for your employees. "
          }
        />
      </div>
    </div>
  );
};

export default BoxScroll4;
