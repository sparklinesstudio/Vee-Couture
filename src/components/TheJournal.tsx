'use client';

import React from 'react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { JOURNAL_POSTS } from '@/data/fashionData';

export default function TheJournal() {
  return (
    <section className="section journal-section" id="journal">
      <div className="container">
        {/* Header */}
        <div className="section-header-flex">
          <div>
            <span className="section-eyebrow">STORIES &amp; CURATION</span>
            <h2 className="section-title">THE JOURNAL</h2>
          </div>
          <a href="#journal" className="view-all-link">
            <span>EXPLORE THE JOURNAL</span>
            <ArrowRight size={15} />
          </a>
        </div>

        {/* 4 Journal Cards Grid */}
        <div className="journal-grid">
          {JOURNAL_POSTS.map((post) => (
            <article className="journal-card" key={post.id}>
              <div className="journal-img-box">
                <img src={post.image} alt={post.title} className="journal-img" />
              </div>
              <div className="journal-content">
                <div className="journal-meta">
                  <span className="journal-category-text">{post.category}</span>
                  <span className="journal-dot">·</span>
                  <span className="journal-date">{post.date}</span>
                  <span className="journal-dot">·</span>
                  <span className="journal-readtime">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </span>
                </div>
                <h3 className="journal-card-title">
                  <a href="#journal">{post.title}</a>
                </h3>
                <a href="#journal" className="journal-read-link">
                  <span>READ STORY</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
