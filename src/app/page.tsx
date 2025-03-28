import About from "@/components/About";
import AosInit from "@/components/AosInit";
import Enthusiasts from "@/components/Enthusiasts";
import Header from "@/components/Header";
import Universe from "@/components/Universe";
import Video from "@/components/Video";

export default function Home() {
  return (
    <main>
      <AosInit />
      <Header className="z-50" />
      <div className="fixed top-0 w-full h-[93px] bg-purple z-40 rounded-b-4xl" />
      <Video className="z-40" />
      <Enthusiasts className="z-30" />
      <About />
      <Universe className="" />
    </main>
  );
}
