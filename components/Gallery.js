import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import { useParallax } from "react-scroll-parallax";

function Gallery() {
  const galleryMotion = useParallax({
    speed: 10,
  });

  const images = [
    "https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/gallery-1.jpg",
    "https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/gallery-2.jpg",
    "https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/gallery-3.jpg",
    "https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/gallery-4.jpg",
    "https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/gallery-5.jpg",
    "https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/gallery-6.jpg",
    "https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/gallery-7.jpg",
    "https://wedding-invitation-ilham-kijul.s3.ap-southeast-1.amazonaws.com/gallery-8.jpg",
  ];
  return (
    <div className="h-min-screen xl:py-52 py-32 bg-black relative">
      <div className="mx-auto container relative">
        <h1 className=" text-6xl xl:text-8xl font-heading absolute -top-12 z-10 px-5">
          Gallery
        </h1>
      </div>
      <Swiper
        ref={galleryMotion.ref}
        spaceBetween={10}
        modules={[Lazy, Autoplay]}
        lazy={true}
        freeMode={true}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              height={500}
              width={600}
              className="object-cover rounded-sm xl:rounded-lg"
              alt=""
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Gallery;
