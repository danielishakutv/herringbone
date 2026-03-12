interface VideoBackgroundProps {
  src: string;
  poster?: string;
  overlay?: "dark" | "darker" | "darkest";
}

const overlayMap = {
  dark: "bg-forest/70",
  darker: "bg-forest/80",
  darkest: "bg-forest/90",
};

export default function VideoBackground({ src, poster, overlay = "darker" }: VideoBackgroundProps) {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 ${overlayMap[overlay]}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,164,92,0.08),transparent_70%)]" />
    </>
  );
}
