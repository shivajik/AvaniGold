import { Link } from "react-router";
import { Mail, Phone, MapPin, Sparkles } from "lucide-react";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <h3>About AVNIGOLD Seeds</h3>
            <p>
              A premier seed company based in Mandsaur, Madhya Pradesh, dedicated to providing superior quality seeds to farmers. We combine innovation with agricultural expertise to deliver exceptional crop solutions.
            </p>
            <div className={styles.certifications}>
              <span className={styles.badge}>Quality Certified</span>
              <span className={styles.badge}>Tested Seeds</span>
              <span className={styles.badge}>Farmer Trusted</span>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Quick Links</h3>
            <div className={styles.links}>
              <Link to="/about" className={styles.link}>
                About Us
              </Link>
              <Link to="/products" className={styles.link}>
                Our Products
              </Link>
              <Link to="/quality" className={styles.link}>
                Quality & R&D
              </Link>
              <Link to="/blog" className={styles.link}>
                Knowledge Center
              </Link>
              <Link to="/careers" className={styles.link}>
                Careers
              </Link>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Contact Information</h3>
            <div className={styles.links}>
              <a href="mailto:info@avnigoldseeds.com" className={styles.link}>
                <Mail className={styles.linkIcon} />
                info@avnigoldseeds.com
              </a>
              <a href="tel:+919876543210" className={styles.link}>
                <Phone className={styles.linkIcon} />
                +91 98765 43210
              </a>
              <span className={styles.link}>
                <MapPin className={styles.linkIcon} />
                Survey No. 420/2, Gram - Bhunyakhedi, Mandsaur - 458002, MP
              </span>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Our Commitment</h3>
            <p>We are dedicated to delivering premium quality seeds through rigorous testing and quality control processes.</p>
            <Sparkles className={styles.linkIcon} style={{ marginTop: "var(--space-3)" }} />
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} AVNIGOLD SEEDS PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
