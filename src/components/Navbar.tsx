import { CaretRight, LogoIcon } from "@/constants/Icons/svg";
import React from "react";
import Button from "./ui/button";
import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-[#FCFCFC] rounded-[18px] shadow-[0_4px_100px_0_rgba(2,2,18,0.10)] h-[105px] flex items-center relative z-[1000]  justify-between pl-10 pr-6 flex-row">
      {/* header */}
      <Link href="/">
        <div className="inline-flex items-center gap-2 h-8 w-[154px] shrink-0">
          <LogoIcon />
        </div>
      </Link>
      <nav>
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

      <Button
        variant="outline"
        icon={<CaretRight/>}
        iconPosition="right"
        className="text-[#020212] font-grotesk text-[16.2px] font-normal leading-[22.68px] text-center"
      >
        Start Building
      </Button>
    </header>
  );
}

export default Navbar;
