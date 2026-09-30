'use client';

import React from 'react';
import { Sparkles, Gem, Truck, RefreshCw, ShieldCheck } from 'lucide-react';
import { TRUST_FEATURES } from '@/data/mockData';

export default function TrustBadges() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'sparkles':
        return <Sparkles size={26} strokeWidth={1.6} />;
      case 'gem':
        return <Gem size={26} strokeWidth={1.6} />;
      case 'truck':
        return <Truck size={26} strokeWidth={1.6} />;
      case 'refresh':
        return <RefreshCw size={26} strokeWidth={1.6} />;
      case 'shield':
        return <ShieldCheck size={26} strokeWidth={1.6} />;
      default:
        return <Sparkles size={26} strokeWidth={1.6} />;
    }
  };

  return (
    <section className="trust-strip">
      <div className="container">
        <div className="trust-grid">
          {TRUST_FEATURES.map((item, idx) => (
            <div className="trust-item" key={idx}>
              <div className="trust-icon-box">{getIcon(item.icon)}</div>
              <h4 className="trust-title">{item.title}</h4>
              <p className="trust-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
