import Head from "next/head";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import About from "../components/About";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Quotes from "../components/Quotes";
import Reservation from "../components/Reservation";
import ReservationForm from "../components/ReservationForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wedding Ilham & Kijul</title>
        <meta name="description" content="Wedding of Kijul & Ilham" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Hero />
      <Quotes />

      <About
        title="She's the one"
        desc="And in her smile, I see something more beautiful than the stars."
        url="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/BHM03951.JPG"
      />

      <About
        reverse
        title="He's the one"
        desc="She knew she loved him when 'home' went from being a place to being a person."
        url="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/BHM04117.JPG"
      />

      <Reservation />
    </div>
  );
}
