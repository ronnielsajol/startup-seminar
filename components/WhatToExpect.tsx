import { cn } from "@/lib/utils";
import React from "react";
import BackgroundOverlay from "./BackgroundOverlay";
// import ExpandingCards from "./ExpandingCards";
import { ExpandingCards } from "./expanding-cards";
import { Marquee } from "./magicui/marquee";
import { SessionCardGrid } from "./SessionCardGrid";
import { motion } from "motion/react";
import { BoxReveal } from "./magicui/box-reveal";

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

const sessions = [
  {
    id: "1",
    title: "Session 1",
    subtitle: "The Startup Journey",
    backgroundImage: "/images/1_1.png",
    filterColor: "#1e73e8",
  },
  {
    id: "2",
    title: "Session 2",
    subtitle: "Core Technologies for Startups",
    backgroundImage: "/images/1_2.png",
    filterColor: "#8e44ad",
  },
  {
    id: "3",
    title: "Session 3",
    subtitle: "Cloud and Connectivity",
    backgroundImage: "/images/2_1.png",
    filterColor: "#00c853",
  },
  {
    id: "4",
    title: "Session 4",
    subtitle: "Expansive Reach in the Digital Age",
    backgroundImage: "/images/2_2.png",
    filterColor: "#ffc107",
  },
  {
    id: "5",
    title: "Session 5",
    subtitle: "Responsible Tech Development",
    backgroundImage: "/images/3_1.png",
    filterColor: "#ff6d00",
  },
  {
    id: "6",
    title: "Session 6",
    subtitle: "Pitching Business Readiness",
    backgroundImage: "/images/3_2.png",
    filterColor: "#ff3b3b",
  },
];

const WhatToExpect = () => {
  return (
    <main
      className={cn(
        "laptop:px-56 py-10",
        "relative min-h-screen w-full bg-gradient-to-b from-[#271d1d] to-[#281d1d] to-5%",
      )}
      id="whatToExpect"
    >
      <div className="relative z-10 flex flex-col items-center gap-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
          className="flex flex-col gap-2.5 text-center"
        >
          <h4 className="desktop:text-base laptop:text-[0.85rem]">
            Seminars and Workshop
          </h4>
          <h1 className="desktop:text-6xl laptop:text-4xl text-3xl font-black">
            What to expect?
          </h1>
        </motion.div>
        <SessionCardGrid sessions={sessions} />

        <div
          className="flex flex-col items-center max-xl:gap-5"
          id="topicsAndSpeakers"
        >
          <h1 className="font-horizon desktop:text-[8rem] laptop:text-[6rem] -ml-5 text-[20px] tracking-wide whitespace-nowrap uppercase">
            <Marquee>Topics and Speakers</Marquee>
          </h1>
          <BoxReveal boxColor={"#00c853"} duration={0.5}>
            <p className="laptop:max-w-[800px] desktop:max-w-[900px] max-w-[300px] text-center text-base max-xl:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              consequat mi mauris, vitae pretium lacus congue et. Donec pretium
              feugiat mauris et eleifend. Nam tincidunt odio nec ornare
              porttitor. Vivamus ac tempor neque. Cras a consectetur ipsum. Nunc
              vitae faucibus mauris, vel ornare purus. Nunc iaculis turpis ac
              facilisis sodales. Ut auctor non urna nec fringilla. Aenean cursus
              lorem arcu, ac finibus nunc maximus eget. Vestibulum nec euismod
              augue.
            </p>
          </BoxReveal>
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
