'use client';

import Image from 'next/image';
import { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function CaseModal({ media }: { media: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? media.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === media.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Dialog>
      <DialogTrigger title="Expandir" className="z-10 cursor-pointer absolute h-full w-full">
        <div className="w-full h-full"></div>
      </DialogTrigger>
      <DialogContent className="flex aspect-video items-center justify-center">
        <DialogDescription className="hidden">Image Gallery</DialogDescription>
        <DialogTitle className="hidden">Image Gallery</DialogTitle>

        {media.length > 1 && (
          <button onClick={handlePrevious} title='Anterior' className="scale-50 2xl:scale-80 group swiper-button-prev-case absolute top-1/2 -translate-y-1/2 left-[-52px] lg:-left-20 cursor-pointer lg:text-3xl py-[15px] pl-[22px] pr-[24px] rounded-full bg-purpleLight hover:bg-purpleDark transition-all duration-300 disabled:opacity-0">
            <svg className="fill-purpleDark group-hover:!fill-purpleLight rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              width="20px" height="36px">
              <path fillRule="evenodd"
              d="M1.451,-0.008 C1.811,-0.008 2.171,0.126 2.451,0.397 L19.568,16.964 C19.848,17.235 20.006,17.607 20.006,17.996 C20.006,18.385 19.848,18.757 19.568,19.028 L2.451,35.595 C1.881,36.147 0.971,36.133 0.419,35.563 C-0.133,34.993 -0.119,34.084 0.451,33.532 L16.503,17.996 L0.451,2.459 C-0.119,1.908 -0.133,0.999 0.419,0.429 C0.701,0.139 1.076,-0.008 1.451,-0.008 Z"/>
            </svg>
          </button>
        )}

        {media[currentIndex].src.includes(".mp4") ? (
          <video
            src={media[currentIndex].src}
            // poster={""}
            className="object-cover w-full h-full"
            // autoPlay
            controls
            playsInline
            disablePictureInPicture
            disableRemotePlayback
            x-webkit-airplay="deny"
            muted
            loop
          />
        ) : (
          <Image
            key={media[currentIndex].alt}
            src={media[currentIndex].src}
            alt={media[currentIndex].alt}
            fill
            className="dynamic__rounded object-cover"
          />
        )}

        {media.length > 1 && (
          <button onClick={handleNext} title='Próximo' className="scale-50 2xl:scale-80 group absolute top-1/2 -translate-y-1/2 right-[-52px] lg:-right-20 cursor-pointer lg:text-3xl py-[15px] pl-[24px] pr-[22px] rounded-full bg-purpleLight hover:bg-purpleDark transition-all duration-300 disabled:opacity-0">
            <svg className="fill-purpleDark group-hover:!fill-purpleLight"
              xmlns="http://www.w3.org/2000/svg"
              width="20px" height="36px">
              <path fillRule="evenodd"
              d="M1.451,-0.008 C1.811,-0.008 2.171,0.126 2.451,0.397 L19.568,16.964 C19.848,17.235 20.006,17.607 20.006,17.996 C20.006,18.385 19.848,18.757 19.568,19.028 L2.451,35.595 C1.881,36.147 0.971,36.133 0.419,35.563 C-0.133,34.993 -0.119,34.084 0.451,33.532 L16.503,17.996 L0.451,2.459 C-0.119,1.908 -0.133,0.999 0.419,0.429 C0.701,0.139 1.076,-0.008 1.451,-0.008 Z"/>
            </svg>
          </button>
        )}
      </DialogContent>
    </Dialog>
  );
}
