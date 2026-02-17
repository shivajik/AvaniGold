import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button/button";
import styles from "./hero-slider.module.css";

interface Slide {
  id: number;
  image: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  primaryCTA: {
    text: string;
    link: string;
  };
  secondaryCTA: {
    text: string;
    link: string;
  };
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop",
    badge: "Premium Quality Seeds",
    title: "Cultivating Excellence,",
    highlight: "One Seed at a Time",
    description:
      "AVNIGOLD SEEDS PRIVATE LIMITED - Your trusted partner for premium agricultural seeds. Based in Mandsaur, Madhya Pradesh, we deliver quality that helps farmers grow success.",
    primaryCTA: {
      text: "Explore Products",
      link: "/products",
    },
    secondaryCTA: {
      text: "Get in Touch",
      link: "/contact",
    },
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920&h=1080&fit=crop",
    badge: "Certified Excellence",
    title: "Superior Quality,",
    highlight: "Guaranteed Results",
    description:
      "Every seed undergoes rigorous testing to ensure 98% germination rate. Experience the difference that premium quality makes in your harvest with AVNIGOLD's certified varieties.",
    primaryCTA: {
      text: "View Quality Standards",
      link: "/quality",
    },
    secondaryCTA: {
      text: "Contact Us",
      link: "/contact",
    },
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&h=1080&fit=crop",
    badge: "Wide Range Available",
    title: "500+ Varieties,",
    highlight: "Infinite Possibilities",
    description:
      "From vegetables to field crops, discover our extensive collection of premium seeds. Trusted by over 5,000 farmers across 15+ states for superior yields and consistent performance.",
    primaryCTA: {
      text: "Browse Collection",
      link: "/products",
    },
    secondaryCTA: {
      text: "Learn More",
      link: "/about",
    },
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === currentSlide) return;
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 800);
    },
    [isAnimating, currentSlide]
  );

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const slide = slides[currentSlide];

  return (
    <section
      className={styles.heroSlider}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images */}
      <div className={styles.slidesContainer}>
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`${styles.slideBackground} ${
              idx === currentSlide ? styles.activeSlide : ""
            }`}
            style={{ backgroundImage: `url(${s.image})` }}
          >
            <div className={styles.slideOverlay} />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className={styles.contentContainer}>
        <div className={styles.slideContent}>
          {/* Badge */}
          <div
            className={`${styles.badge} ${isAnimating ? styles.animateIn : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            <Sparkles size={16} />
            <span>{slide.badge}</span>
          </div>

          {/* Title */}
          <h1
            className={`${styles.title} ${isAnimating ? styles.animateIn : ""}`}
            style={{ animationDelay: "0.4s" }}
          >
            {slide.title}
            <span className={styles.highlight}> {slide.highlight}</span>
          </h1>

          {/* Description */}
          <p
            className={`${styles.description} ${isAnimating ? styles.animateIn : ""}`}
            style={{ animationDelay: "0.6s" }}
          >
            {slide.description}
          </p>

          {/* CTAs */}
          <div
            className={`${styles.actions} ${isAnimating ? styles.animateIn : ""}`}
            style={{ animationDelay: "0.8s" }}
          >
            <Button asChild size="lg" className={styles.primaryBtn}>
              <Link to={slide.primaryCTA.link}>
                {slide.primaryCTA.text}
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className={styles.secondaryBtn}>
              <Link to={slide.secondaryCTA.link}>{slide.secondaryCTA.text}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={prevSlide}
        aria-label="Previous slide"
        disabled={isAnimating}
      >
        <ChevronLeft size={32} />
      </button>

      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={nextSlide}
        aria-label="Next slide"
        disabled={isAnimating}
      >
        <ChevronRight size={32} />
      </button>

      {/* Pagination Dots */}
      <div className={styles.pagination}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === currentSlide ? styles.activeDot : ""}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            disabled={isAnimating}
          >
            <span className={styles.dotInner} />
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className={styles.counter}>
        <span className={styles.currentCount}>{String(currentSlide + 1).padStart(2, "0")}</span>
        <span className={styles.separator}>/</span>
        <span className={styles.totalCount}>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
