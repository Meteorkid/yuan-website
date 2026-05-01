"use client";
import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { techStackData } from "@/data/content";

export default function TechStack() {
  return (
    <section id="tech" className="relative py-20 md:py-32 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            技术栈
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            以下是我在日常开发中常用的技术和工具
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <BentoGrid className="max-w-5xl mx-auto">
          {techStackData.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <BentoGridItem
                title={tech.category}
                icon={<span>{tech.icon}</span>}
                description={
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tech.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/50 hover:border-purple-500/50 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                }
                className="dark:bg-slate-900/50 dark:border-slate-800 h-full"
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
