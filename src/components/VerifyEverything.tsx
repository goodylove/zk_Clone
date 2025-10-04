import { features } from "@/constants/dummy";
import React from "react";

export default function VerifyEverything() {
  return (
    <section className="backdrop-blur-[4px] xl:px-[60px] px-8 ">
      <div className="  ">
        <h1 className="leading-[0.74] md:leading-[0.74]  uppercase lg:leading-[0.84]  tracking-[0.01em]   text-[80px] md:text-[92px] xl:text-[170px] shrink-0 font-monigue text-[#020212] font-light whitespace-pre-line">
          VERIFY EVERYTHING, COMPROMISE NOTHING
        </h1>
      </div>
      <p className="text-[20px] text-[#020212] font-light leading-[28px] shrink-0 font-grotesk mt-[51px] w-[41.125rem]">
        Welcome to a new standard of trust. zkVerify makes it easy to verify any
        proofs at scale without any tradeoffs.
      </p>

      <div className="mt-[113px]">
        {features.map(({ id, title, description, Icon }) => (
          <div
            key={id}
            className="p-6 bg-white shadow rounded-xl flex flex-col items-center text-center"
          >
            <Icon className="w-10 h-10 text-blue-500 mb-3" />
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
