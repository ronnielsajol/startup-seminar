"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-md relative flex w-full items-center justify-between bg-transparent">
      <div className="relative z-30 flex h-6 flex-row items-center justify-between">
        <Logo className="h-24 md:h-20" />
      </div>
      <div className="z-20 hidden items-center space-x-12 font-light xl:flex">
        <Link href="#hero">Home</Link>
        <Link href="">What to Expect</Link>
        <Link href="">Topics and Speakers</Link>
        <Link href="">Schedule</Link>
        <Link href="">Socials</Link>
        <Link href="">Partnership</Link>
      </div>
      <div className="xl:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-30 flex h-12 w-12 cursor-pointer flex-col items-center justify-center"
        >
          <span
            className={`mb-2 block h-1 w-8 rounded-2xl bg-gray-200/50 transition-transform duration-300 ${
              isOpen ? "translate-y-3 rotate-45 transform" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`mb-2 block h-1 w-8 rounded-2xl bg-gray-200/50 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block h-1 w-8 rounded-2xl bg-gray-200/50 transition-transform duration-300 ${
              isOpen ? "-translate-y-3 -rotate-45 transform" : "translate-y-0.5"
            }`}
          ></span>
        </button>
        {isOpen && (
          <div className="fixed inset-0 z-20 flex h-screen w-screen items-center justify-center bg-[#1c1e1e]/50 py-2 backdrop-blur-md xl:hidden">
            <div className="flex flex-col items-center space-y-6 py-2 text-2xl">
              <a href="">Home</a>
              <a href="">What to Expect</a>
              <a href="">Topics and Speakers</a>
              <a href="">Schedule</a>
              <a href="">Socials</a>
              <a href="">Partnership</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
