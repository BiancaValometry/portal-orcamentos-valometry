import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitação de Orçamento — Valometry",
  description: "Envie o briefing do seu projeto de pesquisa para orçamento.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
