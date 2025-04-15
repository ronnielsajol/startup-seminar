"use client";
import Logo from "@/components/Logo";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { WordRotate } from "@/components/magicui/word-rotate";
import { cn } from "@/lib/utils";

const texts = ["Seminars", "Workshops", "Launching Soon"];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8 py-3 sm:px-80 sm:py-34">
      <InteractiveGridPattern
        width={70}
        height={70}
        squares={[35, 35]}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "absolute inset-0",
        )}
      />
      <main className="flex h-full w-full flex-col items-center sm:rounded-3xl sm:p-5">
        <Logo />
        <WordRotate
          duration={3500}
          words={texts}
          className="font-dm-sans relative z-10 text-2xl"
        />
      </main>
    </div>
  );
}

//DM Sans
//Horizons
