"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  squares?: [number, number];
  className?: string;
  squaresClassName?: string;
}

const colorCycle = [
  "#1e73e8",
  "#8e44ad",
  "#00c853",
  "#ffc107",
  "#ff6d00",
  "#ff3b3b",
];

export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [horizontal, vertical] = squares;
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);
  const [globalColorIndex, setGlobalColorIndex] = useState(0);

  const handleMouseEnter = (index: number) => {
    setGlobalColorIndex((prev) => (prev + 1) % colorCycle.length);
    setHoveredSquare(index);
  };

  const handleMouseLeave = () => {
    setHoveredSquare(null);
  };

  return (
    <svg
      width={width * horizontal}
      height={height * vertical}
      className={cn(
        "absolute inset-0 h-full w-full border border-gray-400/30",
        className,
      )}
      {...props}
    >
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width;
        const y = Math.floor(index / horizontal) * height;

        const isHovered = index === hoveredSquare;
        const color = isHovered ? colorCycle[globalColorIndex] : "transparent"; // Set the default color to transparent when not hovered

        return (
          <motion.rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            className={cn(
              "stroke-gray-400/30 transition-all duration-200 ease-in-out",
              squaresClassName,
            )}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            animate={{
              fill: color, // Animate the fill color when hovered
            }}
            transition={{
              duration: 0.3, // Control animation speed
              ease: "easeInOut",
            }}
          />
        );
      })}
    </svg>
  );
}
