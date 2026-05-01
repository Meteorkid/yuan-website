"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden bg-slate-950",
        containerClassName
      )}
    >
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at center, rgba(99, 102, 241, ${0.05 + i * 0.02}) 0%, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          />
        ))}
      </div>
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
