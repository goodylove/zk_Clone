import { RoadMapConfig } from "@/constants/dummy";
import { Divider } from "@/constants/Icons/svg";
import React from "react";

function RoadMap() {
  return (
    <section className="md:py-[120px] py-24 px-[22px] lg:px-[22px] flex flex-col gap-[16px] md:gap-[14px] lg:gap-28 ">
      <div className="flex  justify-center items-center w-full uppercase">
        <h1 className="text-[clamp(68px,12vw,170px)] leading-[.84] tracking-normal font-light font-monigue">
          Roadmap
        </h1>
      </div>
      <div className=" w-full flex justify-center  ">
        <div className="flex flex-col lg:flex-row lg:flex-wrap xl:flex-nowrap gap-11 md:gap-11 lg:gap-12 px-12 [&>*]:w-full lg:[&>*]:flex-1 lg:[&>*]:min-w-[251.33px] lg:[&>*]:max-w-none justify-start">
          {RoadMapConfig.map((map, idx) => (
            <div className="flex flex-col gap-8" key={`roadmap-${idx}`}>
              <div className="flex flex-col gap-6 items-start ">
                <div className="text-[15px] font-bold text-void font-grotesk leading-none tracking-wide uppercase">
                  {map.tag}
                </div>
                <h3 className="xl:text-[48px] md:text-xl text-lg text-void font-light leading-[0.76] font-monigue  text-nowrap ">
                  {map.title}
                </h3>
              </div>
              <ul className="">
                {map.list.map((item, idx) => (
                  <li
                    key={`item-${idx}`}
                    className="flex items-start gap-1.5 text-void/60 text-[18px] leading-[25.2px] font-grotesk"
                  >
                    <p className="text-void/80 w-7 h-7">•</p>
                    <p className="flex-1 font-normal text-void/60"> {item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default RoadMap;
