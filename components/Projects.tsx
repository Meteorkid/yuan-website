"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";
import { projectsData, projectCategories } from "@/data/content";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            项目作品
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            我参与开发和维护的一些项目
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* 分类筛选 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* 项目卡片 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <HoverEffect
              items={filteredProjects.map((p) => ({
                title: p.title,
                description: p.description,
                link: p.link,
                tags: p.tags,
                icon: p.featured ? (
                  <span className="text-yellow-400 text-sm">⭐ 精选</span>
                ) : undefined,
              }))}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
