import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Globe } from 'lucide-react';

export default function Navbar({ language, setLanguage, cartCount, onCartClick, activeSection, scrollToSection, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'shop', label: t.nav.shop },
    { id: 'quiz', label: t.nav.quiz },
    { id: 'instagram', label: t.nav.instagram },
    { id: 'contact', label: t.nav.contact }
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} glass`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <div className="nav-logo" onClick={() => handleNavClick('hero')}>
          <span className="logo-text">{t.brandName}</span>
          <span className="logo-sub">{t.brandSubtitle}</span>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link-btn ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="nav-actions">
          {/* Language Switcher */}
          <button 
            className="lang-toggle" 
            onClick={() => setLanguage(language === 'en' ? 'hy' : 'en')}
            title="Switch Language"
          >
            <Globe size={18} />
            <span className="lang-text">{language === 'en' ? 'HY' : 'EN'}</span>
          </button>

          {/* Cart Icon */}
          <button className="cart-btn" onClick={onCartClick} aria-label="Open Cart">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer glass ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`mobile-nav-link-btn ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button 
              className="mobile-nav-link-btn mobile-lang-btn" 
              onClick={() => {
                setLanguage(language === 'en' ? 'hy' : 'en');
                setMobileMenuOpen(false);
              }}
            >
              <Globe size={18} style={{ marginRight: '8px' }} />
              {language === 'en' ? 'Հայերեն (HY)' : 'English (EN)'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
