import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "gold" | "forest";
}

export default function CTASection({
  title = "Ready to Source Premium Nigerian Commodities?",
  description = "Get in touch with our team to discuss your commodity requirements. We provide competitive pricing, reliable supply, and export-ready products.",
  buttonText = "Send an Inquiry",
  buttonHref = "/contact",
  variant = "forest",
}: CTASectionProps) {
  const bgClass =
    variant === "forest"
      ? "bg-forest text-white"
      : "gold-gradient text-forest";

  return (
    <section className={`${bgClass} py-20`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
        <p
          className={`mt-4 text-lg leading-relaxed ${
            variant === "forest" ? "text-gray-300" : "text-forest/80"
          }`}
        >
          {description}
        </p>
        <Link
          href={buttonHref}
          className={`inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
            variant === "forest"
              ? "bg-gold text-forest hover:bg-gold-light"
              : "bg-forest text-gold hover:bg-forest-light"
          }`}
        >
          {buttonText}
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
