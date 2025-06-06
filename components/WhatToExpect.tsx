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
    title: "Co-founder",
    name: "Sofia Nicole Sy",
    company: "SOFI AI Tech Solution",
    backgroundUrl: "/images/SESSION1/Sy.JPG",
    bionote:
      "Sofia Nicole Sy is the co-founder of SOFI AI, a company that develops AI-driven solutions to help brands scale their customer engagement. Homeschooled for 17 years, she graduated Cum Laude with a Silver Thesis Award from De La Salle University, fostering a deep love for unconventional learning. She is committed to working with excellence, integrity, and dedication, viewing her work as a service to the Lord.",
    style: "",
    unoptimized: true,
  },
  {
    id: "2",
    title: "Product Owner",
    name: "Grahssel Dungca",
    company: "Crawford & Company",
    backgroundUrl: "/images/SESSION2/Dungca.JPG",
    bionote:
      "Grahssel Dungca is a seasoned technology professional with a background in Electronics Engineering who has transitioned into the software domain. He has held various roles, including Quality Assurance Engineer, Business Analyst, and Scrum Master, and is currently a Product Owner, giving him a comprehensive understanding of the software development lifecycle. Beyond his technical work, Grahssel is passionate about community building and actively collaborates with organizations like DevCon Philippines and No-Code Philippines to empower developers.",
    style: "bg-top",
  },
  {
    id: "3",
    title: "Junior Cloud Consultant",
    name: "Ace Batacandulo",
    company: "Tutorials Dojo",
    backgroundUrl: "/images/SESSION3/Batacandulo.jpg",
    bionote:
      "Ace Batacandulo is a Junior Cloud Consultant at Tutorials Dojo, an AWS Certified professional, and an AWS Community Builder in the Serverless Category. A Magna Cum Laude graduate and decorated student leader, he has held significant roles in various tech communities, including the AWS User Group Philippines and Google Developers Group Cloud Manila. Ace's numerous academic and leadership awards reflect his dedication to technology, leadership, and community development.",
    style: "desktop:bg-center",
  },
  {
    id: "4",
    title: "Frontend Web Developer",
    name: "Percival Ian Muico",
    company: "Three Division",
    backgroundUrl: "/images/SESSION4/Muico.jpeg",
    bionote:
      "Percival Ian Muico is a web designer and developer from Davao with experience creating websites for global startups and organizations. He is currently a Frontend Web Developer at Three Division, a 3D animation and concept design studio that has worked with major clients like Disney and Warner Bros. He specializes in using Webflow and NextJS to build websites that are both aesthetically pleasing and highly functional.",
  },
  {
    id: "5",
    title: "Packaged App Development Specialist",
    name: "Rachelle Perez",
    company: "Accenture",
    backgroundUrl: "/images/SESSION5/Rachelle.jpeg",
    bionote:
      "Rachelle Perez is a seasoned Data Analyst with a strong foundation in Business Analytics and Computer Science, currently serving as a Team Lead in Packaged Application Development at Accenture. Her expertise in data visualization, statistical analysis, and data deployment allows her to translate complex data into actionable insights. Rachelle is also a dedicated contributor to the tech community, holding the position of Vice President for Growth at DEVCON PH and frequently speaking on topics such as data analytics, design thinking, and artificial intelligence.",
    style: "desktop:bg-center",
  },
  {
    id: "6",
    title: "Chief Executive Officer",
    name: "Lorenzo Joaquin Romillo",
    company: "Quintessence",
    backgroundUrl: "/images/SESSION6/Quincy.JPG",
    bionote: "",
  },
];

const cards2 = [
  {
    id: "1",
    title: "Product Owner",
    name: "Grahssel Dungca",
    company: "Crawford & Company",
    backgroundUrl: "/images/SESSION2/Dungca.JPG",
    bionote: "",
    style: "",
  },
  {
    id: "2",
    title: "Chief Executive Officer",
    name: "David Pedeglorio",
    company: "FWD Peers",
    backgroundUrl: "/images/WORKSHOP2/david.png",
    bionote: "",
    style: "",
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
              Get ready to explore the future with a lineup of sessions made for
              students who are curious, ambitious, and ready to make their mark.
              From breakthrough ideas in tech and design to real stories of
              building startups and careers, each topic is designed to spark
              inspiration and action. With speakers who are creators, founders,
              and changemakers, you’ll get insights that go beyond the
              classroom—and maybe even a few new paths to follow.
            </p>
          </BoxReveal>
        </div>
        {/* <ExpandingCards /> */}
        <div className="flex w-full flex-col gap-16 overflow-x-auto max-xl:overflow-x-scroll">
          <ExpandingCards items={cards} />
        </div>
        <div
          className="flex flex-col items-center max-xl:gap-5"
          id="topicsAndSpeakers"
        >
          <h1 className="font-horizon desktop:text-[8rem] laptop:text-[6rem] -ml-5 text-[20px] tracking-wide whitespace-nowrap uppercase">
            <Marquee>Workshop Speakers</Marquee>
          </h1>
        </div>
        {/* <ExpandingCards /> */}
        <div className="flex w-full flex-col gap-16 overflow-x-auto max-xl:overflow-x-scroll">
          <ExpandingCards items={cards2} workshop />
        </div>
      </div>
      <BackgroundOverlay />
    </main>
  );
};

export default WhatToExpect;
