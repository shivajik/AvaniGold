import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button/button";
import styles from "./hero-slider.module.css";

interface Slide {
  id: number;
  image: string;
  badge?: string;
  title?: string;
  highlight?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/paddy.jpg",
    // badge: "High Yield Paddy",
    // title: "Superior Paddy Seeds,",
    // highlight: "Bumper Harvests",
    // description:
    //   "Our premium paddy varieties are engineered for high yield and excellent grain quality. Trusted by farmers for consistent performance across diverse climatic conditions.",
    // primaryCTA: {
    //   text: "View Paddy Varieties",
    //   link: "/products?category=Paddy",
    // },
    // secondaryCTA: {
    //   text: "Contact Us",
    //   link: "/contact",
    // },
  },
  {
    id: 2,
    image: "/wheat.jpg",
    // badge: "Premium Wheat Seeds",
    // title: "Robust Wheat Varieties,",
    // highlight: "Infinite Possibilities",
    // description:
    //   "From high-protein to drought-resistant varieties, discover our extensive collection of premium wheat seeds. Engineered for superior yields and consistent performance.",
    // primaryCTA: {
    //   text: "Browse Wheat Seeds",
    //   link: "/products?category=Wheat",
    // },
    // secondaryCTA: {
    //   text: "Learn More",
    //   link: "/about",
    // },
  },
   {
    id: 3,
    image: "/images/products/slide3.png",
  },
  {
    id: 4,
    image: "/images/products/slide4.png",
  },
  {
    id: 5,
    image: "/images/products/slide5.png",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

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

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    const minSwipeDistance = 50;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  }, [nextSlide, prevSlide]);

  const handleTouchCancel = useCallback(() => {
    touchStartX.current = null;
    touchStartY.current = null;
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      className={styles.heroSlider}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      {/* Background Images */}
      <div className={styles.slidesContainer}>
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`${styles.slideBackground} ${
              idx === currentSlide ? styles.activeSlide : ""
            } ${!s.title && !s.badge && !s.description ? styles.imageOnly : ""}`}
            style={{ backgroundImage: `url(${s.image})` }}
          >
            <div className={styles.slideOverlay} />
          </div>
        ))}
      </div>

      {/* Content Container */}
      {(slide.title || slide.badge || slide.description) && (
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
              <Link to={slide.primaryCTA?.link}>
                {slide.primaryCTA?.text}
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className={styles.secondaryBtn}>
              <Link to={slide.secondaryCTA?.link}>{slide.secondaryCTA?.text}</Link>
            </Button>
          </div>
        </div>
      </div>
      )}

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
