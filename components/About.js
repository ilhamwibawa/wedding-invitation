import Image from "next/image";
import React from "react";
import { useParallax } from "react-scroll-parallax";

function About({ reverse, title, desc, url }) {
  const text = useParallax({
    speed: -15,
  });

  const image = useParallax({
    speed: 10,
  });

  return (
    <div
      className={`${
        reverse ? "bg-gradient-to-t" : "bg-gradient-to-b"
      } from-black to-[#161513] py-52 px-5`}
    >
      <div className="container mx-auto">
        <div
          className={`flex flex-col xl:flex-row ${
            reverse ? "xl:flex-row-reverse" : ""
          }`}
        >
          <div
            className={`mb-10 relative  z-10 ${
              reverse ? "xl:right-60" : "xl:left-60"
            }`}
            ref={text.ref}
          >
            <h1 className="font-heading text-4xl mb-10">{title}</h1>
            <p className="text-2xl xl:text-4xl max-w-md">{desc}</p>
          </div>
          <div ref={image.ref}>
            <Image
              src={url}
              alt=""
              width={700}
              height={800}
              className="w-full object-cover rounded-md grayscale hover:grayscale-0 focus:grayscale-0 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;