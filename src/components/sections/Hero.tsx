import { ArrowRight, Calculator, Check } from "lucide-react";
import { HeroStage } from "@/components/mockups/HeroStage";
import { APP_URL, formatBRL, PRICING } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Malha arquitetônica discreta */}
      <div className="blueprint pointer-events-none absolute inset-0" aria-hidden />

      <div className="site-wrap relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-14">
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-ink/12 bg-white/85 px-3.5 py-1.5 shadow-2xs">
            <span className="live-dot size-2 rounded-full bg-brand-accent" />
            <span className="tag text-ink">
              Web · App &amp; PWA · Totem de Portaria · Equipe
            </span>
          </div>

          <h1 className="display-xl mt-6 text-ink">
            Do portão ao livro-caixa, o condomínio responde no{" "}
            <span className="text-brand-primary">mesmo lugar.</span>
          </h1>

          <p className="lede mt-6 max-w-xl">
            FaciliCond conecta painel do síndico, aplicativo do morador, portal do
            colaborador e totem na guarita. Encomenda sai com QR de uso único,
            manutenção preventiva segue checklist e comunicado registra quem leu.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-7 py-4 text-base font-semibold text-white shadow-[0_18px_38px_-16px_rgba(33,84,214,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-dark"
            >
              Testar {PRICING.trialDays} dias grátis
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/80 px-6 py-4 text-base font-semibold text-ink transition-all duration-200 hover:border-brand-primary/40 hover:bg-white"
            >
              <Calculator className="size-4 text-brand-primary" />
              Calcular valor do meu prédio
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-ink-soft">
            {[
              "Implantação por planilha de unidades",
              "Sem hardware proprietário",
              "Exportação integral CSV/ZIP (LGPD)",
            ].map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Check className="size-3.5 text-brand-accent" />
                {item}
              </li>
            ))}
          </ul>

          {/* Fatos reais do contrato */}
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-ink/12 pt-7">
            <div>
              <p className="font-mono text-xl font-bold text-ink sm:text-2xl">
                {formatBRL(PRICING.basePrice)}
              </p>
              <p className="mt-1 text-xs leading-snug text-ink-soft">
                mensais até {PRICING.baseUnits} unidades
              </p>
            </div>
            <div>
              <p className="font-mono text-xl font-bold text-ink sm:text-2xl">
                4 frentes
              </p>
              <p className="mt-1 text-xs leading-snug text-ink-soft">
                síndico, morador, portaria e equipe
              </p>
            </div>
            <div>
              <p className="font-mono text-xl font-bold text-ink sm:text-2xl">
                5 min
              </p>
              <p className="mt-1 text-xs leading-snug text-ink-soft">
                validade do QR 128-bit na retirada
              </p>
            </div>
          </div>
        </div>

        <HeroStage />
      </div>
    </section>
  );
}
