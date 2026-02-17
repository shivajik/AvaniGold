import type { Route } from "./+types/careers";
import { Briefcase, MapPin, Clock, CheckCircle2, Heart, TrendingUp, Users, GraduationCap, ArrowRight } from "lucide-react";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { Button } from "~/components/ui/button/button";
import { jobPostings } from "~/data/careers";
import styles from "./careers.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Careers - Join Our Team | AVNIGOLD Seeds" },
    {
      name: "description",
      content:
        "Explore career opportunities at AVNIGOLD Seeds. Join our team dedicated to agricultural innovation and excellence. Current openings in research, sales, and operations.",
    },
    {
      name: "keywords",
      content: "agriculture jobs, seed company careers, Mandsaur jobs, agricultural research jobs, sales jobs agriculture",
    },
    { property: "og:title", content: "Careers at AVNIGOLD Seeds - Join Our Growing Team" },
    {
      property: "og:description",
      content: "Join a company shaping the future of agriculture. Explore current openings.",
    },
    { property: "og:type", content: "website" },
    { name: "robots", content: "index, follow" },
  ];
}

export default function Careers() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs for you and your family.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Professional development opportunities and clear advancement pathways.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with passionate professionals in a supportive and inclusive environment.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Access to training programs and continuing education to expand your expertise.",
    },
  ];

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Join Our Growing Team</h1>
            <p className={styles.heroText}>
              Be part of a company that's shaping the future of agriculture through innovation, quality, and dedication
            </p>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Why Choose Us</span>
            <h2 className={styles.sectionTitle}>Work With Purpose</h2>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => (
              <div key={benefit.title} className={styles.benefitCard}>
                <div className={styles.benefitIconWrapper}>
                  <benefit.icon className={styles.benefitIcon} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.jobsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Open Positions</span>
            <h2 className={styles.sectionTitle}>Current Opportunities</h2>
          </div>
          <div className={styles.jobsList}>
            {jobPostings.map((job) => (
              <article key={job.id} className={styles.jobCard}>
                <div className={styles.jobHeader}>
                  <div>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <div className={styles.jobMeta}>
                      <span className={styles.metaItem}>
                        <Briefcase className={styles.metaIcon} />
                        {job.department}
                      </span>
                      <span className={styles.metaItem}>
                        <MapPin className={styles.metaIcon} />
                        {job.location}
                      </span>
                      <span className={styles.metaItem}>
                        <Clock className={styles.metaIcon} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button className={styles.applyBtn}>
                    Apply <ArrowRight className={styles.btnIcon} />
                  </Button>
                </div>

                <p className={styles.jobDescription}>{job.description}</p>

                <div className={styles.jobDetails}>
                  <div className={styles.detailSection}>
                    <h4>Requirements</h4>
                    <ul>
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index}>
                          <CheckCircle2 className={styles.checkIcon} />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.detailSection}>
                    <h4>Responsibilities</h4>
                    <ul>
                      {job.responsibilities.slice(0, 3).map((resp, index) => (
                        <li key={index}>
                          <CheckCircle2 className={styles.checkIcon} />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.jobFooter}>
                  <span className={styles.postedDate}>
                    Posted{" "}
                    {new Date(job.postedDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
