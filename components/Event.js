import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useParallax } from "react-scroll-parallax";
import EventItem from "./EventItem";

function Event() {
  return (
    <div className="h-min-screen bg-black flex items-center  xl:py-32 ">
      <div className="container max-w-4xl mx-auto relative grid xl:grid-cols-2 grid-cols-1 gap-10 px-5 xl:px-0">
        <EventItem
          title="Akad"
          date="Sabtu, 18 Juni 2022 14:00 WIB"
          location="Villa Lagenta, Lembang"
          image="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/BHM03962.jpg"
        />
        <EventItem
          reverse
          title="Resepsi"
          date="Sabtu, 18 Juni 2022"
          location="Villa Lagenta, Lembang"
          sesi1="16:00 WIB"
          sesi2="18:00 WIB"
          image="https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/BHM04156.JPG"
        />
      </div>
    </div>
  );
}

export default Event;
