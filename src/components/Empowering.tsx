import {
  CaretRight,
  Discord,
  EmpowerLineBottom,
  EmpowerLineTop,
  Git,
  SvgComponent,
  Telegram,
  Twitter,
} from "@/constants/Icons/svg";
import React from "react";
import { Button } from "./ui/button";
import { EmpowerData } from "@/constants/dummy";
import Link from "next/link";

function Empowering() {
  return (
    <div>
      <div className=" -mb-[0.5px] xl:-mb-[1.2px] relative z-50">
        <EmpowerLineTop />
      </div>
      <section className="bg-[#B5FFA5] text-void pt-[120px] pb-[60px] px-[22px] lg:pt-60 lg:pb-[120px] lg:px-[60px]">
        <div className="flex flex-col gap-16 lg:gap-28 items-center justify-start w-full">
          <div className="flex flex-col items-center gap-8 text-center w-full">
            <h1 className=" lg:text-[150px] md:text-[100px] text-8xl xl:text-[170px] uppercase font-monigue  text-center leading-[.84] text-void w-full tracking-normal font-light ">
              Empowering Developers, Unleashing Potential
            </h1>
            <p className="text-sm lg:text-lg xl:text-[19.44px] xl:leading-[1.4] max-w-full lg:max-w-[936px] text-void/80 text-center font-light font-grotesk">
              Build smarter with zkVerify&apos;s developer-first infrastructure
              designed for easy integration, minimal complexity, and powerful
              Layer 2 interoperability.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 items-stretch justify-between w-full">
            {EmpowerData.map((item) => (
              <ListItem key={item.title} {...item} />
            ))}
          </div>

          <div className="flex gap-3 flex-col md:flex-row ">
            <Button
              variant="secondary"
              className="px-[24px] group hover:bg-white"
            >
              Incentivized Testnet{" "}
              <SvgComponent className="stroke-[#020212] group-hover:stroke-white" />
            </Button>
            <Button
              variant="outline"
              className="px-[25px] hover:bg-white bg-[#B5FFA5] "
            >
              Join Discord <CaretRight />
            </Button>
          </div>
          <div className="flex flex-wrap gap-5 items-center justify-center w-full lg:w-[730px]">
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on X"
              className="basis-0 grow min-w-32 h-[89px] rounded-lg border-[0.5px] border-void/[0.20] hover:border-none active:border-void/50 animate-on-motion hover:scale-105 active:scale-95 hover:shadow-md active:shadow-sm relative touch-target-md hover:bg-white/80 flex items-center justify-center p-2"
            >
              <span
                className="inline-flex items-center justify-center brand-radius overflow-clip transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 text-void focus:ring-void/50  touch-target pointer-events-none"
                aria-label="View GitHub"
              >
                <Twitter />
              </span>
            </Link>
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join Discord"
              className="basis-0 grow min-w-32 h-[89px] rounded-lg border-[0.5px] border-void/[0.20] hover:border-none active:border-void/50 animate-on-motion hover:scale-105 active:scale-95 hover:shadow-md active:shadow-sm relative touch-target-md hover:bg-white/80 flex items-center justify-center p-2"
            >
              <span
                className="inline-flex items-center justify-center brand-radius overflow-clip transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 text-void focus:ring-void/50 touch-target pointer-events-none"
                aria-label="Join Discord"
              >
            
                <Discord />
              </span>
            </Link>
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join Telegram"
              className="basis-0 grow min-w-32 h-[89px] rounded-lg border-[0.5px] border-void/[0.20] hover:border-none active:border-void/50 animate-on-motion hover:scale-105 active:scale-95 hover:shadow-md active:shadow-sm relative touch-target-md hover:bg-white/80 flex items-center justify-center p-2"
            >
              <span
                className="inline-flex items-center justify-center brand-radius overflow-clip transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 text-void focus:ring-void/50  touch-target pointer-events-none"
                aria-label="Join Telegram"
              >
                <Telegram />
              </span>
            </Link>
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub"
              className="basis-0 grow min-w-32 h-[89px] rounded-lg border-[0.5px] border-void/[0.20] hover:border-none active:border-void/50 animate-on-motion hover:scale-105 active:scale-95 hover:shadow-md active:shadow-sm relative touch-target-md hover:bg-white/80 flex items-center justify-center p-2"
            >
              <span
                className="inline-flex items-center justify-center brand-radius overflow-clip transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 text-void focus:ring-void/50  touch-target pointer-events-none"
                aria-label="View GitHub"
              >
                <Git />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <div className=" -mt-[0.5px]">
        <EmpowerLineBottom />
      </div>
    </div>
  );
}

export default Empowering;

const ListItem = ({
  title,
  description,
  by,
}: {
  title: string;
  by: string;
  description: string;
}) => {
  return (
    <div
      className="w-full lg:basis-0 lg:grow lg:shrink-0 lg:min-w-[251.33px] flex flex-col   transition-transform duration-300 ease-out
        hover:scale-[0.97]  "
    >
      <div className="flex flex-col gap-5 flex-1">
        <div className="flex flex-col gap-6">
          <h2 className="text-[28px] xl:text-[48px] text-void tracking-normal leading-[.96] font-monigue">
            {title}
          </h2>
          <div className="flex gap-2 items-start text-subheading text-void">
            <span className="font-normal text-void/60">By : </span>
            <span className="font-bold">{by}</span>
          </div>
        </div>
        <p className="text-base lg:text-xl font-normal font-grotesk text-void/60 leading-[1.4]">
          {description}
        </p>
      </div>
      <div className="flex mt-8">
        <Button
          variant="outline"
          className="px-[24px] group bg-transparent hover:bg-white"
        >
          <span>View Project</span>
          <SvgComponent className="stroke-[#020212] group-hover:stroke-white" />
        </Button>
      </div>
    </div>
  );
};
