import Link from "next/link";
import React from "react";

const CustomButton = ({ to = "/", text, transparent , color = "text-white" }) => {
  return (
    <Link
      href={to}
      className={` ${
        transparent
          ? " bg-transparent hover:bg-webButton-0 hover:border-none border-[1px] border-white "
          : " bg-webButton-0 border  border-transparent hover:bg-transparent hover:border-[1px]  hover:border-white "
      }
      
      ${color} scale-75 lg:scale-100 whitespace-nowrap w-fit cursor-pointer  px-6 py-4 rounded-[67px] transition-all duration-500`}
    >
      {text}
    </Link>
  );
};

export default CustomButton;
