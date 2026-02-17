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

export const productCategories = ["All", "Vegetable Seeds", "Field Crops", "Hybrid Seeds", "Organic Seeds"];

export const products: Product[] = [
  {
    id: "tomato-hybrid-001",
    name: "AVNIGOLD Tomato Premium TH-501",
    category: "Vegetable Seeds",
    description:
      "Superior hybrid tomato variety with excellent disease resistance and consistent fruit quality. Ideal for commercial farming in Central India.",
    features: [
      "High disease resistance",
      "Uniform fruit size and shape",
      "Extended shelf life",
      "Excellent yield potential",
      "Suitable for multiple seasons",
    ],
    imageUrl: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=800&q=80",
    certifications: ["Quality Tested", "Certified Seeds"],
    yieldPotential: "55-75 tons/hectare",
    maturityDays: "65-70 days",
  },
  {
    id: "soybean-premium-002",
    name: "AVNIGOLD Soybean Elite SB-302",
    category: "Field Crops",
    description:
      "Premium soybean variety with high oil content and excellent protein quality. Well-suited for MP and Rajasthan regions.",
    features: [
      "High oil and protein content",
      "Disease resistant variety",
      "Drought tolerant",
      "Excellent pod filling",
      "Superior germination",
    ],
    imageUrl: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    certifications: ["Quality Tested", "Certified Seeds"],
    yieldPotential: "20-25 quintals/hectare",
    maturityDays: "95-105 days",
  },
  {
    id: "brinjal-hybrid-003",
    name: "AVNIGOLD Brinjal Hybrid BR-201",
    category: "Vegetable Seeds",
    description: "High-yielding brinjal variety with deep purple color and excellent fruit quality. Perfect for commercial cultivation.",
    features: [
      "Deep purple glossy skin",
      "Tender and seedless fruit",
      "High disease tolerance",
      "Long bearing period",
      "Uniform fruit size",
    ],
    imageUrl: "https://images.unsplash.com/photo-1659261200833-ec8761558af7?w=800&q=80",
    certifications: ["Premium Quality", "Tested Variety"],
    yieldPotential: "45-55 tons/hectare",
    maturityDays: "60-65 days",
  },
  {
    id: "chilli-hybrid-004",
    name: "AVNIGOLD Chilli Fire CH-401",
    category: "Vegetable Seeds",
    description:
      "High-pungency chilli variety with excellent color and spice content. Ideal for commercial farming and spice production.",
    features: [
      "High pungency level",
      "Bright red color at maturity",
      "Excellent drying quality",
      "Disease resistant",
      "Strong plant vigor",
    ],
    imageUrl: "https://images.unsplash.com/photo-1583663848850-46af132dc08e?w=800&q=80",
    certifications: ["Quality Certified", "High Yield Variety"],
    yieldPotential: "40-50 quintals/hectare",
    maturityDays: "70-80 days",
  },
  {
    id: "maize-hybrid-005",
    name: "AVNIGOLD Maize Gold MZ-601",
    category: "Field Crops",
    description:
      "Superior hybrid maize with excellent grain quality and high yield potential. Suitable for kharif season in Central India.",
    features: [
      "Excellent grain quality",
      "Disease resistant",
      "Good cob filling",
      "Drought tolerant",
      "High grain weight",
    ],
    imageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&q=80",
    certifications: ["Certified Hybrid", "Quality Assured"],
    yieldPotential: "70-85 quintals/hectare",
    maturityDays: "90-100 days",
  },
  {
    id: "okra-hybrid-006",
    name: "AVNIGOLD Okra Premium OK-301",
    category: "Organic Seeds",
    description: "Premium okra variety with tender pods and extended harvest period. Excellent for home gardens and commercial farming.",
    features: [
      "Dark green tender pods",
      "Extended picking period",
      "Uniform pod size",
      "High yield potential",
      "Disease resistant",
    ],
    imageUrl: "https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?w=800&q=80",
    certifications: ["Quality Certified", "Premium Variety"],
    yieldPotential: "12-15 tons/hectare",
    maturityDays: "45-50 days",
  },
];
