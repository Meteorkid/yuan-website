"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: unknown;
}) => {
  return (
    <div {...otherProps} className="relative">
      <motion.div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: `conic-gradient(from var(--border-angle), transparent 25%, #6366f1 50%, transparent 75%)`,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative bg-black rounded-[inherit] p-[1px]">
        {children}
      </div>
    </div>
  );
};

export const Button = ({
  borderRadius = "1.75rem",
  children,
  className,
  containerClassName,
  as: Tag = "button",
  duration,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
  duration?: number;
  [key: string]: unknown;
}) => {
  return (
    <Tag
      className={cn(
        "bg-transparent relative text-xl p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{ borderRadius }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className="h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]"
            style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.9] backdrop-blur-xl border border-slate-800 text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </Tag>
  );
};
