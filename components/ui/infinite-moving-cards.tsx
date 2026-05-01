"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    description: string;
    date: string;
    type: string;
    platform: string;
    link: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = React.useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 dark:border-slate-800 border-slate-200 px-8 py-6 md:w-[450px] dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 bg-gradient-to-br from-white to-slate-50"
          >
            <blockquote>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={cn(
                    "text-xs px-2 py-0.5 rounded-full",
                    item.type === "award"
                      ? "bg-yellow-500/10 text-yellow-400"
                      : item.type === "video"
                        ? "bg-red-500/10 text-red-400"
                        : "bg-blue-500/10 text-blue-400"
                  )}
                >
                  {item.type === "award"
                    ? "获奖"
                    : item.type === "video"
                      ? "视频"
                      : "文章"}
                </span>
                <span className="text-xs dark:text-slate-500 text-slate-400">
                  {item.platform}
                </span>
              </div>
              <h4 className="font-semibold text-lg dark:text-white text-slate-900 mb-2 line-clamp-1">
                {item.title}
              </h4>
              <p className="text-sm dark:text-slate-400 text-slate-600 line-clamp-2 mb-4">
                {item.description}
              </p>
              <span className="text-xs dark:text-slate-500 text-slate-400">
                {item.date}
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
