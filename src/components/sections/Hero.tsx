"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { DashboardPreview, PhonePreview } from "@/components/mockups/ProductPreviews";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-28">
      <div className="site-wrap grid items-center gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
            SaaS para condomínios · Brasil
          </p>

          <h1 className="display-xl text-ink">
            O condomínio
            <br />
            sai do <em className="font-medium italic text-brand-primary">WhatsApp</em>
            <br />e ganha um sistema.
          </h1>

          <p className="lede mt-7 max-w-xl">
            FaciliCond junta painel do síndico, totem na portaria e app no bolso.
            Encomenda avisada, visitante rastreado, comunicado oficial — sem caderno
            e sem grupo explodindo.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-7 py-4 text-base font-semibold text-white shadow-[0_16px_40px_-16px_rgba(33,84,214,0.7)] transition-all duration-300 hover:bg-brand-primary-dark hover:-translate-y-px"
            >
              Conhecer os planos
            </a>
            <a
              href="#sistema"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold text-ink transition-colors duration-300 hover:text-brand-primary"
            >
              Ver o ecossistema
              <ArrowDownRight size={18} />
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {[
              { n: "3", l: "produtos, um login" },
              { n: "0", l: "papel na retirada" },
              { n: "1", l: "mural oficial" },
            ].map((item) => (
              <div key={item.l}>
                <p className="font-display text-3xl text-ink">{item.n}</p>
                <p className="mt-1 text-sm leading-snug text-ink-soft">{item.l}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative pb-8 sm:pb-4 lg:pb-8"
        >
          <DashboardPreview />
          <div className="mt-4 flex justify-center sm:absolute sm:-bottom-8 sm:-left-4 sm:mt-0 lg:-left-14">
            <PhonePreview />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
