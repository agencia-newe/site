'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import { cards } from "@/helpers/Cards";

export default function Experience() {
  return (
    <section className="relative py-32 bg-purple">
      <div className="container">
        <div className="flex flex-col text-white items-center lg:gap-20 lg:px-48">
          <h2 className="font-neulis-bold uppercase text-xl lg:text-4xl" data-aos="fade-down">
            Experiência e competência dedicadas <br /> estrategicamente ao 
            <span className="font-neulis-bold-italic"> universo imobiliário.</span>
          </h2>

          <div className="relative w-full">
            <Swiper 
              className="w-full relative !overflow-hidden"
              effect={"cards"}
              modules={[EffectCards, Navigation]} 
              slidesPerView={3}
              // loop={true}
              cardsEffect={{
                perSlideOffset: 50,
                rotate: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next-card",
                prevEl: ".swiper-button-prev-card",
              }}
            >
              {cards.map((card) => (
                <SwiperSlide className="first:hidden" key={card.title}>
                  <div className="bg-purpleDark rounded-[24px] h-[500px] shadow-2xl py-14 px-5 flex flex-col justify-center items-center gap-14">
                    <h3 className="lg:text-3xl uppercase font-neulis-bold-italic">
                      {card.title}
                    </h3>
                    <ul className="flex flex-col items-center marker list-disc">
                      {card.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute w-full flex justify-between top-1/2 -translate-y-[50%] z-20">
              <button className="swiper-button-prev-card relative cursor-pointer lg:text-3xl right-8 disabled:opacity-0">
                {'<'}
              </button>
              <button className="swiper-button-next-card relative cursor-pointer lg:text-3xl left-8 disabled:opacity-0">
                {'>'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}