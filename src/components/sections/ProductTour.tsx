"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DashboardPreview, PhonePreview, TotemPreview } from "@/components/mockups/ProductPreviews";

const tabs = [
  {
    id: "portaria",
    label: "Portaria",
    title: "Visitante entra com rastro. Pacote sai com assinatura.",
    body: "O totem registra quem chegou. O morador libera pelo app. A encomenda é bipada, notificada e retirada com QR — sem lista de papel na gaveta.",
    points: ["Check-in de visitante e prestador", "Encomendas com código e push", "Ponto eletrônico no mesmo kiosk (quando contratado)"],
    visual: "totem" as const,
  },
  {
    id: "gestao",
    label: "Gestão",
    title: "O painel que o síndico realmente usa no dia a dia.",
    body: "Unidades, moradores, mural, ocorrências, reservas, manutenções, classificados, achados e perdidos, veículos e pets. Tudo no mesmo condomínio — sem vazamento entre clientes.",
    points: ["Advertências e multas com histórico", "Reservas de áreas comuns", "Financeiro e inadimplência visíveis"],
    visual: "dash" as const,
  },
  {
    id: "morador",
    label: "Morador",
    title: "Comunicado oficial no bolso, não no grupo.",
    body: "O app entrega o que o WhatsApp mistura: aviso da administração, ocorrência, enquete, reserva, visita autorizada e o pacote que acabou de chegar.",
    points: ["Ocorrências com acompanhamento", "Enquetes e classificados", "Extrato e avisos financeiros"],
    visual: "phone" as const,
  },
];

export function ProductTour() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section id="funcionalidades" className="bg-white py-24 md:py-32">
      <div className="site-wrap">
        <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-brand-primary">
          Funcionalidades
        </p>
        <h2 className="display-md mt-4 max-w-3xl">Do interfone ao caixa, no mesmo fio.</h2>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Áreas do produto">
          {tabs.map((tab) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(tab.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  selected
                    ? "bg-ink text-white"
                    : "bg-paper text-ink-soft hover:bg-paper-deep hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-copy"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
            >
              <h3 className="font-display text-3xl md:text-4xl">{current.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">{current.body}</p>
              <ul className="mt-6 space-y-3">
                {current.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[0.95rem] text-ink">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-visual"}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.28 }}
              className="flex justify-center lg:justify-end"
            >
              {current.visual === "totem" && (
                <div className="w-full max-w-md">
                  <TotemPreview />
                </div>
              )}
              {current.visual === "dash" && (
                <div className="w-full">
                  <DashboardPreview compact />
                </div>
              )}
              {current.visual === "phone" && <PhonePreview />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
