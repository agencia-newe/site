'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import 'swiper/css/navigation';
import "swiper/css";
import { planets } from "@/helpers/Planets";

export default function Universe({className}: Readonly<{className?: string}>) {
  return (
    <section className={`${className} relative h-screen w-full overflow-hidden rounded-3xl lg:rounded-[42px]`} id="universo-newe">
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
          <section className={`relative h-screen w-full bg-purple overflow-hidden rounded-3xl lg:rounded-[42px]`} data-aos="fade-up">
            <Image src="/images/montagem-planetas.webp" alt="Planetas" fill quality={100} className="absolute opacity-70 lg:opacity-100 inset-0 -z-10 object-cover" />
            <div className="container text-white inset-0 w-full h-full flex flex-col justify-center md:items-center lg:items-start" data-aos="fade-right" data-aos-delay="500">
              <h2 className="uppercase font-neulis-semi-bold-italic text-3xl md:text-5xl lg:text-6xl md:text-center lg:text-start md:max-w-[570px]">
                Conheça o universo Newe dedicado <br /> ao imobiliário
              </h2>
              <button title="clique aqui" className="swiper-button-next-parent cursor-pointer bg-purpleLight text-purpleDark font-neulis-semi-bold-italic uppercase mt-12 pb-2.5 pt-3 px-10 rounded-2xl w-fit hover:bg-purple hover:text-white !transition-all !duration-300">
                Clique aqui
              </button>
            </div>
          </section>
        </SwiperSlide>

        {/* Child Slider */}
        <SwiperSlide>
          <section className={`relative h-screen w-full bg-white overflow-hidden rounded-3xl lg:rounded-[42px]`} data-aos="fade-up">
            <Image src="/images/fundo-geral.webp" alt="Fundo" fill className="absolute inset-0 -z-10 object-cover opacity-90 lg:opacity-100" />
            <div className="text-white inset-0 w-full h-full">
              <div className="w-full h-full relative">
                <Swiper
                  className="w-full h-full cursor-grab active:cursor-grabbing"
                  nested={true}
                  spaceBetween={50}
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
                          <>
                            {/* Desktop */}
                            <div className="relative right-20 hidden lg:block">
                              <Image data-aos="fade-down" data-aos-delay="500" src={planet.image} alt={planet.alt} width={500} height={500} />

                              <div className="absolute flex items-center w-full h-full inset-0 !left-[40.5%] !top-[-1.45%]">
                                <svg className="!scale-[1.45]" xmlns="http://www.w3.org/2000/svg" id="Camada_2" data-name="Camada 2" viewBox="0 0 1057.77 484.81">
                                  <g id="Camada_1-2" data-name="Camada 1">
                                    <path fill="none" stroke="#fff" strokeWidth="3.84px" d="M1057.77,242.41H482.79C482.79,109.59,375.15,1.92,242.36,1.92S1.92,109.59,1.92,242.41s107.65,240.49,240.44,240.49"/>
                                  </g>
                                </svg>
                                <Image className="relative right-[-120px] " data-aos="fade-left" data-aos-delay="800" src={planet.detail} aria-hidden alt="Elemento visual" width={50} height={50} />
                              </div>
      
                              <p className="absolute top-[calc(50%+10px)] left-[90%] lg:text-2xl uppercase w-[350px] text-shadow font-neulis-regular">{planet.description}</p>
                            </div>

                            {/* Mobile */}
                            <div className="container lg:hidden gap-10 flex flex-col items-center">
                              <div className="relative">
                                <Image src={planet.image} alt={planet.alt} width={500} height={500} />
                                <div className="absolute bottom-0 left-0 right-0 mx-auto h-20 md:h-28 w-0.5 bg-white" />
                              </div>
                              
                              <Image className="" src={planet.detail} aria-hidden alt="Elemento visual" width={50} height={50} />
                              <p className="lg:text-2xl uppercase text-center max-w-[450px] text-shadow font-neulis-regular">{planet.description}</p>
                            </div>
                          </>
                        )}

                        {planet.alt !== "Sol" && (
                          <>
                            {/* Desktop */}
                            <div className="relative right-20 hidden lg:block">
                              <Image data-aos="fade-down" data-aos-delay="500" src={planet.image} alt={planet.alt} width={500} height={500} />

                              <div className="absolute top-1/2 left-[90%] flex items-center gap-3">
                                <div className="h-0.5 bg-white w-[450px]" />
                                <Image className="" data-aos="fade-left" data-aos-delay="800" src={planet.detail} aria-hidden alt="Elemento visual" width={70} height={70} />

                              </div>

                              <p className="absolute top-[calc(50%+50px)] left-[93%] lg:text-2xl uppercase w-[380px] font-neulis-regular text-shadow">{planet.description}</p>
                            </div>

                            {/* Mobile */}
                            <div className="container lg:hidden gap-10 flex flex-col items-center">
                              <div className="relative">
                                <Image src={planet.image} alt={planet.alt} width={500} height={500} />
                                <div className="absolute bottom-0 left-0 right-0 mx-auto h-16 md:h-20 w-0.5 bg-white" />
                              </div>
                              
                              <Image className="" src={planet.detail} aria-hidden alt="Elemento visual" width={50} height={50} />
                              <p className="lg:text-2xl uppercase text-center max-w-[450px] text-shadow font-neulis-regular">{planet.description}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="absolute w-full flex justify-between top-1/2 -translate-y-[50%] z-20">
                  <button className="swiper-button-prev-child relative cursor-pointer lg:text-3xl lg:left-12 left-3 rotate-180 disabled:opacity-0" title="Anterior">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px" height="36px">
                      <path fillRule="evenodd"  fill="rgb(175, 152, 191)"
                      d="M1.451,-0.008 C1.811,-0.008 2.171,0.126 2.451,0.397 L19.568,16.964 C19.848,17.235 20.006,17.607 20.006,17.996 C20.006,18.385 19.848,18.757 19.568,19.028 L2.451,35.595 C1.881,36.147 0.971,36.133 0.419,35.563 C-0.133,34.993 -0.119,34.084 0.451,33.532 L16.503,17.996 L0.451,2.459 C-0.119,1.908 -0.133,0.999 0.419,0.429 C0.701,0.139 1.076,-0.008 1.451,-0.008 Z"/>
                    </svg>
                  </button>
                  <button className="swiper-button-next-child relative cursor-pointer lg:text-3xl lg:right-12 right-3 disabled:opacity-0" title="Próximo">
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