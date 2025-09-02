import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Jules Bursens",
    default: "Jules Bursens",
  },
  description: "Chargé de projet digital — Développement web & SEO à Bordeaux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
