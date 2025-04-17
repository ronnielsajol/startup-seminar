"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardItem {
  id: string;
  name: string;
  backgroundUrl: string;
}

interface ExpandingCardsProps {
  items: CardItem[];
  className?: string;
}

export function ExpandingCards({ items, className }: ExpandingCardsProps) {
  const [activeId, setActiveId] = React.useState<string>(items[0]?.id);

  return (
    <div
      className={cn(
        "flex min-h-[500px] w-full max-w-[calc(100%-100px)] min-w-[600px] items-stretch justify-center gap-2 px-10 max-xl:w-full max-xl:overflow-x-scroll",
        className,
      )}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            "relative cursor-pointer overflow-hidden rounded-[8px] border-2 border-white bg-cover bg-center transition-all duration-600 ease-[linear(0_0%,0.1538_4.09%,0.2926_8.29%,0.4173_12.63%,0.5282_17.12%,0.6255_21.77%,0.7099_26.61%,0.782_31.67%,0.8425_37%,0.8887_42.23%,0.9257_47.79%,0.9543_53.78%,0.9752_60.32%,0.9883_67.11%,0.9961_75%,1_100%)]",
            activeId === item.id
              ? "flex-[15_1_0%]"
              : "flex-[2_1_1%] brightness-50",
          )}
          style={{
            backgroundImage: `
            radial-gradient(circle at bottom left, rgba(0,0,0,.8), transparent),
            url(${item.backgroundUrl})`,
          }}
          onMouseEnter={() => setActiveId(item.id)}
        >
          <div className="absolute top-20 -left-10 rotate-90 rounded-4xl px-5 py-2.5 text-2xl font-bold whitespace-nowrap uppercase max-xl:-left-15">
            Session 1
          </div>
          <div
            className={cn(
              "ease-ease-[linear(0_0%,0.1538_4.09%,0.2926_8.29%,0.4173_12.63%,0.5282_17.12%,0.6255_21.77%,0.7099_26.61%,0.782_31.67%,0.8425_37%,0.8887_42.23%,0.9257_47.79%,0.9543_53.78%,0.9752_60.32%,0.9883_67.11%,0.9961_75%,1_100%)] absolute inset-x-0 bottom-0 transition-all duration-700",
              activeId === item.id
                ? "h-[120px] bg-linear-to-t from-black/80 to-transparent"
                : "h-0 bg-linear-to-t from-black/80 to-transparent opacity-0",
            )}
          />

          <div className="absolute bottom-0 left-0 w-full p-5">
            <div
              className={cn(
                "ease-ease-[linear(0_0%,0.1538_4.09%,0.2926_8.29%,0.4173_12.63%,0.5282_17.12%,0.6255_21.77%,0.7099_26.61%,0.782_31.67%,0.8425_37%,0.8887_42.23%,0.9257_47.79%,0.9543_53.78%,0.9752_60.32%,0.9883_67.11%,0.9961_75%,1_100%)] flex items-center transition-all duration-700",
                activeId === item.id
                  ? "translate-x-0 opacity-100"
                  : "translate-x-5 opacity-0",
              )}
            >
              <div className="ml-3 text-white">
                <div
                  className={cn(
                    "text-lg font-bold transition-all duration-700 ease-[linear(0_0%,0.1538_4.09%,0.2926_8.29%,0.4173_12.63%,0.5282_17.12%,0.6255_21.77%,0.7099_26.61%,0.782_31.67%,0.8425_37%,0.8887_42.23%,0.9257_47.79%,0.9543_53.78%,0.9752_60.32%,0.9883_67.11%,0.9961_75%,1_100%)]",
                    activeId === item.id
                      ? "translate-x-0 opacity-100"
                      : "translate-x-5 opacity-0",
                  )}
                >
                  {item.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
