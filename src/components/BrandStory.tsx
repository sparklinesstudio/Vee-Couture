'use client';

import React from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="section brand-story-section" id="about">
      <div className="container">
        <div className="brand-story-card">
          {/* Left: Large Atelier Photography */}
          <div className="brand-story-img-side">
            <img
              src="/images/fashion/brand-story.jpg"
              alt="Designed With Intention Atelier"
              className="brand-story-img"
            />
          </div>

          {/* Right: Narrative Content */}
          <div className="brand-story-content-side">
            <span className="section-eyebrow">MORE THAN CLOTHES</span>
            <h2 className="brand-story-headline">Designed With Intention</h2>
            <div className="brand-story-divider"></div>
            <p className="brand-story-p1">
              We believe great clothing should feel as good as it looks. Every piece is thoughtfully selected for its quality, versatility and ability to become part of your personal style.
            </p>
            <p className="brand-story-p2">
              By working directly with generational weavers, ethical dye-houses, and skilled patternmakers, we avoid seasonal excess and fast-trend throwaways — creating enduring silhouettes meant to be cherished for decades.
            </p>

            <div className="brand-story-stats">
              <div className="story-stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Natural Fibres</span>
              </div>
              <div className="story-stat-item">
                <span className="stat-number">48h</span>
                <span className="stat-label">Tailored Finishing</span>
              </div>
              <div className="story-stat-item">
                <span className="stat-number">80+</span>
                <span className="stat-label">Global Destinations</span>
              </div>
            </div>

            <div className="brand-story-actions">
              <a href="#about" className="btn-primary">
                <span>OUR STORY</span>
                <ArrowRight size={16} />
              </a>
              <a href="#collections" className="btn-editorial-outline">
                <span>SUSTAINABILITY PLEDGE</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
