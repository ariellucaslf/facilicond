"use client";

import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-primary py-24 md:py-28">
      <div className="pointer-events-none absolute -right-20 -top-20 size-[28rem] rounded-full bg-white/10 blur-3xl" />
      <div className="site-wrap relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white/70">
            Próximo passo
          </p>
          <h2 className="display-md mt-4 text-white">
            Traga o conselho. A gente mostra o condomínio funcionando — não um slide.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/75">
            Entre no painel se já é cliente, ou fale com a gente para dimensionar unidades,
            totem e ponto eletrônico.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://app.facilicond.online"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-semibold text-ink transition-transform duration-300 hover:scale-[1.02]"
            >
              Acessar o painel
            </a>
            <a
              href="#planos"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-white/10"
            >
              Voltar aos planos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
