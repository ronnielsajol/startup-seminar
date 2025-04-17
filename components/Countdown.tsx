import React, { useEffect, useState } from "react";

interface TimeDisplayValuesType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const targetDate = new Date("May 13, 2025 00:00:00").getTime();

const generateTimeDisplay = (): TimeDisplayValuesType => {
  const rightJustNow = new Date().getTime();
  const runway = targetDate - rightJustNow;
  return {
    days: Math.floor(runway / (1000 * 60 * 60 * 24)),
    hours: Math.floor((runway % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((runway % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((runway % (1000 * 60)) / 1000),
  };
};

const padNumber = (num: number): string => {
  return num.toString().padStart(2, "0");
};

const Countdown = () => {
  const [timeDisplay, setTimeDisplay] = useState<TimeDisplayValuesType | null>(
    null,
  );

  useEffect(() => {
    setTimeDisplay(generateTimeDisplay());
    const interval = setInterval(() => {
      setTimeDisplay(generateTimeDisplay());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeDisplay) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {timeDisplay.days}:{padNumber(timeDisplay.hours)}:
      {padNumber(timeDisplay.minutes)}:{padNumber(timeDisplay.seconds)}
    </>
  );
};

export default Countdown;
