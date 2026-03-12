import Image from "next/image";

interface SectionBackgroundProps {
  src: string;
  alt: string;
  overlay?: string;
}

export default function SectionBackground({
  src,
  alt,
  overlay = "bg-forest/80",
}: SectionBackgroundProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
        quality={70}
      />
      <div className={`absolute inset-0 ${overlay}`} />
    </>
  );
}
