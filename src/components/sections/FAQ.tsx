import { Plus } from "lucide-react";
import { CONTACT_EMAIL, FAQ_ITEMS } from "@/lib/content";

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="site-wrap grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div>
          <p className="tag text-brand-primary">Perguntas frequentes</p>
          <h2 className="display-md mt-4 text-ink">
            Respostas diretas para levar à reunião do conselho.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Ficou alguma dúvida específica sobre o regimento ou a estrutura do seu
            condomínio? Escreva para{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-brand-primary underline decoration-brand-primary/35 underline-offset-4 hover:decoration-brand-primary"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>

        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {FAQ_ITEMS.map((item, idx) => (
            <details
              key={item.q}
              name="facilicond-faq"
              open={idx === 0}
              className="faq-item group"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left select-none">
                <span className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-brand-primary md:text-xl">
                  {item.q}
                </span>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-ink/12 bg-paper/70 text-ink transition-transform duration-300 group-open:rotate-45 group-open:border-brand-primary group-open:bg-brand-primary group-open:text-white">
                  <Plus className="size-4" />
                </span>
              </summary>
              <div className="pb-6 pr-10 text-base leading-relaxed text-ink-soft">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
