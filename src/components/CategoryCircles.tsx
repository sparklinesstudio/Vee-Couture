'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '@/data/mockData';

export default function CategoryCircles() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="section" id="categories" style={{ paddingTop: '56px', paddingBottom: '46px' }}>
      <div className="container">
        {/* Section Heading with Luxury Ornaments */}
        <div className="section-header-center">
          <div className="section-ornament">
            <span className="ornament-line"></span>
            <span className="ornament-diamond"></span>
            <span className="section-eyebrow">CELEBRATE EVERY OCCASION IN STYLE</span>
            <span className="ornament-diamond"></span>
            <span className="ornament-line"></span>
          </div>

          <h2 className="section-title">
            Shop By <span className="text-pink">Category</span>
          </h2>
        </div>

        {/* Carousel & Circles */}
        <div className="category-circles-wrap">
          <button
            onClick={() => handleScroll('left')}
            className="carousel-btn"
            aria-label="Previous categories"
            style={{ marginRight: '10px' }}
          >
            <ChevronLeft size={19} />
          </button>

          <div className="category-circles-scroll" ref={scrollRef}>
            {CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={cat.link}
                className="category-circle-item"
              >
                <div className="circle-img-box">
                  <div className="circle-inner-wrap">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="circle-img"
                    />
                  </div>
                </div>
                <span className="circle-title">{cat.title}</span>
              </a>
            ))}
          </div>

          <button
            onClick={() => handleScroll('right')}
            className="carousel-btn btn-pink"
            aria-label="Next categories"
            style={{ marginLeft: '10px' }}
          >
            <ChevronRight size={19} />
          </button>
        </div>
      </div>
    </section>
  );
}
