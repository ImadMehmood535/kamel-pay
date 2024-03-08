import Banner from "@/components/Banner";
import HowWeDrive from "@/components/HomePage/HowWeDrive";
import ReadyToTransform from "@/components/HomePage/ReadyToTransform";
import WhyChooseKamel from "@/components/HomePage/WhyChooseKamel";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="layoutWidth">
        <HowWeDrive />
      </div>
      {/* <div className="sticky top-0 "> */}
        <WhyChooseKamel />
      {/* </div> */}
      <ReadyToTransform />
     </>
  );
}
