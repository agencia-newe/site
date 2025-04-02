import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Obrigado() {
  return (
    <section className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <Image src="/images/galaxia-carreiras.png" alt="galaxia" aria-hidden width={634} height={1157} className="absolute top-1/2 translate-y-[-50%] right-0 z-0" />
      <div className="bg-purple p-7 lg:p-10 rounded-lg text-white text-center font-neulis-semi-bold z-10 shadow-2xl">
        <h1 className="text-2xl">Obrigado</h1>
        <p className="text-lg py-5">Mensagem enviada com sucesso!</p>
        <Link className="bg-purpleLight text-purpleDark p-3 inline-block rounded-2xl hover:bg-purpleDark hover:text-white transition-all duration-300" title="Voltar" href="/">Voltar</Link>
      </div>
    </section>
  );
}