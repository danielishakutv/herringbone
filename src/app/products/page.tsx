import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import HeroBackground from "@/components/HeroBackground";
import { products } from "@/lib/products";
import { bgImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Herringbone's premium Nigerian agro commodities — cashew nuts, ginger, cocoa beans, sesame seeds, and hibiscus — ready for international export.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest py-24 lg:py-32 overflow-hidden">
        <HeroBackground src={bgImages.productsHero} alt="Colorful agricultural commodities" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold/10 text-gold border border-gold/20 mb-6">
            Our Products
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Premium Nigerian <span className="text-gold">Agro Commodities</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We source and export Nigeria&apos;s finest agricultural products, meeting the highest international quality standards for buyers worldwide.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Export Commodities"
            description="Each commodity is carefully sourced, quality-tested, and prepared for export with full documentation and compliance."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                name={product.name}
                slug={product.slug}
                tagline={product.tagline}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Export Info */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Export Ready"
            title="Why Source from Herringbone?"
            description="Every product we export comes with the documentation, quality assurance, and logistics support international buyers need."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Quality Tested", desc: "Rigorous testing and inspection for every batch" },
              { title: "Full Documentation", desc: "Phytosanitary certs, Certificate of Origin, and more" },
              { title: "Custom Packaging", desc: "Flexible packaging options for your market needs" },
              { title: "Competitive Pricing", desc: "Direct sourcing ensures the best value" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-forest">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
