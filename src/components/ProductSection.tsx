'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart, ShoppingBag } from 'lucide-react';
import { Product } from '@/data/mockData';

interface ProductSectionProps {
  titlePrefix: string;
  titleHighlight: string;
  products: Product[];
  viewAllLink?: string;
  sectionId?: string;
  onWishlistToggle?: (productId: string) => void;
  wishlistIds?: Set<string>;
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

export default function ProductSection({
  titlePrefix,
  titleHighlight,
  products,
  viewAllLink = '#',
  sectionId,
  onWishlistToggle,
  wishlistIds = new Set(),
  onAddToCart,
  onQuickView,
}: ProductSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="section" id={sectionId} style={{ paddingTop: '48px', paddingBottom: '54px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header-flex">
          <h2 className="section-title">
            {titlePrefix} <span className="text-pink">{titleHighlight}</span>
          </h2>
          <a href={viewAllLink} className="view-all-link">
            <span>VIEW ALL PRODUCTS</span>
            <ChevronRight size={14} />
          </a>
        </div>

        {/* Carousel Wrap */}
        <div className="carousel-outer-wrap">
          <button
            onClick={() => handleScroll('left')}
            className="carousel-btn"
            aria-label="Previous products"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Smooth Sliding Viewport */}
          <div className="carousel-viewport" ref={scrollRef}>
            <div className="carousel-track">
              {products.map((product) => {
                const isWishlisted = wishlistIds.has(product.id);

                return (
                  <div className="carousel-slide-item product-card" key={product.id}>
                    {/* Image container */}
                    <div
                      className="product-img-wrapper"
                      style={{ cursor: 'pointer' }}
                      onClick={() => onQuickView && onQuickView(product)}
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
                          onWishlistToggle && onWishlistToggle(product.id);
                        }}
                        title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                        aria-label="Toggle Wishlist"
                      >
                        <Heart
                          size={17}
                          fill={isWishlisted ? '#E11D74' : 'none'}
                          color={isWishlisted ? '#E11D74' : '#44403C'}
                        />
                      </button>

                      {/* Quick Add Overlay on Hover */}
                      <button
                        className="quick-action-bar"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onQuickView) {
                            onQuickView(product);
                          } else if (onAddToCart) {
                            onAddToCart(product);
                          }
                        }}
                        aria-label="Quick View and Customize"
                      >
                        <ShoppingBag size={14} />
                        <span>Quick View &amp; Tailor</span>
                      </button>
                    </div>

                    {/* Product Details */}
                    <div
                      className="product-info"
                      style={{ cursor: 'pointer' }}
                      onClick={() => onQuickView && onQuickView(product)}
                    >
                      <div className="product-meta-row">
                        <span className="product-brand">{product.brand}</span>
                        <span className="product-tag">Artisanal Weave</span>
                      </div>

                      <h3 className="product-title" title={product.name}>
                        {product.name}
                      </h3>

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
                          <span className="price-discount">
                            {product.discount}
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
            className="carousel-btn btn-pink"
            aria-label="Next products"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
