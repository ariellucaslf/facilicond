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
  description: "Mais que gestão, tranquilidade. O ecossistema definitivo que elimina a desorganização de encomendas, a falta de transparência financeira e os ruídos de comunicação.",
  keywords: ["gestão condominial", "administradora de condomínios", "controle de acesso", "aplicativo para condomínio"],
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
