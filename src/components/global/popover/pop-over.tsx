import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import React, { JSX } from "react";

type Props = {
  trigger: JSX.Element;
  className?: string;
  children: React.ReactNode;
};

const PopOver = ({ trigger, className, children }: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        align="end"
        side="bottom"
        className={cn("bg-[#1D1D1D] shadow-lg", className)}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default PopOver;
