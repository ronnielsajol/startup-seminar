import Glow from "@/components/Glows";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
const Home = () => {
  return (
    <main
      className="laptop:px-56 laptop:py-20 flex min-h-screen flex-col overflow-hidden bg-[#1c1e1e] px-8 py-2 max-xl:relative"
      id="home"
    >
      <Navbar />
      <div className="absolute inset-0 mt-4 -ml-72 flex h-full w-full flex-col font-extralight text-white/5">
        <p className="font-horizon-outlined laptop:text-[10.5rem] desktop:text-[15rem] laptop:leading-[10.5rem] desktop:leading-[15rem] text-center font-light tracking-wide whitespace-nowrap">
          START-UP 2025
        </p>
        <p className="font-horizon-outlined laptop:text-[10.5rem] desktop:text-[15rem] laptop:leading-[10.5rem] desktop:leading-[15rem] text-center font-light tracking-wide whitespace-nowrap">
          DESIGNING CONCEPTS
        </p>
        <p className="font-horizon-outlined laptop:text-[10.5rem] desktop:text-[15rem] laptop:leading-[10.5rem] desktop:leading-[15rem] text-center font-light tracking-wide whitespace-nowrap">
          LAUNCHING REALITIES
        </p>
        <p className="font-horizon-outlined laptop:text-[10.5rem] desktop:text-[15rem] laptop:leading-[10.5rem] desktop:leading-[15rem] text-center font-light tracking-wide whitespace-nowrap">
          LAUNCHING REALITIES
        </p>
      </div>
      <div className="absolute inset-0 max-h-screen">
        <Glow
          className={cn(
            "hidden",
            "not-laptop:-top-12 not-laptop:-left-24 laptop:-top-10 laptop:-left-22 xl:block",
          )}
        />
        <Glow
          className={cn(
            "not-laptop:-top-12 not-laptop:-right-20 laptop:-top-10 laptop:-right-18",
          )}
        />
        <Glow
          className={cn(
            "not-laptop:-bottom-12 not-laptop:-left-20 laptop:-bottom-10 laptop:-left-18",
          )}
        />
        <Glow
          className={cn(
            "hidden",
            "not-laptop:-right-20 not-laptop:-bottom-12 laptop:-bottom-10 laptop:-right-18 xl:block",
          )}
        />
        <Marquee className="font-horizon laptop:text-5xl desktop:text-6xl laptop:py-7 desktop:py-8 absolute inset-x-0 bottom-0 -ml-2 hidden w-[calc(100%+2.5rem)] min-w-full rotate-[4deg] bg-white font-black text-black uppercase xl:flex">
          Designing Concepts, Launching Realities
        </Marquee>
        <Marquee className="font-horizon laptop:text-5xl desktop:text-6xl laptop:py-7 desktop:py-8 absolute inset-x-0 bottom-0 -ml-4 hidden w-[calc(100%+2.5rem)] min-w-full -rotate-6 bg-white font-black text-black uppercase xl:flex">
          Designing Concepts, Launching Realities
        </Marquee>
      </div>
      <Hero />
    </main>
  );
};

export default Home;
