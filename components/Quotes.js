import Image from "next/image";
import React from "react";
import { useParallax } from "react-scroll-parallax";

function Quotes() {
  const surah = useParallax({
    speed: 10,
  });

  const image1 = useParallax({
    speed: -15,
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
          <div className="relative z-20 xl:-top-32 xl:left-[150px] shadow-xl">
            <Image
              src="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/image-1.jpg"
              alt=""
              width={700}
              height={800}
              className="w-full object-cover rounded-md grayscale"
            />
            <span className="w-full absolute h-full left-0 bg-gradient-to-l from-black to-transparent"></span>
          </div>
          <div className="relative xl:absolute" ref={image1.ref}>
            <Image
              src="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/bg-mobile.jpg"
              alt=""
              width={700}
              height={800}
              className="w-full object-cover rounded-md"
            />
            <span className="w-full absolute h-full left-0 bg-gradient-to-tr from-black to-transparent"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
