import About from "@/components/About";
import AosInit from "@/components/AosInit";
import BusinessModel from "@/components/BusinessModel";
// import Cases from "@/components/Cases";
import Contact from "@/components/Contact";
import Enthusiasts from "@/components/Enthusiasts";
// import Experience from "@/components/Experience";
import Header from "@/components/Header";
import States from "@/components/States";
// import Universe from "@/components/Universe";
import Video from "@/components/Video";

import dynamic from "next/dynamic";

const Universe = dynamic(() => import("@/components/Universe"));
const Experience = dynamic(() => import("@/components/Experience"));
const Cases = dynamic(() => import("@/components/Cases"));

export default function Home() {
  return (
    <main>
      <AosInit />
      <Header className="z-40" />
      <div className="fixed top-0 w-full h-[93px] bg-purple z-30 rounded-b-4xl" />
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
