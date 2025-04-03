'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { cards } from "@/helpers/Cards";

export default function Experience() {
  return (
    <section className="relative lg:py-32 pt-20 pb-32 bg-purple" id="servicos">
      <div className="lg:container lg:mx-auto">
        <div className="flex flex-col text-white items-center gap-20 2xl:px-48">
          <h2 className="font-neulis-bold uppercase px-10 md:px-16 lg:px-0 text-xl lg:text-4xl" data-aos="fade-down">
            Experiência e competência dedicadas <br className="hidden lg:block" /> estrategicamente ao 
            <span className="font-neulis-bold-italic"> universo imobiliário.</span>
          </h2>

          <div className="relative w-full swiper-cards">
            <Swiper 
              breakpoints={{
                768: {
                  slidesPerView: 2.6,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
              // className="w-full relative !overflow-hidden"
              slidesPerView={1.3}
              effect={"coverflow"}
              modules={[EffectCoverflow, Navigation]}
              coverflowEffect={{
                slideShadows: false,
                rotate: 0,
                stretch: 50,
                depth: 100,
              }}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              // cardsEffect={{
              //   perSlideOffset: 30,
              //   rotate: false,
              //   slideShadows: false,
              // }}
              navigation={{
                nextEl: ".swiper-button-next-card",
                prevEl: ".swiper-button-prev-card",
              }}
            >
              {cards.map((card) => (
                <SwiperSlide key={card.title}>
                  <div className="bg-purpleDark rounded-[24px] aspect-[410/475] lg:min-w-[410px] lg:h-[475px] shadow-lg py-14 px-5 lg::px-10 flex flex-col justify-center items-center gap-10 lg:gap-14">
                    <h3 className="text-2xl lg:text-4xl uppercase font-neulis-bold-italic text-center hashtag">
                      <div dangerouslySetInnerHTML={{__html: card.title}} />
                    </h3>
                    <ul className="flex flex-col items-center text-center list-disc list-inside lg:text-lg font-neulis-bold-italic">
                      {card.list.map((item: string, index: number) => (
                        <li key={item+index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute w-full lg:flex justify-between top-1/2 -translate-y-[50%] z-20 hidden">
              <button className="swiper-button-prev-card relative cursor-pointer lg:text-3xl rotate-180 disabled:opacity-0" title="Anterior">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px" height="36px">
                  <path fillRule="evenodd"  fill="rgb(175, 152, 191)"
                  d="M1.451,-0.008 C1.811,-0.008 2.171,0.126 2.451,0.397 L19.568,16.964 C19.848,17.235 20.006,17.607 20.006,17.996 C20.006,18.385 19.848,18.757 19.568,19.028 L2.451,35.595 C1.881,36.147 0.971,36.133 0.419,35.563 C-0.133,34.993 -0.119,34.084 0.451,33.532 L16.503,17.996 L0.451,2.459 C-0.119,1.908 -0.133,0.999 0.419,0.429 C0.701,0.139 1.076,-0.008 1.451,-0.008 Z"/>
                </svg>
              </button>
              <button className="swiper-button-next-card relative cursor-pointer lg:text-3xl disabled:opacity-0" title="Próximo">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px" height="36px">
                  <path fillRule="evenodd"  fill="rgb(175, 152, 191)"
                  d="M1.451,-0.008 C1.811,-0.008 2.171,0.126 2.451,0.397 L19.568,16.964 C19.848,17.235 20.006,17.607 20.006,17.996 C20.006,18.385 19.848,18.757 19.568,19.028 L2.451,35.595 C1.881,36.147 0.971,36.133 0.419,35.563 C-0.133,34.993 -0.119,34.084 0.451,33.532 L16.503,17.996 L0.451,2.459 C-0.119,1.908 -0.133,0.999 0.419,0.429 C0.701,0.139 1.076,-0.008 1.451,-0.008 Z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}