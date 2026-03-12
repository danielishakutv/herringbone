import Image from "next/image";

interface HeroBackgroundProps {
  src: string;
  alt: string;
  overlay?: "dark" | "darker" | "darkest";
}

const overlayMap = {
  dark: "bg-forest/75",
  darker: "bg-forest/85",
  darkest: "bg-forest/90",
};

export default function HeroBackground({ src, alt, overlay = "darker" }: HeroBackgroundProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={75}
      />
      <div className={`absolute inset-0 ${overlayMap[overlay]}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,164,92,0.08),transparent_70%)]" />
    </>
  );
}
