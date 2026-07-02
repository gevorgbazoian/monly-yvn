import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Instagram, Facebook } from './SocialIcons';

export default function Footer({ scrollToSection, t }) {
  return (
    <footer className="footer glass">
      <div className="container footer-container">
        
        {/* Brand Info */}
        <div className="footer-col brand-col">
          <h3 className="footer-logo">{t.brandName}</h3>
          <p className="footer-desc">{t.footer.aboutText}</p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/monly.yvn" target="_blank" rel="noopener noreferrer" className="social-icon-btn glass">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn glass">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col links-col">
          <h4>{t.footer.quickLinks}</h4>
          <ul className="footer-links">
            <li><button onClick={() => scrollToSection('hero')}>{t.nav.home}</button></li>
            <li><button onClick={() => scrollToSection('about')}>{t.nav.about}</button></li>
            <li><button onClick={() => scrollToSection('shop')}>{t.nav.shop}</button></li>
            <li><button onClick={() => scrollToSection('quiz')}>{t.nav.quiz}</button></li>
            <li><button onClick={() => scrollToSection('instagram')}>{t.nav.instagram}</button></li>
            <li><button onClick={() => scrollToSection('contact')}>{t.nav.contact}</button></li>
          </ul>
        </div>

        {/* Dynamic Back to Top */}
        <div className="footer-col back-to-top-col">
          <button className="back-to-top-btn glass" onClick={() => scrollToSection('hero')}>
            <ArrowUp size={20} />
          </button>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
