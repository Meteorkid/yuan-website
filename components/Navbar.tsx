"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { siteConfig } from "@/data/content";

const navItems = [
  { name: "首页", link: "#hero" },
  { name: "关于", link: "#about" },
  { name: "技术栈", link: "#tech" },
  { name: "项目", link: "#projects" },
  { name: "获奖", link: "#articles" },
];

export default function Navbar() {
  return <FloatingNav navItems={navItems} />;
}
