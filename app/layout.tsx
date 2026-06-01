import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Santa Maria Shop — Moda de Lujo Casual",
  description:
    "Descubre colecciones de moda para mujer y hombre. Estilo, elegancia y autenticidad en cada prenda.",
  keywords: ["moda", "ropa", "lujo", "casual", "mujer", "hombre", "colección"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
