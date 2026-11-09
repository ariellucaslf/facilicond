import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FaciliCond — Sistema completo para síndicos, portaria, equipe e moradores",
  description:
    "Painel web da administração, portal do morador, portal do colaborador e totem na portaria conectados. Encomendas com QR de uso único, manutenção preventiva com checklist, documentos versionados e ponto eletrônico com exportação AFD.",
  keywords: [
    "gestão de condomínio",
    "sistema para condomínio",
    "portal para moradores",
    "totem de portaria",
    "controle de encomendas condomínio",
    "manutenção preventiva predial",
    "ponto eletrônico condomínio portaria 671",
    "software para síndico",
  ],
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
  },
  openGraph: {
    title: "FaciliCond — Gestão condominial conectada de ponta a ponta",
    description:
      "Do recebimento na portaria à prestação de contas: painel do síndico, portal do morador, totem e equipe no mesmo sistema. A partir de R$ 109,99/mês com 7 dias grátis.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${schibsted.variable} ${jetbrains.variable}`}
    >
      <body className="bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
