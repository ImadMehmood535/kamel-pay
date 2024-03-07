"use client";
import React, { useState } from "react";
import Image from "next/image";
import { logo } from "@/assets";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { menuItems } from "@/data/header";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const path = usePathname();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <nav className="bg-white text-sm   rounded-[62px] text-black   mx-auto layoutWidth z-[99999] fixed top-8 left-0 right-0 ">
      <div className="container relative  w-full  px-4 py-2  flex justify-between items-center">
        <div className="lg:hidden lg:static absolute  right-2 z-50">
          <button
            onClick={handleMenuToggle}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="max-w-[200px] w-full">
          <Link href="/" className="cursor-pointer">
            <Image
              src={logo}
              alt="logo"
              width={500}
              height={500}
              className="max-w-[130px] w-full"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center w-full ">
          <ul
            className={`lg:flex lg:flex-row flex-col lg:h-full h-[100vh] lg:py-2 pt-24 items-start ${
              isMenuOpen ? "flex" : "hidden"
            }  lg:max-w-[400px]  max-w-[300px] px-4   gap-4 lg:gap-0 font-bold lg:font-normal lg:text-center lg:rounded-[67px]   pt-20 w-full   items-start lg:items-center xl:justify-center  lg:static fixed top-0 right-0   text-black md:text-black bg-white lg:bg-webGray-0`}
          >
            {menuItems?.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                className="max-w-[100px] w-full whitespace-nowrap"
              >
                <Link
                  href={item.to}
                  className={`cursor-pointer hover:text-webRed-0 transition-colors ${
                    path === item.to || `/${hoveredItem}` === item?.to
                      ? "bg-webLightYellow-0 py-1.5 px-3 rounded-[35px] whitespace-nowrap transition-all duration-500"
                      : "py-1 px-3"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden justify-center  gap-2 items-center text-[12px]  lg:flex   cursor-pointer">
          <Link
            href={"/"}
            className="bg-webLightBlue-0  cursor-pointer hover:bg-webRed-0 transition-all text-black  w-full text-center px-2 py-3 font-bold  whitespace-nowrap  rounded-[30px]"
          >
            Connect With Us
          </Link>
          <Link
            href={"/"}
            className="bg-webBlack-0  cursor-pointer hover:bg-webRed-0 transition-all text-white  w-full text-center px-2 py-3  whitespace-nowrap  rounded-[30px]"
          >
            Get Kamel Pay
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
