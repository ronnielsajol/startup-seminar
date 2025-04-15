import Glow from "@/components/Glows";
import Hero from "@/components/Hero";
import { Marquee } from "@/components/magicui/marquee";
const Home = () => {
  return (
    <main
      className="relative flex min-h-screen flex-col overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 z-0 mt-4 -ml-72 flex h-full w-full flex-col font-extralight text-white/5">
        <p className="font-horizon-outlined text-center text-[240px] leading-72 font-light tracking-wide whitespace-nowrap">
          START-UP 2025
        </p>
        <p className="font-horizon-outlined text-center text-[240px] leading-72 font-light tracking-wide whitespace-nowrap">
          DESIGNING CONCEPTS
        </p>
        <p className="font-horizon-outlined text-center text-[240px] leading-72 font-light tracking-wide whitespace-nowrap">
          LAUNCHING REALITIES
        </p>
        <p className="font-horizon-outlined text-center text-[240px] leading-72 font-light tracking-wide whitespace-nowrap">
          LAUNCHING REALITIES
        </p>
      </div>
      <div className="absolute inset-0 max-h-screen">
        <Glow className="-top-12 -left-24" />
        <Glow className="-top-12 -right-20" />
        <Glow className="-bottom-12 -left-20" />
        <Glow className="-right-20 -bottom-12" />
        <Marquee className="font-horizon absolute inset-x-0 bottom-0 min-w-full rotate-[4deg] bg-white py-8 text-6xl font-black text-black uppercase">
          Designing Concepts, Launching Realities
        </Marquee>
        <Marquee className="font-horizon absolute inset-x-0 bottom-0 min-w-full -rotate-6 bg-white py-8 text-6xl font-black text-black uppercase">
          Designing Concepts, Launching Realities
        </Marquee>
      </div>
      <Hero />
    </main>
  );
};

export default Home;
