"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  {
    q: "Serve para condomínio pequeno?",
    a: "Sim. O contrato é por unidades. Um prédio de poucas torres usa o mesmo painel, totem e app — só a cota muda.",
  },
  {
    q: "Substitui o WhatsApp de vez?",
    a: "Substitui o WhatsApp como ferramenta oficial. Comunicado, ocorrência e encomenda passam a ter dono, horário e histórico. O grupo pode existir; a gestão não mora mais nele.",
  },
  {
    q: "O totem precisa de um computador na portaria?",
    a: "Não. Roda em tablet, em modo kiosk, pareado uma vez com token de dispositivo. Visitante, encomenda, garagem e mais.",
  },
  {
    q: "E o ponto eletrônico?",
    a: "É um add-on por cota de colaboradores. O registro oficial acontece no totem, com as regras do condomínio, e o colaborador consulta o espelho no app da equipe.",
  },
  {
    q: "Como começa?",
    a: "A gente cadastra o condomínio, define o plano, a cota de unidades e libera o painel. Síndico, portaria e moradores entram com papéis separados.",
  },
];

export function FAQ() {
  const baseId = useId();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="site-wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-brand-primary">
            Dúvidas
          </p>
          <h2 className="display-md mt-4">Antes de chamar o conselho.</h2>
        </div>

        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {items.map((item, i) => {
            const expanded = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`${baseId}-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    onClick={() => setOpen(expanded ? -1 : i)}
                  >
                    <span className="font-display text-xl md:text-2xl">{item.q}</span>
                    <ChevronDown
                      className={`shrink-0 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                      size={20}
                    />
                  </button>
                </h3>
                <div
                  id={`${baseId}-${i}`}
                  hidden={!expanded}
                  className="pb-5 text-base leading-relaxed text-ink-soft"
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
