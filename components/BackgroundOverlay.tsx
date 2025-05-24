import React from "react";
import { motion } from "motion/react";

const BackgroundOverlay = () => {
  return (
    <div className="laptop:pt-24 laptop:text-white/5 absolute inset-0 z-0 h-full w-full max-xl:text-white/15">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        className="font-horizon-outlined laptop:text-[12rem] desktop:text-[16rem] laptop:leading-[12rem] desktop:leading-[16rem] text-[4rem] font-light tracking-wide whitespace-nowrap"
      >
        Seminars
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        className="font-horizon-outlined laptop:text-[12rem] desktop:text-[16rem] laptop:leading-[12rem] desktop:leading-[16rem] text-[4rem] font-light tracking-wide whitespace-nowrap"
      >
        Workshop
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        className="font-horizon-outlined laptop:text-[12rem] desktop:text-[16rem] laptop:leading-[12rem] desktop:leading-[16rem] text-[4rem] font-light tracking-wide whitespace-nowrap"
      >
        Seminars
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        className="font-horizon-outlined laptop:text-[12rem] desktop:text-[16rem] laptop:leading-[12rem] desktop:leading-[16rem] hidden text-[4rem] font-light tracking-wide whitespace-nowrap max-xl:block"
      >
        Seminars
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        className="font-horizon-outlined laptop:text-[12rem] desktop:text-[16rem] laptop:leading-[12rem] desktop:leading-[16rem] hidden text-[4rem] font-light tracking-wide whitespace-nowrap max-xl:block"
      >
        Workshop
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        className="font-horizon-outlined laptop:text-[12rem] desktop:text-[16rem] laptop:leading-[12rem] desktop:leading-[16rem] hidden text-[4rem] font-light tracking-wide whitespace-nowrap max-xl:block"
      >
        Seminars
      </motion.h1>
    </div>
  );
};

export default BackgroundOverlay;
