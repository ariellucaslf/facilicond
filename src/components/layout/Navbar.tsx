"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#problema", label: "O problema" },
  { href: "#sistema", label: "O sistema" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#planos", label: "Planos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,border] duration-300",
        scrolled || open
          ? "border-b border-ink/8 bg-paper/90 shadow-[0_10px_40px_-24px_rgba(18,21,28,0.35)] backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="site-wrap flex items-center justify-between py-4">
        <a href="#topo" className="relative z-10" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.92rem] font-medium text-ink-soft transition-colors duration-300 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://app.facilicond.online"
            className="px-3 py-2 text-sm font-semibold text-ink-soft transition-colors duration-300 hover:text-ink"
          >
            Entrar
          </a>
          <a
            href="#planos"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-primary"
          >
            Ver planos
          </a>
        </div>

        <button
          type="button"
          className="relative z-10 rounded-full p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-ink/8 md:hidden"
            aria-label="Mobile"
          >
            <div className="site-wrap flex flex-col gap-1 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://app.facilicond.online"
                className="mt-2 rounded-full border border-ink/15 px-4 py-3 text-center text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                Entrar no painel
              </a>
              <a
                href="#planos"
                className="rounded-full bg-ink px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Conhecer planos
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
