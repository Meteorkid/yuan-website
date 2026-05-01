"use client";
import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "@/data/content";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-slate-950 overflow-hidden"
    >
      {/* 装饰背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            关于我
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* 左侧：个人简介 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              {aboutData.bio}
            </p>

            <div className="space-y-3">
              {aboutData.highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-purple-400 mt-1">▸</span>
                  <span className="text-slate-400">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 右侧：时间线 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-transparent" />

            <div className="space-y-8">
              {aboutData.timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.15, duration: 0.5 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-purple-500 border-2 border-slate-950" />
                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-5 border border-slate-800 hover:border-purple-500/30 transition-colors">
                    <span className="text-sm text-purple-400 font-mono">
                      {item.year}
                    </span>
                    <h3 className="text-white font-semibold mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
