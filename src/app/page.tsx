import Video from "@/components/Video";
import Header from "@/components/Header";
import { menuHome } from "@/helpers/Menu";
import AosInit from "@/components/AosInit";
// import About from "@/components/About";
// import BusinessModel from "@/components/BusinessModel";
// import Cases from "@/components/Cases";
// import Contact from "@/components/Contact";
// import Enthusiasts from "@/components/Enthusiasts";
// import Experience from "@/components/Experience";
// import States from "@/components/States";
// import Universe from "@/components/Universe";

import dynamic from "next/dynamic";
const CookieBanner = dynamic(() => import("@/components/CookieBanner"));
const Enthusiasts = dynamic(() => import("@/components/Enthusiasts"));
const About = dynamic(() => import("@/components/About"));
const Universe = dynamic(() => import("@/components/Universe"));
const BusinessModel = dynamic(() => import("@/components/BusinessModel"));
const Experience = dynamic(() => import("@/components/Experience"));
const States = dynamic(() => import("@/components/States"));
const Cases = dynamic(() => import("@/components/Cases"));
const Contact = dynamic(() => import("@/components/Contact"));


export default function Home() {
  return (
    <main>
      <CookieBanner />
      <AosInit />
      <Header menu={menuHome} className="z-40" />
      <div className="fixed top-0 w-full lg:h-[93px] h-20 bg-purple z-30 rounded-b-4xl" />
      <Video className="z-30" />
      <Enthusiasts className="z-30" />
      <About />
      <Universe />
      <BusinessModel />
      <Experience />
      <States />
      <Cases />
      <Contact />
    </main>
  );
}
