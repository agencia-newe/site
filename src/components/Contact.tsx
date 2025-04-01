'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Contact({className}: Readonly<{className?: string}>) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "38191b84-c461-4029-bebc-920c30e921f5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
        router.push("/obrigado");
    } else {
        setLoading(false);
        console.log(result);
        setError(true);
    }
  }

  return (
    <section className={`${className} relative py-32 bg-purple`}>
      <div className="container">
        <div className="text-white flex flex-col items-center gap-10 lg:gap-14 mb-10 lg:mb-20">
          <h2 className="uppercase font-neulis-bold text-3xl lg:text-6xl hashtag">
            Vamos tomar um café?
          </h2>

          <p className="uppercase font-neulis-bold-italic text-lg lg:text-3xl">Estamos ansiosos pelo seu contato.</p>
        </div>

        {error && 
          <p className="text-center">Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.</p>
        }
        {!error && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-5 max-w-[800px] mx-auto font-neulis-medium">
            <input type="hidden" name="subject" value="Novo lead recebido" />
            <input type="hidden" name="from_name" value="newe.com.br" />
            <input required type="text" name="nome" placeholder="Nome" className="bg-purpleLight rounded-full px-5 py-3 outline-primary placeholder:text-purpleDark" />
            <div className="flex w-full items-center gap-5">
              <input required type="email" name="email" placeholder="E-mail" className="w-full bg-purpleLight rounded-full px-5 py-3 outline-primary placeholder:text-purpleDark" />
              <input required type="tel" name="telefone" placeholder="Telefone" className="w-full bg-purpleLight rounded-full px-5 py-3 outline-primary placeholder:text-purpleDark" />
            </div>
            <textarea required name="mensagem" placeholder="Mensagem" rows={8} className="bg-purpleLight rounded-3xl px-5 py-3 resize-none outline-primary placeholder:text-purpleDark" />
            <button 
              disabled={loading} 
              type="submit" 
              className="bg-purpleLight rounded-full px-12 pt-3 pb-2.5 self-end cursor-pointer text-purpleDark hover:bg-purpleDark hover:text-white transition-all duration-300 outline-primary disabled:opacity-50 disabled:cursor-default disabled:pointer-events-none"
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
            <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />
          </form>
        )}
      </div>
    </section>
  )
}