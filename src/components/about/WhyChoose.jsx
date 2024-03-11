"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import CustomButton from "../CustomButton";
import Image from "next/image";
import { whychoose1, whychoose2, whychoose3 } from "@/assets";
import { Fade } from "react-awesome-reveal";

const WhyChoose = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      className="card-container "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={cardVariants}>
        <div className="bg-webBlue-0  w-full  py-24 lg:py-12 relative ">
          <div className="flex justify-between gap-4 flex-wrap lg:flex-nowrap  layoutWidth relative">
            <Fade direction="left" cascade triggerOnce className="w-full">
              <div className="flex flex-col gap-8 max-w-[800px] w-full">
                <h1 className="text-white font-bold  w-full whitespace-normal lg:whitespace-nowrap">
                  Why choose Kamelpay?
                </h1>
                <p className="text-white w-full">
                  At Kamelpay, we are committed to delivering innovative
                  solutions that meet the diverse needs of businesses and their
                  workforce. Whether it&apos;s streamlining payroll processing or
                  managing corporate expenses, our products are designed to
                  drive efficiency, enhance security, and improve overall
                  financial management. Partner with us today and experience the
                  Kamelpay difference.
                </p>

                <CustomButton text={"Get Started"} />
              </div>
            </Fade>

            <div className=" hidden  max-w-[700px] w-full lg:flex justify-center ">
              <Image
                src={whychoose1}
                width={300}
                height={300}
                alt="whychoose1"
                className="absolute bottom-20 "
              />

              <Image
                src={whychoose2}
                width={300}
                height={300}
                alt="whychoose1"
                className="absolute -right-16 top-12 scale-75"
              />
            </div>
          </div>
          <Image
            src={whychoose3}
            width={300}
            height={300}
            alt="whychoose1"
            className="absolute  -bottom-[1px] lg:bottom-0 lg:right-40  "
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WhyChoose;
