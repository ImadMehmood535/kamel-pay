import React from "react";

const SBox = ({ number, head, paragh }) => {
  return (
    <div className="max-w-[300px] font-light text-white w-full p-8 boxGradient rounded-[25px] h-[320px] scale-95">
      <h1 className="font-light">{number}</h1>
      <h2 className="text-2xl mt-12 py-4 ">{head}</h2>
      <p className="text-[12px]">{paragh}</p>
    </div>
  );
};

export default SBox;
