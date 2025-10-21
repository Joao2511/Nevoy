import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const readexPro = localFont({
  src: [
    { path: "../../public/fonts/ReadexPro-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/ReadexPro-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/ReadexPro-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-readex",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nevoy – Inovação, Automação e Escala",
  description: "Transformamos tecnologia em resultados tangíveis.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${readexPro.variable} ${inter.variable}`}>
      <body className="antialiased bg-black text-white font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
