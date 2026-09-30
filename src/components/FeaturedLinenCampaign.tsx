'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FeaturedLinenCampaign() {
  return (
    <section className="linen-campaign-banner" id="collections">
      <div className="linen-campaign-bg-wrapper">
        <img
          src="https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790771989/Generated_Image_September_30_2026_-_6_09PM_a7kjld.jpg"
          alt="The Linen Edit Campaign"
          className="linen-campaign-bg"
        />
        <div className="linen-campaign-overlay"></div>
      </div>

      <div className="container linen-campaign-content">
        <div className="linen-campaign-text-box">
          <div className="linen-tag">
            <Sparkles size={14} color="#E6CA85" />
            <span>SEASONAL SPOTLIGHT</span>
          </div>

          <h2 className="linen-headline">The Linen Edit</h2>
          <p className="linen-subhead">
            Light textures. Relaxed silhouettes. Effortless summer dressing crafted from 100% sustainably harvested European flax.
          </p>

          <a href="#new-arrivals" className="btn-primary">
            <span>SHOP THE COLLECTION</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
