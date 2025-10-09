import { RoadMapConfig } from "@/constants/dummy";
import React from "react";

function RoadMap() {
  return (
    <section className="my-[120px] ">
      <div className="flex  justify-center items-center w-full uppercase">
        <h1 className="text-[clamp(68px,12vw,170px)] leading-[.84] tracking-normal font-light font-monigue">
          Roadmap
        </h1>
      </div>
      <div className="mt-28 w-full flex justify-center px-[70px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 ">
          {RoadMapConfig.map((map, idx) => (
            <div className=" w-[289px] " key={idx}>
              <div className="md:space-y-5 space-y-3 xl:space-y-8">
                <h2 className="text-[15px] font-bold text-void font-grotesk leading-[16.5px] tracking-[0.6px] uppercase">
                  {map.tag}
                </h2>
                <p className="xl:text-[30.76px] md:text-xl text-lg text-void font-light leading-[46.08px] font-grotesk text-wrap ">
                  {map.title}
                </p>
                <ul className="">
                  {map.list.map((item, idx) => (
                    <li
                      key={`item-${idx}`}
                      className="flex items-start gap-1.5 text-void/60 text-[18px] leading-[25.2px] font-grotesk"
                    >
                      <p>•</p>
                      <p> {item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoadMap;
