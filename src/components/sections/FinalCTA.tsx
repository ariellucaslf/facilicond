import { ArrowRight, Mail } from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";
import { APP_URL, CONTACT_EMAIL, PRICING } from "@/lib/content";

export function FinalCTA() {
  return (
    <section className="bg-paper pb-20 pt-8 md:pb-28">
      <div className="site-wrap">
        <div className="blueprint-dark relative overflow-hidden rounded-[2rem] bg-brand-primary px-6 py-14 text-white shadow-[0_32px_70px_-28px_rgba(33,84,214,0.65)] sm:px-10 md:px-14 md:py-18">
          <LogoMark
            className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-auto opacity-10"
            color="#ffffff"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="tag text-white/80">Implantação sem burocracia</p>
              <h2 className="display-md mt-3 text-white">
                Mostre o condomínio rodando de verdade — não uma apresentação em
                PDF.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                Importe a planilha de unidades, dispare os convites únicos e teste
                por {PRICING.trialDays} dias com portaria, equipe e moradores.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <a
                href={APP_URL}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-navy transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
              >
                Começar {PRICING.trialDays} dias grátis
                <ArrowRight className="size-4" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                  "Demonstração FaciliCond"
                )}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/20 sm:w-auto"
              >
                <Mail className="size-4" />
                Falar com a equipe comercial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
