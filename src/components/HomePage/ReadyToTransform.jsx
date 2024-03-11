"use client";
import React from "react";
import CustomButton2 from "../CustomButton2";
import Image from "next/image";
import { getReady } from "@/assets";
import { Fade } from "react-awesome-reveal";
import { motion, useAnimation } from "framer-motion";

const ReadyToTransform = ({heading, paragh , btnText}) => {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <div className="w-full mx-auto  pt-20 flex flex-col gap-14 bg-white layoutWidth">
      <div className="flex flex-col justify-center items-center gap-8">
        {/* <Fade direction="left" cascade> */}
        <h2 className="text-center">
          {heading}
        </h2>
        <p className="text-center max-w-[700px]">
        <>{paragh}</>
        </p>
        <CustomButton2 text={"Schedule for a Demo"} />
        {/* </Fade> */}

        {/* <Fade direction="up" triggerOnce fraction={0.2}> */}
        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardVariants}
        >
          <Image
            src={getReady}
            width={2000}
            height={2000}
            alt="getReady"
            className="max-w-[80%] w-full mx-auto mt-12 "
          />
        </motion.div>
        {/* </Fade> */}
      </div>
    </div>
  );
};

export default ReadyToTransform;
