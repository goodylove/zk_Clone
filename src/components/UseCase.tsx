import { SvgComponent } from "@/constants/Icons/svg";
import React from "react";
import { Button } from "./ui/button";

function UseCase() {
  return (
    <section className="md:py-[120px] py-24 px-[22px] lg:px-[22px] flex flex-col gap-[16px] md:gap-[14px] lg:gap-28 ">
      <div className="flex flex-col items-center w-full max-w-[1400px] mx-auto overflow-hidden gap-20 lg:gap-28">
        <div className="flex flex-col gap-8 w-full items-center text-center">
          <h1 className="text-[clamp(68px,12vw,170px)] leading-[.84] tracking-normal font-light font-monigue">
            Use Cases
          </h1>
          <p className="text-xl text-void max-w-[862px] font-normal font-grotesk w-full">
            Powering trust across the most critical use cases of the next
            internet
          </p>
        </div>
        <div className="flex flex-col w-full gap-12 md:gap-16 lg:gap-24">
          <div className="hidden lg:flex flex-col gap-24 w-full">
            <div className="flex flex-row gap-32 xl:gap-48 items-start justify-center px-32 xl:px-52 w-full">
              <div
                className="flex flex-col items-center text-center flex-1 min-w-0"
                data-use-case-card="true"
              >
                <div className="h-[45px] sm:h-[50px] md:h-[55px] lg:h-[40px] flex items-center justify-center w-full mb-5">
                  <h3 className=" text-void text-center leading-tight px-2 font-monigue text-[clamp(28px,3.5vw,48px)]">
                    Verifiable AI
                  </h3>
                </div>
                <div className="h-[85px] sm:h-[90px] md:h-[100px] lg:h-[140px] xl:h-[140px] flex items-start justify-center w-full mb-8">
                  <p className=" text-[18px] text-void/60 text-center leading-relaxed px-2 overflow-hidden font-grotesk font-normal ">
                    Prove that AI outputs are correct, consistent, and
                    unaltered. Ideal for AI-generated content, predictions, or
                    verifiable ML training.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="px-[24px] group hover:border-none"
                >
                  <span>Verifiable AI</span>
                  <SvgComponent className="stroke-[#020212] group-hover:stroke-white" />
                </Button>
              </div>
              <div
                className="flex flex-col items-center text-center flex-1 min-w-0"
                data-use-case-card="true"
              >
                <div className="h-[45px] sm:h-[50px] md:h-[55px] lg:h-[40px] flex items-center justify-center w-full mb-5">
                  <h3 className="text-h3 text-void text-center leading-tight px-2 font-monigue text-[clamp(28px,3.5vw,48px)]">
                    Provable Gaming
                  </h3>
                </div>
                <div className="h-[85px] sm:h-[90px] md:h-[100px] lg:h-[140px] xl:h-[140px] flex items-start text-center justify-center w-full mb-8">
                  <p className="text-[18px] text-void/60 text-center leading-relaxed px-2 overflow-hidden font-grotesk font-normal">
                    Enable cheat-proof gameplay, verifiable fairness, and
                    trusted randomness in real-time or turn-based games. From
                    loot drops to matchmaking, trust becomes code.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="px-[24px] group hover:border-none"
                >
                  <span>Provable Gaming</span>
                  <SvgComponent className="stroke-[#020212] group-hover:stroke-white" />
                </Button>
              </div>
            </div>
            <div className="flex flex-row gap-32 xl:gap-48 items-start justify-center px-32 xl:px-52 w-full">
              <div
                className="flex flex-col items-center text-center flex-1 min-w-0"
                data-use-case-card="true"
              >
                <div className="h-[45px] sm:h-[50px] md:h-[55px] lg:h-[40px] flex items-center justify-center w-full mb-5">
                  <h3 className=" text-void text-center leading-tight px-2 font-monigue text-[clamp(28px,3.5vw,48px)]">
                    Digital ID
                  </h3>
                </div>
                <div className="h-[85px] sm:h-[90px] md:h-[100px] lg:h-[140px] xl:h-[140px] flex items-start justify-center w-full mb-8">
                  <p className="text-[18px] text-void/60 text-center leading-relaxed px-2 overflow-hidden font-grotesk font-normal">
                    Power decentralized identity systems with cryptographic
                    proofs of uniqueness, humanity, or credentials - all without
                    revealing sensitive data.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center text-center flex-1 min-w-0"
                data-use-case-card="true"
              >
                <div className="h-[45px] sm:h-[50px] md:h-[55px] lg:h-[40px] flex items-center justify-center w-full mb-5">
                  <h3 className=" text-void text-center leading-tight px-2 font-monigue text-[clamp(28px,3.5vw,48px)]">
                    zkTLS
                  </h3>
                </div>
                <div className="h-[85px] sm:h-[90px] md:h-[100px] lg:h-[140px] xl:h-[140px] flex items-start justify-center w-full mb-8">
                  <p className="text-[18px] text-void/60 text-center leading-relaxed px-2 overflow-hidden font-grotesk font-normal">
                    Secure connections with zero-knowledge-based TLS handshakes.
                    Eliminate central trust points and enable auditable,
                    privacy-preserving authentication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UseCase;
