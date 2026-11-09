"use client";

import { useState, type CSSProperties } from "react";
import { ArrowRight, Check, Mail, Minus, Plus } from "lucide-react";
import {
  calculateMonthlyPrice,
  CONTACT_EMAIL,
  formatBRL,
  PRICING,
  WEB_URL,
} from "@/lib/content";
import { cn } from "@/lib/utils";

const UNIT_PRESETS = [
  { label: "Até 40 unid.", units: 32 },
  { label: "64 unid.", units: 64 },
  { label: "120 unid.", units: 120 },
  { label: "200 unid.", units: 200 },
] as const;

const INCLUDED = [
  "Painel web responsivo da administração",
  "Portal web ilimitado para moradores",
  "Totem de portaria em tablet pareado",
  "Portal do colaborador e tarefas",
  "Encomendas com QR de 5 min e comprovante",
  "Manutenção preventiva com checklists",
  "Biblioteca de documentos versionada",
  "Comunicados, reservas, enquetes e ocorrências",
  "Livro-caixa, advertências e relatórios em PDF",
  "Exportação integral dos dados (CSV/ZIP)",
];

export function Plans() {
  const [units, setUnits] = useState(40);
  const [employees, setEmployees] = useState(0);

  const minUnits = 10;
  const maxUnits = 240;
  const fillPct = ((units - minUnits) / (maxUnits - minUnits)) * 100;

  const baseAmount =
    units <= PRICING.baseUnits ? PRICING.basePrice : units * PRICING.perUnit;
  const timeclockAmount = employees * PRICING.perEmployeeTimeclock;
  const total = calculateMonthlyPrice(units, timeclockEmployeesSafe(employees));
  const perUnit = total / Math.max(units, 1);

  return (
    <section id="planos" className="bg-paper py-24 md:py-32">
      <div className="site-wrap">
        <div className="max-w-3xl">
          <p className="tag text-brand-primary">Preço transparente</p>
          <h2 className="display-md mt-4 text-ink">
            Simule o valor exato antes de levar para o conselho.
          </h2>
          <p className="lede mt-5">
            Todos os condomínios recebem a plataforma completa — sem esconder
            preço atrás de formulário obrigatório e sem fatiar recursos essenciais.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          {/* Coluna esquerda: Controles + O que está incluso */}
          <div className="rounded-[1.8rem] border border-ink/10 bg-white p-6 shadow-[0_20px_50px_-34px_rgba(11,26,51,0.28)] md:p-8">
            {/* Atalhos rápidos */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <label
                htmlFor="units-slider"
                className="font-display text-lg font-semibold text-ink"
              >
                1. Quantas unidades tem o condomínio?
              </label>
              <span className="rounded-xl bg-brand-sky/75 px-3 py-1 font-mono text-sm font-bold text-brand-primary">
                {units} unidades
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {UNIT_PRESETS.map((preset) => {
                const isActive =
                  preset.units === 32
                    ? units <= PRICING.baseUnits
                    : units === preset.units;
                return (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => setUnits(preset.units)}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 font-mono text-xs font-medium transition-colors cursor-pointer",
                      isActive
                        ? "border-brand-primary bg-brand-primary text-white"
                        : "border-ink/12 bg-paper/60 text-ink-soft hover:border-ink/30 hover:text-ink"
                    )}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-5">
              <input
                id="units-slider"
                type="range"
                min={minUnits}
                max={maxUnits}
                step={2}
                value={units}
                onChange={(e) => setUnits(Number(e.target.value))}
                style={{ "--fill": `${fillPct}%` } as CSSProperties}
                className="range"
              />
              <div className="mt-2 flex justify-between font-mono text-[11px] text-ink-soft">
                <span>
                  Até {PRICING.baseUnits} unid.: fixo{" "}
                  {formatBRL(PRICING.basePrice)}/mês
                </span>
                <span>
                  Acima de {PRICING.baseUnits}: {formatBRL(PRICING.perUnit)}/unid.
                </span>
              </div>
            </div>

            {/* Add-on opcional: Ponto Eletrônico */}
            <div className="mt-8 border-t border-ink/10 pt-7">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="font-display text-lg font-semibold text-ink">
                    2. Ponto eletrônico no totem{" "}
                    <span className="font-mono text-xs font-normal text-ink-soft">
                      (opcional)
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">
                    Selfie + PIN, espelho mensal em PDF e exportação AFD ·{" "}
                    <strong className="font-semibold text-ink">
                      {formatBRL(PRICING.perEmployeeTimeclock)}/mês
                    </strong>{" "}
                    por colaborador.
                  </p>
                </div>

                <div className="inline-flex items-center gap-3 self-start rounded-2xl border border-ink/12 bg-[#fbfaf7] p-1.5 sm:self-center">
                  <button
                    type="button"
                    aria-label="Remover colaborador"
                    onClick={() => setEmployees((c) => Math.max(0, c - 1))}
                    disabled={employees === 0}
                    className="flex size-9 items-center justify-center rounded-xl bg-white text-ink shadow-2xs ring-1 ring-ink/8 transition-opacity disabled:opacity-35 cursor-pointer"
                  >
                    <Minus className="size-4" />
                  </button>
                  <span className="min-w-[4.5rem] text-center font-mono text-sm font-bold text-ink">
                    {employees} colab.
                  </span>
                  <button
                    type="button"
                    aria-label="Adicionar colaborador"
                    onClick={() => setEmployees((c) => Math.min(30, c + 1))}
                    className="flex size-9 items-center justify-center rounded-xl bg-navy text-white transition-colors hover:bg-brand-primary cursor-pointer"
                  >
                    <Plus className="size-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Lista completa do que vem incluso */}
            <div className="mt-8 border-t border-ink/10 pt-7">
              <p className="tag text-ink-soft">
                Incluso em qualquer quantidade de unidades
              </p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Coluna direita: Demonstrativo mensal */}
          <div className="rounded-[1.8rem] bg-navy p-7 text-white shadow-[0_30px_70px_-28px_rgba(6,26,53,0.65)] md:p-8 lg:sticky lg:top-24">
            <div className="flex items-center justify-between">
              <span className="tag text-brand-mint">Investimento estimado</span>
              <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] font-semibold text-white">
                {PRICING.trialDays} dias grátis
              </span>
            </div>

            <div className="mt-5 flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                {formatBRL(total)}
              </span>
              <span className="text-sm text-white/65">/mês</span>
            </div>

            <p className="mt-2 font-mono text-xs text-brand-mint">
              Equivale a {formatBRL(perUnit)} por unidade/mês
            </p>

            {/* Memória de cálculo */}
            <div className="mt-6 space-y-2.5 border-y border-white/12 py-5 text-sm">
              <div className="flex items-center justify-between text-white/80">
                <span>
                  Plataforma completa ({units}{" "}
                  {units <= PRICING.baseUnits
                    ? `unid. · faixa até ${PRICING.baseUnits}`
                    : `× ${formatBRL(PRICING.perUnit)}`}
                  )
                </span>
                <span className="font-mono font-semibold text-white">
                  {formatBRL(baseAmount)}
                </span>
              </div>
              <div className="flex items-center justify-between text-white/80">
                <span>
                  Ponto eletrônico ({employees}{" "}
                  {employees === 1 ? "colaborador" : "colaboradores"})
                </span>
                <span className="font-mono font-semibold text-white">
                  {employees > 0 ? `+ ${formatBRL(timeclockAmount)}` : "R$ 0,00"}
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={WEB_URL}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-brand-primary-light"
              >
                Iniciar {PRICING.trialDays} dias de teste
                <ArrowRight className="size-4" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                  `Proposta FaciliCond — ${units} unidades`
                )}`}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
              >
                <Mail className="size-4" />
                Acima de 200 unidades ou múltiplos prédios? Fale conosco
              </a>
            </div>

            <p className="mt-5 text-center text-xs leading-relaxed text-white/55">
              Sem taxa de implantação obrigatória. Condomínios de grande porte ou
              operações com vários CNPJ contam com condições comerciais sob medida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function timeclockEmployeesSafe(n: number): number {
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
}
