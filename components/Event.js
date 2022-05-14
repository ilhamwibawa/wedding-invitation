import React from "react";
import { useParallax } from "react-scroll-parallax";

function Event() {
  const textParallax = useParallax({
    speed: 20,
  });
  return (
    <div
      className="h-min-screen bg-black flex items-center bg-no-repeat bg-right bg-cover xl:bg-contain xl:py-80 py-52"
      style={{
        backgroundImage: `url("https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/maps.png")`,
      }}
    >
      <div className="container mx-auto">
        <div className=" px-5">
          <div className="space-y-10 max-w-6xl mx-auto" ref={textParallax.ref}>
            <div className="">
              <h1 className="font-heading text-4xl xl:text-6xl xl:mb-5">
                Akad
              </h1>
              <p className="text-2xl">Sabtu, 18 Juni 2022 14.00 WIB</p>
              <p className="text-xl">Villa Lagenta, Lembang</p>
            </div>
            <div className="">
              <h1 className="font-heading text-4xl xl:text-6xl xl:mb-5">
                Resepsi
              </h1>
              <p className="text-2xl">Sabtu, 18 Juni 2022</p>
              <p className="text-xl">Villa Lagenta, Lembang</p>
              <div className="flex gap-10 my-5">
                <div>
                  <p className="text-3xl font-heading">Sesi 1</p>
                  <p className="text-xl"> 16.00 WIB</p>
                </div>
                <div>
                  <p className="text-3xl font-heading">Sesi 2</p>
                  <p className="text-xl"> 18.00 WIB</p>
                </div>
              </div>
            </div>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/calendar/render?action=TEMPLATE&text=Yulian+%26+Ilham+Wedding&location=Villa+Lagenta%2C+Jl.+Kolonel+Masturi+No.8%2C+Gudangkahuripan%2C+Kec.+Lembang%2C+Kabupaten+Bandung+Barat%2C+Jawa+Barat+40391%2C+Indonesia&dates=20220618T110000Z%2F20220618T140000Z"
              className="bg-white p-3 mt-5 text-black inline-block items-center justify-center transition-all hover:border-black hover:scale-110 border-[1px] border-transparent cursor-pointer mr-3"
            >
              SAVE THE DATE
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://goo.gl/maps/jgkN6WuCjurLCtXZ9"
              className="bg-red-500 p-3 mt-5 text-white inline-block items-center justify-center transition-all hover:border-white border-[1px] border-transparent cursor-pointer"
            >
              DIRECTION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
