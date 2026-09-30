'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  id: number;
  image: string;
  alt: string;
  link: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: '/images/hero/hero-slide-1.jpg',
    alt: 'Celebrate Family Traditions - The Festive Collection',
    link: '#new-arrivals',
  },
  {
    id: 2,
    image: '/images/hero/hero-slide-2.jpg',
    alt: 'The Crimson Muse - Aurelia Atelier Exclusive',
    link: '#collections',
  },
  {
    id: 3,
    image: '/images/hero/hero-slide-3.jpg',
    alt: 'Timeless Elegance - Handcrafted Anarkali Collection',
    link: '#occasions',
  },
  {
    id: 4,
    image: '/images/hero/hero-slide-4.jpg',
    alt: 'Midnight Metallics - New Evening Collection',
    link: '#categories',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const SLIDE_INTERVAL = 4000; // Exact 4 seconds auto-scroll

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [currentSlide, isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="hero-slider-pure"
      aria-label="Editorial Campaign Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div className="hero-slider-track">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`hero-slide-pure ${isActive ? 'active' : ''}`}
              aria-hidden={!isActive}
            >
              <a href={slide.link} className="hero-slide-link" tabIndex={isActive ? 0 : -1}>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="hero-slide-img"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </a>
            </div>
          );
        })}
      </div>

      {/* Floating Minimalist Arrow Controls */}
      <button
        onClick={handlePrev}
        className="hero-pure-arrow prev"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} strokeWidth={1.8} />
      </button>

      <button
        onClick={handleNext}
        className="hero-pure-arrow next"
        aria-label="Next slide"
      >
        <ChevronRight size={24} strokeWidth={1.8} />
      </button>

      {/* Sleek Minimalist Progress Indicators at Bottom */}
      <div className="hero-pure-indicators">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              className={`hero-indicator-bar ${isActive ? 'active' : ''}`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span className="indicator-progress-fill"></span>
            </button>
          );
        })}
      </div>

      {/* Subtle Slide Counter in Corner */}
      <div className="hero-pure-counter">
        <span className="current-num">0{currentSlide + 1}</span>
        <span className="counter-sep">/</span>
        <span className="total-num">0{HERO_SLIDES.length}</span>
      </div>
    </section>
  );
}
