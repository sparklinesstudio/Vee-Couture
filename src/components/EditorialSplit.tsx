'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function EditorialSplit() {
  return (
    <section className="section editorial-moment-section">
      <div className="container">
        <div className="moment-split-layout">
          {/* Content Column */}
          <div className="moment-content-col">
            <div className="moment-tag-pill">
              <Sparkles size={13} color="#C5A059" />
              <span>THE CAPSULE EDIT</span>
            </div>

            <h2 className="moment-heading">Made For Every Moment</h2>

            <p className="moment-text">
              From slow mornings to late evenings, discover versatile pieces designed to move with you. Breathable silhouettes, thoughtful tailoring, and enduring natural textures crafted for effortless living.
            </p>

            <a href="#new-arrivals" className="btn-primary">
              <span>SHOP EVERYDAY EDIT</span>
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Large Image Column */}
          <div className="moment-image-col">
            <img
              src="https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790771505/Screenshot_2026-09-30_180153_ia2yct.png"
              alt="Made For Every Moment Lifestyle"
              className="moment-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
