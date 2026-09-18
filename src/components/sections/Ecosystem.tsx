"use client";

import { motion } from "framer-motion";
import { DashboardPreview, PhonePreview, TotemPreview } from "@/components/mockups/ProductPreviews";

const pieces = [
  {
    kicker: "Painel web",
    title: "O síndico no comando.",
    copy: "Multas, advertências, financeiro, reservas, mural e operação do prédio num só lugar — com isolamento por condomínio.",
  },
  {
    kicker: "Totem",
    title: "A portaria em modo kiosk.",
    copy: "Tablet na recepção: visitante, encomenda e ponto eletrônico. Pareado por token de dispositivo, sem login humano solto.",
  },
  {
    kicker: "App",
    title: "Morador e equipe no bolso.",
    copy: "Push de pacote, ocorrência, comunicado, reserva de área comum e liberação de visita. Colaborador vê escala e espelho de ponto.",
  },
];

export function Ecosystem() {
  return (
    <section id="sistema" className="py-24 md:py-32">
      <div className="site-wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-brand-primary">
              Ecossistema
            </p>
            <h2 className="display-md mt-4">Três frentes. Uma operação.</h2>
          </div>
          <p className="lede max-w-sm">
            Não é um app isolado. É a portaria, a gestão e o morador falando a mesma língua.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-[1.8rem] border border-ink/10 bg-white p-6 shadow-[0_20px_50px_-32px_rgba(18,21,28,0.4)] lg:col-span-7"
          >
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-brand-primary">
              {pieces[0].kicker}
            </p>
            <h3 className="mt-2 font-display text-3xl">{pieces[0].title}</h3>
            <p className="mt-3 max-w-md text-ink-soft">{pieces[0].copy}</p>
            <div className="mt-6 transition-transform duration-500 group-hover:-translate-y-1">
              <DashboardPreview compact />
            </div>
          </motion.article>

          <div className="grid gap-5 lg:col-span-5">
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[1.8rem] border border-ink/10 bg-ink p-6"
            >
              <TotemPreview />
              <h3 className="mt-5 font-display text-2xl text-white">{pieces[1].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{pieces[1].copy}</p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 rounded-[1.8rem] border border-ink/10 bg-paper-deep p-5 sm:flex-row"
            >
              <PhonePreview />
              <div>
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-brand-primary">
                  {pieces[2].kicker}
                </p>
                <h3 className="mt-2 font-display text-2xl">{pieces[2].title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{pieces[2].copy}</p>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
