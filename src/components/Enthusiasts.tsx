export default function Enthusiasts({className}: Readonly<{className?: string}>) {
  return (
    <section className={`${className} relative py-32 bg-purple rounded-t-[42px] -mt-14`} data-aos="fade-up">
      <div className="container">
        <div className="flex items-center justify-between text-white">
          <p className="font-neulis-bold uppercase lg:text-[45px] lg:leading-[1.2] lg:w-1/2">
            <span className="font-neulis-bold-italic">Entusiastas</span> do mercado imobiliário, nutrindo uma paixão que vem de berço.
          </p>

          <p className="font-neulis-regular lg:text-xl lg:w-1/2 lg:max-w-[550px]">
            Donas de um DNA que pulsa forte nas veias, no coração e mentes visionárias, nós enxergamos com os olhos das construtoras e incorporadoras, falamos a língua dos corretores de imóveis, ouvindo e sentindo o desejo do consumidor.
          </p>
        </div>
      </div>
    </section>
  );
}