import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import HeroBackground from "@/components/HeroBackground";
import ScrollReveal from "@/components/ScrollReveal";
import { bgImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Certifications & Compliance",
  description:
    "Herringbone is NEPC certified and committed to full regulatory compliance for Nigerian agro commodity exports.",
  openGraph: {
    title: "Certifications & Compliance | Herringbone",
    description:
      "Herringbone is NEPC certified and committed to full regulatory compliance for Nigerian agro commodity exports.",
    images: [{ url: "/logo-full.png", width: 1200, height: 630, alt: "Herringbone Certifications" }],
  },
  alternates: { canonical: "/certifications" },
};

export default function CertificationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest py-24 lg:py-32 overflow-hidden">
        <HeroBackground src={bgImages.certificationsHero} alt="Trade documents and certification" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold/10 text-gold border border-gold/20 mb-6">
            Certifications
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Certified for <span className="text-gold">International Trade</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We maintain the certifications and compliance standards required to export Nigerian agro commodities to markets worldwide.
          </p>
        </div>
      </section>

      {/* NEPC Certification */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <SectionHeading
                badge="Primary Certification"
                title="NEPC — Nigerian Export Promotion Council"
                align="left"
              />
              <div className="mt-8 space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Herringbone is registered and certified by the Nigerian Export Promotion Council (NEPC), the Nigerian government agency responsible for promoting and regulating the country&apos;s non-oil exports.
                </p>
                <p>
                  This certification confirms our status as a legitimate, government-recognized export company authorized to conduct international trade in Nigerian agro commodities. It ensures that our operations meet the regulatory standards required for cross-border commodity trade.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  "Government-recognized export license",
                  "Compliance with Nigerian export regulations",
                  "Authorized to issue Certificate of Origin",
                  "Regular regulatory reporting and audits",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="bg-forest rounded-2xl p-12 text-center">
                <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-8">
                  <svg className="w-12 h-12 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">NEPC Certified</h3>
                <p className="mt-2 text-gold font-medium">Nigerian Export Promotion Council</p>
                <p className="mt-4 text-gray-400 text-sm">
                  Official export license holder authorized for international commodity trade
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Export Documentation */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Documentation"
            title="Export Compliance Documents"
            description="Every shipment from Herringbone is accompanied by the full documentation required for international commodity trade."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Certificate of Origin",
                description: "Official documentation certifying the Nigerian origin of exported commodities.",
              },
              {
                title: "Phytosanitary Certificate",
                description: "Plant health certification issued by NAQS confirming products are pest-free and safe.",
              },
              {
                title: "Quality Inspection Certificate",
                description: "Third-party quality verification confirming products meet stated specifications.",
              },
              {
                title: "Bill of Lading",
                description: "Shipping documentation for cargo tracking and proof of shipment.",
              },
              {
                title: "Commercial Invoice",
                description: "Detailed trade invoice with product descriptions, quantities, and agreed pricing.",
              },
              {
                title: "Packing List",
                description: "Comprehensive list detailing packaging specifications and shipment contents.",
              },
            ].map((doc, i) => (
              <ScrollReveal key={doc.title} delay={i * 80}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-forest">{doc.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{doc.description}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Future Certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            badge="Growing Standards"
            title="Continuous Improvement"
            description="We are actively working toward additional certifications to expand our compliance portfolio and better serve our international partners."
          />
          <div className="mt-12 bg-cream rounded-2xl p-10 max-w-2xl mx-auto">
            <p className="text-gray-500 leading-relaxed">
              As Herringbone grows, we are pursuing additional quality and food safety certifications to meet the evolving requirements of international markets. Our commitment to regulatory compliance is ongoing, and we will continue to invest in the certifications our buyers expect.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
