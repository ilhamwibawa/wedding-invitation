import Head from "next/head";
import About from "../components/About";
import Event from "../components/Event";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Map from "../components/Map";
import Quotes from "../components/Quotes";
import Reservation from "../components/Reservation";

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
        fullname="Yulian Rahmawati"
        mother="Alm. Een Juendah"
        father="Alm. Yayan Supriatna"
        nickname="Kijul"
        additional="Putri ke 3 dari"
      />

      <About
        reverse
        title="He's the one"
        desc="She knew she loved him when 'home' went from being a place to being a person."
        url="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/ilham-duduk-sendiri.JPG"
        fullname="Ilham Mirwansyah W"
        mother="Yani Yuningsih"
        father="Hadiana Rusady"
        nickname="Ilham"
        additional="Putra ke 2 dari"
      />

      <Event />

      <Reservation />
    </div>
  );
}
