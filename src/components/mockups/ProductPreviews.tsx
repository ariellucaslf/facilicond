import {
  CalendarCheck2,
  Check,
  Clock,
  FileSpreadsheet,
  FileText,
  KeyRound,
  Package,
  ShieldAlert,
  UserCheck,
  Wrench,
} from "lucide-react";
import { FakeQr } from "@/components/mockups/FakeQr";
import { LogoMark } from "@/components/ui/Logo";

export function AdminRolePreview() {
  return (
    <div
      className="overflow-hidden rounded-[1.5rem] border border-ink/12 bg-white shadow-[0_26px_60px_-28px_rgba(11,26,51,0.3)]"
      aria-hidden
    >
      <div className="flex items-center justify-between border-b border-ink/8 bg-[#f8f6f2] px-4 py-3">
        <div className="flex items-center gap-2">
          <LogoMark className="h-4 w-auto" color="#2154d6" />
          <span className="text-xs font-bold text-navy">Painel da Administração</span>
        </div>
        <span className="rounded-md bg-brand-primary/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-brand-primary">
          SÍNDICO · CONSELHO
        </span>
      </div>

      <div className="space-y-3 p-5">
        <div className="grid grid-cols-3 gap-2.5">
          <div className="rounded-xl border border-ink/8 bg-[#fbfaf7] p-3">
            <p className="text-[10px] font-medium text-ink-soft">Unidades ativas</p>
            <p className="mt-1 font-display text-2xl font-bold text-ink">68/68</p>
            <p className="font-mono text-[10px] text-brand-accent">planilha importada</p>
          </div>
          <div className="rounded-xl border border-ink/8 bg-[#fbfaf7] p-3">
            <p className="text-[10px] font-medium text-ink-soft">Livro Caixa</p>
            <p className="mt-1 font-mono text-sm font-bold text-ink">+ R$ 18.420</p>
            <p className="font-mono text-[10px] text-ink-soft">prestação PDF</p>
          </div>
          <div className="rounded-xl border border-ink/8 bg-[#fbfaf7] p-3">
            <p className="text-[10px] font-medium text-ink-soft">Revisões</p>
            <p className="mt-1 font-display text-2xl font-bold text-brand-primary">03</p>
            <p className="font-mono text-[10px] text-ink-soft">cadastros pendentes</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-xl border border-ink/8 bg-white px-3.5 py-2.5">
            <div className="flex items-center gap-2.5">
              <FileSpreadsheet className="size-4 text-brand-primary" />
              <div>
                <p className="text-xs font-semibold text-ink">
                  Prestação de contas · Outubro
                </p>
                <p className="text-[11px] text-ink-soft">
                  Lançamentos auditáveis + extrato PDF publicado aos moradores
                </p>
              </div>
            </div>
            <span className="rounded-md bg-brand-accent/12 px-2 py-0.5 font-mono text-[10px] font-semibold text-brand-accent">
              PUBLICADO
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-ink/8 bg-white px-3.5 py-2.5">
            <div className="flex items-center gap-2.5">
              <ShieldAlert className="size-4 text-[#b85d00]" />
              <div>
                <p className="text-xs font-semibold text-ink">
                  Advertência #AD-019 · Unidade 502-A
                </p>
                <p className="text-[11px] text-ink-soft">
                  2 provas anexadas · PDF enviado por e-mail · aguarda via assinada
                </p>
              </div>
            </div>
            <span className="font-mono text-[10px] text-ink-soft">PDF</span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-ink/8 bg-white px-3.5 py-2.5">
            <div className="flex items-center gap-2.5">
              <FileText className="size-4 text-brand-secondary" />
              <div>
                <p className="text-xs font-semibold text-ink">
                  Regimento Interno · versão v3
                </p>
                <p className="text-[11px] text-ink-soft">
                  Histórico v1 e v2 preservado em bucket privado
                </p>
              </div>
            </div>
            <span className="font-mono text-[10px] font-semibold text-brand-primary">
              URL 60s
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ResidentRolePreview() {
  return (
    <div
      className="mx-auto max-w-sm overflow-hidden rounded-[2rem] border-[6px] border-navy bg-[#fbfaf7] shadow-[0_28px_60px_-24px_rgba(11,26,51,0.45)]"
      aria-hidden
    >
      <div className="mx-auto mt-2.5 h-4 w-20 rounded-full bg-navy" />
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-brand-primary">
              Unidade 304-B · Bloco B
            </p>
            <p className="font-display text-lg font-bold text-ink">
              Painel do Morador
            </p>
          </div>
          <span className="rounded-full bg-brand-primary/10 px-2.5 py-1 font-mono text-[10px] font-semibold text-brand-primary">
            App & PWA
          </span>
        </div>

        {/* Encomenda com QR */}
        <div className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white p-3">
          <div className="rounded-lg border border-ink/10 p-1.5">
            <FakeQr seed={31} className="size-12 text-navy" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-ink">
              <Package className="size-3.5 text-brand-primary" />
              1 encomenda na portaria
            </div>
            <p className="mt-0.5 text-[11px] text-ink-soft">
              Apresente o QR de 5 min ou autorize terceiro.
            </p>
          </div>
        </div>

        {/* Reserva + Visitante */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-2xl border border-ink/8 bg-white p-3">
            <CalendarCheck2 className="size-4 text-brand-accent" />
            <p className="mt-1.5 text-xs font-semibold text-ink">Salão Gourmet</p>
            <p className="text-[11px] text-ink-soft">Sáb · 18 convidados</p>
          </div>
          <div className="rounded-2xl border border-ink/8 bg-white p-3">
            <UserCheck className="size-4 text-brand-primary" />
            <p className="mt-1.5 text-xs font-semibold text-ink">Pré-autorização</p>
            <p className="text-[11px] text-ink-soft">Técnico Vivo · 14h</p>
          </div>
        </div>

        {/* Enquete ativa */}
        <div className="rounded-2xl bg-navy p-3.5 text-white">
          <div className="flex items-center justify-between font-mono text-[10px] text-brand-mint">
            <span>ENQUETE ATIVA</span>
            <span>71% VOTARAM</span>
          </div>
          <p className="mt-1 text-xs font-semibold">
            Padronização das películas da fachada
          </p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/15">
            <div className="h-full w-[71%] rounded-full bg-brand-mint" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TotemRolePreview() {
  return (
    <div
      className="overflow-hidden rounded-[1.6rem] border border-white/12 bg-navy p-5 text-white shadow-[0_30px_65px_-26px_rgba(6,26,53,0.65)]"
      aria-hidden
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
        <div className="flex items-center gap-2">
          <span className="live-dot size-2 rounded-full bg-brand-accent" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-brand-mint">
            Totem Guarita Norte · Pareado
          </span>
        </div>
        <span className="rounded-md bg-white/8 px-2 py-0.5 font-mono text-[10px] text-white/70">
          MODO KIOSK
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {[
          { title: "Receber encomenda", sub: "Foto + aviso imediato", active: true },
          { title: "Validar retirada", sub: "Leitura do QR 128-bit", active: false },
          { title: "Entrada de visitante", sub: "Consulta pré-autorizados", active: false },
          { title: "Veículos e vagas", sub: "Busca por placa ou apto", active: false },
        ].map((btn) => (
          <div
            key={btn.title}
            className={`rounded-2xl border p-3.5 ${
              btn.active
                ? "border-brand-primary-light bg-brand-primary"
                : "border-white/10 bg-white/5"
            }`}
          >
            <p className="text-xs font-semibold text-white">{btn.title}</p>
            <p className="mt-0.5 text-[11px] text-white/70">{btn.sub}</p>
          </div>
        ))}
      </div>

      {/* Ponto eletrônico no mesmo tablet */}
      <div className="mt-3 rounded-2xl border border-white/10 bg-white/6 p-3.5">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white">
            <KeyRound className="size-3.5 text-brand-mint" />
            Ponto Eletrônico · Selfie + PIN
          </span>
          <span className="font-mono text-[10px] text-brand-mint">AFD · 671</span>
        </div>
        <p className="mt-1 font-mono text-[10px] text-white/60">
          SHA-256: 9f4c…e81b · Batida assinada e auditável
        </p>
      </div>
    </div>
  );
}

export function StaffRolePreview() {
  return (
    <div
      className="overflow-hidden rounded-[1.5rem] border border-ink/12 bg-white shadow-[0_26px_60px_-28px_rgba(11,26,51,0.3)]"
      aria-hidden
    >
      <div className="flex items-center justify-between border-b border-ink/8 bg-[#f8f6f2] px-4 py-3">
        <div className="flex items-center gap-2">
          <Wrench className="size-4 text-brand-primary" />
          <span className="text-xs font-bold text-navy">
            Portal do Colaborador · Carlos (Zelador)
          </span>
        </div>
        <span className="font-mono text-[10px] font-semibold text-brand-accent">
          ESCALA 07h–16h
        </span>
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between rounded-xl border border-ink/8 bg-[#fbfaf7] px-3.5 py-2.5">
          <div className="flex items-center gap-2.5">
            <Clock className="size-4 text-brand-primary" />
            <div>
              <p className="text-xs font-semibold text-ink">Espelho de ponto mensal</p>
              <p className="text-[11px] text-ink-soft">
                Consulta de batidas, folgas, abonos e envio de atestado em anexo
              </p>
            </div>
          </div>
          <span className="font-mono text-[10px] font-semibold text-brand-primary">
            PDF
          </span>
        </div>

        <div className="rounded-xl border border-ink/10 bg-[#fbfaf7] p-3.5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-ink">
              Checklist atribuído · Gerador GER-01
            </p>
            <span className="rounded-md bg-brand-primary/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-brand-primary">
              3 ITENS
            </span>
          </div>
          <div className="mt-2.5 space-y-1.5">
            {[
              "Nível de óleo e líquido de arrefecimento",
              "Tensão das baterias de partida (24V)",
              "Teste sem carga e ausência de vazamentos",
            ].map((step) => (
              <div
                key={step}
                className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-xs ring-1 ring-ink/6"
              >
                <span className="text-ink">{step}</span>
                <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold text-brand-accent">
                  <Check className="size-3" /> Conforme
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
