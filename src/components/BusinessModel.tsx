import Image from "next/image";

export default function BusinessModel({className}: {className?: string}) {
  return (
    <section className={`${className} relative pt-[500px] pb-32`}>
      <Image src={"/images/galaxia-modelo-denegocio.png"} alt="galaxia" width={1096} height={319} className="absolute top-0 lg:left-0 left-[-300px] right-0 mx-auto z-0" data-aos="fade-down" />
      <Image src={"/images/planetas-novo.png"} alt="planetas" width={511} height={511} className="absolute top-20 left-0 lg:left-[28vw] mx-auto z-10" data-aos="fade-down" data-aos-delay="300" />
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-28 lg:px-48">
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