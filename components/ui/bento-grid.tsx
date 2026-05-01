"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-2xl shadow-xl dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 transition duration-300",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-300">
        <div className="flex items-center gap-2 mb-2">
          {icon && <span className="text-2xl">{icon}</span>}
          <h3 className="font-bold text-lg dark:text-neutral-200 text-neutral-800">
            {title}
          </h3>
        </div>
        <p className="text-sm dark:text-neutral-400 text-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
