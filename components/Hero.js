import React from "react";

function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute w-full h-full top-0 left-0 -z-10">
        <video
          autoPlay
          muted
          playsInline
          loop
          preload="yes"
          poster="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/bg-mobile.jpg"
          className="w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/kijul-abu.webm"
            type="video/mp4"
          />
        </video>
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.7)] top-0 left-0"></div>
      </div>
      <div className="h-full flex-col flex  justify-center z-10">
        <div className=" flex justify-center xl:justify-center xl:items-center container mx-auto grow flex-col xl:flex-row px-5 xl:px-0">
          <div className=" xl:border-r-[1px] xl:border-[rgba(255,255,255,0.4)] flex flex-col xl:pr-20 py-10">
            <h1 className="text-6xl xl:text-8xl font-heading">
              Yulian & Ilham
            </h1>
            <h3 className="text-2xl">Are getting married. Yay!</h3>
          </div>
          <div className="xl:pl-20">
            <p className="text-xl">Save the date</p>
            <p className="text-4xl xl:text-6xl font-heading my-5">
              Sabtu, 18 Juni 2022
            </p>
            <p className="text-xl">di Villa Lagenta, Lembang</p>
            <p className="text-xl">Jam 18.00</p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/calendar/render?action=TEMPLATE&text=Yulian+%26+Ilham+Wedding&location=Villa+Lagenta%2C+Jl.+Kolonel+Masturi+No.8%2C+Gudangkahuripan%2C+Kec.+Lembang%2C+Kabupaten+Bandung+Barat%2C+Jawa+Barat+40391%2C+Indonesia&dates=20220618T110000Z%2F20220618T140000Z"
              className="bg-black p-3 mt-5 text-white inline-block items-center justify-center transition-all hover:border-white border-[1px] border-transparent cursor-pointer mr-3"
            >
              SAVE THE DATE
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://goo.gl/maps/jgkN6WuCjurLCtXZ9"
              className="bg-black p-3 mt-5 text-white inline-block items-center justify-center transition-all hover:border-white border-[1px] border-transparent cursor-pointer"
            >
              DIRECTION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
