"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpDown,
  BellRing,
  CheckCircle2,
  ClipboardCheck,
  PackageCheck,
  QrCode,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { FakeQr } from "@/components/mockups/FakeQr";
import { LogoMark } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

type FlowKey = "encomenda" | "preventiva" | "comunicado";

interface FlowConfig {
  id: FlowKey;
  code: string;
  label: string;
  sidebarActive: string;
  kpiLabel: string;
  kpiValue: string;
  kpiSub: string;
}

const FLOWS: FlowConfig[] = [
  {
    id: "encomenda",
    code: "01",
    label: "Encomenda com QR",
    sidebarActive: "Encomendas",
    kpiLabel: "Aguardando retirada",
    kpiValue: "09",
    kpiSub: "3 entregues hoje",
  },
  {
    id: "preventiva",
    code: "02",
    label: "Inspeção preventiva",
    sidebarActive: "Manutenção",
    kpiLabel: "Rotinas da semana",
    kpiValue: "04",
    kpiSub: "1 abriu OS corretiva",
  },
  {
    id: "comunicado",
    code: "03",
    label: "Mural oficial",
    sidebarActive: "Comunicados",
    kpiLabel: "Confirmação de leitura",
    kpiValue: "75%",
    kpiSub: "51 de 68 unidades",
  },
];

const NAV_ITEMS = [
  "Hoje",
  "Encomendas",
  "Comunicados",
  "Manutenção",
  "Livro Caixa",
  "Documentos",
  "Equipe",
];

