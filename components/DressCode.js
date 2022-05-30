import React from "react";
import { useParallax } from "react-scroll-parallax";

function DressCode() {
  const colors = ["#ffffff", "#dac5a6"];

  return (
    <div className="h-min-screen">
      <h1 className="text-center font-heading text-5xl xl:text-6xl xl:mb-10">
        Dress Code
      </h1>
      <p className="text-center max-w-lg mx-auto pb-10 px-5">
        We kindly request our guests to wear these colors to our special day
      </p>

      <div className="flex items-center justify-center gap-3 xl:gap-5 px-5">
        {colors.map((color, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mb-5"
            >
              <div
                className="bg-white rounded-full w-16 h-16 xl:h-20 xl:w-20 mb-3"
                style={{ backgroundColor: color }}
              ></div>
            </div>
          );
        })}
      </div>

      <p className="text-center max-w-lg mx-auto">Black-tie optional</p>
    </div>
  );
}

export default DressCode;
