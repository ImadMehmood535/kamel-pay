import { about, homeBanner } from "@/assets";
import Banner from "@/components/Banner";
import React from "react";

const page = () => {
  return (
    <>
      <Banner
        bannerText="Ease Your Financial Hurdles with Our Products"
        bannerSubText="Introducing Kamel Pay's corporate payment solutions: the Payroll Card and Corporate Expenses Card."
        bannerImage={about}
        absolute
      />{" "}
    </>
  );
};

export default page;
