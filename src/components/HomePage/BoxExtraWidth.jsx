import Image from "next/image";
import React from "react";

const BoxExtraWidth = ({ background, number, heading, paragraph }) => {
  const backgroundStyle = background
    ? {
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }
    : {};

  console.log(background, "background");
  console.log("background");
  return (
    <div
      className="lg:max-w-[60%] h-[35vh] lg:h-[58vh] w-full px-6 py-4  rounded-[25px]"
      style={backgroundStyle}
    >
      <div className="flex flex-col items-start justify-start gap-3 text-white">
        <h3 className="">{number}</h3>
        <h4>{heading}</h4>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default BoxExtraWidth;
