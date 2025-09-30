"use client";

import { CaretRight, LogoIcon, Menu } from "@/constants/Icons/svg";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

function Navbar() {
  const [scrolled, setScrolled] = React.useState(0);

  const handleScroll = () => {
    setScrolled(window.scrollY);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  console.log(scrolled, window.scrollY);
  return (
    <div className="max-lg:px-0 px-6">
      <header
        className={`bg-[#FCFCFC] rounded-[18px] shadow-[0_4px_100px_0_rgba(2,2,18,0.10)] h-[105px] flex items-center relative z-[1000]  w-full  justify-between pl-10 pr-6 flex-row`}
      >
        {/* header */}
        <Link href="/">
          <div className="inline-flex items-center gap-2 h-8 w-[154px] shrink-0">
            <LogoIcon />
          </div>
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex gap-[31.63px]  ">
            {["Developers", "Use Cases", "VFY Token", "Blog"].map(
              (navItem, idx) => (
                <li
                  key={idx}
                  className="text-[#020712] not-italic text-xl leading-7 h-7 font-normal  font-grotesk cursor-pointer"
                >
                  {navItem}
                </li>
              )
            )}
          </ul>
        </nav>

        <Button variant="outline" className="hidden lg:flex">
          Start Building <CaretRight />
        </Button>
        <Button variant="outline" className="block lg:hidden">
          <Menu />
        </Button>
      </header>
    </div>
  );
}

export default Navbar;
