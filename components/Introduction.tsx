import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

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
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={cn("flex flex-col gap-4", "max-xl:order-2")}
        >
          <motion.div variants={child} className="flex gap-2 max-xl:items-end">
            <div className="flex items-center justify-center text-6xl">
              <h1>🚀</h1>
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-base">Introduction</p>
              <p
                className={cn("desktop:text-6xl font-black", "laptop:text-4xl")}
              >
                Why Start-Up?
              </p>
            </div>
          </motion.div>
          <motion.p variants={child} className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat mi mauris, vitae pretium lacus congue et. Donec pretium
            feugiat mauris et eleifend. Nam tincidunt odio nec ornare porttitor.
            Vivamus ac tempor neque. Cras a consectetur ipsum. Nunc vitae{" "}
          </motion.p>
          <motion.div variants={child} className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat mi mauris, vitae pretium lacus congue et. Donec pretium
            feugiat mauris et eleifend. Nam tincidunt odio nec ornare porttitor.
            Vivamus ac tempor neque. Cras a consectetur ipsum. Nunc vitae
            faucibus mauris, vel ornare purus. Nunc iaculis turpis ac facilisis
            sodales. Ut auctor non urna nec fringilla. Aenean cursus lorem arcu,
            ac finibus nunc maximus eget.
          </motion.div>
          <motion.div variants={child} className="flex gap-2 max-xl:flex-col">
            <button
              className={cn(
                "max-w-max rounded-[68px] border-2 border-white px-9 py-2.5 text-xs font-bold text-white",
                "cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-black max-xl:w-full max-xl:max-w-3/4",
              )}
            >
              Watch Video
            </button>
            <button
              className={cn(
                "max-w-max rounded-[68px] bg-white px-9 py-2.5 text-xs font-bold text-black",
                "cursor-pointer transition duration-300 ease-in-out hover:bg-black hover:text-white max-xl:w-full max-xl:max-w-3/4",
              )}
            >
              Get Your Ticket
            </button>
          </motion.div>
        </motion.div>
        <div className="place-content-center place-items-end max-xl:order-1">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className={cn(
              "h-[500px] w-full",
              "desktop:h-[395px] desktop:w-[650px] rounded-[52px] bg-[#353030]",
              "laptop:h-full laptop:w-[500px]",
            )}
          ></motion.div>
        </div>
      </div>
    </main>
  );
};

export default Introduction;
