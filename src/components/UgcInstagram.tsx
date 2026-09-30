'use client';

import React from 'react';
import { Heart } from 'lucide-react';

const InstagramIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function UgcInstagram() {
  const posts = [
    {
      id: 'ugc-1',
      handle: '@ananya_stylefile',
      image: '/images/bride-insta-1.jpg',
      likes: '1,420',
      tag: '#VeeCoutureWomen',
    },
    {
      id: 'ugc-2',
      handle: '@tanya_sharma_',
      image: '/images/bride-insta-2.jpg',
      likes: '984',
      tag: '#EffortlessLuxury',
    },
    {
      id: 'ugc-3',
      handle: '@diya.kapoor',
      image: '/images/bride-insta-3.jpg',
      likes: '2,310',
      tag: '#LinenStyle',
    },
    {
      id: 'ugc-4',
      handle: '@rhea_mehta',
      image: '/images/bride-insta-4.jpg',
      likes: '1,850',
      tag: '#AtelierSilks',
    },
    {
      id: 'ugc-5',
      handle: '@sonali_vogue',
      image: '/images/bride-insta-5.jpg',
      likes: '1,120',
      tag: '#VeeMoments',
    },
  ];

  return (
    <section className="section ugc-section" id="ugc">
      <div className="container">
        {/* Header */}
        <div className="section-header-center">
          <div className="ugc-insta-tag">
            <InstagramIcon size={15} color="#E11D74" />
            <span>INSTAGRAM COMMUNITY</span>
          </div>
          <h2 className="section-title">AS SEEN ON YOU</h2>
          <p className="ugc-tagline">
            Tag <strong>@veecouture</strong> and use <strong>#VeeCoutureWomen</strong> on Instagram to be featured in our seasonal gallery.
          </p>
        </div>

        {/* 5-Column UGC Image Grid */}
        <div className="ugc-grid">
          {posts.map((post) => (
            <div className="ugc-item-card" key={post.id}>
              <img src={post.image} alt={post.handle} className="ugc-img" />
              <div className="ugc-hover-overlay">
                <InstagramIcon size={24} color="#FFFFFF" />
                <span className="ugc-handle">{post.handle}</span>
                <span className="ugc-tag-pill">{post.tag}</span>
                <div className="ugc-likes-row">
                  <Heart size={14} fill="#FFFFFF" color="#FFFFFF" />
                  <span>{post.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
