'use client';

import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, ShoppingBag, Eye, Star, ArrowRight } from 'lucide-react';
import { FASHION_PRODUCTS, ProductItem } from '@/data/fashionData';

interface BestSellersCarouselProps {
  onWishlistToggle: (id: string) => void;
  wishlistIds: Set<string>;
  onAddToCart: (p: ProductItem) => void;
  onOpenQuickView: (p: ProductItem) => void;
}

export default function BestSellersCarousel({
  onWishlistToggle,
  wishlistIds,
  onAddToCart,
  onOpenQuickView,
}: BestSellersCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedColors, setSelectedColors] = useState<{ [productId: string]: string }>({});

  const handleScroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = dir === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleColorPick = (productId: string, color: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedColors((prev) => ({ ...prev, [productId]: color }));
  };

  // Reorder or filter for bestsellers
  const bestSellers = [...FASHION_PRODUCTS].reverse();

  return (
    <section className="section best-sellers-section" id="best-sellers">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-flex">
          <div>
            <span className="section-eyebrow">MOST LOVED</span>
            <h2 className="section-title">The pieces our customers keep coming back for.</h2>
          </div>
          <a href="#new-arrivals" className="view-all-link">
            <span>VIEW ALL BEST SELLERS</span>
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Carousel Outer Wrap */}
        <div className="carousel-outer-wrap">
          <button
            onClick={() => handleScroll('left')}
            className="carousel-btn left"
            aria-label="Previous products"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="carousel-viewport" ref={scrollRef}>
            <div className="carousel-track">
              {bestSellers.map((prod) => {
                const isWishlisted = wishlistIds.has(prod.id);
                const activeColor = selectedColors[prod.id] || prod.colors[0];

                return (
                  <div className="carousel-slide-item product-card-lux" key={prod.id}>
                    {/* Image Area */}
                    <div
                      className="product-img-box"
                      onClick={() => onOpenQuickView(prod)}
                    >
                      <img src={prod.image} alt={prod.name} className="product-main-img" />

                      {/* Wishlist Button */}
                      <button
                        className={`lux-wishlist-btn ${isWishlisted ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onWishlistToggle(prod.id);
                        }}
                        aria-label="Toggle Wishlist"
                      >
                        <Heart
                          size={18}
                          fill={isWishlisted ? '#BF8F92' : 'none'}
                          color={isWishlisted ? '#BF8F92' : '#1C1917'}
                        />
                      </button>

                      {/* Desktop Hover & Mobile Accessible Quick Actions */}
                      <div className="product-hover-actions">
                        <button
                          type="button"
                          className="hover-action-btn quick-view"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenQuickView(prod);
                          }}
                          aria-label={`Quick view ${prod.name}`}
                        >
                          <Eye size={15} />
                          <span>Quick View</span>
                        </button>
                        <button
                          type="button"
                          className="hover-action-btn quick-add"
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(prod);
                          }}
                          aria-label={`Quick add ${prod.name} to bag`}
                        >
                          <ShoppingBag size={15} />
                          <span>Quick Add</span>
                        </button>
                      </div>
                    </div>

                    {/* Meta & Info */}
                    <div className="product-info-box">
                      {/* Rating & Review Count */}
                      <div className="product-rating-row">
                        <div className="stars-mini">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={13} fill="#D4AF37" color="#D4AF37" />
                          ))}
                        </div>
                        <span className="rating-score-text">
                          {prod.rating.toFixed(1)} ({prod.reviewCount})
                        </span>
                      </div>

                      {/* Color swatches */}
                      {prod.colors && prod.colors.length > 0 && (
                        <div className="product-swatches-row">
                          {prod.colors.map((c, i) => (
                            <button
                              key={i}
                              className={`color-swatch-dot ${activeColor === c ? 'active' : ''}`}
                              style={{ backgroundColor: c }}
                              onClick={(e) => handleColorPick(prod.id, c, e)}
                              aria-label={`Select color ${c}`}
                            />
                          ))}
                        </div>
                      )}

                      <h3 className="product-name-link">
                        <a
                          href="#new-arrivals"
                          onClick={(e) => {
                            e.preventDefault();
                            onOpenQuickView(prod);
                          }}
                        >
                          {prod.name}
                        </a>
                      </h3>

                      <div className="product-price-row">
                        <span className="current-price">₹{prod.price.toLocaleString('en-IN')}</span>
                        {prod.originalPrice && (
                          <span className="original-price">
                            ₹{prod.originalPrice.toLocaleString('en-IN')}
                          </span>
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
            className="carousel-btn right"
            aria-label="Next products"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
