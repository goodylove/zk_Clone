import { BgLineTop2, CaretRight } from "@/constants/Icons/svg";
import React from "react";
import { Button } from "./ui/button";

function StayUpToDate() {
  return (
    <div className="">
      <div className=" -mb-[0.5px] xl:-mb-[1.2px] relative z-50">
        <BgLineTop2 />
      </div>
      <section className="bg-void  flex-col items-center justify-center pb-8 md:pb-28 pt-[20px] lg:pt-[180px] px-[22px] lg:px-[60px] relative shrink-0 w-full flex">
        <div className="max-w-4xl mx-auto w-full ">
          <div className=" gap-20  text-[#FCFCFC] flex flex-col justify-center items-center text-center w-full">
            <div>
              <h2 className=" text-3xl md:text-[50px] xl:text-[63.281px] font-normal font-monigue leading-[96px]">
                Stay Up to Date
              </h2>
              <div
                className="font-light leading-[0] relative shrink-0 
            text-[18px] font-grotesk md:text-[24px] text-center w-full md:w-[568px]"
              >
                <p className="  leading-[1.4]">
                  Subscribe for updates on zkVerify&apos;s roadmap, use cases,
                  and developer tools.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-center w-full justify-center font-grotesk ">
              <div className="w-full md:basis-0 box-border flex gap-2 md:grow items-center justify-center min-h-px min-w-px px-0 py-[17px] relative shrink-0 md:w-[235px]">
                <div className="absolute border-b-[1.4px] border-solid bottom-0 left-0 right-0 pointer-events-none shadow-[0_0_8px_rgba(181,255,165,0.3)] border-[#B5FFA533]"></div>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full md:basis-0 font-light md:grow leading-[0] min-h-px min-w-px relative shrink-0 text-[18px] md:text-[24px] text-left bg-transparent border-0 outline-none placeholder:text-white focus:text-white text-white"
                />
              </div>
              <div className=" md:w-[235px] w-full md:basis-0 box-border flex gap-2 md:grow items-center justify-center min-h-px min-w-px px-0 py-[17px] relative shrink-0">
                <div className="absolute border-b-[1.4px] border-solid bottom-0 left-0 right-0 pointer-events-none shadow-[0_0_8px_rgba(181,255,165,0.3)] border-[#B5FFA533]"></div>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full md:basis-0 font-light md:grow leading-[0] min-h-px min-w-px relative shrink-0 text-[18px] md:text-[24px] text-left bg-transparent border-0 outline-none placeholder:text-white focus:text-white text-white"
                />
              </div>
              <Button variant="outline" className="px-[25px]">
                Subscribe <CaretRight />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StayUpToDate;
