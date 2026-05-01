"use client";
import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { articlesData } from "@/data/content";

export default function Articles() {
  return (
    <section id="articles" className="relative py-20 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-slate-950" />

      <div className="relative z-10">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            获奖荣誉
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            参赛获奖与项目成果记录
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* 无限滚动卡片 */}
        <InfiniteMovingCards
          items={articlesData}
          direction="left"
          speed="slow"
          pauseOnHover={true}
        />

        {/* 第二行反向滚动 */}
        <div className="mt-4">
          <InfiniteMovingCards
            items={[...articlesData].reverse()}
            direction="right"
            speed="normal"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
}
