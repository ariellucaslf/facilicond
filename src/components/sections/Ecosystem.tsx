"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, Check, HardHat, Smartphone, Tablet } from "lucide-react";
import {
  AdminRolePreview,
  ResidentRolePreview,
  StaffRolePreview,
  TotemRolePreview,
} from "@/components/mockups/ProductPreviews";
import { AUDIENCES, type AudienceId } from "@/lib/content";
import { cn } from "@/lib/utils";

const ICONS: Record<AudienceId, typeof Building2> = {
  sindico: Building2,
  morador: Smartphone,
  portaria: Tablet,
  equipe: HardHat,
};

export function Ecosystem() {
  const [selected, setSelected] = useState<AudienceId>("sindico");
  const current = AUDIENCES.find((a) => a.id === selected) ?? AUDIENCES[0];

  return (
    <section id="papeis" className="bg-paper py-24 md:py-32">
      <div className="site-wrap">
        <div className="max-w-3xl">
          <p className="tag text-brand-primary">Quatro experiências dedicadas</p>
          <h2 className="display-md mt-4 text-ink">
            Cada pessoa do prédio vê apenas o que precisa — conectado à mesma base.
          </h2>
          <p className="lede mt-5">
            Nada de um painel confuso igual para todo mundo. Síndico, morador,
            portaria e equipe operam em interfaces próprias, com permissões
            separadas.
          </p>
        </div>

        {/* Seletor de papéis */}
        <div
          role="tablist"
          aria-label="Interfaces por perfil do condomínio"
          className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-4"
        >
          {AUDIENCES.map((item) => {
            const Icon = ICONS[item.id];
            const active = item.id === selected;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelected(item.id)}
                className={cn(
                  "flex flex-col items-start gap-2 rounded-2xl border p-4 text-left transition-all duration-200 cursor-pointer",
                  active
                    ? "border-brand-primary bg-white shadow-[0_18px_40px_-24px_rgba(33,84,214,0.45)]"
                    : "border-ink/10 bg-white/55 hover:border-ink/25 hover:bg-white"
                )}
              >
                <div className="flex w-full items-center justify-between">
                  <span
                    className={cn(
                      "flex size-9 items-center justify-center rounded-xl transition-colors",
                      active
                        ? "bg-brand-primary text-white"
                        : "bg-paper-deep text-ink"
                    )}
                  >
                    <Icon className="size-4" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">
                    {item.channel}
                  </span>
                </div>
                <p className="mt-1 font-display text-lg font-semibold text-ink">
                  {item.label}
                </p>
              </button>
            );
          })}
        </div>

        {/* Painel do papel ativo */}
        <div className="mt-8 rounded-[1.8rem] border border-ink/10 bg-white p-6 shadow-[0_24px_60px_-36px_rgba(11,26,51,0.3)] md:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-copy"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-sky/60 px-3 py-1 font-mono text-xs font-semibold text-brand-primary">
                  {current.label} · {current.channel}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink md:text-4xl">
                  {current.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  {current.body}
                </p>

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {current.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 rounded-xl border border-ink/8 bg-[#fbfaf7] p-3 text-sm font-medium text-ink"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-primary" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-preview"}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.24 }}
              >
                {current.id === "sindico" && <AdminRolePreview />}
                {current.id === "morador" && <ResidentRolePreview />}
                {current.id === "portaria" && <TotemRolePreview />}
                {current.id === "equipe" && <StaffRolePreview />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
