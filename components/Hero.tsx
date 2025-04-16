import { cn } from "@/lib/utils";
import React from "react";

const Hero = () => {
  return (
    <main
      id="hero"
      className={cn("z-10 mt-10", "laptop:mt-20", "desktop:mt-44")}
    >
      <div className={cn("max-xl:grid-rows-2", "grid xl:grid-cols-4")}>
        <div className={cn("xl:col-span-3")}>
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
          <p
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
          </p>
        </div>
        <div
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
            <p className="">Date: May 13-15, 2025</p>
            <p className="font-light">Venue: PUP-ITECH Building</p>
          </div>
          <div className="flex max-w-max flex-col gap-2.5">
            <button
              className={cn(
                "cursor-pointer px-8 py-2.5 text-base",
                "laptop:px-7 laptop:py-1.5 laptop:text-[0.875rem]",
                "desktop:px-8 desktop:py-2.5 desktop:text-[0.875rem]",
                "rounded-[4.25rem] border-2 border-white font-bold",
              )}
            >
              Secure Your Spot
            </button>
            <button
              className={cn(
                "cursor-pointer px-8 py-2.5 text-base",
                "laptop:px-7 laptop:py-1.5 laptop:text-[0.875rem]",
                "desktop:px-8 desktop:py-2.5 desktop:text-[0.875rem]",
                "rounded-[4.25rem] bg-white font-bold text-black",
              )}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "grid-rows-4 max-xl:gap-y-4 max-xl:pb-32",
          "laptop:mt-20",
          "desktop:mt-40",
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
              "font-bold",
            )}
          >
            00:00:00:00
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
        </div>
      </div>
    </main>
  );
};

export default Hero;
