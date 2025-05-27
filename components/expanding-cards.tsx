"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
export interface CardItem {
  id: string;
  name: string;
  backgroundUrl: string;
  bionote: string;
  company: string;
  title: string;
  style?: string;
  unoptimized?: boolean;
}

interface ExpandingCardsProps {
  items: CardItem[];
  className?: string;
  workshop?: boolean;
}

export function ExpandingCards({
  items,
  className,
  workshop,
}: ExpandingCardsProps) {
  const [activeId, setActiveId] = React.useState<string | undefined>(undefined);

  const resetTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: string) => {
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    resetTimeoutRef.current = setTimeout(() => {
      setActiveId(undefined);
    }, 3000); // or 5000 if you want a long delay
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "flex min-h-[700px] w-full max-w-[calc(100%-50px)] min-w-[800px] items-stretch justify-center gap-2 px-10 max-xl:w-full max-xl:overflow-x-scroll",
        className,
      )}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            "relative cursor-pointer overflow-hidden rounded-[8px] border-2 border-white bg-cover bg-top transition-all duration-600 ease-[linear(0_0%,0.1538_4.09%,0.2926_8.29%,0.4173_12.63%,0.5282_17.12%,0.6255_21.77%,0.7099_26.61%,0.782_31.67%,0.8425_37%,0.8887_42.23%,0.9257_47.79%,0.9543_53.78%,0.9752_60.32%,0.9883_67.11%,0.9961_75%,1_100%)]",
            activeId === item.id
              ? "flex-[5_1_0%]"
              : "flex-[2_1_0%] brightness-50",
            item.style,
          )}
          style={{
            backgroundImage: `
            radial-gradient(circle at bottom left, rgba(0,0,0,.8), transparent),
            url(${item.backgroundUrl})`,
          }}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={cn(
              "absolute top-20 -left-10 rotate-90 rounded-4xl px-5 py-2.5 text-2xl font-bold whitespace-nowrap uppercase max-xl:-left-15",
              activeId === item.id ? "opacity-0" : "opacity-100",
            )}
          >
            {workshop ? "Workshop" : "Session"} {item.id}
          </div>
          <div
            className={cn(
              "absolute inset-x-0 bottom-0 transition-all duration-700 ease-[linear(0_0%,0.1538_4.09%,0.2926_8.29%,0.4173_12.63%,0.5282_17.12%,0.6255_21.77%,0.7099_26.61%,0.782_31.67%,0.8425_37%,0.8887_42.23%,0.9257_47.79%,0.9543_53.78%,0.9752_60.32%,0.9883_67.11%,0.9961_75%,1_100%)]",
              activeId === item.id
                ? "h-[300px] bg-linear-to-t from-black/80 to-transparent"
                : "h-0 bg-linear-to-t from-black/80 to-transparent opacity-0",
            )}
          />

          <div className="absolute bottom-0 left-0 w-full p-5">
            <div
              className={cn(
                "flex items-center transition-all duration-700 ease-[linear(0_0%,0.1538_4.09%,0.2926_8.29%,0.4173_12.63%,0.5282_17.12%,0.6255_21.77%,0.7099_26.61%,0.782_31.67%,0.8425_37%,0.8887_42.23%,0.9257_47.79%,0.9543_53.78%,0.9752_60.32%,0.9883_67.11%,0.9961_75%,1_100%)]",
                activeId === item.id
                  ? "translate-x-0 opacity-100"
                  : "translate-x-5 opacity-0",
              )}
            >
              <div className="ml-3 flex flex-col text-white">
                <div
                  className={cn(
                    "mb-5 flex flex-col text-lg font-bold transition-all duration-700 ease-[linear(0_0%,0.1538_4.09%,0.2926_8.29%,0.4173_12.63%,0.5282_17.12%,0.6255_21.77%,0.7099_26.61%,0.782_31.67%,0.8425_37%,0.8887_42.23%,0.9257_47.79%,0.9543_53.78%,0.9752_60.32%,0.9883_67.11%,0.9961_75%,1_100%)]",
                    activeId === item.id
                      ? "translate-x-0 opacity-100"
                      : "translate-x-5 opacity-0",
                  )}
                >
                  <div className="">{item.name}</div>
                  <div className="text-base font-medium">{item.company}</div>
                  <div className="-leading-[1px] text-xs font-medium">
                    {item.title}
                  </div>
                </div>

                <div
                  className={cn(
                    "text-md scrollbar-transparent laptop:max-h-[100px] desktop:max-h-[150px] overflow-y-auto transition-all duration-700 ease-[linear(0_0%,0.1538_4.09%,0.2926_8.29%,0.4173_12.63%,0.5282_17.12%,0.6255_21.77%,0.7099_26.61%,0.782_31.67%,0.8425_37%,0.8887_42.23%,0.9257_47.79%,0.9543_53.78%,0.9752_60.32%,0.9883_67.11%,0.9961_75%,1_100%)] max-xl:max-h-[100px]",
                    activeId === item.id
                      ? "translate-x-0 opacity-100"
                      : "translate-x-5 opacity-0",
                  )}
                >
                  {item.bionote?.split("\n\n").map((para, idx) => (
                    <p key={idx} className="mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
