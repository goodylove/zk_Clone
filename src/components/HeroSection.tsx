import React from "react";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <section className="relative  w-full min-h-screen px-6  overflow-x-hidden ">
      <Navbar />
      <div className="absolute  w-[1440px]  h-full object-cover z-0 -top-[46%] -right-[500px]">
        <video autoPlay muted loop playsInline className="">
          <source src="/hero-animation.mp4" type="video/mp4" />
        </video>
      </div>
      <section className="relative z-10  flex flex-col justify-start pt-[140px] md:pt-[80px] md:py-12">
        <div className="w-full mb-3 ">
          <h1 className=" font-monigue text-[#020212] font-light text-[331.2px] tracking-[0em] leading-[0.96] xl:leading-[74%] md:leading-[0.85] text-center md:text-left xl:text-center">
            ZERO DOUBT
          </h1>
        </div>
      </section>
    </section>
  );
}

export default HeroSection;
