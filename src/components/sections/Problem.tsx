"use client";

import { motion } from "framer-motion";

const rows = [
  {
    n: "01",
    title: "O grupo vira assembleia permanente.",
    body: "Ocorrência, cobrança e fofoca no mesmo fio. Dado oficial some no scroll. O síndico vira moderador de chat.",
    after: "Mural, ocorrências e avisos com destinatário, horário e histórico.",
  },
  {
    n: "02",
    title: "A portaria ainda vive de caderno.",
    body: "Encomenda sem aviso, visitante sem rastro, retirada sem assinatura. Quando some um pacote, sobra conversa.",
    after: "Registro de encomendas, achados e perdidos, push no app e check-in de visitante no totem.",
  },
  {
    n: "03",
    title: "O caixa mora em planilha paralela.",
    body: "Inadimplência, multa e advertência espalhadas. Morador não vê. Síndico não fecha o mês com confiança.",
    after: "Financeiro no painel, documentos rastreados, transparência para quem precisa ver.",
  },
];

export function Problem() {
  return (
    <section id="problema" className="relative bg-ink text-paper py-24 md:py-32">
      <div className="site-wrap">
        <div className="max-w-3xl">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#7ad4de]">
            O que a gente resolve
          </p>
          <h2 className="display-md mt-4 text-white">
            Administrar não precisa ser um segundo emprego.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/65">
            Ferramenta genérica e WhatsApp não foram desenhados para portaria,
            unidade e assembleia. O FaciliCond foi.
          </p>
        </div>

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {rows.map((row, i) => (
            <motion.article
              key={row.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.05 }}
              className="grid gap-6 py-10 md:grid-cols-[5rem_1fr_1fr] md:gap-12"
            >
              <p className="font-display text-2xl text-[#7ad4de]">{row.n}</p>
              <div>
                <h3 className="font-display text-2xl md:text-[1.85rem] text-white">{row.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/60">{row.body}</p>
              </div>
              <p className="self-center rounded-2xl border border-white/10 bg-white/4 px-5 py-4 text-sm leading-relaxed text-white/85">
                <span className="mb-1 block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#7ad4de]">
                  Com FaciliCond
                </span>
                {row.after}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
