import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Müller Inc. | Digital Solutions",
  description:
    "Soluções digitais construídas com precisão e propósito. Desenvolvimento web, sistemas empresariais e produtos SaaS.",
  keywords: [
    "Müller Inc.",
    "Guilherme Müller",
    "desenvolvimento web",
    "sistemas",
    "SaaS",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Guilherme Müller" }],
  creator: "Müller Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${syne.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
