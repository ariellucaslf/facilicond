import {
  Camera,
  CheckCircle2,
  Database,
  Download,
  FileLock2,
  FolderClock,
  HardDriveDownload,
  KeyRound,
  Lock,
  QrCode,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { FakeQr } from "@/components/mockups/FakeQr";
import { MORE_MODULES, TRUST_ITEMS } from "@/lib/content";

const TRUST_ICONS = [Database, FileLock2, Lock, HardDriveDownload] as const;

export function ProductTour() {
  return (
    <>
      <section id="modulos" className="bg-white py-24 md:py-32">
        <div className="site-wrap">
          <div className="grid items-end gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="tag text-brand-primary">Engenharia operacional</p>
              <h2 className="display-md mt-4 text-ink">
                Módulos desenhados para onde o condomínio realmente dá atrito.
              </h2>
            </div>
            <p className="lede">
              Em vez de formulários genéricos, o sistema amarra comprovantes,
              versões e prazos nos pontos críticos da rotina predial.
            </p>
          </div>

          {/* Bento Grid Assimétrico (Anchor + Satellite) */}
          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            {/* Card 1 — Anchor (7 colunas): Encomendas Rastreáveis */}
            <article className="reveal flex flex-col justify-between rounded-[1.8rem] border border-ink/10 bg-[#f8f5ef] p-6 md:p-8 lg:col-span-7">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary/10 px-3 py-1 font-mono text-xs font-semibold text-brand-primary">
                    <QrCode className="size-3.5" />
                    Rastreabilidade ponta a ponta
                  </span>
                  <span className="font-mono text-xs text-ink-soft">
                    Token 128-bit · 5 min
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink md:text-3xl">
                  Encomenda que não some e não depende de caderno.
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
                  A portaria registra a chegada e o morador recebe push na hora. Na
                  retirada, apresenta um QR temporário de 5 minutos — ou cadastra
                  autorização nominal para terceiro por até 24h. A baixa grava um
                  comprovante imutável.
                </p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center rounded-2xl border border-ink/10 bg-white p-4">
                <div className="space-y-2.5">
                  {[
                    {
                      step: "01",
                      title: "Recebimento na guarita",
                      meta: "Unidade validada no vínculo vigente",
                    },
                    {
                      step: "02",
                      title: "QR único de 5 min ou terceiro autorizado",
                      meta: "Tokens anteriores invalidados automaticamente",
                    },
                    {
                      step: "03",
                      title: "Comprovante imutável de entrega",
                      meta: "Operador, método e horário gravados",
                    },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-2.5">
                      <span className="mt-0.5 rounded-md bg-brand-sky px-1.5 py-0.5 font-mono text-[10px] font-bold text-brand-primary">
                        {s.step}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-ink">{s.title}</p>
                        <p className="text-[11px] text-ink-soft">{s.meta}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center rounded-xl border border-ink/10 bg-[#fbfaf7] p-3">
                  <FakeQr seed={42} className="size-20 text-navy" />
                  <span className="mt-2 font-mono text-[10px] font-semibold text-brand-accent">
                    USO ÚNICO
                  </span>
                </div>
              </div>
            </article>

            {/* Card 2 — Satellite Escuro (5 colunas): Ponto Eletrônico */}
            <article className="reveal flex flex-col justify-between rounded-[1.8rem] bg-navy p-6 text-white md:p-8 lg:col-span-5">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-mono text-xs font-medium text-brand-mint">
                    <KeyRound className="size-3.5" />
                    Add-on opcional
                  </span>
                  <span className="font-mono text-xs text-white/60">
                    Portaria 671 · AFD
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white md:text-3xl">
                  Ponto eletrônico no mesmo tablet da portaria.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  O colaborador bate o ponto no totem com selfie e PIN pessoal. Cada
                  registro gera hash SHA-256 anti-adulteração, alimenta o espelho no
                  celular da equipe e exporta o arquivo AFD.
                </p>
              </div>

              <div className="mt-7 space-y-2.5 rounded-2xl border border-white/12 bg-white/[0.05] p-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-white">
                    <Camera className="size-4 text-brand-mint" />
                    Selfie + PIN verificado
                  </span>
                  <span className="rounded-md bg-brand-accent/25 px-2 py-0.5 font-mono text-[10px] text-[#6ee7b7]">
                    REGISTRADO
                  </span>
                </div>
                <div className="rounded-xl bg-black/30 px-3 py-2 font-mono text-[11px] text-white/75">
                  SHA-256 · 4a8e91c0…d72b19f3
                </div>
                <div className="flex items-center justify-between pt-1 text-[11px] text-white/65">
                  <span>Espelho mensal em PDF</span>
                  <span className="font-mono text-brand-mint">Exportação AFD</span>
                </div>
              </div>
            </article>

            {/* Card 3 — Satellite (5 colunas): Manutenção Preventiva */}
            <article className="reveal flex flex-col justify-between rounded-[1.8rem] border border-ink/10 bg-white p-6 shadow-[0_20px_50px_-34px_rgba(11,26,51,0.28)] md:p-8 lg:col-span-5">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-sky/70 px-3 py-1 font-mono text-xs font-semibold text-brand-primary">
                  <Wrench className="size-3.5" />
                  Ativos e rotinas
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink md:text-3xl">
                  Preventiva em dia antes de virar emergência cara.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Cadastre bombas, geradores, elevadores e áreas comuns com
                  periodicidade definida. Editar o checklist cria nova versão sem
                  apagar o histórico dos ciclos passados.
                </p>
              </div>

              <div className="mt-7 space-y-2 rounded-2xl border border-ink/10 bg-[#fbfaf7] p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-semibold text-navy">
                    GER-01 · Gerador Diesel
                  </span>
                  <span className="font-mono text-[10px] text-ink-soft">
                    a cada 15 dias
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-xs ring-1 ring-ink/6">
                  <span className="text-ink">Checklist executado pela equipe</span>
                  <CheckCircle2 className="size-4 text-brand-accent" />
                </div>
                <p className="pt-1 text-[11px] text-ink-soft">
                  Apontou problema? O sistema exige justificativa, aceita foto
                  privada e abre uma OS corretiva vinculada.
                </p>
              </div>
            </article>

            {/* Card 4 — Anchor Secundário (7 colunas): Documentos + Livro Caixa */}
            <article className="reveal flex flex-col justify-between rounded-[1.8rem] border border-ink/10 bg-white p-6 shadow-[0_20px_50px_-34px_rgba(11,26,51,0.28)] md:p-8 lg:col-span-7">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-secondary/12 px-3 py-1 font-mono text-xs font-semibold text-brand-secondary">
                  <FolderClock className="size-3.5" />
                  Transparência e memória do prédio
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink md:text-3xl">
                  Biblioteca de documentos versionada e prestação de contas clara.
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
                  Atas, convenção, regimento e laudos ficam guardados em bucket
                  privado: publicar uma revisão cria nova versão sem destruir a
                  anterior. No financeiro, o livro-caixa gera extrato em PDF para
                  consulta dos moradores.
                </p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-ink/10 bg-[#fbfaf7] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">
                    Biblioteca privada
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    Regimento Interno · v3 vigente
                  </p>
                  <p className="mt-1 text-xs text-ink-soft">
                    Documentos restritos de RH (ASO, EPI, contratos) visíveis só à
                    gestão.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1 font-mono text-[10px] font-semibold text-brand-primary ring-1 ring-ink/8">
                    <Download className="size-3" />
                    Link assinado · expira em 60s
                  </div>
                </div>

                <div className="rounded-2xl border border-ink/10 bg-[#fbfaf7] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">
                    Prestação de contas
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    Livro-caixa e relatórios em PDF
                  </p>
                  <p className="mt-1 text-xs text-ink-soft">
                    Entradas, despesas por categoria e relatórios prontos para o
                    conselho fiscal e moradores.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1 font-mono text-[10px] font-semibold text-brand-accent ring-1 ring-ink/8">
                    Extrato PDF + Ocorrências PDF
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Índice completo de módulos */}
          <div className="mt-16 rounded-[1.8rem] border border-ink/10 bg-paper/65 p-6 md:p-10">
            <div className="flex flex-col justify-between gap-3 border-b border-ink/10 pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="tag text-brand-primary">Tudo no mesmo contrato</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
                  Mais 12 módulos prontos para o dia a dia do condomínio.
                </h3>
              </div>
              <p className="font-mono text-xs text-ink-soft">
                Sem cobrar extra por módulo básico
              </p>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {MORE_MODULES.map((mod) => (
                <div
                  key={mod.title}
                  className="rounded-2xl border border-ink/8 bg-white p-4 transition-colors duration-200 hover:border-brand-primary/35"
                >
                  <p className="font-display text-base font-semibold text-ink">
                    {mod.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                    {mod.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Segurança, Governança e LGPD */}
      <section
        id="seguranca"
        className="border-y border-ink/10 bg-paper-deep/65 py-20 md:py-24"
      >
        <div className="site-wrap">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-brand-primary">
                <ShieldCheck className="size-4" />
                Arquitetura e proteção de dados
              </p>
              <h2 className="display-md mt-3 text-ink">
                Segurança de software sério — inclusive na hora de sair.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink-soft">
              Condomínio lida com documentos pessoais, fotos e registros
              trabalhistas. A proteção foi construída no banco e no armazenamento,
              não apenas na tela.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_ITEMS.map((item, idx) => {
              const Icon = TRUST_ICONS[idx] ?? ShieldCheck;
              return (
                <article
                  key={item.title}
                  className="reveal rounded-2xl border border-ink/10 bg-white p-6"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-navy text-brand-mint">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
