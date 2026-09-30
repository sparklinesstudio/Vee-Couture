'use client';

import React, { useState } from 'react';
import { X, Heart, ShoppingBag, ShieldCheck, Truck, RefreshCw, Check, Star, Ruler } from 'lucide-react';
import { ProductItem } from '@/data/fashionData';

interface QuickViewModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onAddToCart: (product: ProductItem, size: string) => void;
  isWishlisted: boolean;
  onWishlistToggle: (productId: string) => void;
}

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onWishlistToggle,
}: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  if (!product) return null;

  const availableSizes = product.sizes && product.sizes.length > 0 ? product.sizes : ['XS', 'S', 'M', 'L', 'XL'];
  const currentColor = selectedColor || (product.colors && product.colors[0]) || '#1A1A1A';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close Quick View"
        >
          <X size={20} />
        </button>

        <div className="modal-inner-grid">
          {/* Left: Product Image */}
          <div className="modal-img-col">
            <img
              src={product.image}
              alt={product.name}
              className="modal-product-img"
            />
          </div>

          {/* Right: Product Details & Customization */}
          <div className="modal-info-col">
            <span className="modal-brand">VEE COUTURE · READY-TO-WEAR</span>
            <h2 className="modal-title">{product.name}</h2>

            {/* Rating */}
            <div className="modal-rating-row">
              <div className="stars-mini">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />
                ))}
              </div>
              <span className="modal-rating-text">
                {product.rating?.toFixed(1) || '4.9'} ({product.reviewCount || 120} reviews)
              </span>
            </div>

            <div className="modal-price-row">
              <span className="modal-price-current">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="modal-price-original">
                  MRP ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            {product.description && (
              <p className="modal-desc">{product.description}</p>
            )}

            {/* Color Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div className="modal-field-block">
                <span className="modal-field-label">SELECT COLOUR:</span>
                <div className="modal-colors-row">
                  {product.colors.map((c, i) => (
                    <button
                      key={i}
                      className={`modal-color-circle ${currentColor === c ? 'selected' : ''}`}
                      style={{ backgroundColor: c }}
                      onClick={() => setSelectedColor(c)}
                      aria-label={`Color option ${c}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div className="modal-field-block">
              <div className="modal-size-header-row">
                <span className="modal-field-label">SELECT SIZE:</span>
                <button
                  type="button"
                  className="size-guide-btn"
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                >
                  <Ruler size={13} />
                  <span>Size Guide</span>
                </button>
              </div>

              <div className="modal-sizes-row">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`modal-size-pill ${selectedSize === size ? 'selected' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {showSizeGuide && (
                <div className="size-guide-popup">
                  <span>Regular European Fit. XS: 32" | S: 34" | M: 36" | L: 38" | XL: 40"</span>
                </div>
              )}
            </div>

            {/* Quantity */}
            <div className="modal-field-block">
              <span className="modal-field-label">QUANTITY:</span>
              <div className="quantity-counter">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="qty-btn"
                >
                  -
                </button>
                <span className="qty-number">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="qty-btn"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="modal-actions-row">
              <button
                onClick={() => {
                  for (let i = 0; i < quantity; i++) {
                    onAddToCart(product, selectedSize);
                  }
                  onClose();
                }}
                className="btn-primary modal-add-cart-btn"
              >
                <ShoppingBag size={17} />
                <span>ADD TO BAG · ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
              </button>

              <button
                onClick={() => onWishlistToggle(product.id)}
                className={`modal-wishlist-toggle ${isWishlisted ? 'active' : ''}`}
                aria-label="Save to Wishlist"
              >
                <Heart
                  size={19}
                  fill={isWishlisted ? '#BF8F92' : 'none'}
                  color={isWishlisted ? '#BF8F92' : '#1C1917'}
                />
              </button>
            </div>

            {/* Guarantees */}
            <div className="modal-guarantees-strip">
              <div className="guarantee-item">
                <Truck size={14} color="#C5A059" />
                <span>Free Insured Shipping</span>
              </div>
              <div className="guarantee-item">
                <RefreshCw size={14} color="#C5A059" />
                <span>7-Day Easy Returns</span>
              </div>
              <div className="guarantee-item">
                <ShieldCheck size={14} color="#C5A059" />
                <span>100% Authentic Luxury</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
