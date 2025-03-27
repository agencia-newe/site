import { menu } from "@/helpers/Menu";
import Image from "next/image";
import Link from "next/link";

export default function Header({className}: Readonly<{className?: string}>) {
  return (
    <header className={`${className} fixed w-full top-0`}>
      <div className="container">
        <div className="w-full pt-5 flex justify-between items-center">
          <Link href={"/"} title="Home">
            <Image src={"/images/logo-branco.svg"} alt="Logo Newe" width={80} height={53} />
          </Link>

          <nav className="text-white flex items-center gap-8 font-neulis-regular">
            {menu.map((item) => (
              <Link key={item.title} href={item.href} title={item.title} className="link link-underline link-underline-black">
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}