import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Importe o novo componente
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Consummerce | Tecnologia e Soluções Digitais",
  description: "Transformamos o seu negócio com desenvolvimento sob medida, aplicativos, infraestrutura em nuvem e consultoria estratégica. Foco em resultados reais.",
  keywords: [
    "Consummerce", 
    "Desenvolvimento de Sites", 
    "Sistemas Web", 
    "Aplicativos", 
    "Migração de E-mails", 
    "Servidores em Nuvem", 
    "Consultoria de TI",
    "Desenvolvimento de Software",
    "Criação de Aplicativos",
    "Infraestrutura em Nuvem",
    "Consultoria Estratégica",
    "Soluções Digitais",
    "Tecnologia de Alta Performance",
    "Criar sites personalizados",
    "Desenvolver sistemas web sob medida",
    "Criar aplicativos móveis personalizados",
  ],
  authors: [{ name: "Consummerce" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.consummerce.com.br", 
    title: "Consummerce | Tecnologia de Alta Performance",
    description: "Eleve o nível do seu negócio com nossas soluções de tecnologia e infraestrutura.",
    siteName: "Consummerce",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Consummerce - Tecnologia e Soluções Digitais",
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        {/* Adicione o banner aqui, no final do body */}
        <CookieBanner />
      </body>
    </html>
  );
}