'use client';

import { menu } from "@/helpers/Menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header({className}: Readonly<{className?: string}>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${className} fixed w-full top-0`}>
      <div className="container">
        <div className="w-full lg:pt-5 pt-3 px-5 lg:px-0 flex justify-between items-center">
          <Link href={"/"} title="Home">
            <Image src={"/images/logo-branco.svg"} alt="Logo Newe" priority width={80} height={53} />
          </Link>

          <nav className="text-white lg:flex items-center gap-8 uppercase font-neulis-regular hidden">
            {menu.map((item) => (
              <Link key={item.title} href={item.href} title={item.title} className="link link-underline link-underline-black">
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile menu */}
          <button
            type="button"
            onClick={toggleMenu}
            className={`z-[100] flex items-center justify-center outline-none transition-all duration-300 lg:hidden`}
            title="Open menu"
          >
            <div className="flex w-9 flex-col items-center">
              <div
                className={`relative mt-1.5 h-[3px] w-9 bg-white ${isOpen ? 'top-[9px] rotate-45 transition-all duration-300' : 'top-0 rotate-0 transition-all duration-300'}`}
              />
              <div
                className={`mt-1.5 h-[3px] w-9 bg-white ${isOpen ? '-rotate-45 transition-all duration-300' : 'rotate-0 transition-all duration-300'}`}
              />
              <div
                className={`relative mt-1.5 h-[3px] w-9 bg-white ${isOpen ? 'top-[-9px] -rotate-45 transition-all duration-300' : 'top-0 rotate-0 transition-all duration-300'}`}
              />
            </div>
          </button>

          <div 
            className={`fixed flex flex-col items-end text-lg p-7 top-0 right-0 w-[200px] bg-purple z-[99] transform transition-transform duration-300 rounded-l-2xl ${isOpen ? "translate-x-[0]" : "translate-x-full"}`}
          >
            <ul className="flex flex-col gap-6 uppercase font-neulis-semi-bold-italic text-base text-white mt-10 p-3">
              {menu.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} title={item.title} className="" onClick={toggleMenu}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}