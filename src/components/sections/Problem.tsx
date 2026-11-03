import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { BEFORE_AFTER } from "@/lib/content";

export function Problem() {
  return (
    <section
      id="contraste"
      className="blueprint-dark relative overflow-hidden bg-navy py-24 text-white md:py-32"
    >
      <div className="site-wrap">
        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="tag text-brand-mint">O que muda na prática</p>
            <h2 className="display-md mt-4 text-white">
              Quando a gestão vive em grupo de mensagem e caderno, tudo vira versão
              contra versão.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-white/70 lg:pb-1">
            Ferramenta improvisada não tem vínculo por unidade, não comprova quem
            retirou uma encomenda e desaparece na troca de síndico. No FaciliCond,
            cada evento nasce amarrado a unidade, horário e responsável.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {BEFORE_AFTER.map((row, index) => (
            <article
              key={row.area}
              className="reveal flex flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-white/20 md:p-7"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-display text-xl font-semibold text-white">
                  {row.area}
                </span>
                <span className="font-mono text-xs text-brand-mint">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="mt-0.5 size-4 shrink-0 text-white/40" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-white/45">
                      No improviso
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                      {row.before}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-brand-mint/20 bg-brand-primary/20 p-4">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-mint" />
                  <div>
                    <p className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-brand-mint">
                      No FaciliCond <ArrowRight className="size-3" />
                    </p>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-white">
                      {row.after}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
