import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Buyer Inquiry",
  description:
    "Contact Herringbone for commodity sourcing, pricing, and export inquiries. Reach out to our team for premium Nigerian agro commodities.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
