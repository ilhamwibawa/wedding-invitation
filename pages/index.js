import React, { useState } from "react";

import Head from "next/head";
import About from "../components/About";
import Event from "../components/Event";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Quotes from "../components/Quotes";
import Reservation from "../components/Reservation";
import Image from "next/image";
import Gift from "../components/Gift";
import Gallery from "../components/Gallery";
import DressCode from "../components/DressCode";
import Prokes from "../components/Prokes";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Wedding of Yulian - Ilham</title>
        <meta name="description" content="The wedding of Yulian &#38; Ilham" />
        <link rel="icon" href="/favicon.ico" />
        {/* Whatsapp */}
        <meta property="og:title" content="" />
        <meta
          property="og:description"
          content="The wedding of Yulian &#38; Ilham. We invite you to join us for our wedding celebration & we are looking forward to your presence."
        />
        <meta
          property="og:image"
          content="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/image-1.jpg"
        />
        <meta property="og:url" content="https://kijul-ilham.online/" />
        <meta property="og:type" content="website" />
      </Head>
      <Intro />
      <Hero />
      <Quotes />

      <About
        title="She's the one"
        desc="And in her smile, I see something more beautiful than the stars."
        url="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/BHM03951.JPG"
        fullname="Yulian Rahmawati"
        mother="Een Juendah (almh)"
        father="Yayan Supriatna (alm)"
        nickname="Kijul"
        additional="Putri ke 3 dari"
      />

      <About
        reverse
        title="He's the one"
        desc="She knew she loved him when 'home' went from being a place to being a person."
        url="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/ilham-sendiri-aja.png"
        fullname="Ilham Mirwansyah W"
        mother="Yani Yuningsih"
        father="Hadiana Rusady"
        nickname="Ilham"
        additional="Putra ke 2 dari"
      />

      <Event />

      <DressCode />

      <Prokes />

      <Gallery />

      <Gift />

      <Reservation />
      <footer className="bg-black p-2 flex items-center justify-center">
        <p>
          Made with <span className="text-red-500">&hearts;</span> by Ilham
          Wibawa
        </p>
      </footer>
    </div>
  );
}
