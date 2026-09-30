'use client';

import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { REVIEWS } from '@/data/mockData';

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="section" id="reviews" style={{ paddingTop: '48px', paddingBottom: '54px' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-flex">
          <h2 className="section-title">
            Reviews &amp; <span className="text-pink">Ratings</span>
          </h2>
          <a href="#all-reviews" className="view-all-link">
            <span>VIEW ALL</span>
            <ChevronRight size={14} />
          </a>
        </div>

        {/* Carousel / Cards */}
        <div className="carousel-outer-wrap">
          <button
            onClick={() => handleScroll('left')}
            className="carousel-btn"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Smooth Sliding Viewport */}
          <div className="carousel-viewport" ref={scrollRef}>
            <div className="carousel-track reviews-track">
              {REVIEWS.map((rev) => (
                <div className="carousel-slide-item review-card" key={rev.id}>
                  {/* Rating stars */}
                  <div className="review-stars-row">
                    <span className="rating-number">{rev.rating.toFixed(1)}</span>
                    <div className="stars-list">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          fill="#EAB308"
                          color="#EAB308"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="review-text">{rev.comment}</p>

                  {/* Author */}
                  <div className="review-author">
                    <div className="author-avatar">
                      {rev.name.charAt(0)}
                    </div>
                    <div className="author-meta">
                      <div className="author-name-wrap">
                        <span className="author-name">{rev.name}</span>
                        <span className="verified-badge" title="Verified Customer">
                          <CheckCircle size={12} fill="#16A34A" color="#FFFFFF" />
                        </span>
                      </div>
                      <span className="author-country">{rev.country}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleScroll('right')}
            className="carousel-btn btn-pink"
            aria-label="Next reviews"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
