"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beams = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      {beams.map((i) => (
        <motion.div
          key={i}
          className="absolute h-[600px] w-[1px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent"
          style={{
            left: `${15 + i * 15}%`,
            top: "-10%",
          }}
          animate={{
            y: ["0%", "100%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};
