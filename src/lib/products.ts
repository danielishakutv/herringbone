export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  origin: string;
  image: string;
  heroBg: string;
  color: string;
  specifications: { label: string; value: string }[];
  packaging: string[];
  exportStandards: string[];
}

export const products: Product[] = [
  {
    slug: "cashew",
    name: "Cashew Nuts",
    tagline: "Premium Nigerian cashew nuts for global markets",
    description:
      "Nigeria is one of Africa's largest producers of cashew nuts, renowned for their rich flavor and high kernel quality. Our cashew nuts are carefully sourced from trusted farming communities across Nigeria's cashew belt, ensuring consistent quality and supply for international buyers.",
    origin: "Nigeria (Oyo, Kwara, Kogi, Enugu, Anambra States)",
    image: "/products/cashew.jpg",
    heroBg: "/products/cashew_bg.webp",
    color: "from-amber-600 to-amber-800",
    specifications: [
      { label: "Kernel Size", value: "W180, W210, W240, W320, W450" },
      { label: "Moisture Content", value: "Max 10%" },
      { label: "Nut Count", value: "170–210 per kg" },
      { label: "Shell Quality", value: "Clean, dry, no insect damage" },
      { label: "Foreign Matter", value: "Max 1%" },
    ],
    packaging: [
      "50 kg jute bags",
      "80 kg jute bags",
      "Custom packaging available",
    ],
    exportStandards: [
      "AFI (Association of Food Industries) standards",
      "NEPC certified",
      "Phytosanitary certification",
      "Certificate of Origin",
    ],
  },
  {
    slug: "ginger",
    name: "Ginger",
    tagline: "High-quality Nigerian ginger with bold flavor",
    description:
      "Nigerian ginger is prized globally for its high oil content and pungent flavor, making it a preferred choice in spice markets worldwide. Our ginger is sourced from Kaduna State, the heart of Nigeria's ginger production, and processed to meet international quality requirements.",
    origin: "Nigeria (Kaduna, Nasarawa, Benue States)",
    image: "/products/ginger.jpg",
    heroBg: "/products/ginger_bg.jpg",
    color: "from-yellow-600 to-yellow-800",
    specifications: [
      { label: "Variety", value: "UG1 (Yellow Ginger), UG2" },
      { label: "Moisture Content", value: "Max 12%" },
      { label: "Oil Content", value: "Min 3%" },
      { label: "Ash Content", value: "Max 8%" },
      { label: "Form", value: "Split, Whole, Powder" },
    ],
    packaging: [
      "25 kg polypropylene bags",
      "50 kg jute bags",
      "Custom packaging available",
    ],
    exportStandards: [
      "ASTA cleanliness specifications",
      "NEPC certified",
      "Phytosanitary certification",
      "Certificate of Origin",
    ],
  },
  {
    slug: "cocoa",
    name: "Cocoa Beans",
    tagline: "Fine Nigerian cocoa beans for chocolate and confectionery",
    description:
      "Nigeria is the world's fourth-largest cocoa producer, delivering beans with a distinct flavor profile sought after by chocolate manufacturers globally. Our cocoa beans are fermented and dried using best practices to ensure premium quality and are sourced from established cocoa farming regions.",
    origin: "Nigeria (Ondo, Cross River, Osun, Ogun States)",
    image: "/products/cocoa.jpg",
    heroBg: "/products/cocoa_bg.webp",
    color: "from-amber-900 to-amber-950",
    specifications: [
      { label: "Grade", value: "Grade 1, Grade 2" },
      { label: "Bean Count", value: "90–100 beans per 100g" },
      { label: "Moisture Content", value: "Max 7.5%" },
      { label: "Free Fatty Acid", value: "Max 1.75%" },
      { label: "Fermentation", value: "Min 80% fully fermented" },
    ],
    packaging: [
      "65 kg jute bags",
      "Custom packaging available",
    ],
    exportStandards: [
      "ICCO quality standards",
      "NEPC certified",
      "Phytosanitary certification",
      "Certificate of Origin",
    ],
  },
  {
    slug: "sesame-seeds",
    name: "Sesame Seeds",
    tagline: "Premium Nigerian sesame seeds for oil and food processing",
    description:
      "Nigeria ranks among the top global producers of sesame seeds, known for their high oil content and purity. Our sesame seeds are sourced from the northern regions of Nigeria, where ideal growing conditions produce seeds that meet the strictest international standards for food and oil processing.",
    origin: "Nigeria (Jigawa, Nassarawa, Benue, Taraba States)",
    image: "/products/sesame.jpg",
    heroBg: "/products/sesame_bg.jpg",
    color: "from-yellow-500 to-amber-600",
    specifications: [
      { label: "Variety", value: "White, Brown, Black" },
      { label: "Purity", value: "Min 99%" },
      { label: "Oil Content", value: "Min 48%" },
      { label: "Moisture Content", value: "Max 6%" },
      { label: "FFA", value: "Max 2%" },
    ],
    packaging: [
      "25 kg polypropylene bags",
      "50 kg polypropylene bags",
      "Custom packaging available",
    ],
    exportStandards: [
      "FOSFA standards",
      "NEPC certified",
      "Phytosanitary certification",
      "Certificate of Origin",
    ],
  },
  {
    slug: "hibiscus",
    name: "Hibiscus (Zobo)",
    tagline: "Vibrant Nigerian hibiscus flowers for beverages and health products",
    description:
      "Nigerian hibiscus flowers (Roselle) are in high demand globally for beverages, herbal teas, natural food coloring, and health supplements. Our hibiscus is hand-picked and sun-dried to preserve its deep red color and rich nutritional profile, meeting the quality expectations of international buyers.",
    origin: "Nigeria (Jigawa, Kano, Bauchi, Gombe States)",
    image: "/products/hibiscus.jpg",
    heroBg: "/products/Hibiscus_bg.png",
    color: "from-rose-600 to-rose-800",
    specifications: [
      { label: "Type", value: "Dried whole flowers, Cut & Sifted" },
      { label: "Color", value: "Dark Red (high anthocyanin)" },
      { label: "Moisture Content", value: "Max 12%" },
      { label: "Foreign Matter", value: "Max 2%" },
      { label: "Acidity", value: "Natural (pH 2.5–3.5)" },
    ],
    packaging: [
      "25 kg polypropylene bags",
      "50 kg bales",
      "Custom packaging available",
    ],
    exportStandards: [
      "EU food safety standards",
      "NEPC certified",
      "Phytosanitary certification",
      "Certificate of Origin",
    ],
  },
];
