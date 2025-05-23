"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Countdown from "./Countdown";
import { Marquee } from "./magicui/marquee";
import { BoxReveal } from "./magicui/box-reveal";
import { motion } from "motion/react";
import Link from "next/link";

const Hero = () => {
  return (
    <main
      id="hero"
      className={cn("z-10 mt-10", "laptop:mt-20", "desktop:mt-44")}
    >
      <div className={cn("max-xl:grid-rows-2", "grid xl:grid-cols-4")}>
        <div className={cn("xl:col-span-3")}>
          <BoxReveal boxColor={"#1e73e8"} duration={0.5}>
            <p
              className={cn(
                "max-xl:text-[0.875rem]",
                "laptop:text-xl",
                "desktop:text-2xl",
                "font-light",
              )}
            >
              Start-Up 2025:
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#8e44ad"} duration={0.5}>
            <h1
              className={cn(
                "text-[2.75rem] leading-[2.75rem] tracking-wider",
                "laptop:text-[3.375rem] laptop:leading-[3.375rem]",
                "desktop:text-[5.375rem] desktop:leading-[5.375rem]",
                "mt-6 mb-4 font-black uppercase",
              )}
            >
              Designing Concepts
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#00c853"} duration={0.5}>
            <h1
              className={cn(
                "text-[2.75rem] leading-[2.75rem] tracking-wider",
                "laptop:text-[3.375rem] laptop:leading-[3.375rem]",
                "desktop:text-[5.375rem] desktop:leading-[5.375rem]",
                "font-black uppercase",
              )}
            >
              Launching Realities
            </h1>
          </BoxReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className={cn(
              "max-xl:mt-6 max-xl:text-[0.875rem]",
              "laptop:text-md",
              "desktop:text-lg",
              "uppercase italic",
            )}
          >
            <strong className="">
              A Tech Start-Up Seminar and Workshop Event
            </strong>
            <span className="font-extralight">
              {" "}
              <br className="xl:hidden" />
              at polytechnic University of the Philippines
            </span>{" "}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={cn(
            "gap-4",
            "flex flex-col place-items-end justify-center xl:mt-8 xl:gap-6.25",
            "mt-2 max-xl:mt-10 max-xl:place-content-baseline max-xl:items-start",
          )}
        >
          <div
            className={cn(
              "max-xl:gap-4 max-xl:text-start max-xl:text-[0.875rem]",
              "laptop:text-md",
              "desktop:text-lg",
              "flex flex-col text-end",
            )}
          >
            <BoxReveal boxColor={"#00c853"} duration={0.5}>
              <p className="">Date: May 27-29, 2025</p>
            </BoxReveal>
            <BoxReveal boxColor={"#8e44ad"} duration={0.5}>
              <p className="font-light">Venue: PUP-CEA Building</p>
            </BoxReveal>
          </div>
          <div className="flex max-w-max flex-col gap-2.5">
            <button
              className={cn(
                "cursor-pointer px-8 py-2.5 text-base transition duration-300 ease-in-out hover:bg-white hover:text-black",
                "laptop:px-7 laptop:py-1.5 laptop:text-[0.875rem]",
                "desktop:px-8 desktop:py-2.5 desktop:text-[0.875rem]",
                "rounded-[4.25rem] border-2 border-white font-bold",
              )}
            >
              Secure Your Spot
            </button>
            <button
              className={cn(
                "cursor-pointer px-8 py-2.5 text-base transition duration-300 ease-in-out hover:bg-black hover:text-white",
                "laptop:px-7 laptop:py-1.5 laptop:text-[0.875rem]",
                "desktop:px-8 desktop:py-2.5 desktop:text-[0.875rem]",
                "rounded-[4.25rem] bg-white font-bold text-black",
              )}
            >
              <Link
                href={"https://www.facebook.com/pup.startup2025"}
                target="_blank"
              >
                Learn More
              </Link>
            </button>
          </div>
        </motion.div>
      </div>
      <div
        className={cn(
          "grid-rows-4 max-xl:relative max-xl:gap-y-4 max-xl:pb-20",
          "laptop:mt-12",
          "desktop:mt-20",
          "grid xl:grid-cols-4",
        )}
      >
        <div className="flex flex-col">
          <p
            className={cn(
              "max-xl:text-base",
              "laptop:text-md",
              "desktop:text-lg",
              "font-light",
            )}
          >
            Countdown Till Event:
          </p>
          <h2
            className={cn(
              "max-xl:text-[1.55rem]",
              "laptop:text-xl",
              "desktop:text-3xl",
              "font-bold tracking-widest",
            )}
          >
            <BoxReveal boxColor={"#ffc107"} duration={0.5}>
              <Countdown />
            </BoxReveal>
          </h2>
        </div>
        <div className="flex flex-col">
          <p
            className={cn(
              "max-xl:text-base",
              "laptop:text-md",
              "desktop:text-lg",
              "font-light",
            )}
          >
            Total Users Registered:
          </p>
          <BoxReveal boxColor={"#ff6d00"} duration={0.5}>
            <h2
              className={cn(
                "max-xl:text-[1.55rem]",
                "laptop:text-xl",
                "desktop:text-3xl",
                "font-bold",
              )}
            >
              69 Aspiring Founders
            </h2>
          </BoxReveal>
        </div>
        <div className="flex flex-col">
          <p
            className={cn(
              "max-xl:text-base",
              "laptop:text-md",
              "desktop:text-lg",
              "font-light",
            )}
          >
            Total Organizations On-Board
          </p>
          <BoxReveal boxColor={"#ff3b3b"} duration={0.5}>
            <h2
              className={cn(
                "max-xl:text-[1.55rem]",
                "laptop:text-xl",
                "desktop:text-3xl",
                "font-bold",
              )}
            >
              15 Companies On-Board
            </h2>
          </BoxReveal>
        </div>
        <div className="flex flex-col xl:items-end">
          <p
            className={cn(
              "max-xl:text-base",
              "laptop:text-md",
              "desktop:text-lg",
              "font-light",
            )}
          >
            Available On
          </p>
          <BoxReveal boxColor={"#1e73e8"} duration={0.5}>
            <h2
              className={cn(
                "max-xl:text-[1.55rem]",
                "laptop:text-xl",
                "desktop:text-3xl",
                "font-bold",
              )}
            >
              Facebook Live
            </h2>
          </BoxReveal>
        </div>
        <Marquee className="font-horizon absolute inset-x-0 -bottom-3 z-20 -ml-7.5 w-[calc(100%+5rem)] min-w-full bg-white font-black text-black uppercase xl:hidden">
          Designing Concepts, Launching Realities
        </Marquee>
      </div>
    </main>
  );
};

export default Hero;
