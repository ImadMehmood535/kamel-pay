import { fbicon, insticon, lnicon, yticon } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="layoutWidth bg-webBlue-0 h-screen rounded-[40px] my-8  text-white p-8 w-full">
      <div className="grid grid-cols-5 place-items-start place-content-start w-full">
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
            <div className="bg-white/30 rounded-xl w-10  flex justify-center h-10">
              <Image src={fbicon} width={15} height={15} alt="fbicon" />
            </div>
            <div className="bg-white/30 rounded-xl w-10  flex justify-center h-10">
              <Image src={insticon} width={25} height={25} alt="fbicon" />
            </div>
            <div className="bg-white/30 rounded-xl w-10  flex justify-center h-10">
              <Image src={lnicon} width={25} height={25} alt="fbicon" />
            </div>
            <div className="bg-white/30 rounded-xl w-10  flex justify-center h-10">
              <Image src={yticon} width={25} height={25} alt="fbicon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
