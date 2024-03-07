import Banner from "@/components/Banner";
import HowWeDrive from "@/components/HomePage/HowWeDrive";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="layoutWidth">
        <HowWeDrive />
      </div>
    </>
  );
}
