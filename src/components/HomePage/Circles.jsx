import { circle, s } from "@/assets";
import Image from "next/image";
import React from "react";

const Circles = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen relative">
    

      <div className="absolute top-0 left-16">
        <Image
          src={circle}
          alt="s"
          width={1000}
          height={1000}
          className="max-w-[200px]"
        />
      </div>
      <div className="absolute top-0 right-16">
        <Image
          src={circle}
          alt="s"
          width={1000}
          height={1000}
          className="max-w-[100px]"
        />
      </div>
    </div>
  );
};

export default Circles;
