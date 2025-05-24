import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";
import { BoxReveal } from "./magicui/box-reveal";
import Float from "@/fancy/components/blocks/float";
import Image from "next/image";

const Introduction = () => {
  return (
    <main
      className={cn(
        "px-8 py-20",
        "laptop:px-56 laptop:py-24",
        "min-h-win relative z-10 w-full bg-gradient-to-b from-[#1c1e1e] to-[#271d1d] to-5%",
      )}
    >
      <div className={cn("max-xl:grid-rows-2", "laptop:grid-cols-2 grid")}>
        <div className={cn("flex flex-col gap-4", "max-xl:order-2")}>
          <div className="flex gap-2 max-xl:items-end">
            <div className="flex items-center justify-center text-6xl">
              <h1>🚀</h1>
            </div>
            <div className="flex flex-col justify-start">
              <BoxReveal boxColor={"#1e73e8"} duration={0.5}>
                <p className="text-base">Introduction</p>
              </BoxReveal>
              <BoxReveal boxColor={"#8e44ad"} duration={0.5}>
                <p
                  className={cn(
                    "desktop:text-6xl font-black",
                    "laptop:text-4xl",
                  )}
                >
                  Why Start-Up?
                </p>
              </BoxReveal>
            </div>
          </div>
          <BoxReveal boxColor="#ff3b3b" duration={0.5}>
            <p className="text-base">
              Every groundbreaking idea starts with a single question: Why not
              start today? At our Start-Up Seminar, we delve into the core
              reasons behind launching your own venture. Whether it&#39;s the
              pursuit of innovation, independence, or impact, we’ll help you
              understand what drives successful founders to take the leap.
            </p>
          </BoxReveal>
          <BoxReveal boxColor="#ff6d00" duration={0.5}>
            <div className="text-base">
              Join us as we explore the fundamentals of start-up
              thinking—embracing challenges, validating ideas, and crafting
              solutions that matter. Discover how today’s start-up landscape
              empowers aspiring entrepreneurs with more tools, support, and
              opportunities than ever before.
            </div>
          </BoxReveal>
          <BoxReveal boxColor="#ff6d00" duration={0.5}>
            <div className="text-base">
              Ready to ignite your journey? <br />
              <strong>Watch the video</strong> or{" "}
              <strong> get your ticket</strong> and take the first step toward
              your vision.
            </div>
          </BoxReveal>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="laptop:mt-5 flex gap-2 max-xl:flex-col"
          >
            <button
              className={cn(
                "max-w-max rounded-[68px] bg-gray-50 px-9 py-2.5 text-xs font-bold text-black",
                "cursor-pointer transition duration-300 ease-in-out hover:bg-[#bfbfbf] max-xl:w-full max-xl:max-w-3/4",
              )}
            >
              Get Your Ticket
            </button>
          </motion.div>
        </div>
        <div className="place-content-center place-items-center max-xl:order-1">
          <Float speed={0.5}>
            <Image
              alt="main poster"
              src={"/images/main_poster.png"}
              width={1000}
              height={1000}
              className="h-auto max-h-96 w-full"
            />
          </Float>
        </div>
      </div>
    </main>
  );
};

export default Introduction;
