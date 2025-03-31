'use client';

import { logos } from "@/helpers/Logos";
import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BlockLogos() {
  return (
    <Swiper
      slidesPerView={2}
      modules={[FreeMode, Autoplay]}
      freeMode={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={2000}
      breakpoints={{
        768: {
          slidesPerView: 6,
        },
      }}
      className="h-16"
    >
      {logos.map((logo: any) => (
        <SwiperSlide
          key={logo.key}
          className="!flex items-center justify-center px-10"
        >
          <div className="mx-auto h-16 min-w-32 w-auto max-w-64 relative">
            <Image
              src={logo.image}
              alt={logo.alt}
              fill
              className=""
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}