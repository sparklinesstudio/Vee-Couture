'use client';

import React from 'react';
import {
  ArrowUp,
  ShieldCheck,
  CreditCard,
  Lock,
} from 'lucide-react';

const InstagramSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
  </svg>
);

export default function EnterpriseFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="enterprise-footer">
      {/* Top Banner / Heritage Note */}
      <div className="footer-top-strip">
        <div className="container footer-top-inner">
          <div className="footer-brand-meta">
            <img
              src="/images/logo.png"
              alt="Vee Couture - made with love"
              className="footer-logo-img"
            />
            <span className="footer-tagline">
              Modern luxury ready-to-wear &amp; artisanal haute couture for the discerning individual.
            </span>
          </div>

          <button onClick={scrollToTop} className="footer-back-to-top" aria-label="Back to top">
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="container footer-main-container">
        <div className="footer-links-grid">
          {/* Column 1: SHOP */}
          <div className="footer-col">
            <h4 className="footer-col-title">SHOP</h4>
            <ul className="footer-links">
              <li><a href="#new-arrivals">New Arrivals</a></li>
              <li><a href="#new-arrivals">Dresses</a></li>
              <li><a href="#new-arrivals">Tops</a></li>
              <li><a href="#new-arrivals">Bottoms</a></li>
              <li><a href="#new-arrivals">Co-ords</a></li>
              <li><a href="#categories">Accessories</a></li>
              <li><a href="#new-arrivals" className="footer-sale-link">Sale</a></li>
            </ul>
          </div>

          {/* Column 2: CUSTOMER CARE */}
          <div className="footer-col">
            <h4 className="footer-col-title">CUSTOMER CARE</h4>
            <ul className="footer-links">
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#shipping">Shipping &amp; Delivery</a></li>
              <li><a href="#returns">Returns &amp; Exchanges</a></li>
              <li><a href="#sizeguide">Size Guide &amp; Fit</a></li>
              <li><a href="#tracking">Track Order</a></li>
              <li><a href="#faqs">FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: ABOUT */}
          <div className="footer-col">
            <h4 className="footer-col-title">ABOUT</h4>
            <ul className="footer-links">
              <li><a href="#about">Our Story</a></li>
              <li><a href="#journal">The Journal</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#stores">Boutique Stores</a></li>
              <li><a href="#contact">Press &amp; Enquiries</a></li>
            </ul>
          </div>

          {/* Column 4: LEGAL */}
          <div className="footer-col">
            <h4 className="footer-col-title">LEGAL</h4>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms &amp; Conditions</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
              <li><a href="#accessibility">Accessibility Statement</a></li>
              <li><a href="#security">Security &amp; Compliance</a></li>
            </ul>
          </div>

          {/* Column 5: SOCIAL & DISPATCH */}
          <div className="footer-col footer-col-social">
            <h4 className="footer-col-title">FOLLOW</h4>
            <p className="footer-social-text">
              Follow our atelier journey and seasonal previews.
            </p>
            <div className="footer-social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramSvg />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookSvg />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.373-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YoutubeSvg />
              </a>
            </div>

            <div className="footer-dispatch-badge">
              <ShieldCheck size={16} color="#C5A059" />
              <span>100% Encrypted &amp; Insured Checkout</span>
            </div>
          </div>
        </div>

        {/* Payment Methods and Bottom Copyright Strip */}
        <div className="footer-bottom-row">
          <div className="footer-payment-methods">
            <span className="payment-label">SECURE PAYMENT:</span>
            <div className="payment-badges-list">
              <span className="pay-badge">VISA</span>
              <span className="pay-badge">MASTERCARD</span>
              <span className="pay-badge">AMEX</span>
              <span className="pay-badge">UPI / GPAY</span>
              <span className="pay-badge">NET BANKING</span>
              <span className="pay-badge">APPLE PAY</span>
            </div>
          </div>

          <div className="footer-copyright">
            <span>&copy; {new Date().getFullYear()} Vee Couture Atelier Pvt. Ltd. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
