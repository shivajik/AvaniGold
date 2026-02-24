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

export const productCategories = [
  "All",
  "Soyabean",
  "Hybrid Maize",
  "Hybrid Bajra",
  "Hybrid Jowar",
  "Bengal Gram",
  "Red Gram",
  "Wheat",
  "Paddy",
  "Hybrid Paddy",
  "Hybrid Sunflower",
];

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
    imageUrl: "/images/products/MAHALAXMI.png",
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
    imageUrl: "/images/products/SHAMBHO.png",
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
    imageUrl: "/images/products/chitransh.png",
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
    imageUrl: "/images/products/SUREKHA.png",
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
    imageUrl: "/images/products/maize-1.jpg",
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
    imageUrl: "/images/products/maize-2.jpg",
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
    imageUrl: "/images/products/maize-images.webp",
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
    imageUrl: "/images/products/maize.jpeg",
    certifications: ["Certified Hybrid", "Quality Assured"],
    yieldPotential: "High Yield Potential",
    maturityDays: "108-160 days"
  },
  // Bengal Gram
  {
    id: "bengalgram-soham-21",
    name: "SOHAM-21 (Re. Bengalgram)",
    category: "Bengal Gram",
    description: "High yielding and Tolerant to fusarium wilt. Suitable for all soil types.",
    features: [
      "Spreading plant type",
      "Suitable for rainfed and irrigated condition",
      "Medium maturing variety"
    ],
    imageUrl: "/images/products/bengal-gram.png",
    certifications: ["Quality Tested"],
    yieldPotential: "High Yielding",
    maturityDays: "100-110 days"
  },
  // Red Gram
  {
    id: "redgram-mamta",
    name: "MAMTA (Re. Red Gram)",
    category: "Red Gram",
    description: "Tolerant to sterility mosaic. Indeterminate plant type.",
    features: [
      "Red seed colour",
      "Indeterminate plant type",
      "High yield potential"
    ],
    imageUrl: "/images/products/red-gram-mamta.png",
    certifications: ["Quality Tested"],
    yieldPotential: "20-25 Q/ha",
    maturityDays: "160-170 days"
  },
  // Wheat
  {
    id: "wheat-shri-hari-111",
    name: "SHRI HARI-111 (Re. Wheat)",
    category: "Wheat",
    description: "More yields with minimum irrigation. Moderately tolerant to major diseases and pests.",
    features: [
      "Plant Height 80-90 cm",
      "Dark Green Leaves with profuse tillering",
      "Ovate, Bold, Amber coloured grains"
    ],
    imageUrl: "/images/products/SHRIHARI-111.jpg",
    certifications: ["Quality Tested"],
    yieldPotential: "High Yield",
    maturityDays: "105-115 days"
  },
  {
    id: "wheat-avni-400",
    name: "AVNI-400 (Re. Wheat)",
    category: "Wheat",
    description: "More yields with minimum irrigation. Moderately tolerant to major diseases and pests.",
    features: [
      "Plant Height 85-95 cm",
      "Dark Green Leaves with profuse tillering",
      "Ovate, Bold, Amber coloured grains"
    ],
    imageUrl: "/images/products/AVNI400.jpg",
    certifications: ["Quality Tested"],
    yieldPotential: "High Yield",
    maturityDays: "115-125 days"
  },
  {
    id: "wheat-ankit-555",
    name: "ANKIT-555 (Re. Wheat)",
    category: "Wheat",
    description: "More yields with minimum irrigation. Moderately tolerant to major diseases and pests.",
    features: [
      "Plant Height 85-95 cm",
      "Dark Green Leaves with profuse tillering",
      "Ovate, Bold, Amber coloured grains"
    ],
    imageUrl: "/images/products/wheat-ankit-555.png",
    certifications: ["Quality Tested"],
    yieldPotential: "High Yield",
    maturityDays: "115-125 days"
  },
  // Paddy
  {
    id: "paddy-sarthak",
    name: "SARTHAK (Re. Paddy)",
    category: "Paddy",
    description: "Excellent cooking quality. Super Fine grain type. Logging tolerant.",
    features: [
      "Plant Height 115-120 cm",
      "No. of productive tillers: 20-25",
      "No. of grains/panicle: 220-250",
      "Tolerant to major disease & insect"
    ],
    imageUrl: "/images/products/SARTHAK.png",
    certifications: ["Quality Tested"],
    yieldPotential: "High Yield",
    maturityDays: "120-125 days"
  },
  {
    id: "paddy-nitali",
    name: "NITALI (Re. Paddy)",
    category: "Paddy",
    description: "Excellent cooking quality. Super Fine grain type. Logging tolerant.",
    features: [
      "Plant Height 115-120 cm",
      "No. of productive tillers: 20-25",
      "No. of grains/panicle: 220-250",
      "Tolerant to major disease & insect"
    ],
    imageUrl: "/images/products/NITALI.png",
    certifications: ["Quality Tested"],
    yieldPotential: "High Yield",
    maturityDays: "135-140 days"
  },
  {
    id: "paddy-krushna",
    name: "KRUSHNA (Re. Paddy)",
    category: "Paddy",
    description: "Excellent cooking quality. Extra Long Slender grain type. Logging tolerant.",
    features: [
      "Plant Height 120-125 cm",
      "No. of productive tillers: 20-25",
      "No. of grains/panicle: 220-250",
      "Tolerant to major disease & insect"
    ],
    imageUrl: "/images/products/KRUSHNA.png",
    certifications: ["Quality Tested"],
    yieldPotential: "High Yield",
    maturityDays: "130-140 days"
  },
  // Hybrid Paddy
  {
    id: "hybrid-paddy-avni-999",
    name: "AVNI-999 (Hybrid Paddy)",
    category: "Hybrid Paddy",
    description: "Excellent cooking quality. Medium Bold grain type. Logging tolerant.",
    features: [
      "Plant Height 115-120 cm",
      "No. of productive tillers: 30-35",
      "No. of grains/panicle: 250-270",
      "Tolerant to major disease & insect"
    ],
    imageUrl: "/images/products/AVNI-999.png",
    certifications: ["Certified Hybrid"],
    yieldPotential: "High Yield",
    maturityDays: "120-125 days"
  },
  {
    id: "hybrid-paddy-avni-801",
    name: "AVNI-801 (Hybrid Paddy)",
    category: "Hybrid Paddy",
    description: "Excellent cooking quality. Medium Bold grain type. Logging tolerant.",
    features: [
      "Plant Height 115-120 cm",
      "No. of productive tillers: 30-35",
      "No. of grains/panicle: 250-270",
      "Tolerant to major disease & insect"
    ],
    imageUrl: "/images/products/AVNI-801.png",
    certifications: ["Certified Hybrid"],
    yieldPotential: "High Yield",
    maturityDays: "135-140 days"
  },
  // Hybrid Sunflower
  {
    id: "sunflower-tejas",
    name: "TEJAS (Hybrid Sunflower)",
    category: "Hybrid Sunflower",
    description: "High oil content (40.3%). Tolerant to Bud Necrosis.",
    features: [
      "Plant Height 160-170 cm",
      "Head Diameter 20-22 cm",
      "Grain Yield 16-18 Qtls"
    ],
    imageUrl: "/images/products/TEJAS.png",
    certifications: ["Certified Hybrid"],
    yieldPotential: "16-18 Qtls",
    maturityDays: "90-100 days"
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
    imageUrl: "/images/products/bajra.jpg",
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
    imageUrl: "/images/products/hybrid-crop.jpg",
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
    imageUrl: "/images/products/jowar_2.jpg",
    certifications: ["Quality Certified", "High Yield"],
    yieldPotential: "High Yield",
    maturityDays: "105-110 days"
  },
  {
    id: "sagar-11",
    name: "SAGAR-11 (Re. Bengalgram)",
    category: "Hybrid Maize",
    description: "Widely adapted and suitable for all sorghum growing areas. Medium maturing hybrid.",
    features: [
      "Spreading plant type",
      "Suitable for all soil type",
      "Suitable for rainfed and irrigated condition",
      "High yielding and Tolerant to fusarium wilt"
    ],
    imageUrl: "/images/products/kala-chana.jpg",
    certifications: ["Quality Certified", "High Yield"],
    yieldPotential: "High Yield",
    maturityDays: "100-110 days"
  }
];
