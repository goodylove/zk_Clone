"use client";

import { CaretRight } from "@/constants/Icons/svg";
import React, { useEffect, useState } from "react";

function NotificationBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hour: 0,
    minutes: 0,
  });

  React.useEffect(() => {
    // targetDate = 4 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);

    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hour: 0,
          minutes: 0,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      setTimeLeft({ days, hour, minutes });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#b5ffa5] px-2 sm:px-4 py-3 sm:py-4 lg:px-16 w-full flex justify-center items-center gap-5">
      <div className="flex items-center gap-5 cursor-pointer">
        <span className="font-grotesk  text-[#020212] text-[18px] font-medium leading-[140%] ">
          Countdown to Mainnet and TGE:
        </span>
        <div className="flex gap-[10px] text-[#020212] font-grotesk font-bold text-[18px] leading-[140%]">
          <span className="">{timeLeft.days} </span>
          <span>Days</span>
          <span className="">{timeLeft.hour} </span>
          <span>Hour</span>
          <span className="">{timeLeft.minutes} </span>
          <span>Minutes</span>
        </div>
      </div>
      <div className="cursor-pointer duration-300 ease-in-out hover:translate-x-1">
        <CaretRight />
      </div>
    </div>
  );
}

export default NotificationBanner;
