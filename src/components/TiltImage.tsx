"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface TiltImageProps {
  src: string;
  alt: string;
  sizes?: string;
  children?: React.ReactNode;
}

export default function TiltImage({ src, alt, sizes, children }: TiltImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg)");
  const [transitioning, setTransitioning] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    setTransitioning(false);

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;  // 0..1
    const y = (e.clientY - rect.top) / rect.height;   // 0..1

    const maxTilt = 12;
    // Tilt away from pointer: pointer on left → rotate right (positive Y), pointer on top → rotate down (negative X)
    const rotateY = (x - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - y) * maxTilt * 2;

    setTransform(`perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransitioning(true);
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg)");
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[500px] rounded-2xl overflow-hidden"
      style={{
        transform,
        transition: transitioning ? "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)" : "transform 0.1s ease-out",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
      />
      {children}
    </div>
  );
}
