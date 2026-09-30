'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewSeasonEdit() {
  return (
    <section className="section new-season-section" id="new-season-edit">
      <div className="container">
        <div className="editorial-split-card">
          {/* Left: Large Lifestyle Editorial Image */}
          <div className="editorial-img-side">
            <img
              src="https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790771423/Screenshot_2026-09-30_180026_ti6he2.png"
              alt="The New Season Edit Lifestyle"
              className="editorial-split-img"
            />
          </div>

          {/* Right: Narrative Transition */}
          <div className="editorial-content-side">
            <span className="editorial-eyebrow">THE NEW SEASON EDIT</span>
            <h2 className="editorial-headline">
              A New Perspective on Everyday Style
            </h2>
            <p className="editorial-text">
              Discover our latest collection, designed around effortless silhouettes, refined natural textiles, and versatile pieces you&apos;ll reach for again and again. Built to transition smoothly from quiet mornings to formal evening soirees.
            </p>

            <div className="editorial-cta-group">
              <a href="#new-arrivals" className="btn-primary">
                <span>DISCOVER THE EDIT</span>
                <ArrowRight size={16} />
              </a>
              <a href="#categories" className="btn-editorial-outline">
                <span>EXPLORE LOOKBOOK</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
