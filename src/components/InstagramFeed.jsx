import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { Instagram } from './SocialIcons';

gsap.registerPlugin(ScrollTrigger);

export default function InstagramFeed({ t }) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const feedImages = [
    { id: 1, image: '/monly_hero.png', likes: '1.2k', comments: 45 },
    { id: 2, image: '/monly_serum.png', likes: 890, comments: 23 },
    { id: 3, image: '/monly_liptint.png', likes: 654, comments: 19 },
    { id: 4, image: '/monly_cream.png', likes: 980, comments: 38 },
    { id: 5, image: '/monly_serum.png', likes: 720, comments: 14 },
    { id: 6, image: '/monly_liptint.png', likes: '1.1k', comments: 52 }
  ];

  useGSAP(() => {
    // Fade in title on scroll
    gsap.fromTo('.instagram-header > *', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      }
    );

    // Stagger show feed items
    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children,
        { scale: 0.9, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%'
          }
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section id="instagram" className="instagram-section" ref={sectionRef}>
      <div className="container">
        
        {/* Header */}
        <div className="instagram-header">
          <h2>{t.instagram.title}</h2>
          <div className="insta-stats glass">
            <span className="stat-item"><strong>58</strong> posts</span>
            <span className="stat-item"><strong>5,215</strong> followers</span>
            <span className="stat-item"><strong>12</strong> following</span>
          </div>
          <p className="insta-subtitle">{t.instagram.subtitle}</p>
        </div>

        {/* Feed Grid */}
        <div className="grid-3 instagram-grid" ref={gridRef}>
          {feedImages.map((post) => (
            <a 
              key={post.id} 
              href="https://www.instagram.com/monly.yvn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagram-item glass"
            >
              <img src={post.image} alt="Monly Skincare Post" className="instagram-img" />
              
              {/* Interaction Overlay */}
              <div className="instagram-overlay">
                <div className="insta-interaction">
                  <span className="insta-interaction-item">
                    <Heart size={20} fill="white" /> {post.likes}
                  </span>
                  <span className="insta-interaction-item">
                    <MessageCircle size={20} fill="white" /> {post.comments}
                  </span>
                </div>
                <div className="instagram-profile-hover">
                  <Instagram size={20} />
                  <span>@monly.yvn</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View Instagram Button */}
        <div className="instagram-cta-container">
          <a 
            href="https://www.instagram.com/monly.yvn" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary instagram-cta-btn glass"
          >
            <Instagram size={18} />
            {t.instagram.follow}
            <ExternalLink size={14} style={{ marginLeft: '4px' }} />
          </a>
        </div>

      </div>
    </section>
  );
}
