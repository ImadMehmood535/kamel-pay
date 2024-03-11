import { about, homeBanner } from "@/assets";
import Banner from "@/components/Banner";
import ReadyToTransform from "@/components/HomePage/ReadyToTransform";
import PerfectFit from "@/components/about/PerfectFit";
import WhyChoose from "@/components/about/WhyChoose";
import React from "react";

const page = () => {
  return (
    <>
      <Banner
        bannerText="Ease Your Financial Hurdles with Our Products"
        bannerSubText="Introducing Kamel Pay's corporate payment solutions: the Payroll Card and Corporate Expenses Card."
        bannerImage={about}
        absolute
      />

      <div className="layoutWidth">
        <PerfectFit />
      </div>

      <WhyChoose />

      <ReadyToTransform
        heading={
          <>
            Ready to transform your payroll processing and
            <br />
            corporate expenses management?
          </>
        }
        paragh={
          <>
           Contact us today to learn more about our products and how we can tailor them to meet your specific business requirements. Thank you for considering Kamelpay as your trusted financial services partner.
          </>
        }
      />
    </>
  );
};

export default page;
