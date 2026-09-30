'use client';

import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { CUSTOMER_REVIEWS, FASHION_PRODUCTS } from '@/data/fashionData';

export default function CustomerReviews() {
  return (
    <section className="section reviews-lux-section" id="reviews">
      <div className="container">
        {/* Header */}
        <div className="section-header-center">
          <span className="section-eyebrow">TESTIMONIALS &amp; PRAISE</span>
          <h2 className="section-title">LOVED BY WOMEN LIKE YOU</h2>
          <p className="section-subtitle-lux">
            Over 12,000 discerning patrons wearing our garments with effortless poise and confidence.
          </p>
        </div>

        {/* 3 Large Review Cards */}
        <div className="reviews-lux-grid">
          {CUSTOMER_REVIEWS.map((review, idx) => {
            const matchedProd = FASHION_PRODUCTS[idx % FASHION_PRODUCTS.length];

            return (
              <div className="review-lux-card" key={review.id}>
                {/* Top: Star rating & Quote icon */}
                <div className="review-card-top">
                  <div className="review-stars-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#D4AF37" color="#D4AF37" />
                    ))}
                    <span className="review-score-label">5.0</span>
                  </div>
                  <Quote size={24} className="review-quote-icon" />
                </div>

                {/* Review Text */}
                <p className="review-quote-body">{review.comment}</p>

                {/* Author Info */}
                <div className="review-author-meta">
                  <div className="author-name-row">
                    <span className="author-name">{review.author}</span>
                    <span className="verified-buyer-tag">
                      <CheckCircle2 size={12} color="#16A34A" />
                      <span>{review.badge}</span>
                    </span>
                  </div>
                  <span className="author-location">{review.city}, India</span>
                </div>

                {/* Product Purchased Preview */}
                <div className="review-purchased-box">
                  <img
                    src={matchedProd.image}
                    alt={review.productPurchased}
                    className="review-prod-thumb"
                  />
                  <div className="review-prod-info">
                    <span className="review-prod-label">PURCHASED:</span>
                    <span className="review-prod-name">{review.productPurchased}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
