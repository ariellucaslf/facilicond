import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  color?: string;
  accentColor?: string;
}

/**
 * Símbolo arquitetônico oficial do FaciliCond (três torres com portais em arco).
 */
export function LogoMark({
  className,
  color = "currentColor",
  accentColor,
}: LogoMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 52"
      className={cn("shrink-0", className)}
      fill={color}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 21.5 16.5 15.8V45.5H5.5V21.5Zm3.5 24v-5.8a2.25 2.25 0 0 1 4.5 0v5.8H9Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 3.5 33.8 11.6v33.9H19.5V3.5Zm4.1 8.4 6 3.4v18.2h-6V11.9Zm-.3 33.6v-5.8a2.25 2.25 0 0 1 4.5 0v5.8h-4.5Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.6 20.8 48 27.2c1.45.82 2.35 2.36 2.35 4.03V45.5H36.6V20.8Zm3.8 6.5 6 3.4v14.8h-1.5v-5.8a3.75 3.75 0 0 0-4.5-3.67v-8.73Zm-.2 18.2v-5.6a1.65 1.65 0 0 1 3.3 0v5.6h-3.3Z"
      />
      <rect
        x="2"
        y="45.5"
        width="52"
        height="3.4"
        rx="1.7"
        fill={accentColor ?? color}
      />
    </svg>
  );
}

interface LogoProps {
  inverted?: boolean;
  priority?: boolean;
  className?: string;
}

/**
 * Em fundos claros renderiza a imagem oficial `/logo.png` recortada exatamente
 * no bounding box útil (1043x266 dentro de 1376x768), preservando 100% da arte original.
 * Em fundos escuros renderiza o símbolo vetorial + wordmark em alto contraste.
 */
export function Logo({ inverted = false, priority = false, className }: LogoProps) {
  if (!inverted) {
    return (
      <span className={cn("inline-flex items-center", className)}>
        <span className="relative block h-9 w-[141px] overflow-hidden sm:h-10 sm:w-[157px]">
          <Image
            src="/logo.png"
            alt="FaciliCond"
            width={1376}
            height={768}
            priority={priority}
            sizes="160px"
            className="pointer-events-none absolute top-[-93.98%] left-[-15.92%] h-[288.72%] w-[131.93%] max-w-none select-none"
          />
        </span>
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-8 w-auto" color="#ffffff" accentColor="#7ad4de" />
      <span className="font-display text-[1.28rem] font-bold leading-none tracking-[-0.04em]">
        <span className="text-brand-mint">Facili</span>
        <span className="text-white">Cond</span>
      </span>
    </span>
  );
}
