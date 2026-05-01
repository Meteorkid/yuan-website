"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        containerClassName
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn("relative z-10", className)}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block rounded-lg bg-gradient-to-r from-purple-300/50 to-blue-300/50 px-1 pb-1",
        className
      )}
    >
      {children}
    </motion.span>
  );
};
