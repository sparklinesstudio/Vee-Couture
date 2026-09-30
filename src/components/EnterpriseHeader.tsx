'use client';

import React, { useState, useEffect } from 'react';
import {
  Search,
  Heart,
  User,
  ShoppingBag,
  ChevronDown,
  X,
  ArrowRight,
  TrendingUp,
  Clock,
  Menu,
} from 'lucide-react';
import { ANNOUNCEMENT_MESSAGES, FASHION_PRODUCTS, ProductItem } from '@/data/fashionData';

interface EnterpriseHeaderProps {
  wishlistCount: number;
  cartCount: number;
  onOpenQuickView: (product: ProductItem) => void;
}

export default function EnterpriseHeader({
  wishlistCount,
  cartCount,
  onOpenQuickView,
}: EnterpriseHeaderProps) {
  // Rotating Announcement
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % ANNOUNCEMENT_MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Mega Menu State
  const [isShopHovered, setIsShopHovered] = useState(false);

  // Search Overlay State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProducts = searchQuery.trim()
    ? FASHION_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : FASHION_PRODUCTS.slice(0, 3);

  return (
    <>
      {/* 2. Announcement Layer (Rotating) */}
      <div className="announcement-layer">
        <div className="announcement-inner">
          <span className="announcement-text keyframe-fade" key={announcementIndex}>
            {ANNOUNCEMENT_MESSAGES[announcementIndex]}
          </span>
        </div>
      </div>

      {/* 3. Enterprise Header */}
      <header className="enterprise-header">
        <div className="container header-container">
          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* LOGO */}
          <a href="#" className="enterprise-logo" aria-label="Vee Couture Homepage">
            <img
              src="/images/logo.png"
              alt="Vee Couture - made with love"
              className="brand-logo-img"
            />
          </a>

          {/* Primary Desktop Navigation */}
          <nav className="desktop-primary-nav">
            <ul className="primary-nav-list">
              {/* NEW IN */}
              <li className="nav-item">
                <a href="#new-arrivals" className="nav-link-btn">
                  NEW IN
                </a>
              </li>

              {/* SHOP (With Enterprise Mega Menu) */}
              <li
                className="nav-item shop-mega-item"
                onMouseEnter={() => setIsShopHovered(true)}
                onMouseLeave={() => setIsShopHovered(false)}
              >
                <a href="#categories" className="nav-link-btn has-dropdown">
                  <span>SHOP</span>
                  <ChevronDown size={14} className={`chevron-icon ${isShopHovered ? 'rotate' : ''}`} />
                </a>

                {/* 4. Enterprise Mega Menu Dropdown */}
                {isShopHovered && (
                  <div className="mega-menu-overlay">
                    <div className="container mega-menu-container">
                      <div className="mega-menu-grid">
                        {/* Column 1: Clothing */}
                        <div className="mega-col">
                          <h4 className="mega-col-heading">CLOTHING</h4>
                          <ul className="mega-links-list">
                            <li><a href="#new-arrivals">All Clothing</a></li>
                            <li><a href="#new-arrivals">Dresses</a></li>
                            <li><a href="#new-arrivals">Tops</a></li>
                            <li><a href="#new-arrivals">Shirts &amp; Blouses</a></li>
                            <li><a href="#new-arrivals">Trousers</a></li>
                            <li><a href="#new-arrivals">Jeans</a></li>
                            <li><a href="#new-arrivals">Skirts</a></li>
                            <li><a href="#new-arrivals">Co-ords</a></li>
                            <li><a href="#new-arrivals">Jumpsuits</a></li>
                            <li><a href="#new-arrivals">Outerwear</a></li>
                          </ul>
                        </div>

                        {/* Column 2: By Style */}
                        <div className="mega-col">
                          <h4 className="mega-col-heading">BY STYLE</h4>
                          <ul className="mega-links-list">
                            <li><a href="#occasions">Casual</a></li>
                            <li><a href="#occasions">Minimal</a></li>
                            <li><a href="#occasions">Elegant</a></li>
                            <li><a href="#occasions">Contemporary</a></li>
                            <li><a href="#occasions">Party &amp; Evening</a></li>
                            <li><a href="#occasions">Workwear</a></li>
                          </ul>
                        </div>

                        {/* Column 3: By Occasion */}
                        <div className="mega-col">
                          <h4 className="mega-col-heading">BY OCCASION</h4>
                          <ul className="mega-links-list">
                            <li><a href="#occasions">Everyday</a></li>
                            <li><a href="#occasions">Office</a></li>
                            <li><a href="#occasions">Date Night</a></li>
                            <li><a href="#occasions">Wedding &amp; Festive</a></li>
                            <li><a href="#occasions">Vacation</a></li>
                            <li><a href="#occasions">Weekend Edit</a></li>
                          </ul>
                        </div>

                        {/* Column 4: Featured Promo Card */}
                        <div className="mega-promo-col">
                          <div className="mega-promo-card">
                            <img
                              src="/images/fashion/mega-promo.jpg"
                              alt="The New Season Edit"
                              className="mega-promo-img"
                            />
                            <div className="mega-promo-overlay">
                              <span className="promo-badge">FEATURED COLLECTION</span>
                              <h5 className="promo-title">The New Season Edit</h5>
                              <p className="promo-desc">Discover what&apos;s new in relaxed luxury.</p>
                              <a href="#new-season-edit" className="promo-btn">
                                <span>SHOP NOW</span>
                                <ArrowRight size={13} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* COLLECTIONS */}
              <li className="nav-item">
                <a href="#collections" className="nav-link-btn">
                  COLLECTIONS
                </a>
              </li>

              {/* ACCESSORIES */}
              <li className="nav-item">
                <a href="#categories" className="nav-link-btn">
                  ACCESSORIES
                </a>
              </li>

              {/* SALE */}
              <li className="nav-item">
                <a href="#new-arrivals" className="nav-link-btn nav-link-sale">
                  SALE
                </a>
              </li>
            </ul>
          </nav>

          {/* Action Utilities (Search, Account, Wishlist, Bag) */}
          <div className="header-utilities">
            {/* Search Trigger */}
            <button
              className="utility-btn"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search experience"
            >
              <Search size={20} strokeWidth={1.8} />
              <span className="utility-label-desktop">SEARCH</span>
            </button>

            {/* Wishlist */}
            <a href="#wishlist" className="utility-btn" aria-label="View Wishlist">
              <Heart size={20} strokeWidth={1.8} />
              {wishlistCount > 0 && (
                <span className="utility-badge">{wishlistCount}</span>
              )}
            </a>

            {/* Account */}
            <button className="utility-btn" aria-label="Account">
              <User size={20} strokeWidth={1.8} />
              <span className="utility-label-desktop">ACCOUNT</span>
            </button>

            {/* Cart Bag */}
            <button className="utility-btn bag-btn" aria-label="Shopping Bag">
              <ShoppingBag size={20} strokeWidth={1.8} />
              <span className="utility-label-desktop">BAG</span>
              {cartCount > 0 && (
                <span className="utility-badge">{cartCount}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 3. Expanded Search Modal Experience */}
      {isSearchOpen && (
        <div className="search-modal-backdrop" onClick={() => setIsSearchOpen(false)}>
          <div className="search-modal-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="container">
              {/* Search Bar Input */}
              <div className="search-input-header">
                <div className="search-input-field-wrap">
                  <Search size={24} className="search-field-icon" />
                  <input
                    type="text"
                    autoFocus
                    placeholder="Search products, categories or styles..."
                    className="search-large-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      className="search-clear-btn"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>

                <button
                  className="search-close-text-btn"
                  onClick={() => setIsSearchOpen(false)}
                >
                  ESC / CLOSE
                </button>
              </div>

              {/* Search Content Grid */}
              <div className="search-content-grid">
                {/* Left: Trending & Recent */}
                <div className="search-suggestions-col">
                  {/* Trending Searches */}
                  <div className="search-section-block">
                    <div className="search-block-title">
                      <TrendingUp size={15} />
                      <span>TRENDING SEARCHES</span>
                    </div>
                    <div className="search-pills-row">
                      {['Linen Dresses', 'Black Dresses', 'Co-ord Sets', 'Office Wear', 'New Arrivals'].map(
                        (tag, idx) => (
                          <button
                            key={idx}
                            className="search-pill"
                            onClick={() => setSearchQuery(tag)}
                          >
                            {tag}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* Popular Categories */}
                  <div className="search-section-block">
                    <div className="search-block-title">
                      <span>POPULAR CATEGORIES</span>
                    </div>
                    <ul className="search-category-list">
                      {['Summer Dresses', 'Wide Leg Trousers', 'Silk Blouses', 'Bespoke Co-ords', 'Leather Bags'].map(
                        (cat, idx) => (
                          <li key={idx}>
                            <button
                              className="search-cat-link"
                              onClick={() => setSearchQuery(cat)}
                            >
                              <span>{cat}</span>
                              <ArrowRight size={13} />
                            </button>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Recent Searches */}
                  <div className="search-section-block">
                    <div className="search-block-title">
                      <Clock size={15} />
                      <span>RECENT SEARCHES</span>
                    </div>
                    <div className="search-pills-row">
                      {['Pure Linen Shirt', 'Chanderi Suit', 'Cocktail Gown'].map((tag, idx) => (
                        <button
                          key={idx}
                          className="search-pill pill-subtle"
                          onClick={() => setSearchQuery(tag)}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Suggested Products */}
                <div className="search-products-col">
                  <span className="search-block-title">
                    {searchQuery ? `SEARCH RESULTS FOR "${searchQuery}"` : 'SUGGESTED FOR YOU'}
                  </span>

                  <div className="search-results-grid">
                    {filteredProducts.map((p) => (
                      <div
                        className="search-product-card"
                        key={p.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          onOpenQuickView(p);
                        }}
                      >
                        <img src={p.image} alt={p.name} className="search-prod-img" />
                        <div className="search-prod-details">
                          <span className="search-prod-category">{p.category.toUpperCase()}</span>
                          <h6 className="search-prod-name">{p.name}</h6>
                          <div className="search-prod-price">
                            <span>₹{p.price.toLocaleString('en-IN')}</span>
                            {p.originalPrice && (
                              <del className="search-prod-del">₹{p.originalPrice.toLocaleString('en-IN')}</del>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-inner">
            <ul className="mobile-nav-links">
              <li><a href="#new-arrivals" onClick={() => setMobileMenuOpen(false)}>NEW IN</a></li>
              <li><a href="#categories" onClick={() => setMobileMenuOpen(false)}>SHOP CLOTHING</a></li>
              <li><a href="#occasions" onClick={() => setMobileMenuOpen(false)}>COLLECTIONS</a></li>
              <li><a href="#categories" onClick={() => setMobileMenuOpen(false)}>ACCESSORIES</a></li>
              <li><a href="#new-arrivals" onClick={() => setMobileMenuOpen(false)} className="mobile-sale-link">SALE (UP TO 50% OFF)</a></li>
              <li><a href="#journal" onClick={() => setMobileMenuOpen(false)}>THE JOURNAL</a></li>
              <li><a href="#our-story" onClick={() => setMobileMenuOpen(false)}>OUR STORY</a></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
