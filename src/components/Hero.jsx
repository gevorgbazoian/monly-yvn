import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero({ onShopClick, onQuizClick, t }) {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const sloganRef = useRef(null);
  const quoteRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    // Reveal background
    gsap.fromTo(bgRef.current, 
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.6, ease: 'power2.out' }
    );

    // Stagger reveal text elements
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(sloganRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
    )
    .fromTo(titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(quoteRef.current,
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(ctaRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
      '-=0.3'
    );
  }, { scope: containerRef });

  return (
    <header id="hero" className="hero-section" ref={containerRef}>
      {/* Background Image Container */}
      <div 
        className="hero-bg" 
        ref={bgRef} 
        style={{ backgroundImage: `url('/monly_hero.png')` }}
      >
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text-wrapper">
          {/* Subtle Tagline */}
          <div className="hero-pre-title" ref={sloganRef}>
            <Sparkles size={16} className="sparkle-icon" />
            <span>{t.hero.slogan}</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title" ref={titleRef}>
            {t.brandName}
          </h1>

          {/* Marilyn Monroe Quote */}
          <div className="hero-quote-box" ref={quoteRef}>
            <p className="hero-quote">{t.hero.quote}</p>
            <p className="hero-quote-author">{t.hero.quoteAuthor}</p>
          </div>

          {/* Call to Actions */}
          <div className="hero-ctas" ref={ctaRef}>
            <button className="btn btn-primary" onClick={onShopClick}>
              {t.hero.ctaShop}
              <ArrowRight size={16} />
            </button>
            <button className="btn btn-secondary glass" onClick={onQuizClick}>
              {t.hero.ctaQuiz}
            </button>
          </div>
        </div>
      </div>

      {/* Aesthetic Bottom Wave/Transition */}
      <div className="hero-bottom-curve">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,96 C280,128 560,128 840,96 C1120,64 1280,32 1440,64 L1440,120 L0,120 Z" 
            fill="var(--bg-primary)"
          />
        </svg>
      </div>
    </header>
  );
}
