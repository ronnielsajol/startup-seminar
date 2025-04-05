"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex w-full items-center justify-between text-2xl">
      <div className="flex h-6 flex-row items-center justify-between">
        <div className="font-semibold uppercase">Start-Up Seminar</div>
      </div>
      <div className="hidden items-center space-x-6 md:flex">
        <a href="">Home</a>
        <a href="">Program</a>
        <a href="">Partnership</a>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-12 w-12 cursor-pointer flex-col items-center justify-center"
        >
          <span
            className={`mb-2 block h-1 w-8 bg-gray-800 transition-transform duration-300 ${
              isOpen ? "translate-y-3 rotate-45 transform" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`mb-2 block h-1 w-8 bg-gray-800 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block h-1 w-8 bg-gray-800 transition-transform duration-300 ${
              isOpen ? "-translate-y-3 -rotate-45 transform" : "translate-y-0.5"
            }`}
          ></span>
        </button>
        {isOpen && (
          <div className="bg-background absolute top-16 left-0 flex h-[calc(100vh-4rem)] w-full items-center justify-center md:hidden">
            <div className="flex flex-col items-center space-y-6 py-6">
              <a href="">Home</a>
              <a href="">Program</a>
              <a href="">Partnership</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
