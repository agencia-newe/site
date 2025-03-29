import Image from "next/image";

export default function BusinessModel({className}: {className?: string}) {
  return (
    <section className={`${className} relative pt-96 pb-32`}>
      <Image src="/images/planeta-carrossel3.png" alt="planeta" width={270} height={270} className="absolute -top-5 left-[27vw] z-10" data-aos="fade-down" />
      <Image src="/images/planeta-2.svg" alt="planeta" width={317} height={317} className="absolute top-20 left-[31vw] z-20" data-aos="fade-down" data-aos-delay="200" />
      <Image src="/images/planeta-carrossel6.png" alt="planeta" width={270} height={270} className="absolute top-0 left-[45vw] z-10" data-aos="fade-down" data-aos-delay="400" />
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-28">
          <h2 className="text-2xl lg:text-5xl font-neulis-bold uppercase" data-aos="fade-up">
            Nosso modelo 
            <br />
            <span className="font-neulis-bold-italic">de negócio</span>
          </h2>

          <ul className="text-lg lg:text-2xl font-neulis-bold-italic">
            <li data-aos="fade-right" data-aos-delay="200"># Campanha 360 graus</li>
            <li data-aos="fade-right" data-aos-delay="400"># Branding</li>
            <li data-aos="fade-right" data-aos-delay="600"># On & off</li>
            <li data-aos="fade-right" data-aos-delay="800"># Ativações e eventos</li>
            <li data-aos="fade-right" data-aos-delay="1000"># Consultoria de MKT</li>
            <li data-aos="fade-right" data-aos-delay="1200"># Coordernação de MKT</li>	
          </ul>
        </div>
      </div>
    </section>   
  );
}