import Image from "next/image";

export default function Universe({className}: Readonly<{className?: string}>) {
  return (
    <section className={`${className} relative h-screen w-full py-32 bg-purple overflow-hidden rounded-t-[42px] rounded-b-[42px]`} data-aos="fade-up">
      <Image src="/images/montagem-planetas.webp" alt="Planetas" fill className="absolute inset-0 -z-10 object-cover" />
      <div className="container">
        ajklsdhkashd
      </div>
    </section>
  );
}