export function HeroStage() {
  const [active, setActive] = useState<FlowKey>("encomenda");
  const current = FLOWS.find((f) => f.id === active) ?? FLOWS[0];

  return (
    <div className="relative isolate">
      {/* Seletor interativo de fluxo real */}
      <div
        role="tablist"
        aria-label="Fluxos reais do sistema"
        className="mb-3.5 flex flex-wrap gap-1.5 rounded-2xl border border-ink/10 bg-white/85 p-1.5 backdrop-blur-sm"
      >
        {FLOWS.map((flow) => {
          const isSelected = flow.id === active;
          return (
            <button
              key={flow.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActive(flow.id)}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer",
                isSelected
                  ? "bg-navy text-white shadow-sm"
                  : "text-ink-soft hover:bg-paper hover:text-ink"
              )}
            >
              <span
                className={cn(
                  "font-mono text-[10px]",
                  isSelected ? "text-brand-mint" : "text-ink-soft/70"
                )}
              >
                {flow.code}
              </span>
              <span className="truncate">{flow.label}</span>
            </button>
          );
        })}
      </div>

      {/* Janela principal — Painel Web da Administração */}
      <div className="relative z-10 overflow-hidden rounded-[1.5rem] border border-ink/12 bg-white shadow-[0_28px_60px_-28px_rgba(11,26,51,0.28)]">
        {/* Barra do navegador */}
        <div className="flex items-center justify-between border-b border-ink/8 bg-[#f8f6f2] px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-ink/15" />
            <span className="size-2.5 rounded-full bg-ink/15" />
            <span className="size-2.5 rounded-full bg-ink/15" />
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-ink/8 bg-white px-3 py-1 font-mono text-[11px] text-ink-soft">
            <span className="size-1.5 rounded-full bg-brand-accent" />
            web.facilicond.online
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">
            Síndico
          </span>
        </div>

        {/* Corpo do painel */}
        <div className="grid sm:grid-cols-[136px_1fr]">
          {/* Sidebar real do painel */}
          <aside className="hidden border-r border-ink/8 bg-[#fbfaf7] p-3 sm:block">
            <div className="mb-3 flex items-center gap-2 px-2 py-1">
              <LogoMark className="h-4 w-auto" color="#2154d6" />
              <span className="truncate text-[11px] font-bold text-navy">
                Villa Lobos
              </span>
            </div>
            <div className="space-y-0.5">
              {NAV_ITEMS.map((item) => {
                const selected = item === current.sidebarActive;
                return (
                  <div
                    key={item}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition-colors",
                      selected
                        ? "bg-brand-primary text-white font-semibold"
                        : "text-ink-soft"
                    )}
                  >
                    <span>{item}</span>
                    {selected && <span className="size-1.5 rounded-full bg-white" />}
                  </div>
                );
              })}
            </div>
          </aside>

          {/* Área ativa */}
          <div className="p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3 border-b border-ink/8 pb-3.5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-brand-primary">
                  Residencial Villa Lobos · 68 unidades
                </p>
                <p className="mt-0.5 font-display text-lg font-semibold text-ink">
                  Visão operacional de hoje
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-accent/10 px-2.5 py-1 font-mono text-[10px] font-medium text-brand-accent">
                <span className="live-dot size-1.5 rounded-full bg-brand-accent" />
                Sincronizado
              </span>
            </div>

            {/* KPIs rápidos */}
            <div className="mt-3.5 grid grid-cols-3 gap-2">
              <div className="rounded-xl border border-brand-primary/20 bg-brand-sky/35 p-2.5">
                <p className="truncate text-[10px] font-medium text-ink-soft">
                  {current.kpiLabel}
                </p>
                <p className="mt-0.5 font-display text-xl font-bold text-brand-primary">
                  {current.kpiValue}
                </p>
                <p className="truncate text-[10px] text-ink-soft">{current.kpiSub}</p>
              </div>
              <div className="rounded-xl border border-ink/8 bg-[#fbfaf7] p-2.5">
                <p className="text-[10px] font-medium text-ink-soft">Ocorrências</p>
                <p className="mt-0.5 font-display text-xl font-bold text-ink">02</p>
                <p className="truncate text-[10px] text-ink-soft">em andamento</p>
              </div>
              <div className="rounded-xl border border-ink/8 bg-[#fbfaf7] p-2.5">
                <p className="text-[10px] font-medium text-ink-soft">Livro Caixa</p>
                <p className="mt-0.5 font-mono text-sm font-semibold text-brand-accent">
                  Em dia
                </p>
                <p className="truncate text-[10px] text-ink-soft">extrato PDF</p>
              </div>
            </div>

            {/* Conteúdo contextual animado */}
            <div className="mt-3.5 min-h-[164px]">
              <AnimatePresence mode="wait">
                {active === "encomenda" && (
                  <motion.div
                    key="encomenda"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl border border-ink/10 bg-[#fbfaf7] p-3.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink">
                        <PackageCheck className="size-4 shrink-0 text-brand-primary" />
                        Protocolo de entrega rastreável
                      </span>
                      <span className="shrink-0 whitespace-nowrap rounded-md bg-brand-accent/12 px-2 py-0.5 font-mono text-[10px] font-semibold text-brand-accent">
                        HANDOFF GRAVADO
                      </span>
                    </div>
                    <div className="mt-3 space-y-2 text-xs">
                      <div className="flex items-center justify-between gap-2 rounded-lg bg-white px-3 py-2 ring-1 ring-ink/6">
                        <div className="min-w-0">
                          <p className="font-semibold text-ink">
                            Unidade 304-B · Mercado Livre
                          </p>
                          <p className="text-[11px] text-ink-soft">
                            Recebido no Totem Portaria · aviso push enviado
                          </p>
                        </div>
                        <span className="shrink-0 font-mono text-[11px] text-ink-soft">
                          14:28
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2 rounded-lg bg-white px-3 py-2 ring-1 ring-ink/6">
                        <div className="min-w-0">
                          <p className="font-semibold text-ink">
                            QR de uso único validado na retirada
                          </p>
                          <p className="font-mono text-[10px] text-ink-soft">
                            Comprovante imutável #HF-2094 · operador identificado
                          </p>
                        </div>
                        <span className="shrink-0 font-mono text-[11px] font-semibold text-brand-accent">
                          14:32
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {active === "preventiva" && (
                  <motion.div
                    key="preventiva"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl border border-ink/10 bg-[#fbfaf7] p-3.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink">
                        <ClipboardCheck className="size-4 shrink-0 text-brand-primary" />
                        Ativo BOM-01 · Casa de bombas (v2)
                      </span>
                      <span className="shrink-0 whitespace-nowrap rounded-md bg-signal/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#9a5b00]">
                        1 FALHA → OS ABERTA
                      </span>
                    </div>
                    <div className="mt-3 space-y-2 text-xs">
                      <div className="flex items-center justify-between gap-2 rounded-lg bg-white px-3 py-2 ring-1 ring-ink/6">
                        <span className="text-ink">1. Pressão do manômetro principal</span>
                        <span className="shrink-0 font-mono text-[10px] font-semibold text-brand-accent">
                          CONFORME
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2 rounded-lg bg-white px-3 py-2 ring-1 ring-signal/40">
                        <div className="min-w-0">
                          <p className="font-semibold text-ink">
                            2. Vedação do selo mecânico
                          </p>
                          <p className="text-[11px] text-ink-soft">
                            “Gotejamento no eixo; foto anexada” · OS Corretiva aberta
                          </p>
                        </div>
                        <span className="shrink-0 font-mono text-[10px] font-semibold text-[#b85d00]">
                          PROBLEMA
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {active === "comunicado" && (
                  <motion.div
                    key="comunicado"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl border border-ink/10 bg-[#fbfaf7] p-3.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink">
                        <BellRing className="size-4 shrink-0 text-brand-primary" />
                        Manutenção preventiva do elevador social
                      </span>
                      <span className="shrink-0 whitespace-nowrap rounded-md bg-brand-primary/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-brand-primary">
                        PUSH ENVIADO
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                      Publicado hoje às 10:30 para o Bloco B. Cada unidade confirma
                      leitura no portal — sem discussão de “ninguém me avisou”.
                    </p>
                    <div className="mt-3">
                      <div className="flex justify-between font-mono text-[10px] text-ink-soft">
                        <span>Leitura confirmada por unidade</span>
                        <span className="font-semibold text-ink">51 / 68 (75%)</span>
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-ink/8">
                        <div className="h-full w-3/4 rounded-full bg-brand-primary" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Conector visual entre Painel do Síndico e Portal na ponta */}
      <div className="relative z-20 flex items-center justify-between px-5 py-2">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-brand-primary">
          <ArrowUpDown className="size-3" />
          Reflexo imediato na outra ponta
        </span>
        <span className="hidden items-center gap-1.5 font-mono text-[10px] text-ink-soft sm:inline-flex">
          <ShieldCheck className="size-3.5 text-brand-primary" />
          Dados isolados por condomínio · RLS ativo
        </span>
      </div>

      {/* Cartão conectado — Portal do Morador / Portal do Colaborador (sem sobreposição negativa) */}
      <div className="relative z-20">
        <AnimatePresence mode="wait">
          {active === "encomenda" && (
            <motion.div
              key="card-encomenda"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-4 rounded-2xl border border-navy bg-navy p-4 text-white shadow-[0_22px_48px_-20px_rgba(6,26,53,0.55)]"
            >
              <div className="shrink-0 rounded-xl bg-white p-2">
                <FakeQr seed={19} className="size-14 text-navy" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-brand-mint">
                  <QrCode className="size-3.5 shrink-0" />
                  Portal do Morador · 304-B
                </div>
                <p className="mt-1 text-sm font-semibold leading-snug text-white">
                  QR de retirada · expira em 5 min
                </p>
                <p className="mt-0.5 text-xs text-white/70">
                  Ou autorize um terceiro pelo celular por até 24h.
                </p>
                <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/15">
                  <div className="qr-timer h-full w-full rounded-full bg-brand-mint" />
                </div>
              </div>
            </motion.div>
          )}

          {active === "preventiva" && (
            <motion.div
              key="card-preventiva"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-4 rounded-2xl border border-navy bg-navy p-4 text-white shadow-[0_22px_48px_-20px_rgba(6,26,53,0.55)]"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/30 text-brand-mint">
                <Wrench className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-wider text-brand-mint">
                  Portal do Colaborador · Zeladoria
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  Checklist concluído no celular
                </p>
                <p className="mt-0.5 text-xs text-white/70">
                  Evidência salva em bucket privado e vinculada à tarefa atribuída.
                </p>
              </div>
            </motion.div>
          )}

          {active === "comunicado" && (
            <motion.div
              key="card-comunicado"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-4 rounded-2xl border border-navy bg-navy p-4 text-white shadow-[0_22px_48px_-20px_rgba(6,26,53,0.55)]"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent/25 text-[#6ee7b7]">
                <CheckCircle2 className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-wider text-brand-mint">
                  Portal do Morador · Unidade 304-B
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  Leitura registrada às 10:34
                </p>
                <p className="mt-0.5 text-xs text-white/70">
                  Histórico auditável para o síndico e para o conselho.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
