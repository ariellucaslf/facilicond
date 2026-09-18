export function DashboardPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#171b24] text-left shadow-[0_40px_80px_-24px_rgba(18,21,28,0.55)]"
      aria-hidden
    >
      <div className="flex items-center gap-2 border-b border-white/8 bg-[#1d2230] px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#f07167]" />
        <span className="size-2.5 rounded-full bg-[#f4c95d]" />
        <span className="size-2.5 rounded-full bg-[#5cc689]" />
        <span className="ml-3 rounded-md bg-white/6 px-2.5 py-1 font-sans text-[10px] tracking-wide text-white/45">
          app.facilicond.online
        </span>
      </div>

      <div className={`grid grid-cols-[88px_1fr] ${compact ? "min-h-[280px]" : "min-h-[340px]"}`}>
        <aside className="border-r border-white/8 bg-[#141820] px-3 py-4">
          <div className="mb-6 h-2 w-10 rounded-full bg-white/20" />
          {["Painel", "Portaria", "Encomendas", "Financeiro", "Mural"].map((item, i) => (
            <div
              key={item}
              className={`mb-2 rounded-lg px-2 py-1.5 text-[9px] font-semibold ${
                i === 0 ? "bg-[#2154d6] text-white" : "text-white/40"
              }`}
            >
              {item}
            </div>
          ))}
        </aside>

        <div className="bg-[#1a1f2b] p-4">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#7ad4de]">
                Residencial Aurora · 84 unidades
              </p>
              <p className="mt-1 font-display text-[1.35rem] text-white">Bom dia, síndica.</p>
            </div>
            <span className="rounded-full bg-white/8 px-2.5 py-1 text-[10px] text-white/70">16 set</span>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {[
              { k: "Encomendas", v: "12", s: "aguardando" },
              { k: "Visitantes", v: "07", s: "no prédio" },
              { k: "Inadimplência", v: "4%", s: "neste mês" },
            ].map((card) => (
              <div key={card.k} className="rounded-xl border border-white/8 bg-white/4 p-3">
                <p className="text-[9px] uppercase tracking-wider text-white/40">{card.k}</p>
                <p className="mt-1 font-display text-2xl text-white">{card.v}</p>
                <p className="text-[10px] text-white/45">{card.s}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-[1.2fr_0.8fr] gap-2.5">
            <div className="rounded-xl border border-white/8 bg-white/4 p-3">
              <p className="text-[10px] font-semibold text-white/70">Movimento da portaria</p>
              <div className="mt-3 flex h-16 items-end gap-1.5">
                {[40, 62, 48, 78, 55, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-[#2154d6]/80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/8 bg-[#2154d6] p-3 text-white">
              <p className="text-[10px] font-semibold text-white/80">Bloco B · apto 304</p>
              <p className="mt-2 text-[12px] leading-snug">
                Encomenda Mercado Livre bipada. Morador avisado no app.
              </p>
              <p className="mt-3 text-[10px] text-white/70">há 2 min · QR conferido</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PhonePreview() {
  return (
    <div
      className="w-[240px] shrink-0 overflow-hidden rounded-[2rem] border-[6px] border-[#1a1d24] bg-[#f7f4ee] shadow-[0_28px_60px_-20px_rgba(18,21,28,0.5)]"
      aria-hidden
    >
      <div className="mx-auto mt-2 h-4 w-20 rounded-full bg-[#1a1d24]" />
      <div className="px-3 pb-4 pt-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
          App do morador
        </p>
        <p className="mt-1 font-display text-xl text-ink">Sua encomenda chegou.</p>
        <div className="mt-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-ink/5">
          <p className="text-[11px] font-semibold text-ink">Caixa 2 · Portaria</p>
          <p className="mt-1 text-[11px] leading-snug text-ink-soft">
            Pacote Amazon para o apto 12. Assine a retirada no celular — sem caderno.
          </p>
          <div className="mt-3 flex items-center justify-between rounded-xl bg-ink px-3 py-2">
            <span className="font-mono text-[11px] text-white">FC-94821</span>
            <span className="text-[10px] font-bold text-[#7ad4de]">QR pronto</span>
          </div>
        </div>
        <div className="mt-2 rounded-2xl bg-[#2154d6] p-3 text-white">
          <p className="text-[11px] font-semibold">Visitante liberado</p>
          <p className="mt-1 text-[11px] text-white/80">Marina Costa · até 20h · Bloco A</p>
        </div>
      </div>
    </div>
  );
}

export function TotemPreview() {
  return (
    <div
      className="overflow-hidden rounded-[1.6rem] border border-ink/10 bg-[#0f1218] p-5 text-white shadow-[0_30px_60px_-24px_rgba(18,21,28,0.45)]"
      aria-hidden
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7ad4de]">
        Totem de portaria
      </p>
      <p className="mt-2 font-display text-3xl">Check-in em 12 segundos.</p>
      <div className="mt-5 grid gap-2">
        {["Visitante", "Prestador", "Encomenda", "Ponto eletrônico"].map((item, i) => (
          <div
            key={item}
            className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold ${
              i === 0 ? "bg-[#2154d6]" : "bg-white/6"
            }`}
          >
            {item}
            <span className="text-xs font-medium opacity-70">toque</span>
          </div>
        ))}
      </div>
    </div>
  );
}
