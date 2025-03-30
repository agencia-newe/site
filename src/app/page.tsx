import About from "@/components/About";
import AosInit from "@/components/AosInit";
import BusinessModel from "@/components/BusinessModel";
import Enthusiasts from "@/components/Enthusiasts";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Universe from "@/components/Universe";
import Video from "@/components/Video";

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
    </main>
  );
}
