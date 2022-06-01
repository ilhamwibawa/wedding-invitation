import React, { useState } from "react";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

function Gift() {
  const [isOpen, setIsOpen] = useState(false);
  const titleMotion = useParallax({
    speed: 10,
  });

  const modal = {
    hidden: { display: "none" },
    visible: {
      display: "flex",
      transition: {
        duration: 5000,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div
        className="xl:py-52 py-32 h-min-screen relative bg-contain bg-no-repeat bg-black bg-left-bottom grayscale"
        style={{
          backgroundImage: `url("https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/flowers.png")`,
        }}
      >
        <div ref={titleMotion.ref}>
          <h1 className="font-heading text-3xl xl:text-5xl text-center mb-10">
            Wedding Gift
          </h1>
          <p className="mb-20 max-w-lg text-center mx-auto px-5">
            Your presence is the best gift we could hope for. However if you
            intend to send another wedding gift, you can via the link below:
          </p>
          <div className="text-center">
            <button
              className="bg-white text-black font-heading text-lg px-5 py-3 rounded-lg"
              onClick={() => setIsOpen(true)}
            >
              Wedding gift
            </button>
          </div>
        </div>
      </div>
      {/* Gift modal */}
      <motion.div
        variants={modal}
        animate={isOpen ? "visible" : "hidden"}
        initial="hidden"
        className="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:flex sm:items-center sm:justify-center"
      >
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
            <div className="sm:flex sm:items-start">
              <div
                className="mx-auto absolute right-10 cursor-pointer flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                onClick={() => setIsOpen(false)}
              >
                {/* svg close icon */}
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Wedding Gift
                </h3>
                <div className="mt-2">
                  <div className="bg-white p-10 z-10 top-20">
                    <div className="p-4 bg-white rounded-lg text-center">
                      <Image
                        src="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/qr.jpeg"
                        width={300}
                        height={300}
                        alt="qr code"
                        className="object-cover rounded-lg"
                      />
                      <p className="text-black text-center font-bold">BCA</p>
                      <p className="text-black text-center">Yulian Rahmawati</p>
                      <p className="text-black text-center">1370096755</p>
                    </div>
                    <div className="flex flex-col max-w-lg text-black">
                      <p className="text-xl text-bold">Yulian Rahmawati</p>
                      <p className="text-xl">+62 857-2117-9571</p>
                      <p className="text-xl">
                        Jalan cibarengkok no. 37/182a RT 01 RW 05 kel.
                        Sukabungah kec. Sukajadi kota Bandung 40162
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Gift;
