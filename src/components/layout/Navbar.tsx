"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-brand-lighter" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center shadow-inner">
           <span className="text-white font-bold text-xl leading-none">F</span>
        </div>
        <span className="font-heading font-bold text-xl text-brand-dark tracking-tight">FaciliCond</span>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-dark">
        <a href="#solucao" className="hover:text-brand-primary transition-colors">Solução</a>
        <a href="#funcionalidades" className="hover:text-brand-primary transition-colors">Funcionalidades</a>
      </nav>

      <div className="hidden md:flex">
        <a 
          href="https://app.facilicond.online"
          className="bg-brand-primary hover:bg-brand-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-lg shadow-brand-primary/20"
        >
          Acessar Painel
        </a>
      </div>

      <button className="md:hidden text-brand-dark">
        <Menu size={24} />
      </button>
    </motion.header>
  );
}
