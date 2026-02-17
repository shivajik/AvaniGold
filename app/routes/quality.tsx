import type { Route } from "./+types/quality";
import { Microscope, FlaskConical, Shield, Award, CheckCircle2, Sprout, TrendingUp } from "lucide-react";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import styles from "./quality.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Research & Development, Quality Assurance | AVNIGOLD Seeds" },
    {
      name: "description",
      content:
        "Discover our rigorous quality testing protocols, advanced research facilities, and international certifications ensuring superior seed quality with 98% germination rates.",
    },
    {
      name: "keywords",
      content: "seed quality testing, R&D laboratory, seed certification, germination testing, quality assurance, ISO certified seeds",
    },
    { property: "og:title", content: "Quality Assurance & Research Excellence" },
    {
      property: "og:description",
      content: "98% germination rate. 100% quality tested. State-of-the-art research facilities.",
    },
    { property: "og:type", content: "website" },
    { name: "robots", content: "index, follow" },
  ];
}

export default function Quality() {
  const processes = [
    {
      icon: Sprout,
      title: "Breeding & Selection",
      description:
        "Advanced plant breeding techniques combining traditional methods with modern practices to develop superior varieties.",
    },
    {
      icon: FlaskConical,
      title: "Laboratory Testing",
      description:
        "Comprehensive germination, purity, and vigor testing ensuring consistent quality standards.",
    },
    {
      icon: Microscope,
      title: "Disease Screening",
      description:
        "Rigorous pathogen testing and disease resistance evaluation to guarantee healthy, disease-free seed lots.",
    },
    {
      icon: CheckCircle2,
      title: "Field Trials",
      description:
        "Multi-location field testing across diverse climates and soil types to validate performance and adaptability.",
    },
    {
      icon: Shield,
      title: "Quality Control",
      description:
        "Continuous monitoring throughout production with strict adherence to seed quality standards.",
    },
    {
      icon: Award,
      title: "Certification",
      description:
        "Third-party certification and regular audits ensuring compliance with quality standards.",
    },
  ];

  const stats = [
    { icon: TrendingUp, value: "98%", label: "Germination Rate" },
    { icon: Award, value: "100%", label: "Quality Tested" },
    { icon: Microscope, value: "20+", label: "Field Trials" },
    { icon: Shield, value: "ISO", label: "Certified" },
  ];

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <Shield className={styles.heroIcon} />
            <h1 className={styles.heroTitle}>Quality Excellence</h1>
            <p className={styles.heroText}>
              Combining cutting-edge testing with rigorous standards to deliver seeds that exceed expectations
            </p>
          </div>
        </section>

        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <stat.icon className={styles.statIcon} />
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.processSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>How We Ensure Quality</span>
            <h2 className={styles.sectionTitle}>Our Quality Process</h2>
          </div>
          <div className={styles.processGrid}>
            {processes.map((process, index) => (
              <div key={process.title} className={styles.processCard}>
                <div className={styles.processHeader}>
                  <div className={styles.processNumber}>{String(index + 1).padStart(2, '0')}</div>
                  <process.icon className={styles.processIcon} />
                </div>
                <h3>{process.title}</h3>
                <p>{process.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.facilitiesSection}>
          <div className={styles.facilitiesGrid}>
            <div className={styles.facilitiesImage}>
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
                alt="Research laboratory"
              />
            </div>
            <div className={styles.facilitiesContent}>
              <span className={styles.sectionLabel}>State-of-the-Art</span>
              <h2>Research Facilities</h2>
              <p>
                Our advanced facilities house modern laboratories and testing equipment designed to ensure every seed meets the highest standards.
              </p>
              <ul className={styles.facilitiesList}>
                <li>
                  <CheckCircle2 className={styles.listIcon} />
                  <span>Modern seed testing laboratories</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.listIcon} />
                  <span>Climate-controlled storage facilities</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.listIcon} />
                  <span>Advanced germination chambers</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.listIcon} />
                  <span>Disease diagnostic equipment</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.listIcon} />
                  <span>Quality control systems</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.standardsSection}>
          <div className={styles.standardsGrid}>
            <div className={styles.standardsContent}>
              <span className={styles.sectionLabel}>Our Commitment</span>
              <h2>Rigorous Quality Standards</h2>
              <p>
                Every seed lot undergoes comprehensive testing to ensure it meets or exceeds quality standards before reaching our customers.
              </p>
              <ul className={styles.facilitiesList}>
                <li>
                  <CheckCircle2 className={styles.listIcon} />
                  <span>Germination testing protocols</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.listIcon} />
                  <span>Genetic purity verification</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.listIcon} />
                  <span>Seed health and pathogen screening</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.listIcon} />
                  <span>Physical purity analysis</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.listIcon} />
                  <span>Vigor and viability assessment</span>
                </li>
              </ul>
            </div>
            <div className={styles.facilitiesImage}>
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80"
                alt="Quality testing"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
