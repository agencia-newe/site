'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import 'swiper/css/navigation';
import "swiper/css";
import { planets } from "@/helpers/Planets";
import * as motion from "motion/react-client"

export default function Universe({className}: Readonly<{className?: string}>) {
  const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" }
  return (
    <section className={`${className} relative h-screen w-full overflow-hidden rounded-3xl lg:rounded-[42px]`}>
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
          <section className={` relative h-screen w-full bg-purple overflow-hidden rounded-3xl lg:rounded-[42px]`} data-aos="fade-up">
            <Image src="/images/montagem-planetas.webp" alt="Planetas" fill className="absolute inset-0 -z-10 object-cover" />
            <div className="container text-white inset-0 w-full h-full flex flex-col justify-center items-start" data-aos="fade-right" data-aos-delay="500">
              <h2 className="uppercase font-neulis-semi-bold-italic text-3xl lg:text-6xl lg:max-w-[570px]">
                Conheça o universo Newe dedicado <br /> ao imobiliário
              </h2>
              <button className="swiper-button-next-parent cursor-pointer bg-purple text-white font-neulis-semi-bold-italic uppercase mt-12 pb-2.5 pt-3 px-10 rounded-2xl hover:bg-purpleLight hover:text-purpleDark !transition-all !duration-300">
                Clique aqui
              </button>
            </div>
          </section>
        </SwiperSlide>

        {/* Child Slider */}
        <SwiperSlide>
          <section className={` relative h-screen w-full bg-purple overflow-hidden rounded-3xl lg:rounded-[42px]`} data-aos="fade-up">
            <Image src="/images/fundo-geral.webp" alt="Fundo" fill className="absolute inset-0 -z-10 object-cover" />
            <div className="text-white inset-0 w-full h-full">
              <div className="w-full h-full relative">
                <Swiper
                  className="w-full h-full cursor-grab active:cursor-grabbing"
                  nested={true}
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".swiper-button-next-child",
                    prevEl: ".swiper-button-prev-child",
                  }}
                >
                  {planets.map((planet) => (
                    <SwiperSlide key={planet.key}>
                      <div className="w-full h-full flex justify-center items-center">
                        {planet.alt === "Sol" && (
                          <div className="relative right-20">
                            <Image data-aos="fade-down" data-aos-delay="500" src={planet.image} alt={planet.alt} width={500} height={500} />

                            <div className="absolute flex items-center w-full h-full inset-0 !left-[43%] !top-[-1.45%]">
                              <svg className="!scale-[1.45]" xmlns="http://www.w3.org/2000/svg" id="Camada_2" data-name="Camada 2" viewBox="0 0 1057.77 484.81">
                                <g id="Camada_1-2" data-name="Camada 1">
                                  <motion.path fill="none" stroke="#fff" strokeWidth="3.84px" d="M1057.77,242.41H482.79C482.79,109.59,375.15,1.92,242.36,1.92S1.92,109.59,1.92,242.41s107.65,240.49,240.44,240.49" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transition}/>
                                </g>
                              </svg>
                              <Image className="relative right-[-120px] " data-aos="fade-left" data-aos-delay="800" src={planet.detail} aria-hidden alt="Elemento visual" width={50} height={50} />
                            </div>
    
                            <p className="absolute top-[calc(50%+10px)] left-[90%] lg:text-2xl uppercase w-[350px] text-shadow font-neulis-regular">{planet.description}</p>
                          </div>
                        )}

                        {planet.alt !== "Sol" && (
                          <div className="relative right-20">
                            <Image data-aos="fade-down" data-aos-delay="500" src={planet.image} alt={planet.alt} width={500} height={500} />

                            <div className="absolute top-1/2 left-4/5 flex items-center gap-3">
                              <div className="h-0.5 bg-white w-[450px]" />
                              <Image className="" data-aos="fade-left" data-aos-delay="800" src={planet.detail} aria-hidden alt="Elemento visual" width={70} height={70} />

                            </div>

                            <p className="absolute top-[calc(50%+50px)] left-5/6 lg:text-2xl uppercase w-[380px] font-neulis-regular text-shadow">{planet.description}</p>
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="absolute w-full flex justify-between top-1/2 -translate-y-[50%] z-20">
                  <button className="swiper-button-prev-child relative cursor-pointer lg:text-3xl lg:left-8 rotate-180 disabled:opacity-0">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px" height="36px">
                      <path fillRule="evenodd"  fill="rgb(175, 152, 191)"
                      d="M1.451,-0.008 C1.811,-0.008 2.171,0.126 2.451,0.397 L19.568,16.964 C19.848,17.235 20.006,17.607 20.006,17.996 C20.006,18.385 19.848,18.757 19.568,19.028 L2.451,35.595 C1.881,36.147 0.971,36.133 0.419,35.563 C-0.133,34.993 -0.119,34.084 0.451,33.532 L16.503,17.996 L0.451,2.459 C-0.119,1.908 -0.133,0.999 0.419,0.429 C0.701,0.139 1.076,-0.008 1.451,-0.008 Z"/>
                    </svg>
                  </button>
                  <button className="swiper-button-next-child relative cursor-pointer lg:text-3xl lg:right-8 disabled:opacity-0">
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
          </section>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}