'use client';

import React from 'react';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { FASHION_PRODUCTS, ProductItem } from '@/data/fashionData';

interface RecentlyViewedProps {
  onWishlistToggle: (id: string) => void;
  wishlistIds: Set<string>;
  onAddToCart: (p: ProductItem) => void;
  onOpenQuickView: (p: ProductItem) => void;
}

export default function RecentlyViewed({
  onWishlistToggle,
  wishlistIds,
  onAddToCart,
  onOpenQuickView,
}: RecentlyViewedProps) {
  // Show 4 products as recently browsed items
  const recentItems = FASHION_PRODUCTS.slice(0, 4);

  return (
    <section className="section recently-viewed-section" id="recently-viewed">
      <div className="container">
        <div className="recently-viewed-header">
          <span className="section-eyebrow">YOUR BROWSING HISTORY</span>
          <h2 className="section-title">CONTINUE BROWSING</h2>
        </div>

        <div className="recent-items-grid">
          {recentItems.map((product) => {
            const isWishlisted = wishlistIds.has(product.id);

            return (
              <div className="recent-item-card" key={product.id}>
                {/* Image Wrap */}
                <div className="recent-img-box" onClick={() => onOpenQuickView(product)}>
                  <img src={product.image} alt={product.name} className="recent-prod-img" />

                  {/* Wishlist Button */}
                  <button
                    className={`recent-wishlist-btn ${isWishlisted ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onWishlistToggle(product.id);
                    }}
                    aria-label="Save to Wishlist"
                  >
                    <Heart
                      size={15}
                      fill={isWishlisted ? '#BF8F92' : 'none'}
                      color={isWishlisted ? '#BF8F92' : '#1C1917'}
                    />
                  </button>

                  {/* Quick Action Overlay */}
                  <div className="recent-overlay-actions">
                    <button
                      className="recent-quickview-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuickView(product);
                      }}
                    >
                      <Eye size={14} />
                      <span>Quick View</span>
                    </button>
                    <button
                      className="recent-quickadd-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                    >
                      <ShoppingBag size={14} />
                      <span>Quick Add</span>
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="recent-details">
                  <h4 className="recent-prod-title">
                    <a href="#new-arrivals" onClick={(e) => { e.preventDefault(); onOpenQuickView(product); }}>
                      {product.name}
                    </a>
                  </h4>
                  <div className="recent-price-row">
                    <span className="recent-price">₹{product.price.toLocaleString('en-IN')}</span>
                    {product.originalPrice && (
                      <span className="recent-mrp">MRP ₹{product.originalPrice.toLocaleString('en-IN')}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
