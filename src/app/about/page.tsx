import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import HeroBackground from "@/components/HeroBackground";
import ScrollReveal from "@/components/ScrollReveal";
import { bgImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Herringbone — a trusted Nigerian agro commodity export company committed to quality, reliability, and building lasting international trade partnerships.",
  openGraph: {
    title: "About Herringbone — Nigerian Agro Commodity Exports",
    description:
      "Learn about Herringbone — a trusted Nigerian agro commodity export company committed to quality, reliability, and building lasting international trade partnerships.",
    images: [{ url: "/logo-full.png", width: 1200, height: 630, alt: "Herringbone" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Herringbone — Nigerian Agro Commodity Exports",
    description:
      "Learn about Herringbone — a trusted Nigerian agro commodity export company committed to quality, reliability, and building lasting international trade partnerships.",
    images: ["/logo-full.png"],
  },
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Integrity",
    description: "We conduct business with honesty and transparency, building trust with every transaction.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Excellence",
    description: "We pursue the highest standards in product quality, service delivery, and operational efficiency.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Partnership",
    description: "We view every client relationship as a long-term partnership built on mutual benefit and respect.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Global Vision",
    description: "We are committed to positioning Nigeria as a leading source of premium agro commodities worldwide.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest py-24 lg:py-32 overflow-hidden">
        <HeroBackground src={bgImages.aboutHero} alt="Nigerian agricultural farmland" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold/10 text-gold border border-gold/20 mb-6">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Bridging Nigeria&apos;s Agriculture with <span className="text-gold">Global Markets</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Herringbone is a Nigerian agro commodity export company built to serve international buyers with premium-quality products and reliable supply chains.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <SectionHeading
                badge="Our Story"
                title="Built on Trust, Driven by Quality"
                align="left"
              />
              <div className="mt-8 space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Herringbone was founded with a clear mission: to connect Nigeria&apos;s rich agricultural resources with international markets that demand quality, consistency, and reliability.
                </p>
                <p>
                  Nigeria is one of Africa&apos;s largest agricultural producers, yet many international buyers struggle to find trustworthy sourcing partners. Herringbone was established to fill that gap — providing end-to-end commodity export services backed by verified supplier networks, rigorous quality control, and full regulatory compliance.
                </p>
                <p>
                  From our base in Lagos, we work closely with farming communities, aggregators, and processing facilities across Nigeria to source the finest cashew nuts, ginger, cocoa beans, sesame seeds, and hibiscus flowers for export to markets worldwide.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="bg-forest rounded-2xl p-12 flex flex-col items-center justify-center min-h-[400px] gap-6">
                <Image
                  src="/logo-icon.png"
                  alt="Herringbone"
                  width={120}
                  height={120}
                  className="opacity-90"
                />
                <span className="text-3xl font-bold text-white tracking-[0.25em] uppercase">Herringbone</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-forest">Our Mission</h3>
              <p className="mt-4 text-gray-500 leading-relaxed">
                To deliver premium-quality Nigerian agro commodities to international markets with integrity, efficiency, and consistency — building lasting partnerships that benefit buyers, suppliers, and communities alike.
              </p>
            </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-forest">Our Vision</h3>
              <p className="mt-4 text-gray-500 leading-relaxed">
                To become a leading name in Nigerian agro commodity exports, recognized globally for our commitment to quality, reliability, and sustainable trade practices that showcase the best of Nigeria&apos;s agricultural sector.
              </p>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us"
            description="Our values shape every decision we make and every relationship we build."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100}>
              <div
                className="text-center p-8 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-forest/5 text-forest flex items-center justify-center mx-auto">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold text-forest">{value.title}</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Philosophy */}
      <section className="py-24 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Approach"
            title="Operational Philosophy"
            description="We have built our operations around the principles that matter most to international commodity buyers."
            light
          />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Source with Care",
                description: "We work directly with trusted farming communities and aggregators across Nigeria, ensuring traceability and consistent quality from farm to port.",
              },
              {
                title: "Quality Without Compromise",
                description: "Every batch is inspected, tested, and certified before export. We maintain strict adherence to international quality specifications and food safety standards.",
              },
              {
                title: "Deliver with Reliability",
                description: "From documentation to logistics, we manage the entire export process to ensure timely delivery. Our buyers count on us to deliver — and we do.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 120}>
              <div className="p-8 rounded-xl border border-forest-light">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-gray-400 leading-relaxed">{item.description}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="gold" />
    </>
  );
}
