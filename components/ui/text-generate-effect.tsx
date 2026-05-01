"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, setScope] = useState<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (scope) {
      observer.observe(scope);
    }

    return () => observer.disconnect();
  }, [scope]);

  const wordsArray = words.split(" ");

  const renderWords = () => {
    return (
      <motion.div ref={setScope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            initial={{ opacity: 0, filter: filter ? "blur(10px)" : "none" }}
            animate={
              isVisible
                ? { opacity: 1, filter: filter ? "blur(0px)" : "none" }
                : {}
            }
            transition={{
              duration: duration,
              delay: idx * 0.2,
            }}
            className="inline-block mr-[0.25em] dark:text-white text-black"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
