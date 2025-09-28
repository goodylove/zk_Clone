"use client";

import React from "react";
import Navbar from "./Navbar";
import NotificationBanner from "./NotificationBanner";
import { Button } from "./ui/button";
import { CaretRight, SvgComponent } from "@/constants/Icons/svg";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative  w-full h-[90vh]  ">
      <NotificationBanner />
      {/* <div className=" px-6 "> */}
      <Navbar />
      {/* </div> */}

      <video
        autoPlay
        muted
        loop
        className="absolute   backdrop-blur-[8px] w-full max-w-[1440px]   object-cover z-0 xl:-top-[20%]  md:top-4 lg:-top-32 md:-right-[200px] lg:-right-[300px] xl:-right-[500px]"
        src="/hero-animation.mp4"
      />
      <div className="relative z-10   pt-[140px] md:pt-[80px] md:py-12">
        <div className="w-full mb-12 flex justify-center  ">
          <h1 className=" font-monigue text-[#020212] font-light   [font-size:clamp(83px,23vw,437px)]  tracking-[0em] leading-[0.96] xl:leading-[0.74] md:leading-[0.85] text-center md:text-left xl:text-center uppercase">
            Zero Doubt
          </h1>
        </div>
        <div className="   ml-22 ">
          <p className=" border-t-1 py-7 text-lg font-semibold md:text-base md:font-light xl:text-xl xl:leading-[1.4]  leading-[1.4] font-grotesk max-w-[619px]">
            The universal verification layer - ultra-fast and built to scale
            across any system.
          </p>
          <div className="space-x-2 ">
            <Button variant="secondary" className="">
              Incentivized Testnet <SvgComponent className="text-white" />
            </Button>
            <Button variant="outline" className="">
              VFY Launch <CaretRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
