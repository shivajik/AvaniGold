import type { Route } from "./+types/products";
import { useState } from "react";
import { Check, Award, Sprout } from "lucide-react";
import classNames from "classnames";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { products, productCategories } from "~/data/products";
import styles from "./products.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Products - Premium Quality Seeds | AVNIGOLD Seeds" },
    {
      name: "description",
      content:
        "Explore our extensive range of premium seeds including vegetables, field crops, and hybrid varieties. Certified quality with superior germination rates for maximum yield.",
    },
    {
      name: "keywords",
      content: "vegetable seeds, field crops, hybrid seeds, organic seeds, tomato seeds, soybean seeds, maize seeds, quality certified seeds",
    },
    { property: "og:title", content: "Premium Quality Seeds - Vegetables, Field Crops & Hybrids" },
    {
      property: "og:description",
      content: "500+ varieties of certified quality seeds with superior germination rates.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://avnigoldseeds.com/products" },
    { property: "og:image", content: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=630&fit=crop" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "robots", content: "index, follow" },
  ];
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory);

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroPattern}></div>
          <div className={styles.heroContent}>
            <Sprout className={styles.heroIcon} />
            <h1 className={styles.heroTitle}>Premium Seed Collection</h1>
            <p className={styles.heroText}>
              Discover our comprehensive range of high-quality seeds, each variety rigorously tested and certified for superior performance
            </p>
          </div>
        </section>

        <section className={styles.productsSection}>
          <div className={styles.filterBar}>
            {productCategories.map((category) => (
              <button
                key={category}
                className={classNames(styles.filterBtn, {
                  [styles.active]: selectedCategory === category,
                })}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.productsGrid}>
            {filteredProducts.map((product, index) => (
              <article key={product.id} className={styles.productCard} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={styles.productImageWrapper}>
                  <img src={product.imageUrl} alt={product.name} />
                  <div className={styles.productBadge}>{product.category}</div>
                </div>
                <div className={styles.productBody}>
                  <h3 className={styles.productTitle}>{product.name}</h3>
                  <p className={styles.productDescription}>{product.description}</p>

                  <div className={styles.productFeatures}>
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className={styles.feature}>
                        <Check className={styles.checkIcon} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.productStats}>
                    <div className={styles.stat}>
                      <div className={styles.statLabel}>Yield</div>
                      <div className={styles.statValue}>{product.yieldPotential}</div>
                    </div>
                    <div className={styles.stat}>
                      <div className={styles.statLabel}>Maturity</div>
                      <div className={styles.statValue}>{product.maturityDays}</div>
                    </div>
                  </div>

                  {product.certifications.length > 0 && (
                    <div className={styles.certifications}>
                      <Award className={styles.certIcon} />
                      <div className={styles.certList}>
                        {product.certifications.map((cert) => (
                          <span key={cert} className={styles.cert}>
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Product Bags Section */}
        <section className={styles.productBagsSection}>
          <div className={styles.sectionContainer}>
            <img src="/product-bags.png" alt="AVNIGOLD Product Bags" className={styles.productBagsImage} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
