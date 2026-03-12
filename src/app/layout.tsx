import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfig from "@/lib/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F2E25",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Herringbone — Premium Nigerian Agro Commodity Exports",
    template: "%s | Herringbone",
  },
  description: siteConfig.description,
  keywords: [
    "Nigerian exports",
    "agro commodities",
    "cashew nuts export",
    "Nigerian ginger",
    "cocoa beans Nigeria",
    "sesame seeds export",
    "hibiscus flowers",
    "Nigeria trade",
    "commodity sourcing",
    "NEPC certified exporter",
    "agricultural exports Africa",
  ],
  authors: [{ name: "Herringbone" }],
  creator: "Herringbone",
  publisher: "Herringbone",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Herringbone — Premium Nigerian Agro Commodity Exports",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Herringbone — Nigerian Agro Commodity Exports",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Herringbone — Premium Nigerian Agro Commodity Exports",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
