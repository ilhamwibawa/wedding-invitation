import React from "react";
import Image from "next/image";

function Prokes() {
  return (
    <div className="h-min-screen xl:py-32 py-32">
      <h1 className="text-center font-heading text-4xl xl:text-6xl mb-10">
        Health Protocols
      </h1>

      <div className="xl:flex grid grid-cols-2 items-center justify-center gap-3 xl:gap-5 px-5">
        <div className="flex flex-col items-center justify-center mb-5">
          <div className="bg-white rounded-lg p-2 w-16 h-16 xl:h-32 xl:w-32 flex items-center justify-center mb-3">
            <Image
              src="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/hp-washing-hands.png"
              width={100}
              height={100}
              alt=""
              className=" object-contain"
            />
          </div>
          <p className="text-center">Wash your hands</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-5">
          <div className="bg-white rounded-lg p-2 w-16 h-16 xl:h-32 xl:w-32 flex items-center justify-center mb-3">
            <Image
              src="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/hp-medical-mask.png"
              width={100}
              height={100}
              alt=""
              className=" object-contain"
            />
          </div>
          <p className="text-center">Wear mask</p>
        </div>

        <div className="flex flex-col items-center justify-center mb-5">
          <div className="bg-white rounded-lg p-2 w-16 h-16 xl:h-32 xl:w-32 flex items-center justify-center mb-3">
            <Image
              src="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/hp-no-handshake.png"
              width={100}
              height={100}
              alt=""
              className=" object-contain"
            />
          </div>
          <p className="text-center">No handshake</p>
        </div>

        <div className="flex flex-col items-center justify-center mb-5">
          <div className="bg-white rounded-lg p-2 w-16 h-16 xl:h-32 xl:w-32 flex items-center justify-center mb-3">
            <Image
              src="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/hp-hand-sanitizer.png"
              width={100}
              height={100}
              alt=""
              className=" object-contain"
            />
          </div>
          <p className="text-center">Use hand sanitizer</p>
        </div>
      </div>
    </div>
  );
}

export default Prokes;
