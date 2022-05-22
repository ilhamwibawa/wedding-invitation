import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useParallax } from "react-scroll-parallax";

function EventItem({ reverse, title, date, location, sesi1, sesi2, image }) {
  const textParallax = useParallax({
    speed: -10,
  });

  const router = useRouter();
  const { s } = router.query;
  return (
    <div
      className={`flex flex-col xl:flex-row relative ${
        reverse ? "bottom-48" : ""
      }`}
    >
      <div
        className={` flex xl:absolute z-10 ${
          reverse ? "xl:-right-40 xl:bottom-20" : "xl:-left-20"
        }`}
        ref={textParallax.ref}
      >
        <div className="">
          <h1 className="font-heading text-4xl xl:text-6xl xl:mb-5 mb-5">
            {title}
          </h1>
          <p className="text-xl xl:text-2xl">{date}</p>
          <p className="text-xl">{location}</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://goo.gl/maps/jgkN6WuCjurLCtXZ9"
            className="bg-red-700 px-10 text-center rounded-md mb-5 p-3 mt-5 text-white inline-block items-center justify-center transition-all hover:border-white border-[1px] border-transparent cursor-pointer"
          >
            DIRECTION
          </a>
          {sesi1 && sesi2 && (
            <div className="flex gap-10">
              {s === "1" && (
                <div className="flex flex-col items-center">
                  <p className="text-3xl font-heading">Sesi 1</p>
                  <p className="text-xl">{sesi1}</p>
                </div>
              )}
              {s === "2" && (
                <div className="flex flex-col items-center">
                  <p className="text-3xl font-heading">Sesi 2</p>
                  <p className="text-xl">{sesi2}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="">
        <Image
          src={image}
          alt=""
          width={500}
          height={600}
          className="object-cover grayscale  transition-all rounded-md"
          priority
        />
      </div>
    </div>
  );
}

export default EventItem;
