import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";
import Image from "next/image";

function Intro() {
  const [play, { stop }] = useSound(
    "https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/backsound.mp3"
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
    if (isPlaying) {
      stop();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  const router = useRouter();
  const { to, f } = router.query;

  let line1 = `Hello, ${to}.`;
  let line2 = "Berita baik!";
  let line3 = "Ilham akhirnya nikahin Kijul :)";

  if (f) {
    line1 = `Dear, ${to},`;
    line2 = "You are invited";
    line3 = "to our wedding celebration";
  }

  const [isOpen, setIsOpen] = useState(true);

  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const button = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 5,
        staggerChildren: 2,
      },
    },
  };

  const modal = {
    hidden: { height: 0 },
    visible: {
      height: "100vh",
      transition: {
        duration: 5000,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={modal}
      initial="visible"
      animate={isOpen ? "visible" : "hidden"}
      className="fixed w-full h-screen bg-[#161513] left-0 top-0 z-50 overflow-hidden"
    >
      <div className="relative max-w-[600px] h-screen">
        <Image
          src="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/BHM03864.JPG"
          layout="fill"
          alt=""
          className=" object-cover grayscale -z-10 opacity-60"
          priority
        />
        <div className="absolute h-full w-full bg-gradient-to-l from-[#161513] to-transparent top-0 left-0"></div>
      </div>
      <div className="absolute top-0 left-0 flex flex-col w-full h-screen items-center justify-center px-5">
        <motion.h3
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="text-4xl text-center"
          onAnimationEnd={() => {}}
        >
          {line1.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
          {line2.split("").map((char, index) => {
            return (
              <motion.span key={`${char}-${index}`} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
          {line3.split("").map((char, index) => {
            return (
              <motion.span key={`${char}-${index}`} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h3>
        <motion.button
          variants={button}
          initial={`${f === true} ? "hidden" : "visible"`}
          animate="visible"
          className="bg-black p-3 mt-5 text-white flex items-center justify-center transition-all hover:border-white border-[1px] border-transparent cursor-pointer"
          onClick={handleClick}
          whileTap={{ scale: 0.9 }}
        >
          Undangan buat kamu
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Intro;
