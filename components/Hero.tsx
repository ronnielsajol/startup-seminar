import React from "react";

const Hero = () => {
  return (
    <main id="hero" className="desktop:mt-44 laptop:mt-22">
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <p className="text-2xl font-light">Start-Up 2025:</p>
          <h1 className="mt-6 mb-4 text-[5.375rem] leading-[5.375rem] font-black uppercase">
            Designing Concepts
          </h1>
          <h1 className="text-[5.375rem] leading-[5.375rem] font-black uppercase">
            Launching Realities
          </h1>
          <p className="text-lg uppercase italic">
            <strong className="">
              A Tech Start-Up Seminar and Workshop Event
            </strong>
            <span className="font-extralight">
              {" "}
              at polytechnic University of the Philippines
            </span>{" "}
          </p>
        </div>
        <div className="mt-8 flex flex-col place-items-end justify-center gap-6.25">
          <div className="flex flex-col text-end text-lg">
            <p className="">Date: May 13-15, 2025</p>
            <p className="font-light">Venue: PUP-ITECH Building</p>
          </div>
          <div className="flex max-w-max flex-col gap-2.5">
            <button className="rounded-[4.25rem] border-2 border-white px-8 py-2.5 text-[0.875rem] font-bold">
              Secure Your Spot
            </button>
            <button className="rounded-[4.25rem] bg-white px-8 py-2.5 text-[0.875rem] font-bold text-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="mt-40 grid grid-cols-4">
        <div className="flex flex-col">
          <p className="text-lg font-light">Countdown Till Event:</p>
          <h2 className="text-3xl font-bold">00:00:00:00</h2>
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-light">Total Users Registered:</p>
          <h2 className="text-3xl font-bold">69 Aspiring Founders</h2>
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-light">Total Organizations On-Board</p>
          <h2 className="text-3xl font-bold">15 Companies On-Board</h2>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-lg font-light">Available On</p>
          <h2 className="text-3xl font-bold">Facebook Live</h2>
        </div>
      </div>
    </main>
  );
};

export default Hero;
