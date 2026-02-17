export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  imageUrl: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "soil-preparation-guide",
    title: "Complete Guide to Soil Preparation for Optimal Seed Germination",
    slug: "soil-preparation-guide",
    excerpt:
      "Learn the essential steps for preparing your soil to ensure maximum seed germination rates and healthy crop growth.",
    content: `Proper soil preparation is the foundation of successful farming. Here's everything you need to know about preparing your soil for optimal seed germination.

## Why Soil Preparation Matters

Soil preparation directly impacts seed germination rates, root development, and overall crop yield. Well-prepared soil provides the ideal environment for seeds to sprout and thrive.

## Step-by-Step Soil Preparation

### 1. Soil Testing
Before planting, conduct a comprehensive soil test to determine pH levels, nutrient content, and organic matter. This information guides your amendment strategy.

### 2. Clearing and Tilling
Remove debris, weeds, and rocks from the field. Till the soil to a depth of 8-12 inches to break up compacted layers and improve aeration.

### 3. Adding Organic Matter
Incorporate well-rotted compost or manure to improve soil structure, water retention, and nutrient availability.

### 4. pH Adjustment
Based on your soil test results, adjust pH levels using lime (to raise pH) or sulfur (to lower pH) to match your crop's requirements.

### 5. Final Leveling
Create a smooth, level seedbed to ensure uniform seed depth and moisture distribution.

## Best Practices

- Prepare soil when moisture content is optimal (not too wet or dry)
- Allow amended soil to settle for 1-2 weeks before planting
- Consider cover cropping during off-seasons
- Maintain proper drainage systems

Following these guidelines will significantly improve your germination success and crop performance.`,
    author: "Dr. Sarah Mitchell",
    publishDate: "2024-01-15",
    category: "Farming Tips",
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    readTime: "8 min read",
    tags: ["soil preparation", "germination", "farming basics"],
  },
  {
    id: "seed-storage-best-practices",
    title: "How to Store Seeds Properly: Best Practices for Maximum Viability",
    slug: "seed-storage-best-practices",
    excerpt:
      "Discover professional techniques for storing seeds to maintain their viability and germination rates for extended periods.",
    content: `Proper seed storage is crucial for maintaining seed quality and germination rates. Follow these professional guidelines to preserve your seed investment.

## Understanding Seed Viability

Seed viability decreases over time, but proper storage can significantly extend the useful life of your seeds.

## Optimal Storage Conditions

### Temperature Control
Store seeds at 5-10°C (41-50°F) for most varieties. Lower temperatures slow metabolic processes and preserve viability.

### Humidity Management
Maintain relative humidity below 50%. Excess moisture can trigger premature germination or fungal growth.

### Light Protection
Store seeds in dark conditions to prevent light-induced deterioration.

## Storage Container Selection

- Use airtight containers to prevent moisture absorption
- Glass jars with tight-fitting lids work excellently
- Include silica gel packets to absorb excess moisture
- Label containers with variety name and storage date

## Monitoring and Testing

Regularly check stored seeds for:
- Signs of moisture or mold
- Pest infestation
- Germination viability (conduct periodic germination tests)

## Storage Duration Guidelines

- Vegetable seeds: 2-5 years
- Field crop seeds: 1-3 years
- Hybrid seeds: Follow manufacturer recommendations

Proper storage ensures you get the best return on your seed investment and consistent crop performance.`,
    author: "James Rodriguez",
    publishDate: "2024-01-10",
    category: "Seed Management",
    imageUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
    readTime: "6 min read",
    tags: ["seed storage", "seed viability", "best practices"],
  },
  {
    id: "organic-farming-transition",
    title: "Transitioning to Organic Farming: A Comprehensive Roadmap",
    slug: "organic-farming-transition",
    excerpt: "Step-by-step guide for farmers looking to transition from conventional to organic farming practices.",
    content: `Making the transition to organic farming requires careful planning and commitment. This guide will help you navigate the process successfully.

## Understanding Organic Certification

Organic certification requires adherence to strict standards regarding:
- Prohibited synthetic inputs
- Soil health management
- Crop rotation practices
- Pest and disease management

## The Transition Period

Most certification bodies require a 3-year transition period during which:
- No prohibited substances are used
- Organic practices are implemented
- Detailed records are maintained
- Crops cannot yet be sold as certified organic

## Key Steps for Successful Transition

### 1. Develop a Farm Plan
Create a comprehensive plan covering crop rotation, soil improvement, and pest management strategies.

### 2. Soil Building
Focus on improving soil health through:
- Cover cropping
- Composting
- Reduced tillage
- Organic amendments

### 3. Pest Management
Implement integrated pest management (IPM) using:
- Beneficial insects
- Crop rotation
- Resistant varieties
- Physical barriers

### 4. Record Keeping
Maintain detailed records of all inputs, practices, and yields.

## Financial Considerations

- Initial yield reduction is common
- Premium prices for organic products
- Potential cost savings on inputs
- Available transition support programs

## Marketing Your Organic Products

- Build relationships with organic buyers
- Consider direct-to-consumer sales
- Join organic farmer cooperatives
- Obtain certification to access premium markets

The transition to organic farming is challenging but rewarding, offering environmental benefits and market opportunities.`,
    author: "Dr. Emily Chen",
    publishDate: "2024-01-05",
    category: "Organic Farming",
    imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
    readTime: "10 min read",
    tags: ["organic farming", "certification", "sustainable agriculture"],
  },
];

export const blogCategories = [
  "All",
  "Farming Tips",
  "Seed Management",
  "Organic Farming",
  "Crop Guidance",
  "Industry News",
];
