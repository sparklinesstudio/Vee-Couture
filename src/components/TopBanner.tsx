'use client';

import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

export default function TopBanner() {
  return (
    <div className="top-banner">
      <span className="top-banner-badge">Concierge</span>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
        <MessageCircle size={14} style={{ color: '#E11D74' }} />
        <span>
          For styling questions, bridal consultations &amp; customisations:{' '}
          <strong>WhatsApp us at</strong>{' '}
          <a
            href="https://wa.me/919310328908"
            target="_blank"
            rel="noopener noreferrer"
          >
            +91 9310328908
          </a>
        </span>
      </div>
    </div>
  );
}
