'use client';

import React from 'react';
import { Feather, Compass, RotateCcw, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export default function WhyUsPillars() {
  const pillars = [
    {
      icon: Feather,
      title: 'Carefully Selected Fabrics',
      description: 'Hand-picked organic linen, mulberry silks, and breathable combed cottons.',
    },
    {
      icon: Compass,
      title: 'Thoughtful Design',
      description: 'Precision drapery engineered for flattering fit and ease of movement.',
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      description: 'Complimentary 7-day doorstep pickup and exchange guarantees.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Payments',
      description: 'Bank-grade encrypted checkout with zero hidden card processing fees.',
    },
    {
      icon: Truck,
      title: 'Fast & Reliable Delivery',
      description: 'Insured express shipping across India & 80+ international locations.',
    },
  ];

  return (
    <section className="section why-us-section" id="why-us">
      <div className="container">
        <div className="why-us-header">
          <span className="section-eyebrow">OUR COMMITMENT</span>
          <h2 className="why-us-title">WHY VEE COUTURE</h2>
        </div>

        <div className="why-us-grid">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div className="why-us-card" key={index}>
                <div className="why-us-icon-box">
                  <IconComponent size={22} className="why-us-icon" strokeWidth={1.5} />
                </div>
                <h4 className="why-us-card-title">{pillar.title}</h4>
                <p className="why-us-card-desc">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
