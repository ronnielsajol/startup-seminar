import { cn } from "@/lib/utils";
import React from "react";
import BackgroundOverlay from "./BackgroundOverlay";
// import ExpandingCards from "./ExpandingCards";
import { ExpandingCards } from "./expanding-cards";

const cards = [
  {
    id: "1",
    title: "Resource Speaker",
    name: "Juan Dela Cruz",
    backgroundUrl: "https://picsum.photos/1000/1000?random=16",
  },
  {
    id: "2",
    title: "Resource Speaker",
    name: "Juan Dela Cruz",
    backgroundUrl: "https://picsum.photos/1000/1000?random=17",
  },
  {
    id: "3",
    title: "Resource Speaker",
    name: "Juan Dela Cruz",
    backgroundUrl: "https://picsum.photos/1000/1000?random=18",
  },
  {
    id: "4",
    title: "Resource Speaker",
    name: "Juan Dela Cruz",
    backgroundUrl: "https://picsum.photos/1000/1000?random=19",
  },
  {
    id: "5",
    title: "Resource Speaker",
    name: "Juan Dela Cruz",
    backgroundUrl: "https://picsum.photos/1000/1000?random=120",
  },
  {
    id: "6",
    title: "Resource Speaker",
    name: "Juan Dela Cruz",
    backgroundUrl: "https://picsum.photos/1000/1000?random=10",
  },
  {
    id: "7",
    title: "Resource Speaker",
    name: "Juan Dela Cruz",
    backgroundUrl: "https://picsum.photos/1000/1000?random=100",
  },
];

const WhatToExpect = () => {
  return (
    <main
      className={cn(
        "laptop:px-56 py-10",
        "relative min-h-screen w-full bg-gradient-to-b from-[#271d1d] to-[#281d1d] to-5%",
      )}
    >
      <div className="relative z-10 flex flex-col items-center gap-16">
        <div className="flex flex-col gap-2.5 text-center">
          <h4 className="desktop:text-base laptop:text-[0.85rem]">
            Seminars and Workshop
          </h4>
          <h1 className="desktop:text-6xl laptop:text-4xl font-black">
            What to expect?
          </h1>
        </div>

        <div className="desktop:h-96 laptop:h-72 grid h-[200px] w-full grid-cols-6 gap-6 overflow-x-auto px-10 max-xl:flex max-xl:min-h-[250px] max-xl:overflow-x-scroll">
          <div className="h-full w-full rounded-[19px] bg-white p-4 text-black max-xl:min-w-[300px]">
            <p>Session 1</p>
            <p className="font-bold">The Startup Journey</p>
          </div>
          <div className="h-full w-full rounded-[19px] bg-white p-4 text-black max-xl:min-w-[300px]">
            <p>Session 2</p>
            <p className="font-bold">Core Technologies for Startups</p>
          </div>
          <div className="h-full w-full rounded-[19px] bg-white p-4 text-black max-xl:min-w-[300px]">
            <p>Session 3</p>
            <p className="font-bold">Cloud and Connectivity</p>
          </div>
          <div className="h-full w-full rounded-[19px] bg-white p-4 text-black max-xl:min-w-[300px]">
            <p>Session 4</p>
            <p className="font-bold">Expansive Reach in the Digital Age</p>
          </div>
          <div className="h-full w-full rounded-[19px] bg-white p-4 text-black max-xl:min-w-[300px]">
            <p>Session 5</p>
            <p className="font-bold">Responsible Tech Development</p>
          </div>
          <div className="h-full w-full rounded-[19px] bg-white p-4 text-black max-xl:min-w-[300px]">
            <p>Session 6</p>
            <p className="font-bold">Pitching Business Readiness</p>
          </div>
        </div>

        <div className="flex flex-col items-center max-xl:gap-5">
          <h1 className="font-horizon desktop:text-[8rem] laptop:text-[6rem] -ml-5 tracking-wide whitespace-nowrap uppercase">
            Topics and Speakers
          </h1>
          <p className="max-w-2/3 text-center text-base max-xl:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat mi mauris, vitae pretium lacus congue et. Donec pretium
            feugiat mauris et eleifend. Nam tincidunt odio nec ornare porttitor.
            Vivamus ac tempor neque. Cras a consectetur ipsum. Nunc vitae
            faucibus mauris, vel ornare purus. Nunc iaculis turpis ac facilisis
            sodales. Ut auctor non urna nec fringilla. Aenean cursus lorem arcu,
            ac finibus nunc maximus eget. Vestibulum nec euismod augue.
          </p>
        </div>
        {/* <ExpandingCards /> */}
        <div className="w-full overflow-x-auto max-xl:overflow-x-scroll">
          <ExpandingCards items={cards} />
        </div>
      </div>
      <BackgroundOverlay />
    </main>
  );
};

export default WhatToExpect;
