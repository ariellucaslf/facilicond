import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FaciliCond | Gestão Inteligente de Condomínios",
  description: "Ecossistema definitivo que transforma a portaria analógica em uma operação digital, segura e rastreável. Gestão inteligente, condomínios em perfeita harmonia.",
  keywords: ["gestão condominial", "portaria virtual", "controle de acesso", "aplicativo para condomínio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-brand-dark bg-brand-light">
        {children}
      </body>
    </html>
  );
}
