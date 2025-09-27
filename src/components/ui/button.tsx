"use client";

import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "outline" | "primary" | "secondary";
  size?: "default" | "sm" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "outline",
  size = "default",
  icon,
  iconPosition = "left",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex rounded-full px-[25px]  text-white  h-[57px] items-center gap-[16.63px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants: Record<typeof variant, string> = {
    outline:
      "border border-[#020212] bg-transparent text-[#020212] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:bg-gray-100",
    primary:
      "border border-[#020212] bg-[#020212] text-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:bg-[#33334d]",
    secondary:
      "border border-[#020212] bg-[#FCFCFC] text-[#020212] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:bg-gray-100",
  };

  const sizes: Record<typeof size, string> = {
    sm: "px-4 py-2 text-sm w-auto",
    default: "px-[25px] py-[16.5px] w-[198.59px] text-base",
    lg: "px-6 py-3 text-lg w-auto",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="shrink-0 text-white ">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0 text-white ">{icon}</span>
      )}
    </button>
  );
}
