import { Link, useLocation } from "react-router";
import { Menu, Sparkles, X, ChevronRight, Phone, Mail, MapPin, Wheat, Sprout, Package, Gem, Home, Building2, FlaskConical, BookOpen, Briefcase, MessageCircle } from "lucide-react";
import { useState } from "react";
import classNames from "classnames";
import styles from "./header.module.css";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsExpanded, setProductsExpanded] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const productCategories = [
    {
      name: "Vegetable Seeds",
      icon: Sprout,
      path: "/products?category=Vegetable%20Seeds",
      items: ["Tomato", "Brinjal", "Okra", "Chilli", "Cucumber", "Cauliflower"],
      description: "Premium quality seeds for home & commercial farming",
      featured: true
    },
    {
      name: "Field Crops",
      icon: Wheat,
      path: "/products?category=Field%20Crops",
      items: ["Soybean", "Maize", "Cotton", "Mustard", "Wheat", "Rice"],
      description: "High-yield varieties for large-scale cultivation",
      featured: false
    },
    {
      name: "Hybrid Seeds",
      icon: Package,
      path: "/products?category=Hybrid%20Seeds",
      items: ["F1 Hybrids", "High-Yield", "Disease Resistant", "Climate Adaptive"],
      description: "Advanced genetics for superior crop performance",
      featured: true
    },
    {
      name: "Premium Range",
      icon: Gem,
      path: "/products?category=Organic%20Seeds",
      items: ["Certified Organic", "Export Quality", "Specialty Crops", "Heirloom"],
      description: "Certified excellence for discerning farmers",
      featured: false
    },
  ];

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About Us", icon: Building2 },
    { 
      path: "/products", 
      label: "Products",
      icon: Package,
      hasSubmenu: true,
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
            <span>+91 98765 43210</span>
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
                <Sparkles size={28} />
              </div>
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
                  {item.hasSubmenu ? (
                    <>
                      <div
                        className={classNames(styles.navItem, {
                          [styles.navItemActive]: isActive(item.path),
                        })}
                        onMouseEnter={() => {
                          if (hoverTimeout) clearTimeout(hoverTimeout);
                          setProductsExpanded(true);
                        }}
                        onMouseLeave={() => {
                          const timeout = setTimeout(() => setProductsExpanded(false), 200);
                          setHoverTimeout(timeout);
                        }}
                      >
                        <IconComp size={20} />
                        <span>{item.label}</span>
                        <ChevronRight size={16} className={styles.submenuIndicator} />
                      </div>
                      {productsExpanded && (
                        <div 
                          className={styles.submenuDropdown}
                          onMouseEnter={() => {
                            if (hoverTimeout) clearTimeout(hoverTimeout);
                            setProductsExpanded(true);
                          }}
                          onMouseLeave={() => {
                            const timeout = setTimeout(() => setProductsExpanded(false), 200);
                            setHoverTimeout(timeout);
                          }}
                        >
                          <div className={styles.megaMenuContainer}>
                            {/* Left Side - Categories */}
                            <div className={styles.megaMenuMain}>
                              <div className={styles.megaMenuHeader}>
                                <h3>Explore Our Products</h3>
                                <p>Premium seeds backed by science and innovation</p>
                              </div>
                              
                              <div className={styles.categoryGrid}>
                                {productCategories.map((cat) => {
                                  const CatIcon = cat.icon;
                                  return (
                                    <Link
                                      key={cat.name}
                                      to={cat.path}
                                      className={classNames(styles.categoryCard, {
                                        [styles.categoryCardFeatured]: cat.featured
                                      })}
                                    >
                                      <div className={styles.categoryIconWrapper}>
                                        <CatIcon size={24} />
                                      </div>
                                      <div className={styles.categoryContent}>
                                        <h4>{cat.name}</h4>
                                        <p className={styles.categoryDescription}>{cat.description}</p>
                                        <ul className={styles.categoryItems}>
                                          {cat.items.slice(0, 4).map((itm) => (
                                            <li key={itm}>{itm}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Right Side - Featured & Quick Links */}
                            <div className={styles.megaMenuSidebar}>
                              {/* Featured Product */}
                              <div className={styles.featuredProduct}>
                                <div className={styles.featuredBadge}>Featured</div>
                                <img 
                                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=200&fit=crop" 
                                  alt="Featured Product" 
                                  className={styles.featuredImage}
                                />
                                <div className={styles.featuredContent}>
                                  <h4>Premium Hybrid Collection</h4>
                                  <p>Discover our latest high-performance hybrid seeds with enhanced yield and disease resistance.</p>
                                  <Link to="/products?category=Hybrid%20Seeds" className={styles.featuredLink}>
                                    Learn More →
                                  </Link>
                                </div>
                              </div>

                              {/* Quick Links */}
                              <div className={styles.quickLinks}>
                                <h4>Quick Links</h4>
                                <Link to="/quality" className={styles.quickLink}>
                                  <FlaskConical size={18} />
                                  <span>Quality Assurance</span>
                                </Link>
                                <Link to="/contact" className={styles.quickLink}>
                                  <MessageCircle size={18} />
                                  <span>Request Catalog</span>
                                </Link>
                              </div>

                              {/* Stats */}
                              <div className={styles.statsBar}>
                                <div className={styles.statItem}>
                                  <span className={styles.statValue}>500+</span>
                                  <span className={styles.statLabel}>Varieties</span>
                                </div>
                                <div className={styles.statDivider} />
                                <div className={styles.statItem}>
                                  <span className={styles.statValue}>98%</span>
                                  <span className={styles.statLabel}>Purity</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={classNames(styles.navItem, {
                        [styles.navItemActive]: isActive(item.path),
                      })}
                    >
                      <IconComp size={20} />
                      <span>{item.label}</span>
                    </Link>
                  )}
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
                  {item.hasSubmenu ? (
                    <>
                      <button
                        className={styles.mobileNavButton}
                        onClick={() => setProductsExpanded(!productsExpanded)}
                      >
                        <div className={styles.mobileNavLabel}>
                          <IconComp size={20} />
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight
                          size={18}
                          className={classNames(styles.mobileSubmenuIcon, {
                            [styles.mobileSubmenuIconOpen]: productsExpanded,
                          })}
                        />
                      </button>
                      {productsExpanded && (
                        <div className={styles.mobileSubmenu}>
                          {productCategories.map((cat) => (
                            <Link
                              key={cat.name}
                              to={cat.path}
                              className={styles.mobileSubmenuItem}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {cat.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
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
                  )}
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
