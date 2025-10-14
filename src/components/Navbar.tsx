"use client";

import { CaretRight, LogoIcon, Menu } from "@/constants/Icons/svg";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion, stagger, useAnimation } from "motion/react";
import { cn } from "@/lib/utils";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const controls = useAnimation();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      setIsScrolled(scrolled);
      controls.start({
        y: scrolled ? 0 : 0,

        height: scrolled ? 80 : 105,
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 20,
          ease: "easeInOut",
        },
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);
  return (
    <motion.div
      className={cn(
        "max-lg:px-0 px-6 ",
        isScrolled
          ? "fixed top-0 z-[10000]   w-full max-lg:px-0 px-6  transform transition-all duration-300 scroll-smooth "
          : ""
      )}
      animate={controls}
    >
      <motion.header
        className={cn(
          `bg-[#FCFCFC] rounded-[18px] shadow-[0_4px_100px_0_rgba(2,2,18,0.10)] xl:h-[105px] py-3 flex items-center relative z-[1000]  w-full  justify-between pl-10 pr-6 flex-row`,
          isScrolled
            ? "transform transition-all duration-300 scroll-smooth"
            : ""
        )}
        animate={{
          transition: { type: "tween", duration: 300 },
        }}
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
                  className="text-[#020712] not-italic text-xl leading-7 h-7 font-normal  font-grotesk cursor-pointer hover:text-[#6190f5]"
                >
                  {navItem}
                </li>
              )
            )}
          </ul>
        </nav>

        <Button variant="outline" className="hidden lg:flex hover:border-none">
          Start Building <CaretRight />
        </Button>
        <Button variant="outline" className="block lg:hidden">
          <Menu />
        </Button>
      </motion.header>
    </motion.div>
  );
}

export default Navbar;
