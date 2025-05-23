"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-md relative flex w-full items-center justify-between bg-transparent">
      <div className="relative z-30 flex h-5 flex-row items-center justify-between">
        <Logo className="desktop:h-20 h-24" />
      </div>
      <div className="z-20 hidden items-center space-x-4 font-light xl:flex">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
          className="rounded-[18px] p-2 transition-all duration-300 hover:bg-white/20"
          href="#hero"
        >
          Home
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
          className="rounded-[18px] px-5 py-2 transition-all duration-300 hover:bg-white/20"
          href="#whatToExpect"
        >
          What to Expect
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
          className="rounded-[18px] px-5 py-2 transition-all duration-300 hover:bg-white/20"
          href="#topicsAndSpeakers"
        >
          Topics and Speakers
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
          className="rounded-[18px] px-5 py-2 transition-all duration-300 hover:bg-white/20"
          href="#partnership"
        >
          Partnership
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
          className="rounded-[18px] px-5 py-2 transition-all duration-300 hover:bg-white/20"
          href=""
        >
          Schedule
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
          className="rounded-[18px] px-5 py-2 transition-all duration-300 hover:bg-white/20"
          href=""
        >
          Socials
        </motion.a>
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
              <a href="#hero">Home</a>
              <a href="#whatToExpect">What to Expect</a>
              <a href="#topicsAndSpeakers">Topics and Speakers</a>
              <a href="#partnership">Partnership</a>
              <a href="">Schedule</a>
              <a href="">Socials</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
