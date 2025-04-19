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
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="laptop:col-span-2 desktop:col-span-2 flex flex-col gap-2"
        >
          <motion.p
            variants={child}
            className="laptop:text-base max-xl:text-xl"
          >
            Sponsors and Partners
          </motion.p>
          <motion.h1
            variants={child}
            className="laptop:text-4xl desktop:text-6xl text-[1.875rem] font-black"
          >
            Get Involved
          </motion.h1>
          <motion.p
            variants={child}
            className="laptop:text-[14px] desktop:text-base max-xl:text-[0.975rem]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat mi mauris, vitae pretium lacus congue et. Donec pretium
            feugiat mauris et eleifend. Nam tincidunt odio nec ornare porttitor.
            Vivamus ac tempor neque. Cras a consectetur ipsum. Nunc vitae
            faucibus mauris, vel ornare purus. Nunc iaculis turpis ac facilisis
            sodales. Ut auctor non urna nec fringilla. Aenean cursus lorem arcu,
            ac finibus nunc maximus eget. Vestibulum nec euismod augue.
          </motion.p>
        </motion.div>
        <div className="laptop:col-span-2 desktop:col-span-2 flex items-center justify-end gap-2 max-xl:flex-col max-xl:items-start">
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cursor-pointer rounded-[68px] border-2 border-white px-9 py-2.5 font-bold transition duration-300 ease-in-out hover:bg-white hover:text-black max-xl:w-full max-xl:max-w-3/4 max-xl:text-xs"
          >
            Watch Video
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cursor-pointer rounded-[68px] bg-white px-9 py-2.5 font-bold text-black transition duration-300 ease-in-out hover:bg-black hover:text-white max-xl:w-full max-xl:max-w-3/4 max-xl:text-xs"
          >
            Get Your Ticket
          </motion.button>
        </div>
      </div>
    </main>
  );
};

export default Sponsors;
