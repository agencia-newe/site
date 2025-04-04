import Image from "next/image";

export default function States({className}: Readonly<{className?: string}>) {
  return (
    <section className={`${className} relative pt-80 lg:pb-72 pb-0`}>
      <Image src={"/images/galaxia-cases.png"} alt="galaxia" width={897} height={668} className="absolute top-0 left-0 max-w-2/3 md:max-w-3/5 lg:max-w-full z-0 lg:opacity-100" />
      <div className="container">
        <div className="flex flex-col md:flex-row gap-14 w-full">
          <div className="md:w-3/5 relative">
            <Image src="/images/mapa-brasil-cinza.svg" alt="mapa" width={771} height={796} className="absolute top-[-340px] lg:top-[-380px] right-0 z-10" data-aos="fade-right" />
            <Image src="/images/mapa-completo-certo.svg" alt="estados" width={771} height={796} className="font-neulis-bold absolute top-[-340px] lg:top-[-380px] right-0 z-20" data-aos="fade-zoom-in" data-aos-delay="1200" />
          </div>

          <div className="md:w-2/5 z-10">
            <h2 className="md:relative md:-top-40 lg:top-auto text-purpleDark uppercase font-neulis-bold text-2xl text-center md:text-start">
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