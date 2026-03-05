import type { Route } from "./+types/about";
import { Target, Heart, Lightbulb, Users, Award, TrendingUp } from "lucide-react";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import styles from "./about.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - AVNIGOLD Seeds | Our Story & Mission" },
    {
      name: "description",
      content:
        "Learn about AVNIGOLD SEEDS PRIVATE LIMITED - our commitment to quality seed manufacturing from Mandsaur, Madhya Pradesh, and our dedication to farmer success.",
    },
    {
      name: "keywords",
      content: "about AVNIGOLD, seed company Mandsaur, agricultural company MP, farmer partnership, quality seeds India",
    },
    { property: "og:title", content: "About Us - AVNIGOLD Seeds | Our Story & Mission" },
    {
      property: "og:description",
      content: "Discover our commitment to quality seed manufacturing and farmer success from Mandsaur, MP.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://avnigoldseeds.com/about" },
    { property: "og:image", content: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=630&fit=crop" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "robots", content: "index, follow" },
  ];
}

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "Unwavering commitment to delivering the highest quality seeds through rigorous testing and innovation.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Building trust through transparency, ethical practices, and honest relationships with our customers.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously advancing seed technology to meet evolving agricultural challenges and opportunities.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "Collaborating with farmers, researchers, and communities to create shared success and sustainable growth.",
    },
  ];

  const milestones = [
    {
      icon: Award,
      metric: "2000+",
      label: "Farmers Served",
    },
    {
      icon: TrendingUp,
      metric: "50+",
      label: "Seed Varieties",
    },
    {
      icon: Target,
      metric: "98%",
      label: "Quality Rate",
    },
    {
      icon: Users,
      metric: "100+",
      label: "Dealer Network",
    },
  ];

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroPattern}></div>
          <div className={styles.heroContent}>
            <div className={styles.heroLabel}>About AVNIGOLD</div>
            <h1 className={styles.heroTitle}>Cultivating Excellence in Every Seed</h1>
            <p className={styles.heroText}>
              From Mandsaur to fields across India, we're dedicated to providing farmers with premium quality seeds that ensure excellent yields and sustainable farming success.
            </p>
          </div>
        </section>

        <section className={styles.storySection}>
          <div className={styles.storySplit}>
            <div className={styles.storyImage}>
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
                alt="Agricultural excellence"
              />
              <div className={styles.imageOverlay}></div>
            </div>
            <div className={styles.storyContent}>
              <span className={styles.sectionLabel}>Our Foundation</span>
              <h2>Who We Are</h2>
              <p>
                AVNIGOLD SEEDS PRIVATE LIMITED is a trusted seed company based in Mandsaur, Madhya Pradesh, committed to delivering superior quality seeds through rigorous testing and quality control.
              </p>
              <p>
                Located at Survey No. 420/2, Gram - Bhunyakhedi, Mandsaur City, we have established ourselves as a reliable partner for farmers seeking high-performance seed varieties.
              </p>
              <div className={styles.highlightBox}>
                <strong>Our Principle:</strong> Farmer success is our success
              </div>
            </div>
          </div>
        </section>

        <section className={styles.visionSection}>
          <div className={styles.visionGrid}>
            <div className={styles.visionCard}>
              <div className={styles.visionIcon}>🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower farmers across India with high-quality, tested seed varieties that maximize yield, ensure crop reliability, and contribute to agricultural prosperity.
              </p>
            </div>
            <div className={styles.visionCard}>
              <div className={styles.visionIcon}>✨</div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted seed company in Central India, known for quality, reliability, and farmer-centric service that supports sustainable and profitable agriculture.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.metricsSection}>
          <div className={styles.metricsGrid}>
            {milestones.map((milestone) => (
              <div key={milestone.label} className={styles.metricCard}>
                <milestone.icon className={styles.metricIcon} />
                <div className={styles.metricNumber}>{milestone.metric}</div>
                <div className={styles.metricLabel}>{milestone.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.valuesSection}>
          <span className={styles.sectionLabel}>What Drives Us</span>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <div key={value.title} className={styles.valueCard}>
                <div className={styles.valueIconWrapper}>
                  <value.icon className={styles.valueIcon} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
