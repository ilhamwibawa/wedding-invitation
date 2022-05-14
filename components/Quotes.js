import Image from "next/image";
import React from "react";
import { useParallax } from "react-scroll-parallax";
import DoubleImage from "./DoubleImage";

function Quotes() {
  const surah = useParallax({
    speed: 10,
  });

  return (
    <div className="bg-black py-20 xl:py-48 overflow-x-hidden">
      <div className="container mx-auto px-5">
        <div className="flex relative flex-col md:flex-row justify-center items-center">
          <div className="relative max-w-xl left-0 z-20" ref={surah.ref}>
            <h1 className="text-xl xl:text-3xl leading-normal xl:leading-10">
              “And of His signs is that He created for you from yourselves mates
              that you may find tranquillity in them; and He placed between you
              affection and mercy. Indeed in that are signs for a people who
              give thought.”
            </h1>
            <p>- QS. Ar- Rum 21</p>
          </div>
          <DoubleImage
            image1="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/image-1.jpg"
            image2="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/bg-mobile.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Quotes;
