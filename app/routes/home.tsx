import type { Route } from "./+types/home";
import { Link } from "react-router";

export const config = {
  runtime: "nodejs",
};

import { Sparkles, Award, Shield, TrendingUp, Leaf, Zap, CheckCircle, Star, ArrowRight } from "lucide-react";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { HeroSlider } from "~/components/hero-slider/hero-slider";
import { Button } from "~/components/ui/button/button";
import styles from "./home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AVNIGOLD Seeds - Premium Quality Seeds for Progressive Agriculture" },
    {
      name: "description",
      content:
        "AVNIGOLD SEEDS PRIVATE LIMITED - Leading seed supplier based in Mandsaur, MP. Offering premium quality vegetable, field crop, and hybrid seeds trusted by farmers across India.",
    },
    {
      name: "keywords",
      content:
        "seeds, agriculture, farming, vegetable seeds, field crops, hybrid seeds, Mandsaur seeds, Madhya Pradesh seeds, AVNIGOLD, quality seeds, soybean, tomato, maize, chilli seeds",
    },
    {
      property: "og:title",
      content: "AVNIGOLD Seeds - Premium Quality Seeds for Progressive Agriculture",
    },
    {
      property: "og:description",
      content:
        "Premium quality seeds from Mandsaur. Trusted by farmers for superior germination and high yields.",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "AVNIGOLD Seeds" },
    { property: "og:locale", content: "en_IN" },
    {
      property: "og:image",
      content: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=630&fit=crop",
    },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "AVNIGOLD Seeds - Premium Quality Seeds" },
    {
      name: "twitter:description",
      content: "Premium quality seeds from Mandsaur. Trusted by farmers for superior germination and high yields.",
    },
    {
      name: "twitter:image",
      content: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=630&fit=crop",
    },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { name: "googlebot", content: "index, follow" },
    { name: "author", content: "AVNIGOLD SEEDS PRIVATE LIMITED" },
  ];
}

export default function HomeSlider() {
  const benefits = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "100% tested seeds with superior germination rates",
    },
    {
      icon: Leaf,
      title: "Sustainable",
      description: "Eco-friendly practices for better agriculture",
    },
    {
      icon: Zap,
      title: "High Yield",
      description: "Proven varieties for maximum crop production",
    },
    {
      icon: Shield,
      title: "Certified",
      description: "Quality assurance through rigorous testing",
    },
  ];

  const highlights = [
    {
      number: "500+",
      label: "Varieties",
    },
    {
      number: "98%",
      label: "Germination",
    },
    {
      number: "5000+",
      label: "Farmers",
    },
    {
      number: "15+",
      label: "States",
    },
  ];

  const testimonials = [
    {
      quote: "AVNIGOLD transformed my farming with their high-quality seeds. The yields are exceptional!",
      author: "Rajesh Sharma",
      location: "Mandsaur, MP",
      rating: 5,
    },
    {
      quote: "Best seeds in the market. Consistent quality and excellent germination every season.",
      author: "Suresh Patel",
      location: "Indore, MP",
      rating: 5,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AVNIGOLD SEEDS PRIVATE LIMITED",
    "url": "https://avnigoldseeds.com",
    "logo": "https://avnigoldseeds.com/logo.png",
    "description": "Premium quality seed supplier based in Mandsaur, Madhya Pradesh, offering vegetable seeds, field crops, and hybrid varieties.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Survey No. 420/2, Gram - Bhunyakhedi",
      "addressLocality": "Mandsaur",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "458002",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "Customer Service",
      "email": "info@avnigoldseeds.com",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "5000"
    },
    "sameAs": [
      "https://avnigoldseeds.com"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />

      <main className={styles.main}>
        {/* Hero Slider Section */}
        <HeroSlider />

        {/* Highlights Bar */}
        <section className={styles.highlightsBar}>
          <div className={styles.highlightsContainer}>
            {highlights.map((item, idx) => (
              <div key={idx} className={styles.highlightItem}>
                <div className={styles.highlightNumber}>{item.number}</div>
                <div className={styles.highlightLabel}>{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeading}>
              <h2 className={styles.sectionTitle}>Why AVNIGOLD?</h2>
              <p className={styles.sectionSubtitle}>
                Experience the difference that quality makes
              </p>
            </div>
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit) => (
                <div key={benefit.title} className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>
                    <benefit.icon size={28} />
                  </div>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products CTA */}
        <section className={styles.featuredCTA}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Discover Our Premium Seed Collection</h2>
            <p className={styles.ctaDescription}>
              From vegetables to field crops, find the perfect seeds for your farming needs
            </p>
            <Button asChild size="lg">
              <Link to="/products">
                Browse All Products
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </section>

        {/* Product Bags Section */}
        <section className={styles.productBagsSection}>
          <div className={styles.sectionContainer}>
            <img src="/product-bags.png" alt="AVNIGOLD Product Bags" className={styles.productBagsImage} />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonialsSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeading}>
              <h2 className={styles.sectionTitle}>Trusted by Farmers</h2>
              <p className={styles.sectionSubtitle}>
                Real results from real farmers
              </p>
            </div>
            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className={styles.testimonialCard}>
                  <div className={styles.testimonialStars}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
                  {/* <div className={styles.testimonialFooter}>
                    <div className={styles.testimonialAvatar}>
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className={styles.testimonialInfo}>
                      <div className={styles.testimonialAuthor}>{testimonial.author}</div>
                      <div className={styles.testimonialLocation}>{testimonial.location}</div>
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section className={styles.qualitySection}>
          <div className={styles.sectionContainer}>
            <div className={styles.qualityContent}>
              <div className={styles.qualityText}>
                <h2 className={styles.qualityTitle}>Quality Guaranteed</h2>
                <p className={styles.qualityDescription}>
                  Every seed undergoes stringent quality testing to ensure superior germination,
                  purity, and performance. Our commitment to excellence means you can trust
                  AVNIGOLD for consistent, reliable results season after season.
                </p>
                <div className={styles.qualityFeatures}>
                  <div className={styles.qualityFeature}>
                    <CheckCircle size={22} />
                    <span>100% Quality Tested</span>
                  </div>
                  <div className={styles.qualityFeature}>
                    <CheckCircle size={22} />
                    <span>Certified Varieties</span>
                  </div>
                  <div className={styles.qualityFeature}>
                    <CheckCircle size={22} />
                    <span>Expert Support</span>
                  </div>
                </div>
              </div>
              <div className={styles.qualityBadges}>
                <div className={styles.badge}>
                  <Award size={32} />
                  <span>Premium Quality</span>
                </div>
                <div className={styles.badge}>
                  <Shield size={32} />
                  <span>Certified Seeds</span>
                </div>
                <div className={styles.badge}>
                  <TrendingUp size={32} />
                  <span>High Yield</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
