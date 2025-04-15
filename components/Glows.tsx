import { cn } from "@/lib/utils";
import React from "react";

interface GlowProps {
  className: string;
}

const Glow = ({ className }: GlowProps) => {
  return (
    <div
      className={cn(
        "absolute z-0 h-66 w-66 bg-[radial-gradient(circle,_#ffffff,_transparent_50%)] blur-[72px]",
        className,
      )}
    />
  );
};

export default Glow;
