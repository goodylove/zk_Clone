"use client";

import { CaretRight, CaretRightBanner } from "@/constants/Icons/svg";
import Link from "next/link";
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
    targetDate.setDate(targetDate.getDate() + 1);

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
    <Link
      href="/"
      className="bg-[#b5ffa5]  w-full flex justify-center items-center sm:py-4 py-3 sm:px-4 px-3 lg:px-16 relative   z-[1000]"
    >
      <div className="flex items-center gap-[18px]">
        <div className="gap-[20px] flex items-start w-[406px]">
          <span className="font-grotesk  text-center text-[#020212] text-[18px] font-medium leading-[140%] ">
            zkVerify mainnet and VFY token are now live!
          </span>
          {/* <div className="flex gap-[10px] text-[#020212] font-grotesk font-bold text-[18px] leading-[140%]">
          <span className="">{timeLeft.days} </span>
          <span>Days</span>
          <span className="">{timeLeft.hour}</span>
          <span>Hours</span>
          <span className="">{timeLeft.minutes}</span>
          <span>Minutes</span>
        </div> */}
        </div>
        <CaretRightBanner />
      </div>
    </Link>
  );
}

export default NotificationBanner;
