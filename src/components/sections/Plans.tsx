"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Padrão",
    eyebrow: "Operação do dia",
    pitch: "Para o condomínio que quer sair do caderno e do grupo.",
    featured: false,
    items: [
      "Painel do síndico",
      "App do morador",
      "Totem de portaria",
      "Encomendas com QR e aviso",
      "Visitantes e prestadores",
      "Mural e ocorrências",
      "Reservas de áreas comuns",
    ],
  },
  {
    name: "Completo",
    eyebrow: "O mais escolhido",
    pitch: "Gestão, convivência e transparência no mesmo contrato.",
    featured: true,
    items: [
      "Tudo do Padrão",
      "Financeiro e inadimplência",
      "Advertências e multas rastreáveis",
      "Enquetes e classificados",
      "Achados e perdidos",
      "Manutenções e chamados",
      "Chat interno da administração",
    ],
  },
  {
    name: "Administradoras",
    eyebrow: "Multi-condomínio",
    pitch: "Vários condomínios, cotas e isolamento — sem misturar dados.",
    featured: false,
    items: [
      "Vários condomínios numa operação",
      "Cota de unidades por contrato",
      "Ponto eletrônico como add-on",
      "Modelos de documento da administradora",
      "Exportação LGPD em CSV/ZIP",
      "Onboarding assistido",
      "Condições negociadas",
    ],
  },
];

export function Plans() {
  return (
    <section id="planos" className="bg-paper py-24 md:py-32">
      <div className="site-wrap">
        <div className="max-w-2xl">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-brand-primary">
            Planos
          </p>
          <h2 className="display-md mt-4">Escolha o ritmo do seu condomínio.</h2>
          <p className="lede mt-5">
            Valores são fechados por unidades e pelo que o prédio realmente usa —
            inclusive ponto eletrônico. Sem tabela genérica escondida num pop-up.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`flex flex-col rounded-[1.8rem] p-7 md:p-8 ${
                plan.featured
                  ? "bg-ink text-white shadow-[0_30px_70px_-28px_rgba(18,21,28,0.55)]"
                  : "border border-ink/10 bg-white"
              }`}
            >
              <p
                className={`text-[0.72rem] font-bold uppercase tracking-[0.16em] ${
                  plan.featured ? "text-[#7ad4de]" : "text-brand-primary"
                }`}
              >
                {plan.eyebrow}
              </p>
              <h3 className="mt-3 font-display text-3xl">{plan.name}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${plan.featured ? "text-white/65" : "text-ink-soft"}`}>
                {plan.pitch}
              </p>
              <p className="mt-6 font-display text-2xl">Sob consulta</p>
              <p className={`text-sm ${plan.featured ? "text-white/50" : "text-ink-soft"}`}>
                mensal · por unidades contratadas
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${plan.featured ? "text-[#7ad4de]" : "text-brand-primary"}`}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://app.facilicond.online"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  plan.featured
                    ? "bg-white text-ink hover:bg-[#7ad4de]"
                    : "bg-ink text-white hover:bg-brand-primary"
                }`}
              >
                Falar sobre este plano
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
