'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORY_CARDS } from '@/data/fashionData';

export default function ShopByCategory() {
  return (
    <section className="section category-lifestyle-section" id="categories">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-eyebrow">ESSENTIAL WARDROBE</span>
          <h2 className="section-title">Shop By Category</h2>
        </div>

        {/* 6 Visual Lifestyle Cards Grid */}
        <div className="category-lifestyle-grid">
          {CATEGORY_CARDS.map((cat) => (
            <a href="#new-arrivals" className="category-lifestyle-card" key={cat.id}>
              <div className="category-img-box">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="category-lifestyle-img"
                />
                <div className="category-card-overlay">
                  <div className="category-card-info">
                    <h3 className="category-card-label">{cat.label}</h3>
                    <span className="category-hover-cta">
                      <span>SHOP {cat.label}</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
