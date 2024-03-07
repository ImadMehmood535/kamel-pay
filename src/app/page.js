import { homeBanner, lines } from "@/assets";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-webBlue-0 h-full py-20 relative w-full  ">
      <div className="layoutWidth flex flex-wrap lg:flex-nowrap justify-between h-screen items-center  z-10">
        <div className="w-full  text-white text-center lg:text-start flex flex-col  gap-8 ">
          <h1>Unlocking <br />Productivity Through Employee Happiness</h1>
          <p>
            Welcome to Kamelpay, where we redefine payroll processing to drive
            employee happiness. Studies consistently show that happy employees
            are more productive. Our mission is to ensure the well-being and
            satisfaction of your workforce, ultimately benefiting your business.
          </p>
          <div className="flex justify-center flex-wrap lg:flex-nowrap lg:justify-start  items-center gap-0 lg:gap-4">
            <CustomButton text={"Learn More"} />
            <CustomButton text={"Get Kamel Pay Now"} transparent={true} />
          </div>
        </div>

        <div className="w-full ">
          <Image
            src={homeBanner}
            width={700}
            height={700}
            alt="home banner"
            className="mx-auto lg:ml-auto"
          />
        </div>
      </div>
    </div>
  );
}
