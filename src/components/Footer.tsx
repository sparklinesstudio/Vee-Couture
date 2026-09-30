'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="main-footer">
      <div className="container">
        {/* Top 4-Column Grid */}
        <div className="footer-top-grid">
          {/* Column 1: About */}
          <div>
            <h4 className="footer-col-title">About GG Fashion</h4>
            <p className="footer-about-text">
              Your destination for premium ethnic wear. We blend traditional
              craftsmanship with modern silhouettes to bring you the finest
              Sarees, Lehengas, and Suits.
            </p>

            <div className="social-links">
              {/* Facebook */}
              <a
                href="#"
                className="social-icon-btn"
                aria-label="Facebook"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Pinterest */}
              <a
                href="#"
                className="social-icon-btn"
                aria-label="Pinterest"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                className="social-icon-btn"
                aria-label="YouTube"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            <p className="accepted-payments-label">We Accept</p>
            <div className="payment-badges-row">
              <span className="payment-badge">VISA</span>
              <span className="payment-badge">Mastercard</span>
              <span className="payment-badge">RuPay</span>
              <span className="payment-badge">UPI</span>
              <span className="payment-badge">NetBanking</span>
            </div>
          </div>

          {/* Column 2: Shop Online */}
          <div>
            <h4 className="footer-col-title">Shop Online</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#new-arrivals" className="footer-link">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#categories" className="footer-link">
                  Banarasi Sarees
                </a>
              </li>
              <li>
                <a href="#occasions" className="footer-link">
                  Designer Lehengas
                </a>
              </li>
              <li>
                <a href="#categories" className="footer-link">
                  Party Wear Suits
                </a>
              </li>
              <li>
                <a href="#featured" className="footer-link">
                  Festive Collection
                </a>
              </li>
              <li>
                <a href="#featured" className="footer-link">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h4 className="footer-col-title">Customer Care</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#" className="footer-link">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Return &amp; Exchange
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Connected & Newsletter */}
          <div>
            <h4 className="footer-col-title">Stay Connected</h4>
            <p className="newsletter-desc">
              Subscribe to get special offers and new season updates.
            </p>

            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="newsletter-btn">
                {subscribed ? 'Joined!' : 'Join'}
              </button>
            </form>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <MapPin size={15} />
                <span>
                  D-202, Enclave-2, Greater Noida, Uttar Pradesh - 201310
                </span>
              </div>
              <div className="contact-info-item">
                <Phone size={15} />
                <span>+91 9310328908</span>
              </div>
              <div className="contact-info-item">
                <Mail size={15} />
                <span>gg.collection1982@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="popular-searches-wrap">
          <span className="popular-title">Popular Searches:</span>
          <p className="popular-tags-list">
            <a href="#" className="popular-tag-link">Saree &amp; Silk Sarees</a> |{' '}
            <a href="#" className="popular-tag-link">Georgette Party Wear</a> |{' '}
            <a href="#" className="popular-tag-link">Wedding Lehengas</a> |{' '}
            <a href="#" className="popular-tag-link">Banarasi Dupatta</a> |{' '}
            <a href="#" className="popular-tag-link">Festive Kurtis</a> |{' '}
            <a href="#" className="popular-tag-link">Ready To Wear</a> |{' '}
            <a href="#" className="popular-tag-link">Designer Suits For Women</a> |{' '}
            <a href="#" className="popular-tag-link">Bridal Trousseau</a> |{' '}
            <a href="#" className="popular-tag-link">Embellished Silk Gowns</a> |{' '}
            <a href="#" className="popular-tag-link">Pure Kanjivaram Silk</a> |{' '}
            <a href="#" className="popular-tag-link">Floral Printed Kurta</a> |{' '}
            <a href="#" className="popular-tag-link">Casual Georgette Suit</a> |{' '}
            <a href="#" className="popular-tag-link">Haldi Ceremony Wear</a>
          </p>
        </div>

        {/* Copyright */}
        <div className="copyright-bar">
          <p>© 2026 GG Fashion. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
