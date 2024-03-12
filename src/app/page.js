import { homeBanner } from "@/assets";
import Banner from "@/components/Banner";
import BoxScroll from "@/components/HomePage/BoxScroll";
import BoxScroll2 from "@/components/HomePage/BoxScroll2";
import BoxScroll3 from "@/components/HomePage/BoxScroll3";
import BoxScroll4 from "@/components/HomePage/BoxScroll4";
import HowWeDrive from "@/components/HomePage/HowWeDrive";
import ReadyToTransform from "@/components/HomePage/ReadyToTransform";
import Smark from "@/components/HomePage/Smark";
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

      <div className="sticky top-16  z-10">
        <Smark />
      </div>

      <div className="sticky top-16  z-20">
        <BoxScroll />
      </div>
      <div className="sticky top-16  z-20">
        <BoxScroll2 />
      </div>
      <div className="sticky top-16  z-20">
        <BoxScroll3 />
      </div>
      <div className="sticky top-16  z-20">
        <BoxScroll4 />
      </div>

      <div className="relative  z-30">
        <ReadyToTransform
          heading={
            <>
              Ready to Transform Your <br /> Workforce?
            </>
          }
          paragh={
            <>
              Get in touch with us today to learn how Kamelpay can elevate
              employee satisfaction <br />
              and drive productivity in your organization.
            </>
          }
        />
      </div>
    </>
  );
}
