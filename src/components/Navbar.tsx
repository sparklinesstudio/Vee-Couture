'use client';

import React, { useState } from 'react';
import { Search, Heart, User, ShoppingBag, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data/mockData';

interface NavbarProps {
  wishlistCount: number;
  cartCount: number;
}

export default function Navbar({ wishlistCount, cartCount }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="container">
        <div className="header-inner">
          {/* Brand Logo */}
          <a href="#" className="brand-logo-wrap">
            <div className="logo-monogram">GG</div>
            <div className="brand-text-wrap">
              <span className="brand-name">GG Fashion</span>
              <span className="brand-subtitle">Ethnic Wear, Crafted with Love</span>
            </div>
          </a>

          {/* Search bar */}
          <div className="search-container">
            <div className="search-input-wrap">
              <Search size={17} color="#8E8E93" />
              <input
                type="text"
                className="search-input"
                placeholder="Search for products, brands and more"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Action icons */}
          <div className="header-actions">
            <button
              className="action-btn"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart size={21} strokeWidth={1.8} />
              {wishlistCount > 0 && (
                <span className="action-badge">{wishlistCount}</span>
              )}
            </button>

            <button
              className="action-btn"
              title="Account"
              aria-label="Account"
            >
              <User size={21} strokeWidth={1.8} />
            </button>

            <button
              className="action-btn"
              title="Cart"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={21} strokeWidth={1.8} />
              {cartCount > 0 && (
                <span className="action-badge">{cartCount}</span>
              )}
            </button>

            <button
              className="action-btn mobile-menu-btn"
              style={{ display: 'none' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Category Navigation */}
      <nav className="nav-bar">
        <div className="container">
          <ul className="nav-list">
            {NAV_LINKS.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className={`nav-link ${link.badge ? 'active' : ''}`}
                >
                  {link.badge && <span className="nav-dot"></span>}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
