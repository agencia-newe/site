'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(true);
  useEffect(() => {
    const cookie_accepted = localStorage.getItem('cookie_accepted');
    if (cookie_accepted === null) {
      setAccepted(false);
    } else {
      setAccepted(true);
    }
  }, []);
  const handleClick = () => {
    localStorage.setItem('cookie_accepted', 'true');
    setAccepted(true);
  };
  if (accepted) {
    return null;
  }
  return (
    <div className="fixed bottom-4 right-5 z-[9999] w-[90%] rounded-3xl bg-purple p-5 text-white shadow-lg lg:bottom-5 md:w-1/3">
      <div className="flex flex-col items-center justify-between gap-3">
        <div className="text-sm">
          <p className="font-neulis-bold-italic text-lg">Política de Privacidade</p>
          <p className='font-neulis-medium'>
            Ao acessar este site, você concorda com o uso de cookies para melhorar a experiência do site e fornecer conteúdo personalizado. Saiba mais em nossa {' '}
            <Link title='Política de Privacidade' href="/politica-de-privacidade" className='underline'>
              Política de Privacidade
            </Link>
          </p>
        </div>
        <button
          title={"Aceitar cookies"}
          className="group flex cursor-pointer items-center gap-3 p-3 text-nowrap rounded-2xl bg-purpleLight text-purpleDark hover:bg-purpleDark hover:text-white transition-all duration-300"
          onClick={handleClick}
        >
          <svg className='w-6 h-6 group-hover:rotate-180 transition-all duration-300' xmlns="http://www.w3.org/2000/svg" id="Camada_2" data-name="Camada 2" viewBox="0 0 384 383.33">
            <defs>
            </defs>
            <g id="Camada_1-2" data-name="Camada 1">
              <path className='fill-purpleDark group-hover:fill-white transition-all duration-300' d="M203.32,0l24.6,3.51c8.8,2.05,12.46,12.93,6.47,19.65-2.98,3.34-7.97,4.41-11.19,7.54-11.52,11.2-8.7,29.66,4.93,37.73,5.08,3.01,10.84,2.86,12.85,9.63,1.66,5.59-.53,9.22-.9,14.4-2.09,28.68,22.64,53.33,51.33,51.25,5.18-.38,8.82-2.56,14.42-.9,6.78,2,6.63,7.75,9.64,12.83,8.09,13.6,26.57,16.42,37.79,4.92,6.26-6.42,6.13-16.99,19.52-13.49,10.99,2.88,8.97,24.79,11.22,33.33v23.2c-1.16,4.31-1.01,9.24-1.61,13.74-13.82,104.29-111.55,178.19-216.08,164.3C81.81,370.42,12.8,301.84,1.75,217.34c-.59-4.5-.46-9.43-1.61-13.74.34-7.92-.46-16.06,0-23.95C5.71,84.76,85.06,5.55,180.08,0h23.24ZM198.07,23.96C112.88,20.69,37.3,83.97,25.76,168.17c-15.18,110.71,78.97,204.59,189.82,189.52,84.27-11.45,147.69-87.1,144.42-172.05-24.03,12.26-51,5.06-65.22-17.6-45.32,2.63-81.72-33.66-79.09-78.97-19.57-12.64-28.21-33.57-21.16-56.3.94-3.03,2.73-5.76,3.53-8.82Z"/>
              <ellipse className='fill-purpleDark group-hover:fill-white transition-all duration-300' cx="144.06" cy="95.79" rx="24" ry="23.96"/>
              <ellipse className='fill-purpleDark group-hover:fill-white transition-all duration-300' cx="96.08" cy="191.6" rx="24" ry="23.96"/>
              <ellipse className='fill-purpleDark group-hover:fill-white transition-all duration-300' cx="216.04" cy="287.42" rx="24" ry="23.96"/>
              <ellipse className='fill-purpleDark group-hover:fill-white transition-all duration-300' cx="204.07" cy="203.6" rx="12.06" ry="12.04"/>
              <ellipse className='fill-purpleDark group-hover:fill-white transition-all duration-300' cx="300.03" cy="251.51" rx="12.06" ry="12.04"/>
              <ellipse className='fill-purpleDark group-hover:fill-white transition-all duration-300' cx="132.1" cy="275.46" rx="12.06" ry="12.04"/>
            </g>
          </svg>
          <span className='font-neulis-semi-bold-italic'>Aceitar cookies</span>
        </button>
      </div>
    </div>
  );
}
