import { homeBanner } from "@/assets";
import Banner from "@/components/Banner";
import HowWeDrive from "@/components/HomePage/HowWeDrive";
import ReadyToTransform from "@/components/HomePage/ReadyToTransform";
import WhyChooseKamel from "@/components/HomePage/WhyChooseKamel";

export default function Home() {
  return (
    <>
      <Banner
        bannerText="Unlocking Productivity Through Employee Happiness"
        bannerSubText="Welcome to Kamelpay, where we redefine payroll processing to drive employee happiness. Studies consistently show that happy employees are more productive. Our mission is to ensure the well-being and satisfaction of your workforce, ultimately benefiting your business."
        buttonText1="Learn More"
        buttonText2="Get Kamel Pay Now"
        bannerImage={homeBanner}
      />
      <div className="layoutWidth">
        <HowWeDrive />
      </div>
      <div className="sticky top-0 z-0 ">
        <WhyChooseKamel />
      </div>
      <div className="relative  z-20">
        <ReadyToTransform />
      </div>
    </>
  );
}
