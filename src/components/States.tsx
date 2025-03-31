import Image from "next/image";

export default function States({className}: Readonly<{className?: string}>) {
  return (
    <section className={`${className} relative pt-80 lg:pb-72 pb-20`}>
      <Image src={"/images/galaxia-cases.png"} alt="galaxia" width={897} height={668} className="absolute top-0 left-0 z-0" />
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-14 w-full">
          <div className="lg:w-3/5 relative">
            <Image src="/images/mapa-brasil-cinza.svg" alt="mapa" width={771} height={796} className="absolute top-[-380px] right-0 z-10" data-aos="fade-right" />
            <Image src="/images/mapa-completo.svg" alt="estados" width={771} height={796} className="absolute top-[-380px] right-0 z-20" data-aos="fade-zoom-in" data-aos-delay="1200" />
          </div>

          <div className="lg:w-2/5">
            <h2 className="text-purpleDark uppercase font-neulis-bold text-2xl lg:text-5xl">
              Estamos presentes <br />
              <span className="font-neulis-bold-italic"> em vários estados</span> <br />
              do Brasil
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}