'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { OCCASIONS } from '@/data/mockData';

export default function OccasionGrid() {
  const tallCard = OCCASIONS.find((o) => o.gridSpan === 'tall');
  const standardCards = OCCASIONS.filter((o) => o.gridSpan !== 'tall');

  const getTag = (id: string) => {
    switch (id) {
      case 'wedding':
        return 'Royal Bridal Trousseau';
      case 'haldi-mehendi':
        return 'Sunshine Celebrations';
      case 'cocktail':
        return 'Evening Glamour';
      case 'festive':
        return 'Resplendent Silks';
      case 'casual-ethnic':
        return 'Contemporary Classics';
      default:
        return 'Curated Edit';
    }
  };

  return (
    <section className="section" id="occasions" style={{ paddingTop: '42px', paddingBottom: '56px' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-flex">
          <div>
            <h2 className="section-title">
              Shop By <span className="text-pink">Occasion</span>
            </h2>
          </div>
          <a href="#all-events" className="view-all-link">
            <span>VIEW ALL EVENTS</span>
            <ChevronRight size={14} />
          </a>
        </div>

        {/* Bento Grid */}
        <div className="occasion-grid">
          {/* Left Tall Card */}
          {tallCard && (
            <div className="occasion-card tall" key={tallCard.id}>
              <img
                src={tallCard.image}
                alt={tallCard.title}
                className="occasion-img"
              />
              <div className="occasion-overlay">
                <span className="occasion-badge-tag">{getTag(tallCard.id)}</span>
                <h3 className="occasion-card-title">{tallCard.title}</h3>
                <span className="occasion-card-cta">
                  {tallCard.ctaText}
                  <ChevronRight size={13} />
                </span>
              </div>
            </div>
          )}

          {/* Standard 4 Cards */}
          {standardCards.map((card) => (
            <div className="occasion-card" key={card.id}>
              <img
                src={card.image}
                alt={card.title}
                className="occasion-img"
              />
              <div className="occasion-overlay">
                <span className="occasion-badge-tag">{getTag(card.id)}</span>
                <h3 className="occasion-card-title">{card.title}</h3>
                <span className="occasion-card-cta">
                  {card.ctaText}
                  <ChevronRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
