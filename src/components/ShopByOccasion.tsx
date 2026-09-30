'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { OCCASION_CARDS } from '@/data/fashionData';

export default function ShopByOccasion() {
  return (
    <section className="section occasions-lux-section" id="occasions">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-eyebrow">CURATED DRESSING</span>
          <h2 className="section-title">DRESS FOR THE MOMENT</h2>
          <p className="section-subtitle-lux">
            From focused boardroom presentations to twilight galas, explore looks thoughtfully composed for every chapter of your schedule.
          </p>
        </div>

        {/* 6 Occasion Cards: Workwear, Date Night, Wedding, Vacation, Weekend, Evening */}
        <div className="occasions-lux-grid">
          {OCCASION_CARDS.map((occ) => (
            <a href="#new-arrivals" className="occ-lux-card" key={occ.id}>
              <div className="occ-lux-img-box">
                <img src={occ.image} alt={occ.title} className="occ-lux-img" />
                <div className="occ-lux-gradient"></div>

                <div className="occ-lux-info">
                  <span className="occ-lux-tag">EDIT</span>
                  <h3 className="occ-lux-title">{occ.title}</h3>
                  <p className="occ-lux-subtitle">{occ.subtitle}</p>

                  <span className="occ-lux-cta">
                    <span>EXPLORE {occ.title}</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
