import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import HeroBackground from "@/components/HeroBackground";
import SectionBackground from "@/components/SectionBackground";
import { bgImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Herringbone offers end-to-end export services including trade facilitation, procurement support, logistics coordination, and market access partnerships.",
};

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
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
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
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
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
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
            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 rounded-2xl bg-gold/10 text-gold flex items-center justify-center mb-6">
                  {service.icon}
                </div>
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
                <div className="bg-cream rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
                  <div className="w-24 h-24 rounded-2xl bg-forest/10 text-forest flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 bg-forest text-white overflow-hidden">
        <SectionBackground src={bgImages.servicesProcess} alt="Warehouse logistics" overlay="darker" />
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
              <div key={item.step} className="relative p-6 rounded-xl border border-forest-light">
                <div className="text-4xl font-bold text-gold/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="gold" />
    </>
  );
}
