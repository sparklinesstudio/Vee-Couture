'use client';

import React, { useState } from 'react';
import EnterpriseHeader from '@/components/EnterpriseHeader';
import HeroSection from '@/components/HeroSection';
import NewSeasonEdit from '@/components/NewSeasonEdit';
import ShopByCategory from '@/components/ShopByCategory';
import NewArrivalsCarousel from '@/components/NewArrivalsCarousel';
import EditorialSplit from '@/components/EditorialSplit';
import TrendingNow from '@/components/TrendingNow';
import ShopByOccasion from '@/components/ShopByOccasion';
import FeaturedLinenCampaign from '@/components/FeaturedLinenCampaign';
import BestSellersCarousel from '@/components/BestSellersCarousel';
import ShopTheLook from '@/components/ShopTheLook';
import BrandStory from '@/components/BrandStory';
import WhyUsPillars from '@/components/WhyUsPillars';
import CustomerReviews from '@/components/CustomerReviews';
import UgcInstagram from '@/components/UgcInstagram';
import TheJournal from '@/components/TheJournal';
import EnterpriseNewsletter from '@/components/EnterpriseNewsletter';
import RecentlyViewed from '@/components/RecentlyViewed';
import EnterpriseFooter from '@/components/EnterpriseFooter';
import QuickViewModal from '@/components/QuickViewModal';
import { ProductItem } from '@/data/fashionData';
import { CheckCircle2, Heart, ShoppingBag } from 'lucide-react';

export default function HomePage() {
  const [wishlist, setWishlist] = useState<Set<string>>(new Set(['fp-1']));
  const [cartCount, setCartCount] = useState<number>(2);
  const [toastMessage, setToastMessage] = useState<{ text: string; icon: 'cart' | 'heart' } | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);

  const showToast = (text: string, icon: 'cart' | 'heart') => {
    setToastMessage({ text, icon });
    setTimeout(() => {
      setToastMessage(null);
    }, 3400);
  };

  const handleWishlistToggle = (productId: string) => {
    setWishlist((prev) => {
      const updated = new Set(prev);
      if (updated.has(productId)) {
        updated.delete(productId);
        showToast('Removed from your Wishlist', 'heart');
      } else {
        updated.add(productId);
        showToast('Added to your Wishlist', 'heart');
      }
      return updated;
    });
  };

  const handleAddToCart = (product: ProductItem, size?: string) => {
    setCartCount((prev) => prev + 1);
    const label = size ? `"${product.name}" (${size})` : `"${product.name}"`;
    showToast(`Added ${label} to your Shopping Bag`, 'cart');
  };

  const handleAddLookToBag = (items: { id: string; name: string; price: number }[]) => {
    setCartCount((prev) => prev + items.length);
    showToast(`Added ${items.length} items from The Weekend Look to Bag`, 'cart');
  };

  const handleOpenQuickView = (product: ProductItem) => {
    setQuickViewProduct(product);
  };

  const handleCloseQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <main>
      {/* 1, 2, 3, 4. Announcement Layer, Enterprise Header & Mega Menu */}
      <EnterpriseHeader
        wishlistCount={wishlist.size}
        cartCount={cartCount}
        onOpenQuickView={handleOpenQuickView}
      />

      {/* 5. Section 01 — Hero */}
      <HeroSection />

      {/* 6. Section 02 — New Season / Campaign Introduction */}
      <NewSeasonEdit />

      {/* 7. Section 03 — Shop By Category */}
      <ShopByCategory />

      {/* 8. Section 04 — New Arrivals (JUST IN) */}
      <NewArrivalsCarousel
        wishlistIds={wishlist}
        onWishlistToggle={handleWishlistToggle}
        onAddToCart={handleAddToCart}
        onOpenQuickView={handleOpenQuickView}
      />

      {/* 9. Section 05 — Editorial Split Section (MADE FOR EVERY MOMENT) */}
      <EditorialSplit />

      {/* 10. Section 06 — Trending Now (Category Filter Tabs) */}
      <TrendingNow
        wishlistIds={wishlist}
        onWishlistToggle={handleWishlistToggle}
        onAddToCart={handleAddToCart}
        onOpenQuickView={handleOpenQuickView}
      />

      {/* 11. Section 07 — Shop By Occasion (DRESS FOR THE MOMENT) */}
      <ShopByOccasion />

      {/* 12. Section 08 — Featured Collection (THE LINEN EDIT) */}
      <FeaturedLinenCampaign />

      {/* 13. Section 09 — Best Sellers (MOST LOVED) */}
      <BestSellersCarousel
        wishlistIds={wishlist}
        onWishlistToggle={handleWishlistToggle}
        onAddToCart={handleAddToCart}
        onOpenQuickView={handleOpenQuickView}
      />

      {/* 14. Section 10 — Shop The Look (THE WEEKEND LOOK) */}
      <ShopTheLook onAddLookToBag={handleAddLookToBag} />

      {/* 15. Section 11 — Brand Story (MORE THAN CLOTHES) */}
      <BrandStory />

      {/* 16. Section 12 — Quality / Brand Promise (WHY VEE COUTURE) */}
      <WhyUsPillars />

      {/* 17. Section 13 — Customer Reviews / Social Proof (LOVED BY WOMEN LIKE YOU) */}
      <CustomerReviews />

      {/* 18. Section 14 — UGC / Instagram Section (AS SEEN ON YOU) */}
      <UgcInstagram />

      {/* 19. Section 15 — Editorial / Journal (THE JOURNAL) */}
      <TheJournal />

      {/* 20. Section 16 — Newsletter (YOUR STYLE, IN YOUR INBOX.) */}
      <EnterpriseNewsletter />

      {/* 22. Section 17 — Recently Viewed Utility (CONTINUE BROWSING) */}
      <RecentlyViewed
        wishlistIds={wishlist}
        onWishlistToggle={handleWishlistToggle}
        onAddToCart={handleAddToCart}
        onOpenQuickView={handleOpenQuickView}
      />

      {/* 21. Section 18 — Comprehensive Enterprise Footer */}
      <EnterpriseFooter />

      {/* Interactive Floating Toast Feedback */}
      {toastMessage && (
        <div className="toast-notice">
          {toastMessage.icon === 'cart' ? (
            <ShoppingBag size={18} color="#C5A059" />
          ) : (
            <Heart size={18} color="#BF8F92" fill="#BF8F92" />
          )}
          <span>{toastMessage.text}</span>
          <CheckCircle2 size={16} color="#16A34A" />
        </div>
      )}

      {/* Quick View Interactive Customization Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={handleCloseQuickView}
          onAddToCart={handleAddToCart}
          isWishlisted={wishlist.has(quickViewProduct.id)}
          onWishlistToggle={handleWishlistToggle}
        />
      )}
    </main>
  );
}
