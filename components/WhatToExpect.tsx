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
    backgroundUrl: "/images/SESSION1/Sy.jpg",
    bionote:
      "Sophia Sy is the co-founder of SOFI AI, building AI-driven solutions that help brands effortlessly scale their customer engagement. Homeschooled for 17 years, she developed a deep love for unconventional learning, which carried through to graduating Cum Laude with a Silver Thesis Award from De La Salle University.\n\nShe believes in working with excellence, integrity, and dedication—always as if for the Lord.",
    style: "",
  },
  {
    id: "2",
    title: "Product Owner",
    name: "Grahssel Dungca",
    company: "Crawford & Company",
    backgroundUrl: "/images/SESSION2/Dungca.JPG",
    bionote:
      "Grahssel Dungca is a seasoned technology professional with a strong foundation in Electronics Engineering. After graduating with a BS in Electronics and Communications Engineering, he began their career in the semiconductor industry as a Quality Assurance Engineer.\n\nDriven by a passion for software development, Grahssel transitioned into the software domain, taking on roles such as Quality Assurance Engineer, Business Analyst, Scrum Master, and ultimately, Product Owner. This diverse experience has equipped him with a deep understanding of the software development lifecycle and a keen eye for detail.\n\nBeyond technical expertise, Grahssel is dedicated to fostering a vibrant tech community. Starting as an active participant, he now plays a pivotal role in building grassroots communities, collaborating with organizations like DevCon Philippines and No-Code Philippines to empower developers and promote knowledge sharing.",
    style: "bg-top",
  },
  {
    id: "3",
    title: "Junior Cloud Consultant",
    name: "Ace Batacandulo",
    company: "Tutorials Dojo",
    backgroundUrl: "/images/SESSION3/Batacandulo.jpg",
    bionote:
      "Ace is a Junior Cloud Consultant at Tutorials Dojo, AWS Certified, and one of the AWS Community Builders in the Serverless Category. He serves as an AWS User Group Meetup Lead Philippines, Co-Lead of Kubernetes User Group PH, and Google Developers Group Cloud Manila Content Committee. He graduated Magna Cum Laude, earning Dean’s List honors from 2020 to 2024 and receiving multiple College Honors. He was also a City of General Trias Scholar and demonstrated leadership in various student organizations, including serving as President of the University Student Government at PCU Dasmariñas (A.Y. 2023–2024) and Chief Relations Officer of the AWS Cloud Club.\n\nBeyond academics, Ace held prominent roles such as President of the Computer Society and actively contributed to student initiatives like Keep the Change: Youth Policy Lab and the National Rizal Youth Leadership Institute.\n\nHe was recognized for outstanding leadership, receiving awards such as Most Outstanding Student Leader in the Academic Category and served as a guest speaker at multiple events. With a passion for technology, leadership, and community development, Ace remained dedicated to making an impact both academically and in the broader community.",
    style: "desktop:bg-center",
  },
  {
    id: "4",
    title: "Frontend Web Developer",
    name: "Percival Ian Muico",
    company: "Three Division",
    backgroundUrl: "/images/SESSION4/Muico.jpeg",
    bionote:
      "A web designer and developer from Davao with experience working on websites for startups and organizations around the world. He currently works with Three Division, a 3D animation and concept design studio trusted by major names like Disney and Warner Bros. He specializes in tools like Webflow and NextJS, and focuses on creating websites that are both visually appealing and functional.",
  },
  {
    id: "5",
    title: "Packaged App Development Specialist",
    name: "Rachelle Perez",
    company: "Accenture",
    backgroundUrl: "/images/SESSION5/Rachelle.jpeg",
    bionote:
      "Rachelle Perez is a seasoned Data Analyst with a robust foundation in Business Analytics and Computer Science. She began her professional journey at Accenture Inc., where she advanced from an Analyst to Team Lead in Packaged Application Development. Her career is defined by a deep commitment to data-driven decision-making, with expertise in data visualization, statistical analysis, and data deployment. This breadth of experience allows her to transform complex data into clear, actionable insights.\n\nBeyond her technical experience, Rachelle is also passionate about cultivating the dynamic tech community. From her early involvement as a member of DEVCON PH, she has grown into a leadership role as Vice President for Growth, helping expand the organization’s reach and impact. She is also a sought-after resource speaker, frequently delivering talks on data analytics, design thinking, and artificial intelligence, where she shares her expertise and inspires others to thrive in the ever-evolving world of technology.",
    style: "desktop:bg-center",
  },
  {
    id: "6",
    title: "Resource Speaker",
    name: "Quincy ?",
    company: "",
    backgroundUrl: "/images/SESSION6/Quincy.JPG",
    bionote: "",
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
        <div className="w-full overflow-x-auto max-xl:overflow-x-scroll">
          <ExpandingCards items={cards} />
        </div>
      </div>
      <BackgroundOverlay />
    </main>
  );
};

export default WhatToExpect;
