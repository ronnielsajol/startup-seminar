"use client";

import { AnimatePresence, motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

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
  const [width, setWidth] = useState<number>(0);
  const [visible, setVisible] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  // Word rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  // Measure text width and make visible
  useEffect(() => {
    if (spanRef.current) {
      const measured = spanRef.current.offsetWidth;
      const padding = 64; // px-8 on both sides
      setWidth(measured + padding);
      setVisible(true);
    }
  }, [index, className]);

  return (
    <>
      {/* Hidden span to measure text width */}
      <span
        ref={spanRef}
        className={cn(
          className,
          "pointer-events-none invisible absolute w-max whitespace-nowrap",
        )}
      >
        {words[index]}
      </span>

      <motion.div
        animate={{
          width,
          opacity: visible ? 1 : 0,
        }}
        initial={{ opacity: 0, width: 0 }}
        transition={{
          width: { duration: 0.3, ease: "easeInOut" },
          opacity: { delay: 2.5, duration: 0.3, ease: "easeInOut" },
        }}
        className="font-dm-sans z-10 mx-auto overflow-hidden rounded-4xl bg-[#525252]/30 px-8 py-4 text-center"
        style={{ width }}
      >
        <AnimatePresence mode="wait">
          <motion.h1
            key={words[index]}
            className={cn(className, "whitespace-nowrap")}
            {...motionProps}
          >
            {words[index]}
          </motion.h1>
        </AnimatePresence>
      </motion.div>
    </>
  );
}
