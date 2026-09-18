import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "FaciliCond | Mais que gestão, tranquilidade",
  description:
    "Painel do síndico, totem na portaria e app no bolso. Encomendas, visitantes, financeiro e comunicação oficial — sem viver no WhatsApp.",
  keywords: [
    "gestão condominial",
    "aplicativo para condomínio",
    "totem de portaria",
    "controle de encomendas",
    "síndico",
  ],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className="relative bg-paper text-ink antialiased">
        <div className="grain" aria-hidden />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
