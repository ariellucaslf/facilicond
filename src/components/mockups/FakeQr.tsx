import { cn } from "@/lib/utils";

/**
 * QR decorativo e determinístico (não codifica dados reais).
 * Gerado no servidor a partir de uma semente para não variar entre renders.
 */
export function FakeQr({ seed = 7, className }: { seed?: number; className?: string }) {
  const size = 21;
  const cells: { x: number; y: number }[] = [];
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };

  const inFinder = (x: number, y: number) =>
    (x < 8 && y < 8) || (x > size - 9 && y < 8) || (x < 8 && y > size - 9);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (!inFinder(x, y) && rand() > 0.52) cells.push({ x, y });
    }
  }

  const finder = (ox: number, oy: number) => (
    <g key={`${ox}-${oy}`}>
      <rect x={ox} y={oy} width={7} height={7} rx={1.4} fill="currentColor" />
      <rect x={ox + 1} y={oy + 1} width={5} height={5} rx={0.9} fill="#fff" />
      <rect x={ox + 2} y={oy + 2} width={3} height={3} rx={0.6} fill="currentColor" />
    </g>
  );

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className={cn("text-ink", className)} aria-hidden>
      {cells.map((c) => (
        <rect key={`${c.x}-${c.y}`} x={c.x} y={c.y} width={1} height={1} rx={0.25} fill="currentColor" />
      ))}
      {finder(0, 0)}
      {finder(size - 7, 0)}
      {finder(0, size - 7)}
    </svg>
  );
}
