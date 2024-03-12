import { s } from "@/assets";
import Image from "next/image";
import React from "react";

const Smark = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <Image
        src={s}
        alt="s"
        width={1000}
        height={1000}
        className="max-w-[200px]"
      />
    </div>
  );
};

export default Smark;
