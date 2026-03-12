import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Herringbone — Nigerian Agro Commodity Exports",
    template: "%s | Herringbone",
  },
  description:
    "Herringbone is a trusted Nigerian agro commodity export company specializing in cashew, ginger, cocoa, sesame seeds, and hibiscus for international markets.",
  keywords: [
    "Nigerian exports",
    "agro commodities",
    "cashew",
    "ginger",
    "cocoa",
    "sesame seeds",
    "hibiscus",
    "Nigeria trade",
    "commodity sourcing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
