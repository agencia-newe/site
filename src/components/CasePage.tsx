'use client';

import AosInit from "@/components/AosInit";
import Header from "@/components/Header";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { menuCarreiras } from "@/helpers/Menu";
import CaseModal from "./CaseModal";
import { cn } from "@/lib/utils";

export default function CasePage({data}: {data: any}) {
  return (
    <section className="relative">
      <AosInit />
      <Image src={"/images/galaxia-modelo-denegocio.png"} alt="galaxia" width={800} height={319} className="absolute top-[90px] left-0 right-0 px-10 md:px-24 lg:px-0 mx-auto z-0" data-aos="fade-down" />
      <Image src={"/images/planetas-novo.png"} alt="planetas" width={420} height={420} className="absolute top-[113px] left-0 right-0 mx-auto px-24 lg:px-0 z-10" data-aos="fade-down" data-aos-delay="300" />
      <Header menu={menuCarreiras} className="z-40" />
      <div className="fixed top-0 w-full h-[93px] bg-purple z-30 rounded-b-4xl" />

      <h1 className="sr-only">{data.product}</h1>

      <div className="container pt-72 lg:pt-80 pb-20 2xl:!px-20">
        <div className="font-neulis-regular text-purpleDark lg:text-xl uppercase text-center lg:text-start" data-aos="fade-right" data-aos-delay="1000">
          <p>
            Praça: <span className="font-neulis-bold-italic lg:text-[22px]">{data.plaza} </span> 
          </p>
          <p>
            Cliente: <span className="font-neulis-bold-italic lg:text-[22px]">{data.client} </span>
          </p>
          <p>
            Produto: <span className="font-neulis-bold-italic lg:text-[22px]">{data.product}</span>
          </p>
        </div>

        <section className="lg:mt-32 mt-12">
          <div className="relative" data-aos="fade-up">
            <Swiper
              className="aspect-video bg-purpleLight"
              grabCursor={false}
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next-case",
                prevEl: ".swiper-button-prev-case",
              }}
            >
              {data.carousel.map((item: any) => (
                <SwiperSlide className="relative group w-full aspect-video" key={item.src}>
                  {data.carousel.length > 1 && <CaseModal media={data.carousel} />}
                  {item.src.includes("/videos") ? (
                    <>
                      <CaseModal media={data.carousel} />
                      <video
                        src={item.src}
                        // poster={""}
                        className="object-cover w-full h-full group-hover:scale-105 transition-all duration-300"
                        autoPlay
                        // controls
                        playsInline
                        disablePictureInPicture
                        disableRemotePlayback
                        x-webkit-airplay="deny"
                        muted
                        loop
                      />
                    </>
                  ) : (
                    <Image src={item.src} alt={item.alt} fill quality={100} className={cn("object-cover aspect-video", data.carousel.length > 1 && "group-hover:scale-105 transition-all duration-300")} />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute w-full flex justify-between top-1/2 -translate-y-[50%] z-20">
              <button className="scale-50 2xl:scale-80 group swiper-button-prev-case relative cursor-pointer lg:text-3xl right-8 py-[15px] pl-[22px] pr-[24px] rounded-full bg-purpleDark hover:bg-purpleLight transition-all duration-300 disabled:opacity-0">
                <svg className="fill-purpleLight group-hover:!fill-purpleDark rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px" height="36px">
                  <path fillRule="evenodd"
                  d="M1.451,-0.008 C1.811,-0.008 2.171,0.126 2.451,0.397 L19.568,16.964 C19.848,17.235 20.006,17.607 20.006,17.996 C20.006,18.385 19.848,18.757 19.568,19.028 L2.451,35.595 C1.881,36.147 0.971,36.133 0.419,35.563 C-0.133,34.993 -0.119,34.084 0.451,33.532 L16.503,17.996 L0.451,2.459 C-0.119,1.908 -0.133,0.999 0.419,0.429 C0.701,0.139 1.076,-0.008 1.451,-0.008 Z"/>
                </svg>
              </button>
              <button className="scale-50 2xl:scale-80 group swiper-button-next-case relative cursor-pointer lg:text-3xl left-8 py-[15px] pl-[24px] pr-[22px] rounded-full bg-purpleDark hover:bg-purpleLight transition-all duration-300 disabled:opacity-0">
                <svg className="fill-purpleLight group-hover:!fill-purpleDark"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px" height="36px">
                  <path fillRule="evenodd"
                  d="M1.451,-0.008 C1.811,-0.008 2.171,0.126 2.451,0.397 L19.568,16.964 C19.848,17.235 20.006,17.607 20.006,17.996 C20.006,18.385 19.848,18.757 19.568,19.028 L2.451,35.595 C1.881,36.147 0.971,36.133 0.419,35.563 C-0.133,34.993 -0.119,34.084 0.451,33.532 L16.503,17.996 L0.451,2.459 C-0.119,1.908 -0.133,0.999 0.419,0.429 C0.701,0.139 1.076,-0.008 1.451,-0.008 Z"/>
                </svg>
              </button>
            </div>
          </div>

          {data.grid && (
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-1">
              {data.grid.map((item: any) => (
                <div key={item.src} className="first:md:col-span-2 relative w-full group overflow-hidden aspect-video bg-purpleLight">
                  {item.src.includes(".mp4") ? (
                    <>
                      <CaseModal media={data.grid} />
                      <video
                        src={item.src}
                        // poster={""}
                        className="object-cover w-full h-full group-hover:scale-105 transition-all duration-300"
                        autoPlay
                        // controls
                        playsInline
                        disablePictureInPicture
                        disableRemotePlayback
                        x-webkit-airplay="deny"
                        muted
                        loop
                      />
                    </>
                  ) : (
                    <>
                      <CaseModal media={data.grid} />
                      <Image src={item.src} alt={item.alt} fill quality={100} className="group-hover:scale-110 transition-all duration-300 object-cover" />
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </section>
  );
}