'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, Sparkles } from 'lucide-react';

export default function EnterpriseNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="newsletter-enterprise-section" id="newsletter">
      <div className="container">
        <div className="newsletter-card-inner">
          <div className="newsletter-badge">
            <Sparkles size={13} color="#C5A059" />
            <span>THE ATELIER CIRCLE</span>
          </div>

          <h2 className="newsletter-heading">YOUR STYLE, IN YOUR INBOX.</h2>
          <p className="newsletter-subheading">
            New collections, styling inspiration and private offers — delivered occasionally.
          </p>

          {isSubscribed ? (
            <div className="newsletter-success-box">
              <CheckCircle2 size={20} color="#16A34A" />
              <span>Welcome to the Atelier Circle. Check your inbox for your 10% welcome privilege code.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form-row">
              <div className="newsletter-input-wrapper">
                <Mail size={18} className="newsletter-input-icon" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="newsletter-email-input"
                  required
                />
              </div>
              <button type="submit" className="newsletter-submit-btn">
                <span>JOIN US</span>
                <ArrowRight size={15} />
              </button>
            </form>
          )}

          <p className="newsletter-privacy-text">
            By joining, you agree to our <a href="#privacy">Privacy Policy</a>. You may unsubscribe at any time with one click.
          </p>
        </div>
      </div>
    </section>
  );
}
