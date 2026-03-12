import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  slug: string;
  tagline: string;
  image: string;
}

export default function ProductCard({ name, slug, tagline, image }: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-gold/30 transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden bg-forest/5">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-forest group-hover:text-gold-dark transition-colors">
          {name}
        </h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">{tagline}</p>
        <div className="mt-4 flex items-center gap-2 text-gold-dark text-sm font-medium">
          View Details
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
