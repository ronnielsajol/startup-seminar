"use client";

import { AnimatePresence, motion, MotionProps } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  motionProps?: MotionProps;
  className?: string;
}

export function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  // Word rotation
  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, duration);

      // Clear interval on unmount
      return () => clearInterval(interval);
    }, 2500); // Delay matches the opacity delay
    return () => clearTimeout(timeout);
  }, [words, duration]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          opacity: { delay: 2.5, duration: 0.3, ease: "easeInOut" },
        }}
        className="font-dm-sans z-10 mx-auto max-w-full overflow-hidden rounded-4xl text-center sm:w-auto sm:px-8 sm:py-4"
      >
        <AnimatePresence mode="wait">
          <motion.h1
            key={words[index]}
            className={cn(
              className,
              "w-full font-light tracking-[0.75em] text-wrap uppercase sm:tracking-[1.50em] sm:whitespace-nowrap",
            )}
            style={{
              textShadow: "1px -1px 34px rgba(0,0,0,.7)",
            }}
            {...motionProps}
          >
            {words[index]}
          </motion.h1>
        </AnimatePresence>
      </motion.div>
    </>
  );
}
