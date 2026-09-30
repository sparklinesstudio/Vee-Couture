'use client';

import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart, ShoppingBag, Star } from 'lucide-react';
import { FASHION_PRODUCTS, ProductItem } from '@/data/fashionData';

interface TrendingNowProps {
  onWishlistToggle: (id: string) => void;
  wishlistIds: Set<string>;
  onAddToCart: (p: ProductItem) => void;
  onOpenQuickView: (p: ProductItem) => void;
}

export default function TrendingNow({
  onWishlistToggle,
  wishlistIds,
  onAddToCart,
  onOpenQuickView,
}: TrendingNowProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'dresses' | 'tops' | 'coords' | 'accessories'>('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const tabs: { id: 'all' | 'dresses' | 'tops' | 'coords' | 'accessories'; label: string }[] = [
    { id: 'all', label: 'ALL' },
    { id: 'dresses', label: 'DRESSES' },
    { id: 'tops', label: 'TOPS' },
    { id: 'coords', label: 'CO-ORDS' },
    { id: 'accessories', label: 'ACCESSORIES' },
  ];

  const filtered = activeTab === 'all'
    ? FASHION_PRODUCTS
    : FASHION_PRODUCTS.filter((p) => p.category === activeTab);

  const handleScroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = dir === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="section trending-section" id="trending-now">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-eyebrow">CURATED POPULAR PICKS</span>
          <h2 className="section-title">Trending Now</h2>

          {/* Interactive Category Filter Tabs */}
          <div className="trending-tabs-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`trending-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Carousel with Hardware Smooth Scroll Snap */}
        <div className="carousel-outer-wrap">
          <button
            onClick={() => handleScroll('left')}
            className="carousel-btn"
            aria-label="Previous trending items"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="carousel-viewport" ref={scrollRef}>
            <div className="carousel-track">
              {filtered.map((product) => {
                const isWishlisted = wishlistIds.has(product.id);

                return (
                  <div className="carousel-slide-item product-card" key={product.id}>
                    {/* Image Wrapper */}
                    <div
                      className="product-img-wrapper"
                      onClick={() => onOpenQuickView(product)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-img"
                      />

                      {/* Wishlist Button */}
                      <button
                        className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onWishlistToggle(product.id);
                        }}
                        aria-label="Toggle Wishlist"
                      >
                        <Heart
                          size={17}
                          fill={isWishlisted ? '#BF8F92' : 'none'}
                          color={isWishlisted ? '#BF8F92' : '#44403C'}
                        />
                      </button>

                      {/* Working Quick View and Quick Add Actions */}
                      <div className="product-hover-actions">
                        <button
                          type="button"
                          className="hover-action-btn quick-view"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenQuickView(product);
                          }}
                          aria-label={`Quick view ${product.name}`}
                        >
                          <Star size={14} />
                          <span>Quick View</span>
                        </button>
                        <button
                          type="button"
                          className="hover-action-btn quick-add"
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(product);
                          }}
                          aria-label={`Quick add ${product.name} to bag`}
                        >
                          <ShoppingBag size={14} />
                          <span>Quick Add</span>
                        </button>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div
                      className="product-info"
                      onClick={() => onOpenQuickView(product)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="product-meta-row">
                        <span className="product-brand">{product.category.toUpperCase()}</span>
                        <div className="product-rating-pill">
                          <Star size={11} fill="#EAB308" color="#EAB308" />
                          <span>{product.rating} ({product.reviewCount})</span>
                        </div>
                      </div>

                      <h3 className="product-title" title={product.name}>
                        {product.name}
                      </h3>

                      {/* Color Swatch Dots */}
                      <div className="color-swatches-row">
                        {product.colors.map((c, i) => (
                          <span
                            key={i}
                            className="color-dot"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>

                      <div className="product-pricing">
                        <span className="price-current">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        {product.originalPrice && (
                          <span className="price-original">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                        {product.discount && (
                          <span className="price-discount">{product.discount}</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => handleScroll('right')}
            className="carousel-btn btn-pink"
            aria-label="Next trending items"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
