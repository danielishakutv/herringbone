import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import SectionBackground from "@/components/SectionBackground";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/lib/products";
import { bgImages } from "@/lib/images";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Trade Facilitation",
    description: "Connecting buyers and suppliers across international markets with seamless trade operations.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Procurement Support",
    description: "Sourcing high-quality products through trusted supplier networks across Nigeria.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Logistics Coordination",
    description: "Efficient transportation and supply chain management from source to destination.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Market Access & Partnerships",
    description: "Supporting businesses looking to expand into new markets across Africa and beyond.",
  },
];

const stats = [
  { value: "5+", label: "Export Commodities" },
  { value: "20+", label: "Global Partners" },
  { value: "100%", label: "Quality Commitment" },
  { value: "NEPC", label: "Certified Exporter" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-forest overflow-hidden">
        <Image
          src={bgImages.homeHero}
          alt="International shipping port"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-forest/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/60 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold/10 text-gold border border-gold/20 mb-6">
                NEPC Certified Exporter
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Premium Nigerian{" "}
                <span className="text-gold">Agro Commodities</span>{" "}
                for Global Markets
              </h1>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
                Herringbone connects international buyers with Nigeria&apos;s finest agricultural exports — cashew, ginger, cocoa, sesame seeds, and hibiscus — delivered to the highest quality standards.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="btn-hover inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-forest font-semibold rounded-xl hover:bg-gold-light transition-all duration-200 text-lg"
                >
                  Explore Products
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="btn-hover inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold/30 text-gold font-semibold rounded-xl hover:border-gold hover:bg-gold/5 transition-all duration-200 text-lg"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=75&auto=format"
                  alt="Nigerian agricultural commodities"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-forest/20 to-transparent" />
                <div className="absolute inset-0 flex items-end justify-start p-8">
                  <Image
                    src="/logo-icon.png"
                    alt="Herringbone"
                    width={60}
                    height={60}
                    className="opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-forest-light">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-gold">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <SectionHeading
                badge="About Herringbone"
                title="Your Trusted Partner in Nigerian Exports"
                align="left"
              />
              <p className="mt-6 text-gray-500 leading-relaxed">
                Herringbone is a Nigerian agro commodity export company committed to bridging the gap between Africa&apos;s agricultural abundance and global market demand. We specialize in sourcing, processing, and exporting premium-quality commodities that meet international standards.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                With strong supplier relationships, robust quality control processes, and deep knowledge of export regulations, we ensure our partners receive only the best — on time, every time.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-gold-dark font-semibold hover:text-gold transition-colors"
              >
                Learn More About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="bg-cream rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      icon: (
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      title: "Global Reach",
                      desc: "Serving buyers across continents",
                    },
                    {
                      icon: (
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      ),
                      title: "Quality First",
                      desc: "Rigorous quality control",
                    },
                    {
                      icon: (
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      ),
                      title: "Trusted Networks",
                      desc: "Verified supplier partnerships",
                    },
                    {
                      icon: (
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      ),
                      title: "Full Compliance",
                      desc: "NEPC certified operations",
                    },
                  ].map((item) => (
                    <div key={item.title} className="text-center p-4">
                      <div className="w-14 h-14 rounded-xl bg-forest/5 text-forest flex items-center justify-center mx-auto mb-3">
                        {item.icon}
                      </div>
                      <div className="font-semibold text-forest text-sm">{item.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Products"
            title="Premium Export Commodities"
            description="We source and export Nigeria's finest agro commodities, meeting international quality standards for buyers worldwide."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <ScrollReveal key={product.slug} delay={i * 100}>
                <ProductCard
                  name={product.name}
                  slug={product.slug}
                  tagline={product.tagline}
                  image={product.image}
                />
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-forest text-gold font-semibold rounded-xl hover:bg-forest-light transition-colors"
            >
              View All Products
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Services"
            title="End-to-End Export Solutions"
            description="From procurement to delivery, we handle every step of the export process so you can focus on your business."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div
                  className="group p-8 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300 bg-white"
                >
                <div className="w-14 h-14 rounded-xl bg-forest/5 text-forest flex items-center justify-center group-hover:bg-gold/10 group-hover:text-gold transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold text-forest">{service.title}</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">{service.description}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-gold-dark font-semibold hover:text-gold transition-colors"
            >
              Learn More About Our Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 text-white overflow-hidden">
        <SectionBackground
          src={bgImages.homeWhyUs}
          alt="Shipping containers"
          overlay="bg-forest/93"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why Herringbone"
            title="Built for International Buyers"
            description="We understand the needs of global commodity buyers and have built our operations to exceed expectations."
            light
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Verified Quality",
                description: "Every shipment undergoes rigorous quality testing and inspection before export.",
              },
              {
                title: "Competitive Pricing",
                description: "Direct sourcing from farmers ensures competitive prices without compromising quality.",
              },
              {
                title: "Reliable Supply",
                description: "Established supply chains and warehousing ensure consistent product availability.",
              },
              {
                title: "Export Documentation",
                description: "Full export documentation including phytosanitary certificates and certificates of origin.",
              },
              {
                title: "Custom Packaging",
                description: "Flexible packaging options to meet your specific market requirements.",
              },
              {
                title: "Dedicated Support",
                description: "A responsive team ready to support your procurement needs from inquiry to delivery.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
              <div
                className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-gold/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
