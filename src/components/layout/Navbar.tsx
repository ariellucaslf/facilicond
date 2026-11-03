"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { APP_URL } from "@/lib/content";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#contraste", label: "O que muda" },
  { href: "#papeis", label: "Para quem é" },
  { href: "#modulos", label: "Módulos" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#planos", label: "Preços" },
  { href: "#faq", label: "Dúvidas" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-ink/10 bg-paper/92 shadow-[0_12px_36px_-24px_rgba(11,26,51,0.35)] backdrop-blur-md"
          : "bg-paper/60 backdrop-blur-xs"
      )}
    >
      <div className="site-wrap flex items-center justify-between py-3.5">
        <a
          href="#topo"
          className="relative z-10 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
          onClick={() => setOpen(false)}
        >
          <Logo priority />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.9rem] font-medium text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href={APP_URL}
            className="rounded-full px-4 py-2 text-sm font-semibold text-ink-soft transition-colors duration-200 hover:text-ink"
          >
            Entrar
          </a>
          <a
            href="#planos"
            className="inline-flex items-center gap-1.5 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-primary"
          >
            Simular valor
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <button
          type="button"
          className="relative z-10 rounded-xl border border-ink/10 bg-white/70 p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-ink/10 bg-paper md:hidden"
            aria-label="Mobile"
          >
            <div className="site-wrap flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-white/70"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-2.5 border-t border-ink/10 pt-4">
                <a
                  href={APP_URL}
                  className="rounded-full border border-ink/15 bg-white px-4 py-3 text-center text-sm font-semibold text-ink"
                  onClick={() => setOpen(false)}
                >
                  Entrar
                </a>
                <a
                  href="#planos"
                  className="rounded-full bg-brand-primary px-4 py-3 text-center text-sm font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  Simular valor
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
