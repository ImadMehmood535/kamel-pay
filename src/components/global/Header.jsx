"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { logo } from "@/assets";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-sm   rounded-[62px] text-black   mx-auto w-full max-w-[80%] z-[99999] fixed top-8 left-0 right-0 ">
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
          <Link to="home" spy={true} smooth={true} className="cursor-pointer">
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
            className={`lg:flex lg:flex-row flex-col lg:h-full h-[100vh] lg:py-2 pt-24 lg:pr-4 items-start ${
              isMenuOpen ? "flex" : "hidden"
            }  lg:max-w-[400px] max-w-[300px] px-4 lg:px-0 gap-4 lg:gap-0 font-bold lg:font-normal lg:text-center lg:rounded-[67px]   pt-20 w-full   items-start lg:items-center xl:justify-center  lg:static fixed top-0 right-0   text-black md:text-black bg-white lg:bg-webGray-0 `}
          >
            <li className="max-w-[100px]  w-full">
              <Link
                to="home"
                spy={true}
                smooth={true}
                activeClass=""
                className={`cursor-pointer   hover:text-webRed-0 ${
                  activeLink === "home"
                    ? "bg-webLightYellow-0 p-1 px-3 rounded-[35px]"
                    : ""
                }`}
                onSetActive={() => setActiveLink("home")}
              >
                Home
              </Link>
            </li>

            <li className="max-w-[100px]  w-full">
              <Link
                to="about"
                spy={true}
                smooth={true}
                activeClass="bg-webLightYellow-0 p-1 px-3 rounded-[35px]"
                className={`cursor-pointer opacity-100 hover:text-webRed-0 ${
                  activeLink === "about"
                    ? "bg-webLightYellow-0 p-1 px-3 rounded-[35px]"
                    : ""
                }`}
                onSetActive={() => setActiveLink("about")}
              >
                About
              </Link>
            </li>
            <li className="max-w-[100px]  w-full  ">
              <Link
                to="products"
                spy={true}
                smooth={true}
                activeClass="text-[#FF5555]"
                className={`cursor-pointer opacity-100 hover:text-webRed-0 ${
                  activeLink === "products" ? "" : ""
                }`}
                onSetActive={() => setActiveLink("products")}
              >
                Products
              </Link>
            </li>
            <li className="max-w-[100px]  w-full">
              <Link
                to="media"
                spy={true}
                smooth={true}
                activeClass="text-[#FF5555]"
                className={`cursor-pointer opacity-100 hover:text-webRed-0 ${
                  activeLink === "media" ? "" : ""
                }`}
                onSetActive={() => setActiveLink("media")}
              >
                Media
              </Link>
            </li>
            <li className="max-w-[100px]  w-full">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                activeClass="text-[#FF5555]"
                className={`cursor-pointer  whitespace-nowrap hover:text-webRed-0 ${
                  activeLink === "contact" ? "" : ""
                }`}
                onSetActive={() => setActiveLink("contact")}
              >
                Contact Us
              </Link>
              <div className="w-full">
                <div className="block lg:hidden pt-20 cursor-pointer w-full ">
                  <Link
                    href={"/"}
                    className="bg-webLightBlue-0 max-w-[200px] w-full cursor-pointer hover:bg-webRed-0 transition-all text-black    text-center px-4 py-3 font-bold  whitespace-nowrap  rounded-[30px]"
                  >
                    Connect With Us
                  </Link>
                </div>
                <div className="block lg:hidden pt-8 cursor-pointer w-full">
                  <Link
                    href={"/"}
                    className="bg-webBlack-0  max-w-[200px] w-full cursor-pointer hover:bg-webRed-0 transition-all text-white   text-center px-6 py-3  whitespace-nowrap  rounded-[30px]"
                  >
                    Get Kamel Pay
                  </Link>
                </div>
              </div>
            </li>
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
