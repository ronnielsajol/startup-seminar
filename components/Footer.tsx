import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className={cn(
        "px-8 py-20",
        "laptop:px-56",
        "min-h-win w-full bg-gradient-to-b from-[#281a1a] to-[#271919] to-5%",
        "flex flex-col gap-4",
      )}
    >
      <div className="flex justify-between max-xl:mb-8 max-xl:flex-col max-xl:gap-10">
        <div className="flex flex-col gap-2">
          <Logo className="laptop:h-20 desktop:h-28 laptop:-ml-8 desktop:-ml-0.5 max-xl:-ml-20 max-xl:h-24" />
          <div className="flex flex-col gap-0.5">
            <p className="text-base">For Inquiries and Concerns:</p>
            <p className="text-base font-bold">startup.pup@gmail.com</p>
          </div>
        </div>
        <div className="laptop:pb-8 flex flex-col self-end max-xl:self-start">
          <p>Social Media Links:</p>
          <div className="flex justify-end">
            <Link
              href={"https://www.facebook.com/pup.startup2025"}
              target="_blank"
            >
              {" "}
              <Image
                src={"/facebook.svg"}
                alt="facebook"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1.5 max-xl:flex-col max-xl:items-start">
        <span className="font-extralight text-white/50">Powered by </span>
        <span className="font-bold">PUP COE Ladderized Students</span>
      </div>
    </footer>
  );
};

export default Footer;
