import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";
import { BoxReveal } from "./magicui/box-reveal";
import Link from "next/link";

const Sponsors = () => {
  return (
    <main
      className={cn(
        "px-8 py-20",
        "laptop:px-56",
        "min-h-win relative z-10 w-full bg-gradient-to-b from-[#261b1b] to-[#281a1a] to-5%",
      )}
      id="partnership"
    >
      <div className="laptop:grid-cols-4 grid max-xl:gap-4">
        <div className="laptop:col-span-2 desktop:col-span-2 flex flex-col gap-2">
          <BoxReveal duration={0.5} boxColor="#ff6d00">
            <p className="laptop:text-base max-xl:text-xl">
              Sponsors and Partners
            </p>
          </BoxReveal>
          <BoxReveal duration={0.5} boxColor="#ff3b3b">
            <h1 className="laptop:text-4xl desktop:text-6xl text-[1.875rem] font-black">
              Get Involved
            </h1>
          </BoxReveal>
          <BoxReveal duration={0.5} boxColor="#00c853">
            <p className="laptop:text-[14px] desktop:text-base max-xl:text-[0.975rem]">
              This is more than just a seminar; it&#39;s a launchpad for your
              vision. We are calling on the innovators, the dreamers, and the
              builders to converge for an unparalleled experience of learning
              and networking. Whether you&#39;re looking to secure funding, find
              a co-founder, or gain insights from industry pioneers, this is
              where your journey scales up. Don&#39;t just watch the future
              unfold—be at the center of it.
            </p>
          </BoxReveal>
        </div>
        <div className="laptop:col-span-2 desktop:col-span-2 flex items-center justify-end gap-2 max-xl:flex-col max-xl:items-start">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="cursor-pointer rounded-[68px] border-2 border-white px-9 py-2.5 font-bold transition duration-300 ease-in-out hover:bg-white hover:text-black max-xl:w-full max-xl:max-w-3/4 max-xl:text-xs"
          >
            Watch Video
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="cursor-pointer rounded-[68px] bg-white px-9 py-2.5 font-bold text-black transition duration-300 ease-in-out hover:bg-[#bfbfbf] max-xl:w-full max-xl:max-w-3/4 max-xl:text-xs"
          >
            <Link href={"#schedule"}>Get Your Ticket</Link>
          </motion.button>
        </div>
      </div>
    </main>
  );
};

export default Sponsors;
