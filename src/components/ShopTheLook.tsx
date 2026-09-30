'use client';

import React, { useState } from 'react';
import { ShoppingBag, Check, Plus } from 'lucide-react';
import { SHOP_THE_LOOK_ITEMS } from '@/data/fashionData';

interface ShopTheLookProps {
  onAddLookToBag: (items: typeof SHOP_THE_LOOK_ITEMS) => void;
}

export default function ShopTheLook({ onAddLookToBag }: ShopTheLookProps) {
  const [selectedItemIds, setSelectedItemIds] = useState<Set<string>>(
    new Set(SHOP_THE_LOOK_ITEMS.map((i) => i.id))
  );

  const toggleItem = (id: string) => {
    setSelectedItemIds((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        if (updated.size > 1) updated.delete(id); // keep at least 1
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  const selectedItems = SHOP_THE_LOOK_ITEMS.filter((i) => selectedItemIds.has(i.id));
  const totalPrice = selectedItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <section className="section shop-look-section" id="shop-the-look">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-eyebrow">CURATED STYLING</span>
          <h2 className="section-title">Shop The Look</h2>
          <p className="section-subtitle-lux">
            Complete outfits styled by our creative directors. Purchase individually or as a curated ensemble.
          </p>
        </div>

        {/* 2-Column Split: Image on Left with Hotspot Pins, Bundle on Right */}
        <div className="shop-look-card">
          {/* Left: Complete Look Photography with Pins */}
          <div className="shop-look-image-side">
            <img
              src="https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790772598/Generated_Image_September_30_2026_-_6_18PM_fxtrj3.jpg"
              alt="The Weekend Look Complete Styling"
              className="shop-look-main-img"
            />

          </div>

          {/* Right: Bundle Items Selector */}
          <div className="shop-look-details-side">
            <span className="bundle-eyebrow">COMPLETE ENSEMBLE</span>
            <h3 className="bundle-title">The Effortless Weekend Look</h3>
            <p className="bundle-desc">
              Tailored for sunlit strolls and relaxed gallery afternoons. Woven pure linen separates harmonized with vegetable-tanned leather.
            </p>

            {/* Items List */}
            <div className="bundle-items-list">
              {SHOP_THE_LOOK_ITEMS.map((item, idx) => {
                const isSelected = selectedItemIds.has(item.id);

                return (
                  <div
                    key={item.id}
                    className={`bundle-item-row ${isSelected ? 'selected' : ''}`}
                    onClick={() => toggleItem(item.id)}
                  >
                    <div className="bundle-item-left">
                      <span className="bundle-checkbox">
                        {isSelected && <Check size={13} color="#FFFFFF" />}
                      </span>
                      <img src={item.image} alt={item.name} className="bundle-item-thumb" />
                      <div>
                        <span className="bundle-item-num">0{idx + 1}</span>
                        <h4 className="bundle-item-name">{item.name}</h4>
                      </div>
                    </div>

                    <span className="bundle-item-price">
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Total and Add to Bag */}
            <div className="bundle-checkout-box">
              <div className="bundle-price-summary">
                <span className="total-label">Total for {selectedItems.length} selected piece(s):</span>
                <span className="total-amount">₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>

              <button
                className="btn-primary bundle-add-btn"
                onClick={() => onAddLookToBag(selectedItems)}
              >
                <ShoppingBag size={17} />
                <span>ADD LOOK TO BAG · ₹{totalPrice.toLocaleString('en-IN')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
