'use client';

import React from 'react';
import { Heart, ArrowUpRight } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
import { INSTA_BRIDES } from '@/data/mockData';

export default function RealBridesSection() {
  return (
    <section className="section brides-section" id="real-brides" style={{ paddingTop: '52px', paddingBottom: '60px' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-ornament">
            <span className="ornament-line"></span>
            <span className="ornament-diamond"></span>
            <span className="section-eyebrow">AS SEEN ON CELEBRATIONS</span>
            <span className="ornament-diamond"></span>
            <span className="ornament-line"></span>
          </div>

          <h2 className="section-title">
            #GGFashion<span className="text-pink">Brides</span>
          </h2>
          <p className="section-subtitle-lux">
            Real brides, real celebrations. Tag @GGFashion to be featured in our royal bridal hall of fame.
          </p>
        </div>

        {/* 5-Column Brides Mosaic Grid */}
        <div className="brides-mosaic-grid">
          {INSTA_BRIDES.map((bride) => (
            <div className="bride-mosaic-card" key={bride.id}>
              <div className="bride-img-wrapper">
                <img
                  src={bride.image}
                  alt={`${bride.name} wearing ${bride.outfit}`}
                  className="bride-img"
                />

                {/* Hover Instagram Overlay */}
                <div className="bride-hover-overlay">
                  <div className="bride-insta-header">
                    <InstagramIcon />
                    <span className="bride-handle">{bride.handle}</span>
                  </div>

                  <div className="bride-details">
                    <h4 className="bride-name">{bride.name}</h4>
                    <span className="bride-city">{bride.city}</span>
                    <p className="bride-outfit">{bride.outfit}</p>
                    <span className="bride-shop-cta">
                      <span>Shop Look</span>
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
