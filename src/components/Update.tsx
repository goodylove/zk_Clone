import React from "react";
import { Button } from "./ui/button";
import { SvgComponent } from "@/constants/Icons/svg";

function Update() {
  return (
    <div>
      <section className="bg-shell px-[22px] lg:px-[60px] py-[120px] md:py-32 lg:py-60 flex flex-col items-center justify-start">
        <div className="flex flex-col items-start justify-start gap-[72px] lg:gap-28 w-full">
          <div className="flex flex-col items-center gap-8 text-center w-full">
            <h1 className="xl:text-[170px] md:text-[78px] text-6xl text-center text-void uppercase font-monigue">
              Updates
            </h1>
            <p className="text-sm lg:text-xl text-center text-void leading-[1.4] font-light max-w-full font-grotesk">
              Get the latest in ZK, dev updates, and ecosystem launches.
            </p>
            <div className="hidden lg:flex gap-2 items-start justify-start">
              <Button
                variant="secondary"
                className="px-[24px] group hover:border-none"
              >
                View All Updates
                <SvgComponent className="stroke-[#020212] group-hover:stroke-white" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-[72px] lg:gap-12 items-stretch justify-start w-full">
            <div
              className="w-full lg:basis-0 lg:grow lg:shrink-0 lg:min-w-[251.33px] flex flex-col"
              data-update-card="true"
            >
              <div className="flex flex-col gap-5 leading-[0] w-full flex-1">
                <div className="flex flex-col gap-6 items-start justify-start text-void w-full">
                  <div className="text-[28px] lg:text-[48px]  font-light leading-[0.76] lg:leading-[0.96] w-full line-clamp-3 font-monigue">
                    Strengthening Proof Verification with Secure Access +
                    Validator Infrastructure
                  </div>
                  <div className="text-xs lg:text-[16.5px] font-grotesk font-bold lg:font-normal uppercase leading-none lg:leading-[1.1]">
                    October 8, 2025
                  </div>
                </div>
                <div className="text-base font-light leading-[1.4] text-void/80 w-full overflow-ellipsis overflow-hidden"></div>
              </div>
              <div className="flex mt-8">
                <Button
                  variant="outline"
                  className="px-[24px] group hover:border-none"
                >
                  Read Post
                  <SvgComponent className="stroke-[#020212] group-hover:stroke-white" />
                </Button>
              </div>
            </div>

            <div
              className="w-full lg:basis-0 lg:grow lg:shrink-0 lg:min-w-[251.33px] flex flex-col"
              data-update-card="true"
            >
              <div className="flex flex-col gap-5 leading-[0] w-full flex-1">
                <div className="flex flex-col gap-6 items-start justify-start text-void w-full">
                  <div className="text-[28px] lg:text-[48px]  font-light leading-[0.76] lg:leading-[0.96] w-full line-clamp-3 font-monigue">
                    Powering Scalable Verification Across Decentralized Compute
                  </div>
                  <div className="text-xs  font-grotesk  lg:text-[16.5px]  font-bold lg:font-normal uppercase leading-none lg:leading-[1.1]">
                    October 6, 2025
                  </div>
                </div>
                <div className="text-base font-light leading-[1.4] text-void/80 w-full overflow-ellipsis overflow-hidden"></div>
              </div>
              <div className="flex mt-8">
                <Button
                  variant="outline"
                  className="px-[24px] group hover:border-none"
                >
                  Read Post
                  <SvgComponent className="stroke-[#020212] group-hover:stroke-white" />
                </Button>
              </div>
            </div>

            <div
              className="w-full lg:basis-0 lg:grow lg:shrink-0 lg:min-w-[251.33px] flex flex-col"
              data-update-card="true"
            >
              <div className="flex flex-col gap-5 leading-[0] w-full flex-1">
                <div className="flex flex-col gap-6 items-start justify-start text-void w-full">
                  <div className="text-[28px] lg:text-[48px]  font-light leading-[0.76] lg:leading-[0.96] w-full line-clamp-3 font-monigue">
                    Revolutionizing Privacy-Preserving Machine Learning with ZK
                    Proof
                  </div>
                  <div className=" font-grotesk text-xs lg:text-[16.5px] font-bold lg:font-normal uppercase leading-none lg:leading-[1.1]">
                    October 2, 2025
                  </div>
                </div>
                <div className="text-base font-light leading-[1.4] text-void/80 w-full overflow-ellipsis overflow-hidden"></div>
              </div>
              <div className="flex mt-8">
                <Button variant="outline" className="px-[24px] group">
                  Read Post
                  <SvgComponent className="stroke-[#020212] group-hover:stroke-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Update;
