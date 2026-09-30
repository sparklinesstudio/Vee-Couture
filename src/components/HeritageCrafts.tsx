'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, Clock, Sparkles } from 'lucide-react';
import { HERITAGE_CRAFTS } from '@/data/mockData';

export default function HeritageCrafts() {
  const [activeCraftId, setActiveCraftId] = useState(HERITAGE_CRAFTS[0].id);

  const activeCraft =
    HERITAGE_CRAFTS.find((c) => c.id === activeCraftId) || HERITAGE_CRAFTS[0];

  return (
    <section className="section heritage-section" id="heritage-crafts">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-ornament">
            <span className="ornament-line"></span>
            <span className="ornament-diamond"></span>
            <span className="section-eyebrow">TIMELESS INDIAN WEAVES</span>
            <span className="ornament-diamond"></span>
            <span className="ornament-line"></span>
          </div>

          <h2 className="section-title">
            The Heritage <span className="text-pink">Craft Atelier</span>
          </h2>
          <p className="section-subtitle-lux">
            Centuries of generational loom mastery, preserved and curated for the modern royal bride.
          </p>
        </div>

        {/* Craft Navigation Tabs */}
        <div className="craft-tabs-row">
          {HERITAGE_CRAFTS.map((craft) => (
            <button
              key={craft.id}
              onClick={() => setActiveCraftId(craft.id)}
              className={`craft-tab-btn ${craft.id === activeCraftId ? 'active' : ''}`}
            >
              <span className="craft-tab-title">{craft.name}</span>
              <span className="craft-tab-region">{craft.region.split(',')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Craft Showcase Box */}
        <div className="craft-showcase-card" key={activeCraft.id}>
          {/* Left Details Column */}
          <div className="craft-details-col">
            <div className="craft-meta-chips">
              <span className="craft-chip">
                <MapPin size={13} />
                <span>{activeCraft.region}</span>
              </span>
              <span className="craft-chip">
                <Clock size={13} />
                <span>{activeCraft.weavingPeriod}</span>
              </span>
            </div>

            <h3 className="craft-headline">{activeCraft.name}</h3>
            <p className="craft-tagline">{activeCraft.tagline}</p>
            <p className="craft-body">{activeCraft.description}</p>

            <div className="craft-features-list">
              {activeCraft.points.map((pt, idx) => (
                <div className="craft-feature-item" key={idx}>
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="craft-cta-wrap">
              <a href="#categories" className="btn-primary">
                <span>Explore {activeCraft.name.split(' ')[0]} Weaves</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="craft-image-col">
            <div className="craft-image-frame">
              <img
                src={activeCraft.image}
                alt={activeCraft.name}
                className="craft-main-image"
              />
              <div className="craft-image-badge">
                <Sparkles size={14} color="#C5A059" />
                <span>Master Artisan Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
