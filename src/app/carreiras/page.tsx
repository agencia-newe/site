'use client';

import Header from "@/components/Header";
import { menuCarreiras } from "@/helpers/Menu";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Carreiras() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cvFileName, setCvFileName] = useState<string | null>(null);
  const [portfolioFileName, setPortfolioFileName] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      const fileName = event.target.files[0].name;
      if (event.target.name === "curriculo") {
        setCvFileName(fileName);
      } else if (event.target.name === "portfolio") {
        setPortfolioFileName(fileName);
      }
    }
  }

  function handleClearFile(inputId: string) {
    const inputElement = document.getElementById(inputId) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = "";
      if (inputId === "curriculo") {
        setCvFileName(null);
      } else if (inputId === "portfolio") {
        setPortfolioFileName(null);
      }
    }
  }

  // async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   setLoading(true);
  //   event.preventDefault();
  
  //   if (!captchaToken) {
  //     setLoading(false);
  //     alert("Por favor, complete o captcha.");
  //     return;
  //   }
  
  //   const formData = new FormData(event.target as HTMLFormElement);
  //   formData.append("access_key", "2c70c258-19b5-4434-bdf0-4b2f71a58a10");
  //   formData.append("h-captcha-response", captchaToken);
  
  //   const object = Object.fromEntries(formData);
  //   const json = JSON.stringify(object);
  
  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: json
  //   });
  
  //   const result = await response.json();
  //   if (result.success) {
  //     console.log(result);
  //     router.push("/obrigado");
  //   } else {
  //     setLoading(false);
  //     console.log(result);
  //     setError(true);
  //   }
  // }

  // const onHCaptchaChange = (token: string) => {
  //   setCaptchaToken(token);
  // };

  return (
    <section className={`relative lg:py-32 pt-32 pb-20 bg-purple min-h-screen`}>
      <Header menu={menuCarreiras} className="z-40" />
      <div className="fixed top-0 w-full h-[93px] bg-purple z-30 rounded-b-4xl" />
      <Image src="/images/galaxa-contato.png" alt="galaxia" width={380} height={855} className="absolute bottom-0 max-w-1/3 lg:max-w-full left-0 z-0" data-aos="fade-right" />
      <Image src="/images/planeta-2.svg" alt="galaxia" width={300} height={300} className="absolute top-[50%] translate-y-[-50%] z-0 hidden lg:block" data-aos="fade-down" data-aos-delay="500" />
      <div className="container z-10 relative">
        <div className="text-white flex flex-col items-center ml-8 sm:ml-0 gap-10 lg:gap-14 mb-12 lg:mb-24">
          <h2 className="uppercase font-neulis-bold text-3xl lg:text-6xl hashtag">
            Faça parte do nosso time!
          </h2>

          <p className="uppercase font-neulis-bold-italic text-lg lg:text-3xl lg:text-center max-w-[1100px] mx-auto">Junte-se ao time de profissionais da maior referência em marketing imobiliário do país. Envie seu currículo e portfólio.</p>
        </div>

        {error && 
          <p className="text-center text-white uppercase font-neulis-bold-italic text-lg">Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.</p>
        }
        {!error && (
          // <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-5 max-w-[900px] mx-auto font-neulis-medium">
          //   <input type="hidden" name="subject" value="Novo currículo recebido" />
          //   <input type="hidden" name="from_name" value="newe.com.br" />
          //   <input required type="text" name="nome" placeholder="Nome" className="bg-purpleLight rounded-full px-5 py-3 outline-primary placeholder:text-purpleDark" />
          //   <div className="flex flex-col lg:flex-row w-full items-center gap-4">
          //     <input required type="email" name="email" placeholder="E-mail" className="w-full bg-purpleLight rounded-full px-5 py-3 outline-primary placeholder:text-purpleDark" />
          //     <input required type="tel" name="telefone" placeholder="Telefone" className="w-full bg-purpleLight rounded-full px-5 py-3 outline-primary placeholder:text-purpleDark" />
          //   </div>
          //   <input required type="text" name="vaga" placeholder="Vaga/Área" className="bg-purpleLight rounded-full px-5 py-3 outline-primary placeholder:text-purpleDark" />

          //   <input onChange={handleFileChange} id="curriculo" type="file" accept="application/pdf" name="curriculo" placeholder="Anexe aqui seu currículo" className="hidden" />
          //   <label htmlFor="curriculo" className="bg-purpleLight rounded-full px-5 py-3 outline-primary text-purpleDark placeholder:text-purpleDark cursor-pointer hover:text-white hover:bg-purpleDark transition-all duration-300">
          //     Anexe aqui seu currículo{cvFileName ? (': ' + cvFileName) : ''}
          //   </label>
          //   {cvFileName && (
          //       <button 
          //         type="button" 
          //         onClick={() => handleClearFile("curriculo")} 
          //         className="w-fit text-white cursor-pointer"
          //       >
          //         ❌ Limpar
          //       </button>
          //   )}

          //   <input onChange={handleFileChange} id="portfolio" type="file" accept="application/pdf" name="portfolio" placeholder="Anexe aqui seu portfólio" className="hidden" />
          //   <label htmlFor="portfolio" className="bg-purpleLight rounded-full px-5 py-3 outline-primary text-purpleDark placeholder:text-purpleDark cursor-pointer hover:text-white hover:bg-purpleDark transition-all duration-300">
          //     Anexe aqui seu portfólio{portfolioFileName ? (': ' + portfolioFileName) : ''}
          //   </label>
          //   {portfolioFileName && (
          //       <button 
          //         type="button" 
          //         onClick={() => handleClearFile("portfolio")} 
          //         className="w-fit text-white cursor-pointer"
          //       >
          //         ❌ Limpar
          //       </button>
          //   )}
            
          //   <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          //     <HCaptcha
          //       sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          //       reCaptchaCompat={false}
          //       onVerify={onHCaptchaChange}
          //     />

          //     <button 
          //       disabled={loading} 
          //       type="submit" 
          //       className="bg-purpleLight rounded-full px-12 pt-3 pb-2.5 self-end cursor-pointer text-purpleDark hover:bg-purpleDark hover:text-white transition-all duration-300 outline-primary disabled:opacity-50 disabled:cursor-default disabled:pointer-events-none"
          //     >
          //       {loading ? 'Enviando...' : 'Enviar'}
          //     </button>
          //   </div>
          //   <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />
          // </form>

          <form method="POST" action="https://formsubmit.co/contato@agencianewe.com.br" encType="multipart/form-data" className="flex flex-col gap-4 lg:gap-5 max-w-[900px] mx-auto font-neulis-medium">
            <input type="hidden" name="_next" value="https://agencianewe.com.br/obrigado"></input>
            <input type="hidden" name="_subject" value="Novo currículo recebido" />
            <input type="hidden" name="origem" value="agencianewe.com.br/carreiras" />
            <input required type="text" name="nome" placeholder="Nome" className="bg-purpleLight rounded-full px-5 py-3 outline-primary placeholder:text-purpleDark" />
            <div className="flex flex-col lg:flex-row w-full items-center gap-4">
              <input required type="email" name="email" placeholder="E-mail" className="w-full bg-purpleLight rounded-full px-5 py-3 outline-primary placeholder:text-purpleDark" />
              <input required type="tel" name="telefone" placeholder="Telefone" className="w-full bg-purpleLight rounded-full px-5 py-3 outline-primary placeholder:text-purpleDark" />
            </div>
            <input required type="text" name="vaga" placeholder="Vaga/Área" className="bg-purpleLight rounded-full px-5 py-3 outline-primary placeholder:text-purpleDark" />

            <input onChange={handleFileChange} id="curriculo" type="file" accept="application/pdf" name="curriculo" placeholder="Anexe aqui seu currículo" className="hidden" />
            <label htmlFor="curriculo" className="bg-purpleLight rounded-full px-5 py-3 outline-primary text-purpleDark placeholder:text-purpleDark cursor-pointer hover:text-white hover:bg-purpleDark transition-all duration-300">
              Anexe aqui seu currículo{cvFileName ? (': ' + cvFileName) : ''}
            </label>
            {cvFileName && (
                <button 
                  type="button" 
                  onClick={() => handleClearFile("curriculo")} 
                  className="w-fit text-white cursor-pointer"
                >
                  ❌ Limpar
                </button>
            )}

            <input onChange={handleFileChange} id="portfolio" type="file" accept="application/pdf" name="portfolio" placeholder="Anexe aqui seu portfólio" className="hidden" />
            <label htmlFor="portfolio" className="bg-purpleLight rounded-full px-5 py-3 outline-primary text-purpleDark placeholder:text-purpleDark cursor-pointer hover:text-white hover:bg-purpleDark transition-all duration-300">
              Anexe aqui seu portfólio{portfolioFileName ? (': ' + portfolioFileName) : ''}
            </label>
            {portfolioFileName && (
                <button 
                  type="button" 
                  onClick={() => handleClearFile("portfolio")} 
                  className="w-fit text-white cursor-pointer"
                >
                  ❌ Limpar
                </button>
            )}
            
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              {/* <HCaptcha
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                reCaptchaCompat={false}
                onVerify={onHCaptchaChange}
              /> */}

              <button 
                disabled={loading} 
                type="submit" 
                className="bg-purpleLight rounded-full px-12 pt-3 pb-2.5 self-end cursor-pointer text-purpleDark hover:bg-purpleDark hover:text-white transition-all duration-300 outline-primary disabled:opacity-50 disabled:cursor-default disabled:pointer-events-none"
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
            <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />
          </form>
        )}

        <footer className="flex flex-col-reverse gap-10 lg:flex-row lg:justify-between items-center max-w-[900px] mx-auto mt-20 lg:mt-24">
          <div className="flex items-center gap-2.5">
            <Link href="https://www.instagram.com/agencianewe/" target="_blank" className="hover:opacity-70 transition-all duration-300">
              <Image src="/images/instagram.svg" alt="instagram" width={40} height={40} />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-all duration-300">
              <Image src="/images/tiktok.svg" alt="tiktok" width={40} height={40} />
            </Link>
            <Link href="https://br.linkedin.com/company/agencianewe" target="_blank" className="hover:opacity-70 transition-all duration-300">
              <Image src="/images/linkedin.svg" alt="linkedin" width={40} height={40} />
            </Link>
          </div>

          <div className="text-white uppercase font-neulis-regular text-sm">
            <p>Rua Urussuí, 300 | 4º andar, CJ. 42</p>
            <p>Vila Nova Conceição, São Paulo - SP</p>
            <Link href="tel:+5511974474102" title="telefone" className="hover:underline">
              (11) 97447-4102
            </Link>
          </div>
        </footer>
      </div>
    </section>
  )
}