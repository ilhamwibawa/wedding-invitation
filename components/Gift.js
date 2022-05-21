import React from "react";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";

function Gift() {
  return (
    <div
      className="xl:py-52 py-32 h-min-screen relative bg-contain bg-no-repeat bg-black bg-left-bottom grayscale"
      style={{
        backgroundImage: `url("https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/flowers.png")`,
      }}
    >
      <h1 className="font-heading text-3xl xl:text-5xl text-center mb-10">
        Wedding Gift
      </h1>
      <p className="mb-20 max-w-lg text-center mx-auto px-5">
        Kehadiran anda merupakan hadiah terbaik yang bisa kami harapkan. Namun
        jika anda bermaksud untuk mengirimkan hadiah pernikahan lain, bisa
        melalui tautan di bawah ini:
      </p>
      <div className="grid xl:grid-cols-2 gap-10 px-5 xl:px-0 mx-auto container">
        <div className="flex flex-col items-center">
          <div className="p-4 bg-white rounded-lg">
            <Image
              src="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/qr.jpeg"
              width={300}
              height={300}
              alt="qr code"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col max-w-lg">
          <p className="text-xl text-bold">Yulian Rahmawati</p>
          <p className="text-xl">+62 857-2117-9571</p>
          <p className="text-xl">
            Jalan cibarengkok no. 37/182a RT 01 RW 05 kel. Sukabungah kec.
            Sukajadi kota Bandung 40162
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gift;
