import Image from "next/image";
import React from "react";
import { useParallax } from "react-scroll-parallax";

function DoubleImage({ image1, image2 }) {
  const image = useParallax({
    speed: -15,
  });
  return (
    <>
      <div className="relative z-20 xl:-top-32 xl:left-[150px] shadow-xl">
        <Image
          src={image1}
          alt=""
          width={700}
          height={800}
          className="w-full object-cover rounded-md grayscale"
          priority
        />
        <span className="w-full absolute h-full left-0 bg-gradient-to-l from-black to-transparent"></span>
      </div>
      <div className="relative xl:absolute" ref={image.ref}>
        <Image
          src={image2}
          alt=""
          width={700}
          height={800}
          className="w-full object-cover rounded-md"
          priority
        />
        <span className="w-full absolute h-full left-0 bg-gradient-to-tr from-black to-transparent"></span>
      </div>
    </>
  );
}

export default DoubleImage;
