"use client";
import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", href: siteConfig.social.github, icon: "⚡" },
  ].filter((link) => link.href && link.href !== "#");

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      {/* 顶部灯光效果 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* 左列：Logo 和简介 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              💻 {siteConfig.name}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </motion.div>

          {/* 中列：快速链接 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">快速导航</h4>
            <div className="space-y-2">
              {[
                { label: "关于我", href: "#about" },
                { label: "技术栈", href: "#tech" },
                { label: "项目作品", href: "#projects" },
                { label: "获奖荣誉", href: "#articles" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-slate-400 hover:text-purple-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* 右列：联系方式 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">联系我</h4>
            <p className="text-sm text-slate-400 mb-4">
              📧 {siteConfig.email}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-lg hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 底部版权 */}
        <div className="border-t border-slate-800/50 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 mt-2">
            Built with Next.js, Tailwind CSS & Aceternity UI
          </p>
        </div>
      </div>
    </footer>
  );
}
