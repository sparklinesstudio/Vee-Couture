'use client';

import React from 'react';
import { Video, Scissors, Shirt, Plane, MessageSquare, ArrowRight } from 'lucide-react';

export default function BespokeConcierge() {
  const services = [
    {
      icon: <Video size={28} className="concierge-icon" />,
      title: 'Virtual Bridal Styling',
      desc: 'Connect 1-on-1 with senior bridal curators via private video call to select dupattas, fabrics, and matching jewellery.',
    },
    {
      icon: <Scissors size={28} className="concierge-icon" />,
      title: 'Made-To-Measure Blouse Tailoring',
      desc: 'Submit your exact measurements. Choose artisanal necklines, padding, latkans, and custom back embroidery detailing.',
    },
    {
      icon: <Shirt size={28} className="concierge-icon" />,
      title: 'Pre-Draped Ready Sarees',
      desc: 'Zero-effort elegance. Have your saree pre-pleated and stitched with concealed waistband hooks for 1-minute wearing.',
    },
    {
      icon: <Plane size={28} className="concierge-icon" />,
      title: 'Insured Global Express Courier',
      desc: 'Express international delivery via DHL Express with end-to-end tracking to USA, UK, UAE, Canada, and Europe in 3–5 days.',
    },
  ];

  return (
    <section className="section concierge-section" id="concierge">
      <div className="container">
        {/* Banner Card */}
        <div className="concierge-banner-box">
          <div className="concierge-content-left">
            <span className="concierge-eyebrow">HAUTE COUTURE SERVICES</span>
            <h2 className="concierge-title">
              Bespoke Bridal Concierge &amp;{' '}
              <span className="text-pink">Custom Tailoring</span>
            </h2>
            <p className="concierge-desc">
              From handloom loom selection to custom blouse embroidery and pre-stitched draping, experience personalized royal bridal concierge services from anywhere in the world.
            </p>

            <div className="concierge-services-grid">
              {services.map((item, idx) => (
                <div className="concierge-service-item" key={idx}>
                  <div className="concierge-icon-circle">{item.icon}</div>
                  <div>
                    <h4 className="concierge-item-title">{item.title}</h4>
                    <p className="concierge-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="concierge-actions-row">
              <a
                href="https://wa.me/919310328908?text=Hello,%20I%20would%20like%20to%20book%20a%20Bespoke%20Bridal%20Consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageSquare size={16} />
                <span>Book Appointment On WhatsApp</span>
              </a>
              <span className="concierge-note">Free 30-min Virtual Styling Session</span>
            </div>
          </div>

          <div className="concierge-visual-right">
            <img
              src="/images/concierge-consult.jpg"
              alt="Bespoke Bridal Atelier Consultation"
              className="concierge-side-img"
            />
            <div className="concierge-visual-badge">
              <span className="badge-highlight">✦ ATELIER CONCIERGE</span>
              <span className="badge-text">Personal Bridal Stylist Assigned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
