import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  " hover:bg-[#b5ffa5] font-[family-name:var(--font-space-grotesk)] inline-flex items-center cursor-pointer justify-center  whitespace-nowrap  leading-[23px] rounded-full  text-[18px] text-[#141414]   transition-all disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          " primary hover:bg-primary/90 relative overflow-hidden before:content-[''] before:absolute before:inset-y-0 before:left-[-60%] before:w-[60%] before:bg-gradient-to-r  before:from-white/40 before:via-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-500 hover:before:left-[110%]",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          " text-[#525866] bg-white shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] text-[#020212] border border-[#020212]",
        secondary: "bg-[#141414] text-white shadow-xs  hover:bg-[#b5ffa5]  hover:text-[#020212]",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[57px] px-6  gap-[16px]",
        sm: "h-10 rounded-[10px] gap-1.5 px-[14px] has-[>svg]:px-2.5 tracking-[-0.16px]",
        lg: "h-[52px] px-[36px] rounded-[10px]",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
