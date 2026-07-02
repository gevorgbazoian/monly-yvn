import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products } from '../data/translations';
import { Eye, Plus, ShoppingCart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Shop({ language, onAddToCart, onQuickView, addedItems, t }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const gridRef = useRef(null);
  const sectionRef = useRef(null);

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  useGSAP(() => {
    // Fade in title on scroll
    gsap.fromTo('.shop-title-wrapper', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      }
    );

    // Grid entrance animation
    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children,
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          }
        }
      );
    }
  }, [activeFilter]); // Trigger animation when filter changes

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section id="shop" className="shop-section" ref={sectionRef}>
      <div className="container">
        {/* Title */}
        <div className="shop-title-wrapper">
          <h2>{t.shop.title}</h2>
        </div>

        {/* Filter Navigation */}
        <div className="shop-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            {t.shop.filterAll}
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'skincare' ? 'active' : ''}`}
            onClick={() => handleFilterClick('skincare')}
          >
            {t.shop.filterSkincare}
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'cosmetics' ? 'active' : ''}`}
            onClick={() => handleFilterClick('cosmetics')}
          >
            {t.shop.filterCosmetics}
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid-3 shop-grid" ref={gridRef}>
          {filteredProducts.map((product) => {
            const pt = product.translations[language];
            const isAdded = addedItems[product.id];
            
            return (
              <div key={product.id} className="product-card glass">
                <div className="product-image-container">
                  <img src={product.image} alt={pt.name} className="product-img" />
                  
                  {/* Action Overlays */}
                  <div className="product-overlay">
                    <button 
                      className="overlay-btn view-btn"
                      onClick={() => onQuickView(product)}
                      title={t.shop.quickView}
                    >
                      <Eye size={18} />
                    </button>
                    <button 
                      className="overlay-btn add-btn"
                      onClick={() => onAddToCart(product)}
                      title={t.shop.addToCart}
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                <div className="product-info">
                  <span className="product-category">{product.category === 'skincare' ? t.shop.filterSkincare : t.shop.filterCosmetics}</span>
                  <h3 className="product-name" onClick={() => onQuickView(product)}>{pt.name}</h3>
                  <p className="product-tagline">{pt.tagline}</p>
                  
                  <div className="product-footer">
                    <span className="product-price">
                      {product.price.toLocaleString()} <span className="currency">{t.shop.currency}</span>
                    </span>
                    
                    <button 
                      className={`card-add-btn ${isAdded ? 'added' : ''}`}
                      onClick={() => onAddToCart(product)}
                    >
                      <ShoppingCart size={16} />
                      {isAdded ? t.shop.added : t.shop.addToCart}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
