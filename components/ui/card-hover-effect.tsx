"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const rotateX = ((mouseY - height / 2) / height) * -10;
    const rotateY = ((mouseX - width / 2) / width) * 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className={cn("flex items-center justify-center", containerClassName)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        onMouseMove={onMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={onMouseLeave}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={cn("relative", className)}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateZ = 0,
  ...props
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateZ?: number | string;
  [key: string]: unknown;
}) => {
  return (
    <Tag
      className={cn(className)}
      style={{ transform: `translateZ(${translateZ}px)` }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon?: React.ReactNode;
    tags?: string[];
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                layoutId="hoverEffect"
                className="absolute inset-0 h-full w-full rounded-3xl dark:bg-slate-800/[0.8] bg-slate-200/[0.8] block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10 rounded-3xl dark:bg-black bg-white border dark:border-slate-800 border-slate-200 p-6 h-full">
            {item.icon && <div className="mb-4">{item.icon}</div>}
            <h3 className="font-bold text-lg dark:text-white text-black mb-2">
              {item.title}
            </h3>
            <p className="text-sm dark:text-slate-400 text-slate-600 mb-4">
              {item.description}
            </p>
            {item.tags && (
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full dark:bg-slate-800 bg-slate-100 dark:text-slate-300 text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </a>
      ))}
    </div>
  );
};
