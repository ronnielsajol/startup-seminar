"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Session {
  id: string;
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
  const [activeId, setActiveId] = React.useState<string | undefined>(undefined);

  return (
    <div
      className={cn(
        "desktop:h-96 laptop:h-72 grid h-[200px] w-full grid-cols-6 gap-6 overflow-x-auto px-10 py-10 max-xl:flex max-xl:min-h-[250px] max-xl:overflow-x-scroll",
        className,
      )}
    >
      {sessions.map((session) => (
        <div
          key={session.id}
          className="group relative h-full w-full overflow-hidden rounded-[19px] text-black transition-all duration-500 hover:scale-110 max-xl:min-w-[300px]"
          onMouseEnter={() => setActiveId(session.id)}
          onMouseLeave={() => setActiveId(undefined)}
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
          <div
            className="relative z-30 flex h-full flex-col justify-between p-4 text-white"
            style={{
              backgroundImage:
                activeId === session.id
                  ? `radial-gradient(circle at bottom left, rgba(0,0,0,1), transparent)`
                  : undefined,
            }}
          >
            <div
              className={cn(
                "flex flex-col transition-all duration-500",
                activeId === session.id ? "opacity-0" : "opacity-100",
              )}
            >
              <p>{session.title}</p>
              <p className="font-bold">{session.subtitle}</p>
            </div>
            <p
              className={cn(
                "self-end p-2 text-xs transition-all duration-500",
                activeId === session.id ? "opacity-100" : "opacity-0",
              )}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              quos impedit suscipit rerum repellendus blanditiis iusto est,
              voluptates, obcaecati tempore temporibus.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
