import { Link, useLocation } from "react-router";
import { Menu, Sparkles, X, ChevronRight, Phone, Mail, MapPin, Wheat, Sprout, Package, Gem, Home, Building2, FlaskConical, BookOpen, Briefcase, MessageCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import styles from "./header.module.css";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About Us", icon: Building2 },
    { 
      path: "/products", 
      label: "Products",
      icon: Package,
    },
    { path: "/quality", label: "R&D & Quality", icon: FlaskConical },
    { path: "/careers", label: "Careers", icon: Briefcase },
    { path: "/contact", label: "Get in Touch", icon: MessageCircle },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Info Strip */}
      <div className={styles.infoStrip}>
        <div className={styles.infoStripContent}>
          <div className={styles.infoItem}>
            <Phone size={16} />
            <span>+91 99811 99400, +91 91744 99400</span>
          </div>
          <div className={styles.infoDivider} />
          <div className={styles.infoItem}>
            <Mail size={16} />
            <span>info@avnigoldseeds.com</span>
          </div>
          <div className={styles.infoDivider} />
          <div className={styles.infoItem}>
            <MapPin size={16} />
            <span>Mandsaur, Madhya Pradesh</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <Link to="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <img src="/logo.png" alt="AVNIGOLD Logo" className={styles.logoImage} />              </div>
              <div className={styles.logoContent}>
                <span className={styles.brandName}>AVNIGOLD</span>
                <span className={styles.brandTagline}>Premium Seeds</span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className={styles.mainNav}>
            {navItems.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.path} className={styles.navItemWrapper}>
                  <Link
                    to={item.path}
                    className={classNames(styles.navItem, {
                      [styles.navItemActive]: isActive(item.path),
                    })}
                  >
                    <IconComp size={20} />
                    <span>{item.label}</span>
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* CTA Section */}
          <div className={styles.ctaSection}>
            <Link to="/contact" className={styles.ctaButton}>
              Get Catalog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={styles.mobileNav}>
            {navItems.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.path} className={styles.mobileNavItem}>
                  <Link
                    to={item.path}
                    className={classNames(styles.mobileNavLink, {
                      [styles.mobileNavLinkActive]: isActive(item.path),
                    })}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <IconComp size={20} />
                    <span>{item.label}</span>
                  </Link>
                </div>
              );
            })}
            <Link
              to="/contact"
              className={styles.mobileCtaButton}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Catalog
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
