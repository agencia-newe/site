import Image from "next/image";

export default function About({className}: {className?: string}) {
  return (
    <section className={`${className} relative lg:py-32 pt-32 pb-20`} id="sobre">
      <Image src="/images/galaxia-1.png" alt="galaxia" width={1268} height={531} className="absolute top-0 lg:left-0 -z-10" />
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start justify-around gap-20">
          <div className="flex flex-col gap-5 md:items-center lg:items-start lg:gap-12 lg:max-w-[590px]">
            <div className="relative">
              <Image src="/images/thaisa.webp" alt="Luisa Eugenio" width={442} height={472} className="rounded-[180px] max-h-[472px] object-cover object-top mb-6" data-aos="fade-down" data-aos-delay="300" />
              <Image 
                src="/images/planeta-thaisa.png" 
                alt="Planeta" 
                width={201} 
                height={200} 
                className="absolute max-w-[130px] lg:max-w-full top-[-60px] -left-2.5 lg:bottom-[-20px] lg:left-[-120px]" 
                data-aos="fade-right"
                data-aos-delay="300"
              />
            </div>
            <div className="uppercase mt-5 lg:mt-0">
              <p className="text-xl lg:text-4xl font-neulis-semi-bold-italic">Thaisa Eugenio</p>
              <p className="text-lg lg:text-3xl font-neulis-light-italic">Diretora executiva</p>
            </div>

            <p className="lg:text-xl font-neulis-regular">Analítica e estratégica, possui uma bagagem com quase 20 anos de vivências no universo imobiliário, dominando o segmento de forma única e garantindo assertividade no planejamento estratégico das campanhas, em especial, no resultado final.</p>
          </div>

          <div className="flex flex-col gap-5 md:items-center lg:items-start lg:gap-12 lg:max-w-[590px] relative">
            <div className="relative">
              <Image src="/images/luisa.webp" alt="Luisa Eugenio" width={442} height={472} className="rounded-[180px] max-h-[472px] object-cover object-top lg:mb-6" data-aos="fade-down" data-aos-delay="800" />
              <Image
                src="/images/planeta-2.svg"
                alt="Planeta" 
                width={317} 
                height={317} 
                className="absolute max-w-[200px] lg:max-w-full top-[-60px] left-[-50px] lg:top-[-95px] lg:left-[-140px]" 
                data-aos="fade-down" 
                data-aos-delay="1000"
              />
            </div>
            <div className="uppercase mt-5 lg:mt-0">
              <p className="text-xl lg:text-4xl font-neulis-semi-bold-italic">Luisa Eugenio</p>
              <p className="text-lg lg:text-3xl font-neulis-light-italic">Head de criação e planejamento</p>
            </div>

            <p className="lg:text-xl font-neulis-regular">Curiosa e antenada, está comprometida com novos conhecimentos. Sua paixão pela arte, arquitetura e design enaltecem sua personalidade impressa em seus projetos, assim como a sua vivência digital, o diferencial valioso que nutre o pilar de inovação para o mercado imobiliário atual.</p>
          </div>
        </div>
      </div>
    </section>
  );
}