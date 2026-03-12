import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import HeroBackground from "@/components/HeroBackground";
import { products } from "@/lib/products";
import { bgImages } from "@/lib/images";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description.slice(0, 160),
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest py-20 lg:py-28 overflow-hidden">
        <HeroBackground src={bgImages.productDetail} alt="Agricultural commodity" overlay="darker" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/products" className="hover:text-gold transition-colors">Products</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gold">{product.name}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {product.name}
          </h1>
          <p className="mt-4 text-xl text-gold font-medium">{product.tagline}</p>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl leading-relaxed">
            {product.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-forest font-semibold rounded-xl hover:bg-gold-light transition-colors text-lg"
            >
              Request a Quote
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold/30 text-gold font-semibold rounded-xl hover:border-gold hover:bg-gold/5 transition-colors text-lg"
            >
              All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Specifications */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-forest mb-8">Quality Specifications</h2>
              <div className="bg-cream rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left px-6 py-4 text-sm font-semibold text-forest">Parameter</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-forest">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr key={spec.label} className={i % 2 === 0 ? "bg-white" : ""}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-700">{spec.label}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{spec.value}</td>
                      </tr>
                    ))}
                    <tr className={product.specifications.length % 2 === 0 ? "bg-white" : ""}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">Origin</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{product.origin}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Packaging */}
              <div className="bg-forest rounded-2xl p-8 text-white">
                <h3 className="text-lg font-bold mb-4">Packaging Options</h3>
                <ul className="space-y-3">
                  {product.packaging.map((pkg) => (
                    <li key={pkg} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">{pkg}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Export Standards */}
              <div className="bg-cream rounded-2xl p-8">
                <h3 className="text-lg font-bold text-forest mb-4">Export Standards</h3>
                <ul className="space-y-3">
                  {product.exportStandards.map((std) => (
                    <li key={std} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-sm text-gray-600">{std}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Inquiry */}
              <div className="bg-gold/10 rounded-2xl p-8 border border-gold/20">
                <h3 className="text-lg font-bold text-forest mb-2">Interested in {product.name}?</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Contact us for pricing, samples, and export terms.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-forest text-gold font-semibold rounded-xl hover:bg-forest-light transition-colors"
                >
                  Send Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-forest mb-8">Other Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.slug !== product.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-semibold text-forest group-hover:text-gold-dark transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-xs text-gray-500">{p.tagline}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-gold-dark">
                    View Details
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
