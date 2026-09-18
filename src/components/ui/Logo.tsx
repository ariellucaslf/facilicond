import { cn } from "@/lib/utils";

export function Logo({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        className="size-8 shrink-0"
        aria-hidden
      >
        <rect width="40" height="40" rx="10" fill="#2154D6" />
        <text
          x="50%"
          y="50%"
          dy=".1em"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="18"
          letterSpacing="-1"
        >
          FC
        </text>
      </svg>
      <span
        className={cn(
          "font-sans text-[1.05rem] font-extrabold tracking-tight",
          inverted ? "text-white" : "text-ink"
        )}
      >
        FaciliCond
      </span>
    </span>
  );
}
