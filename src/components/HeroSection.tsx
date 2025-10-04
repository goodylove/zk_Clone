"use client";

import React from "react";
import Navbar from "./Navbar";
import NotificationBanner from "./NotificationBanner";
import { Button } from "./ui/button";
import { ArrowRight, CaretRight, SvgComponent } from "@/constants/Icons/svg";
import Link from "next/link";
import { features } from "@/constants/dummy";
import { cn } from "@/lib/utils";
import Card from "./ui/Card";

function HeroSection() {
  return (
    <section className="relative  w-full  overflow-x-hidden  ">
      <NotificationBanner />
      {/* <div className=" px-6 "> */}
      <Navbar />
      {/* </div> */}

      <video
        autoPlay
        muted
        loop
        className="absolute  backdrop-blur-lg w-full max-w-[1440px] bg-[#fcfcfc]/20   object-cover z-0 xl:-top-[14%]  md:top-4 lg:-top-32 md:-right-[200px] lg:-right-[300px] xl:-right-[470px]"
        src="/hero-animation.mp4"
      />
      <div className="relative z-[1000]  px-10  xl:px-[60px] md:min-h-screen">
        <div className="w-full  flex justify-center relative z-10  xl:h-[20.688rem] flex-col shrink-0 pt-20 mb-12  ">
          <h1 className=" font-monigue text-[#020212] font-light   [font-size:clamp(83px,23vw,437px)]  tracking-[0em] leading-[0.96] xl:leading-[0.74] md:leading-[0.85] text-center md:text-left xl:text-center uppercase">
            Zero Doubt
          </h1>
        </div>

        <div className="md:ml-8 xl:w-[40.688rem] md:w-[21.375rem]  pt-6 md:pt-8 border-t  flex gap-8 flex-col ">
          <p className=" text-lg font-semibold md:text-base md:font-light xl:text-xl xl:leading-[1.4]  leading-[1.4] font-grotesk ">
            The universal verification layer - ultra-fast and built to scale
            across any system.
          </p>
          <div className="flex gap-2 flex-col md:flex-row ">
            <Button variant="secondary" className="px-[24px] group">
              Incentivized Testnet{" "}
              <SvgComponent className="stroke-[#020212] group-hover:stroke-white" />
            </Button>
            <Button variant="outline" className="px-[25px]">
              VFY Launch <CaretRight />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative mt-5">
        <div
          className="absolute inset-0 pointer-events-none w-full h-full min-w-full min-h-full backdrop-blur-sm  "
          aria-hidden="true"
        ></div>

        {/* <div className="absolute inset-0 backdrop-blur-md bg-[#fcfcfc]/20" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-white" /> */}
        <div className="backdrop-blur-[2.3px]     xl:px-[60px] px-8    ">
          <div className="  ">
            <h1 className="leading-[0.74] md:leading-[0.74]  uppercase lg:leading-[0.84]  tracking-[0.01em]   text-[80px] md:text-[92px] xl:text-[170px] shrink-0 font-monigue text-[#020212] font-light whitespace-pre-line">
              VERIFY EVERYTHING, COMPROMISE NOTHING
            </h1>
          </div>
          <p className="text-[20px] text-[#020212] font-light leading-[28px] shrink-0 font-grotesk mt-[51px] w-[41.125rem]">
            Welcome to a new standard of trust. zkVerify makes it easy to verify
            any proofs at scale without any tradeoffs.
          </p>

          <div className="mt-[113px]">
            <div className="flex shrink-0  flex-row max-lg-flex-col gap-2 w-full relative  md:content-start content-stretch">
              {features.map(({ id, title, description, Icon }) => (
                <div
                  key={id}
                  className={cn(
                    " rounded-xl md:gap-8 gap-4 flex flex-col items-start text-center min-w-[18.75rem] md:grow",
                    id === 1
                      ? "pt-8"
                      : id === 2
                      ? "pt-8 md:pt-12 lg:pt-24"
                      : id === 3
                      ? "pt-8 lg:pt-36"
                      : id === 4
                      ? "pt-8 md:pt-12 lg:pt-48"
                      : ""
                  )}
                >
                  <div className="flex flex-col gap-4 md:gap-8">
                    <div className="bg-[#B5FFA5] flex justify-center items-center rounded-[18px] text-[#020212] w-[3.25rem] h-[3.25rem]">
                      <Icon className="w-10 h-10 text-blue-500 mb-3" />
                    </div>

                    <h3 className="font-bold leading-[24px] font-grotesk text-[20px] text-[#020212]">
                      {title}
                    </h3>
                  </div>
                  <div className="text-start font-light  text-[17.28px]">
                    <p className=" leading-[22.68px]">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pt-36  pt-28 mt-[175px] flex flex-col gap-[96px] ">
        <div className="content-stretch flex flex-col gap-6   items-center justify-start  relative shrink-0 font-grotesk text-center w-full">
          <div className="leading-[0.74] md:leading-[0.74]  uppercase lg:leading-[0.84]  tracking-[0.01em]   text-[80px] md:text-[92px] xl:text-[170px] shrink-0 font-monigue text-[#020212] font-light whitespace-pre-line">
            <p>INTEGRATE EVERYTHING,</p>
            <p>VERIFY EVERYWHERE</p>
          </div>
          <div className="text-sm  xl:text-xl lg:text-lg relative shrink-0 w-full md:max-w-[554px] lg:max-w-[1014px] text-void">
            <p className="leading-[1.4]">
              Seamlessly integrates with existing systems and multiple zero
              knowledge proving schemes, minimizing technical overhead with a
              developer-friendly environment.
            </p>
          </div>

          <div className="flex gap-2 flex-col md:flex-row ">
            <Button variant="secondary" className="px-[24px] group">
              Documentation
              <SvgComponent className="stroke-[#020212] group-hover:stroke-white" />
            </Button>
            <Button variant="outline" className="px-[25px]">
              Whitepaper <CaretRight />
            </Button>
          </div>
        </div>

        <div className="w-full box-border  lg:px-[24px] px-[22px]  mb-12 ">
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center w-full overflow-x-auto px-4 gap-4 lg:gap-6">
              <Card>
                <div className="absolute top-6 left-6 lg:top-8 lg:left-8  text-void">
                  <span className="text-sm font-light leading-[140%] uppercase tracking-[0.81px] lg:text-base font-grotesk ">
                    ANY PROOF
                  </span>
                </div>
              </Card>
              <ArrowRight />
              <Card>
                <div className="absolute top-6 left-6 lg:top-8 lg:left-8  text-void">
                  <span className="text-sm font-light leading-[140%] uppercase tracking-[0.81px] lg:text-base font-grotesk ">
                    ZKVERIFY
                  </span>
                </div>
              </Card>
              <ArrowRight />
              <Card>
                <div className="absolute top-6 left-6 lg:top-8 lg:left-8  text-void">
                  <span className="text-sm font-light leading-[140%] uppercase tracking-[0.81px] lg:text-base font-grotesk ">
                    ANYWHERE
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
