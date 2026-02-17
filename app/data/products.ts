export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  imageUrl: string;
  certifications: string[];
  yieldPotential: string;
  maturityDays: string;
}

export const productCategories = ["All", "Soyabean", "Hybrid Maize", "Hybrid Bajra", "Hybrid Jowar"];

export const products: Product[] = [
  // Soyabean
  {
    id: "soybean-mahalaxmi",
    name: "MAHALAXMI (Re. Soyabean)",
    category: "Soyabean",
    description: "Highest Yielder of the industry. Sustain water logged conditions & plant stand well even if it get over matured.",
    features: [
      "Plant height is 2.5 to 2.75 feet",
      "60% pods 3 to 4 seeds",
      "Non Shattering, Branched plant thus profuse pod formation",
      "Resistant for Yellow vein mosaic, Charcoal Rot and Septoria brown spot",
      "Easy for harvesting with the combine harvester"
    ],
    imageUrl: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    certifications: ["Quality Tested", "Certified Seeds"],
    yieldPotential: "Highest Yielder",
    maturityDays: "90 to 100 days"
  },
  {
    id: "soybean-shambho",
    name: "SHAMBHO (Re. Soyabean)",
    category: "Soyabean",
    description: "Highest Yielder of the industry. Sustain water logged conditions & plant stand well even if it get over matured.",
    features: [
      "Plant height is 2.5 to 2.75 feet",
      "60% pods 3 to 4 seeds",
      "Non Shattering, Branched plant thus profuse pod formation",
      "Resistant for Yellow vein mosaic, Charcoal Rot and Septoria brown spot",
      "Easy for harvesting with the combine harvester"
    ],
    imageUrl: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    certifications: ["Quality Tested", "Certified Seeds"],
    yieldPotential: "Highest Yielder",
    maturityDays: "100 to 105 days"
  },
  {
    id: "soybean-chitransh",
    name: "CHITRANSH (Re. Soyabean)",
    category: "Soyabean",
    description: "Highest Yielder of the industry. Sustain water logged conditions & plant stand well even if it get over matured.",
    features: [
      "Plant height is 2.5 to 2.75 feet",
      "60% pods 3 to 4 seeds",
      "Non Shattering, Branched plant thus profuse pod formation",
      "Resistant for Yellow vein mosaic, Charcoal Rot and Septoria brown spot",
      "Easy for harvesting with the combine harvester"
    ],
    imageUrl: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    certifications: ["Quality Tested", "Certified Seeds"],
    yieldPotential: "Highest Yielder",
    maturityDays: "90 to 100 days"
  },
  {
    id: "soybean-surekha",
    name: "SUREKHA (Re. Soyabean)",
    category: "Soyabean",
    description: "Highest Yielder of the industry. Sustain water logged conditions & plant stand well even if it get over matured.",
    features: [
      "Plant height is 2.5 to 2.75 feet",
      "60% pods 3 to 4 seeds",
      "Non Shattering, Branched plant thus profuse pod formation",
      "Resistant for Yellow vein mosaic, Charcoal Rot and Septoria brown spot",
      "Easy for harvesting with the combine harvester"
    ],
    imageUrl: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    certifications: ["Quality Tested", "Certified Seeds"],
    yieldPotential: "Highest Yielder",
    maturityDays: "100 to 105 days"
  },
  // Hybrid Maize
  {
    id: "maize-amh-7879",
    name: "AMH-7879 (Hybrid Maize)",
    category: "Hybrid Maize",
    description: "High yield potential with Stay Green. Tall, Non lodging and Wide Adaptability.",
    features: [
      "Uniform ears with excellent tip filling",
      "Tolerant to foliar diseases",
      "Matures in 110-115 days (Rainy Season)",
      "120-130 days Central & South India",
      "145-155 days North India (Winter)"
    ],
    imageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&q=80",
    certifications: ["Certified Hybrid", "Quality Assured"],
    yieldPotential: "High Yield Potential",
    maturityDays: "110-155 days"
  },
  {
    id: "maize-amh-7181",
    name: "AMH-7181 (Hybrid Maize)",
    category: "Hybrid Maize",
    description: "High yield potential under irrigated conditions. Non lodging with erect plant type.",
    features: [
      "Good response to high management",
      "Light orange semi flint kernels",
      "Matures in 105-110 days (Rainy)",
      "115-125 days Central & South India",
      "145-155 days North India (Winter)"
    ],
    imageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&q=80",
    certifications: ["Certified Hybrid", "Quality Assured"],
    yieldPotential: "High Yield Potential",
    maturityDays: "105-155 days"
  },
  {
    id: "maize-amh-7700",
    name: "AMH-7700 (Hybrid Maize)",
    category: "Hybrid Maize",
    description: "Tall and Non lodging, Drought tolerant.",
    features: [
      "Uniform ears with good photosynthetic efficiency",
      "Yellow flint / semi flint kernels",
      "Matures in 108-118 days (Rainy)",
      "120-130 days Central & South India",
      "150-160 days North India (Winter)"
    ],
    imageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&q=80",
    certifications: ["Certified Hybrid", "Quality Assured"],
    yieldPotential: "High Yield Potential",
    maturityDays: "108-160 days"
  },
  {
    id: "maize-amh-2535",
    name: "AMH-2535 (Hybrid Maize)",
    category: "Hybrid Maize",
    description: "Tall and Non lodging, Drought tolerant.",
    features: [
      "Uniform ears with good photosynthetic efficiency",
      "Yellow flint / semi flint kernels",
      "Matures in 108-118 days (Rainy)",
      "120-130 days Central & South India",
      "150-160 days North India (Winter)"
    ],
    imageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&q=80",
    certifications: ["Certified Hybrid", "Quality Assured"],
    yieldPotential: "High Yield Potential",
    maturityDays: "108-160 days"
  },
  // Hybrid Bajra
  {
    id: "bajra-abh-9191",
    name: "ABH-9191 (Hybrid Bajra)",
    category: "Hybrid Bajra",
    description: "Medium maturing hybrid, medium tall.",
    features: [
      "Medium long, conical compact panicle",
      "Grey brown, obovate & bold seeds",
      "Matures in 75-80 Days"
    ],
    imageUrl: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?w=800&q=80",
    certifications: ["Quality Certified", "High Yield"],
    yieldPotential: "High Yield",
    maturityDays: "75-80 days"
  },
  // Hybrid Jowar
  {
    id: "jowar-ajh-vijeta",
    name: "AJH-VIJETA (Hybrid Jowar)",
    category: "Hybrid Jowar",
    description: "Widely adapted and suitable for all sorghum growing areas. Medium maturing hybrid.",
    features: [
      "Medium tall plant with dark green leaves",
      "Long semi-compact symmetrical panicle",
      "Bold, circular and smooth grains",
      "Matures in 105-110 days"
    ],
    imageUrl: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?w=800&q=80",
    certifications: ["Quality Certified", "High Yield"],
    yieldPotential: "High Yield",
    maturityDays: "105-110 days"
  },
  {
    id: "jowar-avni-501",
    name: "AVNI-501 (Hybrid Jowar)",
    category: "Hybrid Jowar",
    description: "Widely adapted and suitable for all sorghum growing areas. Medium maturing hybrid.",
    features: [
      "Medium tall plant with dark green leaves",
      "Long semi-compact symmetrical panicle",
      "Bold, circular and smooth grains",
      "Matures in 105-110 days"
    ],
    imageUrl: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?w=800&q=80",
    certifications: ["Quality Certified", "High Yield"],
    yieldPotential: "High Yield",
    maturityDays: "105-110 days"
  }
];
