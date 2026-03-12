import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import HeroBackground from "@/components/HeroBackground";
import SectionBackground from "@/components/SectionBackground";
import ScrollReveal from "@/components/ScrollReveal";
import { bgImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Herringbone offers end-to-end export services including trade facilitation, procurement support, logistics coordination, and market access partnerships.",
};

const services = [
  {
    image: bgImages.serviceTrade,
    imageAlt: "Business professionals discussing trade agreements",
    title: "Trade Facilitation",
    description:
      "We connect international buyers with Nigerian suppliers, managing the complexities of cross-border commodity trade so you can focus on your business.",
    features: [
      "Buyer-supplier matching",
      "Trade negotiation support",
      "Contract facilitation",
      "Price benchmarking",
    ],
  },
  {
    image: bgImages.serviceProcurement,
    imageAlt: "Agricultural commodity sourcing and quality inspection",
    title: "Procurement Support",
    description:
      "We source high-quality agro commodities through our established network of trusted farmers, aggregators, and processing facilities across Nigeria.",
    features: [
      "Verified supplier network",
      "Quality pre-inspection",
      "Volume aggregation",
      "Seasonal planning",
    ],
  },
  {
    image: bgImages.serviceLogistics,
    imageAlt: "Container port and shipping logistics operations",
    title: "Logistics Coordination",
    description:
      "From warehousing to shipping, we coordinate the entire logistics chain to ensure your commodities arrive safely and on time.",
    features: [
      "Warehousing and storage",
      "Export documentation",
      "Shipping coordination",
      "Supply chain tracking",
    ],
  },
  {
    image: bgImages.serviceMarket,
    imageAlt: "Team collaboration and market partnership meeting",
    title: "Market Access & Partnerships",
    description:
      "We help businesses expand into new markets by leveraging our trade expertise, regulatory knowledge, and international buyer network.",
    features: [
      "Market entry strategy",
      "Regulatory guidance",
      "Partner introductions",
      "Trade fair representation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest py-24 lg:py-32 overflow-hidden">
        <HeroBackground src={bgImages.servicesHero} alt="Container ship at sea" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold/10 text-gold border border-gold/20 mb-6">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
            End-to-End <span className="text-gold">Export Solutions</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From sourcing to shipping, Herringbone provides comprehensive trade services that simplify international commodity procurement.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={0}>
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-3xl font-bold text-forest">{service.title}</h2>
                <p className="mt-4 text-gray-500 leading-relaxed text-lg">{service.description}</p>
                <ul className="mt-8 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative rounded-2xl overflow-hidden min-h-[350px] lg:min-h-[400px] img-zoom-wrap">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover img-zoom"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 bg-forest text-white overflow-hidden">
        <SectionBackground src={bgImages.servicesProcess} alt="Warehouse logistics" overlay="bg-forest/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Process"
            title="How We Work"
            description="A streamlined process designed to make international commodity sourcing simple and reliable."
            light
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Inquiry", desc: "Tell us what commodities you need, quantities, and quality requirements." },
              { step: "02", title: "Sourcing", desc: "We source from our verified supplier network and conduct quality checks." },
              { step: "03", title: "Documentation", desc: "We prepare all export documentation and compliance certificates." },
              { step: "04", title: "Delivery", desc: "Your commodities are shipped with full logistics coordination." },
            ].map((item) => (
              <ScrollReveal key={item.step} delay={(parseInt(item.step) - 1) * 120}>
              <div className="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="text-4xl font-bold text-gold/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">{item.desc}</p>
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
