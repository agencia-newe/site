'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { cards } from "@/helpers/Cards";

export default function Experience() {
  return (
    <section className="relative py-32 bg-purple">
      <div className="container">
        <div className="flex flex-col text-white items-center lg:px-48">
          <h2 className="font-neulis-bold uppercase text-xl lg:text-4xl" data-aos="fade-down">
            Experiência e competência dedicadas <br /> estrategicamente ao 
            <span className="font-neulis-bold-italic"> universo imobiliário.</span>
          </h2>

          <Swiper 
            className="w-full"
            effect={"coverflow"}
            centeredSlides={true}
            modules={[EffectCoverflow, Navigation]} 
            initialSlide={0}
            slidesPerView={3}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100, 
              modifier: 1,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-card",
              prevEl: ".swiper-button-prev-card",
            }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.title}>
                <div className="bg-purpleDark rounded-lg shadow-2xl">
                  <h3>{card.title}</h3>
                  <ul className="flex flex-col gap-4 lg:gap-8 lg:text-xl">
                    {card.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
            <div>
              <button className="swiper-button-prev-card">prev</button>
              <button className="swiper-button-next-card">next</button>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}