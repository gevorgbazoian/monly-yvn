import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, ShieldCheck, Leaf } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About({ t }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    // Fade in section title and subtitle
    gsap.fromTo('.about-header > *', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );

    // Stagger slide up cards
    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
          }
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="about-header">
          <h2>{t.about.title}</h2>
          <p className="about-subtitle">{t.about.subtitle}</p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid-3 about-grid" ref={cardsRef}>
          {/* Card 1: Organic */}
          <div className="about-card glass">
            <div className="about-icon-wrapper gold-accent">
              <Leaf size={28} />
            </div>
            <h3>{t.about.card1Title}</h3>
            <p>{t.about.card1Desc}</p>
          </div>

          {/* Card 2: Dermatologist Tested */}
          <div className="about-card glass">
            <div className="about-icon-wrapper gold-accent">
              <ShieldCheck size={28} />
            </div>
            <h3>{t.about.card2Title}</h3>
            <p>{t.about.card2Desc}</p>
          </div>

          {/* Card 3: Cruelty-Free */}
          <div className="about-card glass">
            <div className="about-icon-wrapper gold-accent">
              <Heart size={28} />
            </div>
            <h3>{t.about.card3Title}</h3>
            <p>{t.about.card3Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
