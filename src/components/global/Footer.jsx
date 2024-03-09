import { fbicon, footerlogo, insticon, lnicon, yticon } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-white py-8">
      <div className="layoutWidth bg-webBlue-0 h-full lg:h-screen rounded-[40px]   text-white p-8 w-full lg:relative  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 place-items-start place-content-start w-full gap-8">
          <div className="flex flex-col gap-6">
            <p className="font-semibold">Quick Links</p>
            <div className="flex flex-col font-light">
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Products</Link>
              <Link href={"/"}>Media</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-semibold">Company</p>
            <div className="flex flex-col font-light">
              <Link href={"/"}>About</Link>
              <Link href={"/"}>Careers</Link>
              <Link href={"/"}>Terms & Conditions</Link>
              <Link href={"/"}>Schedule Of Charges</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-semibold">Contact Us</p>
            <div className="flex flex-col font-light">
              <Link href={"/"}>Sales</Link>
              <Link href={"/"}>Contact Sales</Link>
              <Link href={"/"}>+971 (56) 123 45678</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-semibold">Follow us on</p>
            <div className="flex justify-start gap-3  ">
              <div className="bg-white/30 rounded-xl  w-9  flex justify-center h-10">
                <Image src={fbicon} width={15} height={15} alt="fbicon" />
              </div>
              <div className="bg-white/30 rounded-xl  w-9  flex justify-center h-10">
                <Image src={insticon} width={20} height={20} alt="fbicon" />
              </div>
              <div className="bg-white/30 rounded-xl  w-9  flex justify-center h-10">
                <Image src={lnicon} width={20} height={20} alt="fbicon" />
              </div>
              <div className="bg-white/30 rounded-xl  w-9  flex justify-center h-10">
                <Image src={yticon} width={20} height={20} alt="fbicon" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-2">
            <p className="font-semibold">Subscribe to our newsletter</p>
            <div className="flex justify-start gap-3  ">
              <div className="flex flex-col gap-6 w-full">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  phasellus amet dui quam vitae quis leo.
                </p>

                <div className="flex justify-start flex-wrap lg:flex-nowrap gap-3 w-full">
                  <input
                    type="email"
                    className="rounded-[50px] py-4 px-3 w-full"
                  />
                  <div className="w-full ">
                    <button
                      type="submit"
                      className={` bg-black border border-transparent hover:bg-transparent hover:border-[1px]  hover:border-white  
        scale-75 lg:scale-100 whitespace-nowrap w-fit cursor-pointer  px-14 lg:px-2 py-8 lg:py-4 rounded-[67px] transition-all duration-500 `}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:absolute lg:bottom-0 lg:left-0 w-full  mt-12 lg:p-8">
          <div className="flex justify-between flex-wrap lg:flex-nowrap w-full h-full ">
            <div className="flex flex-col gap-6 max-w-[400px] w-full font-light">
              <p className="font-light">
                Discover the ease of managing your finances with Kamel Pay&apos;s
                prepaid cards and intuitive digital app.
              </p>
              <div className="flex flex-col font-light gap-4">
                <div className="flex justify-start gap-2 lg:gap-7">
                  <FaLocationDot className="w-12 lg:w-5 h-5" />
                  <p>
                    Office 1901, Opal Tower, Burj Khalifa Street, Business Bay,
                    Dubai – UAE
                  </p>
                </div>
                <div className="flex justify-start gap-2 lg:gap-7">
                  <FaPhoneAlt className="w-12 lg:w-5 h-5" />
                  <p>
                    (+971) 4 562 3700 <br /> customer.service@kamelpay.com
                  </p>
                </div>
                <div className="flex justify-start gap-2 lg:gap-7">
                  <MdEmail className="w-12 lg:w-5 h-5" />
                  <p>customer.service@kamelpay.com </p>
                </div>
              </div>
            </div>

            <div className=" mt-6 ">
              <Image
                src={footerlogo}
                width={5000}
                height={5000}
                alt="footer-lo"
                className="max-w-[600px] 2xl:max-w-[800px] w-full"
              />
            </div>
          </div>

          <hr className="mt-7" />
          <div className="flex justify-between flex-wrap lg:flex-nowrap my-2 font-light">
            <p>Copyright &copy; 2024 Kamel Pay | All Rights Reserved</p>
            <p>Made in UAE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
