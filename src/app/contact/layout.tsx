import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Buyer Inquiry",
  description:
    "Contact Herringbone for commodity sourcing, pricing, and export inquiries. Reach out to our team for premium Nigerian agro commodities.",
  openGraph: {
    title: "Contact Herringbone — Buyer Inquiry",
    description:
      "Contact Herringbone for commodity sourcing, pricing, and export inquiries. Reach out to our team for premium Nigerian agro commodities.",
    images: [{ url: "/logo-full.png", width: 1200, height: 630, alt: "Contact Herringbone" }],
  },
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
