"use client";
import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export function Spotlight({ className, fill }: SpotlightProps) {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute z-[1] animate-pulse",
        className
      )}
      width="100%"
      height="100%"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="spotlight-gradient"
          cx="50%"
          cy="50%"
          r="50%"
        >
          <stop offset="0%" stopColor={fill || "white"} stopOpacity={0.3} />
          <stop offset="100%" stopColor={fill || "white"} stopOpacity={0} />
        </radialGradient>
      </defs>
      <ellipse
        cx="500"
        cy="500"
        rx="500"
        ry="500"
        fill="url(#spotlight-gradient)"
      />
    </svg>
  );
}
