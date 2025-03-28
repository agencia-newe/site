'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import 'swiper/css/navigation';
import "swiper/css";
import { planets } from "@/helpers/Planets";

export default function Universe({className}: Readonly<{className?: string}>) {
  return (
    <section className={`${className} relative h-screen w-full overflow-hidden rounded-t-[42px] rounded-b-[42px]`}>
      <Swiper
        className="h-screen w-full"
        allowTouchMove={false}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-parent",
        }}
      >
        {/* Parent Slider */}
        <SwiperSlide>
          <section className={` relative h-screen w-full bg-purple overflow-hidden rounded-t-[42px] rounded-b-[42px]`} data-aos="fade-up">
            <Image src="/images/montagem-planetas.webp" alt="Planetas" fill className="absolute inset-0 -z-10 object-cover" />
            <div className="container text-white inset-0 w-full h-full flex flex-col justify-center items-start">
              <h2 className="uppercase font-neulis-semi-bold-italic lg:text-6xl lg:max-w-[570px]" data-aos="fade-right" data-aos-delay="500">
                Conheça o universo Newe dedicado <br /> ao imobiliário
              </h2>
              <button className="swiper-button-next-parent cursor-pointer font-neulis-light-italic uppercase pt-12" data-aos="fade-right" data-aos-delay="800">
                <p>arrow svg</p>
                <span className="link link-underline link-underline-black">Clique aqui</span>
              </button>
            </div>
          </section>
        </SwiperSlide>

        {/* Child Slider */}
        <SwiperSlide>
          <section className={` relative h-screen w-full bg-purple overflow-hidden rounded-t-[42px] rounded-b-[42px]`} data-aos="fade-up">
            <Image src="/images/fundo-geral.webp" alt="Fundo" fill className="absolute inset-0 -z-10 object-cover" />
            <div className="text-white inset-0 w-full h-full">
              <div className="w-full h-full">
                <Swiper
                  className="w-full h-full cursor-grab active:cursor-grabbing"
                  nested={true}
                >
                  {planets.map((planet) => (
                    <SwiperSlide key={planet.key}>
                      <div className="w-full h-full flex justify-center items-center">
                        <Image data-aos="fade-down" data-aos-delay="500" src={planet.image} alt={planet.alt} width={500} height={500} />
                        <Image data-aos="fade-left" data-aos-delay="800" src={planet.detail} aria-hidden alt="Elemento visual" width={500} height={500} />

                        <p>{planet.description}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}