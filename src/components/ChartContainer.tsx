import React from "react";
import { Button } from "./ui/button";
import {
  BgLineBottom,
  BgLineTop,
  CaretRight,
  SvgComponent,
} from "@/constants/Icons/svg";
import Image from "next/image";

function ChartContainer() {
  return (
    <section className="">
      <div className="hidden lg:block -mb-[0.5px] xl:-mb-[1.2px] relative z-50">
        <BgLineTop />
      </div>
      <div className="bg-void py-10 md:py-16 lg:py-[50px]">
        <div className="flex flex-col items-center justify-start  ">
          <div className="flex justify-center items-center">
            <p className="text-[#FCFCFC] text-[15px] font-bold uppercase tracking-[0.6px]  leading-[16.5px] font-grotesk">
              Trusted by the Best
            </p>
          </div>
          <TrustedCompaniesLogo />
        </div>
        <div className=" mt-34 px-4 ">
          <div className="px-11">
            <h1 className=" text-[60px] md:text-[100px] lg:text-[170px]  shrink-0  font-monigue lg:font-light text-white w-full uppercase leading-[0.74]">
              5,934,907
            </h1>
            <p className="text-lg mt-8  w-full lg:pointer-events-auto text-[#FCFCFC] font-grotesk leading-[28px] font-light">
              Proofs Verified
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center items-center">
          <Button variant="outline" className="px-[24px] group">
            Proof Verification in Action
            <SvgComponent className="stroke-[#020212] group-hover:stroke-white" />
          </Button>
        </div>
      </div>
      <div className=" -mt-[0.5px]">
        <BgLineBottom />
      </div>
    </section>
  );
}

export default ChartContainer;

const TrustedCompaniesLogo = () => {
  return (
    <div className="hidden lg:block w-full overflow-hidden">
      <div className="mt-12 flex items-center justify-start trustedLogo">
        {[
          "al",
          "arb",
          "cal",
          "cap",
          "chain",
          "if",
          "el",
          "al",
          "arb",
          "cal",
          "cap",
          "chain",
          "if",
          "el",
        ].map((img, idx) => (
          <div
            key={`logo-${idx}`}
            className="flex items-center justify-center flex-shrink-0"
          >
            <Image
              src={`/Images/trusted-logos/${img}.png`}
              width={200}
              height={69}
              alt="trusted company logo"
              className="object-contain filter brightness-0 invert opacity-[0.3]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
// gap: 128px; flex-wrap: nowrap; display: flex; translate: none; rotate: none; scale: none; transform: translate3d(-362.741px, 0px, 0px);
