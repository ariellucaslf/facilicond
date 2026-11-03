"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { LIVE_EVENTS } from "@/lib/content";

export function LiveTicker() {
  const [paused, setPaused] = useState(false);
  const doubled = [...LIVE_EVENTS, ...LIVE_EVENTS];

  return (
    <section
      aria-label="Exemplo da rotina diária registrada no FaciliCond"
      className="ticker border-y border-ink/10 bg-white/75 py-3.5"
      data-paused={paused}
    >
      <div className="site-wrap mb-2 flex items-center justify-between gap-4">
        <p className="tag text-ink-soft">
          Rotina rastreada · como um dia fica registrado no sistema
        </p>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="inline-flex items-center gap-1.5 rounded-full border border-ink/12 bg-paper/70 px-2.5 py-1 font-mono text-[11px] text-ink-soft transition-colors hover:text-ink cursor-pointer"
          aria-pressed={paused}
        >
          {paused ? (
            <>
              <Play className="size-3" /> Retomar
            </>
          ) : (
            <>
              <Pause className="size-3" /> Pausar
            </>
          )}
        </button>
      </div>

      <div className="overflow-hidden">
        <div className="ticker-track flex w-max items-center gap-3 px-4">
          {doubled.map((ev, idx) => (
            <div
              key={`${ev.time}-${ev.label}-${idx}`}
              aria-hidden={idx >= LIVE_EVENTS.length || undefined}
              className="inline-flex items-center gap-2.5 rounded-full border border-ink/8 bg-paper/65 px-3.5 py-1.5 text-xs"
            >
              <span className="font-mono text-[11px] font-semibold text-brand-primary">
                {ev.time}
              </span>
              <span className="rounded-md bg-navy px-1.5 py-0.5 font-mono text-[10px] font-medium text-white">
                {ev.label}
              </span>
              <span className="text-ink-soft">{ev.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
