"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

const cards = [
  {
    id: 1,
    title: "Resource Speaker",
    name: "Juan Dela Cruz",
  },
  {
    id: 2,
    title: "Resource Speaker",
    name: "Juan Dela Cruz",
  },
  {
    id: 3,
    title: "Resource Speaker",
    name: "Juan Dela Cruz",
  },
  {
    id: 4,
    title: "Resource Speaker",
    name: "Juan Dela Cruz",
  },
  {
    id: 5,
    title: "Resource Speaker",
    name: "Juan Dela Cruz",
  },
  {
    id: 6,
    title: "Resource Speaker",
    name: "Juan Dela Cruz",
  },
  {
    id: 7,
    title: "Resource Speaker",
    name: "Juan Dela Cruz",
  },
];

export default function ExpandingCards() {
  const [activeCard, setActiveCard] = useState(1);
  const desktopMedium = useMediaQuery("(min-width: 768px)");

  const startWidth = desktopMedium ? 80 : 100;
  const endWidth = desktopMedium ? 422 : 432;

  return (
    <div className="mx-auto flex h-[474px] max-w-[1140px] items-stretch gap-[18px] overflow-x-auto pb-4 max-xl:h-full max-xl:overflow-x-scroll">
      {cards.map((card) => {
        const isSelected = card.id === activeCard;

        const springConfig = {
          width: isSelected ? endWidth : startWidth,
          config: { mass: 2, friction: 40, tension: 600 },
        };

        return (
          <motion.div
            key={card.id}
            className="relative shrink-0 cursor-pointer rounded-lg bg-zinc-800"
            onHoverStart={() => setActiveCard(card.id)}
            animate={springConfig}
            style={{ width: springConfig.width }}
          >
            <div className="h-full overflow-hidden">
              <div className="relative h-full w-[422px]">
                <div className="p-6">
                  <h3 className="absolute top-[32px] left-[78px] flex h-[80px] origin-top-left rotate-90 items-center text-xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <div className="absolute inset-0 flex flex-col">
                    <div className="h-full bg-white/5"></div>
                    <p
                      className={`mt-auto px-8 pb-12 text-sm text-zinc-400 transition-opacity delay-100 duration-300 ${
                        isSelected ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {card.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
