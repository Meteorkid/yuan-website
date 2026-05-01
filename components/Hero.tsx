"use client";
import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { heroData, siteConfig } from "@/data/content";
import { BackgroundBeams } from "./ui/background-beams";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 背景光效 */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <BackgroundBeams />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* 头像 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 animate-spin-slow blur-md opacity-60" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-slate-800 mx-auto">
              <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-4xl md:text-5xl font-bold text-white">
                刘
              </div>
            </div>
          </div>
        </motion.div>

        {/* 问候语 */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-slate-400 text-lg md:text-xl mb-2"
        >
          {heroData.greeting}
        </motion.p>

        {/* 名字 - 使用 Highlight 高亮效果 */}
        <HeroHighlight containerClassName="mb-4">
          <h1 className="text-4xl md:text-7xl font-bold text-center dark:text-white text-black">
            <Highlight>{heroData.name}</Highlight>
          </h1>
        </HeroHighlight>

        {/* 标语 */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl md:text-2xl text-slate-300 mb-6 font-medium"
        >
          {heroData.tagline}
        </motion.h2>

        {/* 描述 - Text Generate Effect */}
        <TextGenerateEffect
          words={heroData.description}
          className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10"
          duration={0.3}
        />

        {/* 社交链接按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {[
            { label: "GitHub", href: siteConfig.social.github, icon: "⚡" },
            { label: "邮箱", href: `mailto:${siteConfig.email}`, icon: "📧" },
          ].filter((item) => item.href && item.href !== "#").map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-5 py-2.5 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-300 hover:text-white hover:border-purple-500/50 transition-all duration-300 text-sm font-medium"
            >
              <span className="mr-1.5">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* 滚动指示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
