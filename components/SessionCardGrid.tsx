"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Session {
  title: string;
  subtitle: string;
  backgroundImage: string;
  filterColor: string;
}

interface SessionCardGridProps {
  sessions: Session[];
  className?: string;
}

export function SessionCardGrid({ sessions, className }: SessionCardGridProps) {
  return (
    <div
      className={cn(
        "desktop:h-96 laptop:h-72 grid h-[200px] w-full grid-cols-6 gap-6 overflow-x-auto px-10 max-xl:flex max-xl:min-h-[250px] max-xl:overflow-x-scroll",
        className,
      )}
    >
      {sessions.map((session, idx) => (
        <div
          key={idx}
          className="group relative h-full w-full overflow-hidden rounded-[19px] text-black max-xl:min-w-[300px]"
        >
          <Image
            className="absolute inset-0 z-10 h-full w-full rounded-[19px] object-cover"
            src={session.backgroundImage}
            alt=""
            width={1000}
            height={1000}
          />

          <div
            className={cn(
              "absolute inset-0 z-20 transition-all duration-500",
              "bg-gradient-to-br opacity-80 mix-blend-multiply group-hover:opacity-0",
            )}
            style={{
              backgroundImage: `linear-gradient(to bottom right, #1d1b46, ${session.filterColor})`,
            }}
          />

          {/* Content */}
          <div className="relative z-30 flex h-full flex-col p-4 text-white">
            <p>{session.title}</p>
            <p className="font-bold">{session.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
