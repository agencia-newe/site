import { casesHomeFive, casesHomeFour, casesHomeOne, casesHomeThree, casesHomeTwo } from "@/helpers/CasesHome";
import Image from "next/image";
import Link from "next/link";
import BlockLogos from "./BlockLogos";

export default function Cases({className}: Readonly<{className?: string}>) {
  return (
    <section className={`${className} relative lg:py-32 py-20`} id="cases">
      <div className="container text-purpleDark">
        <div className="flex flex-col items-center gap-10 lg:gap-16">
          <h2 className="uppercase font-neulis-bold text-3xl lg:text-6xl hashtag">
            Cases
          </h2>
          <p className="uppercase text-center font-neulis-bold-italic text-lg lg:text-3xl">Uma história feita de cases é mais emocionante</p>
        </div>

        <div className="mt-12 lg:mt-24 grid grid-cols-1 gap-40 lg:grid-cols-3 lg:gap-10">
          {casesHomeOne.map((rowOne: any, index: number) => (
            <Link key={rowOne.key} href={rowOne.href} title={rowOne.title} className="group lg:odd:h-[480px] 2xl:odd:h-[560px] lg:even:h-[260px] 2xl:even:h-[330px] h-[400px] w-full" data-aos="fade-down" 
            data-aos-delay={index % 2 === 1 ? 300 : 600}>
              <div className="relative h-full w-auto rounded-3xl overflow-hidden">
                <Image
                  src={rowOne.image}
                  alt={rowOne.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-all duration-300" 
                />
              </div>

              <div className="uppercase px-2 mt-7">
                <p className="text-xl lg:text-2xl font-neulis-bold-italic mb-2">{rowOne.title}</p>
                <p className="font-neulis-medium text-sm">{rowOne.client}</p>
              </div>
            
              <div className="mt-3 bg-purpleLight h-px w-full" />
            </Link>
          ))}
        </div>

        <div className="mt-40 lg:-mt-12 grid grid-cols-1 gap-40 lg:grid-cols-3 lg:gap-10 lg:items-end">
          {casesHomeTwo.map((rowTwo: any, index: number) => (
            <Link key={rowTwo.key} href={rowTwo.href} title={rowTwo.title} className="group lg:even:h-[480px] 2xl:even:h-[560px] lg:odd:h-[260px] 2xl:odd:h-[330px] h-[400px] w-full" data-aos="fade-down" 
            data-aos-delay={index % 2 === 1 ? 300 : 600}>
              <div className="relative h-full w-auto rounded-3xl overflow-hidden">
                <Image
                  src={rowTwo.image}
                  alt={rowTwo.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-all duration-300"
                />
              </div>

              <div className="uppercase px-2 mt-7">
                <p className="text-xl lg:text-2xl font-neulis-bold-italic mb-2">{rowTwo.title}</p>
                <p className="font-neulis-medium text-sm">{rowTwo.client}</p>
              </div>
            
              <div className="mt-3 bg-purpleLight h-px w-full" />
            </Link>
          ))}
        </div>

        <div className="mt-40 grid grid-cols-1 gap-40 lg:grid-cols-3 lg:gap-10">
          {casesHomeThree.map((rowThree: any, index: number) => (
            <Link key={rowThree.key} href={rowThree.href} title={rowThree.title} className="group lg:odd:h-[480px] 2xl:odd:h-[560px] lg:even:h-[260px] 2xl:even:h-[330px] h-[400px] w-full" data-aos="fade-down" 
            data-aos-delay={index % 2 === 1 ? 300 : 600}>
              <div className="relative h-full w-auto rounded-3xl overflow-hidden">
                <Image
                  src={rowThree.image}
                  alt={rowThree.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-all duration-300" 
                />
              </div>

              <div className="uppercase px-2 mt-7">
                <p className="text-xl lg:text-2xl font-neulis-bold-italic mb-2">{rowThree.title}</p>
                <p className="font-neulis-medium text-sm">{rowThree.client}</p>
              </div>
            
              <div className="mt-3 bg-purpleLight h-px w-full" />
            </Link>
          ))}
        </div>

        <div className="mt-40 lg:-mt-12 grid grid-cols-1 gap-40 lg:grid-cols-3 lg:gap-10 lg:items-end">
          {casesHomeFour.map((rowFour: any, index: number) => (
            <Link key={rowFour.key} href={rowFour.href} title={rowFour.title} className="group lg:even:h-[480px] 2xl:even:h-[560px] lg:odd:h-[260px] 2xl:odd:h-[330px] h-[400px] w-full" data-aos="fade-down" 
            data-aos-delay={index % 2 === 1 ? 300 : 600}>
              <div className="relative h-full w-auto rounded-3xl overflow-hidden">
                <Image
                  src={rowFour.image}
                  alt={rowFour.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-all duration-300"
                />
              </div>

              <div className="uppercase px-2 mt-7">
                <p className="text-xl lg:text-2xl font-neulis-bold-italic mb-2">{rowFour.title}</p>
                <p className="font-neulis-medium text-sm">{rowFour.client}</p>
              </div>
            
              <div className="mt-3 bg-purpleLight h-px w-full" />
            </Link>
          ))}
        </div>

        <div className="mt-40 grid grid-cols-1 gap-40 lg:grid-cols-3 lg:gap-10 lg:mb-60 mb-44">
          {casesHomeFive.map((rowFive: any, index: number) => (
            <Link key={rowFive.key} href={rowFive.href} title={rowFive.title} className="group lg:odd:h-[480px] 2xl:odd:h-[560px] lg:even:h-[260px] 2xl:even:h-[330px] h-[400px] w-full" data-aos="fade-down" 
            data-aos-delay={index % 2 === 1 ? 300 : 600}>
              <div className="relative h-full w-auto rounded-3xl overflow-hidden">
                <Image
                  src={rowFive.image}
                  alt={rowFive.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-all duration-300" 
                />
              </div>

              <div className="uppercase px-2 mt-7">
                <p className="text-xl lg:text-2xl font-neulis-bold-italic mb-2">{rowFive.title}</p>
                <p className="font-neulis-medium text-sm">{rowFive.client}</p>
              </div>
            
              <div className="mt-3 bg-purpleLight h-px w-full" />
            </Link>
          ))}
        </div>

        <BlockLogos />
      </div>
    </section>
  );
}