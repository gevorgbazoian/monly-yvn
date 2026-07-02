import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, ShoppingCart, Info, Sparkles, HelpCircle } from 'lucide-react';

export default function ProductModal({ product, isOpen, onClose, onAddToCart, language, t }) {
  const backdropRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen && product) {
      document.body.style.overflow = 'hidden';
      // GSAP Animations
      gsap.to(backdropRef.current, { opacity: 1, visibility: 'visible', duration: 0.3 });
      gsap.fromTo(modalRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.1 }
      );
    } else {
      document.body.style.overflow = '';
      if (backdropRef.current) {
        gsap.to(backdropRef.current, { opacity: 0, visibility: 'hidden', duration: 0.3 });
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, product]);

  if (!product) return null;
  const pt = product.translations[language];

  const handleClose = () => {
    gsap.to(modalRef.current, { 
      y: 30, 
      opacity: 0, 
      duration: 0.3, 
      ease: 'power2.in',
      onComplete: onClose
    });
  };

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div 
      className={`modal-backdrop ${isOpen ? 'open' : ''}`} 
      ref={backdropRef}
      onClick={handleClose}
    >
      <div 
        className="product-modal glass" 
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="modal-close-btn" onClick={handleClose} aria-label={t.modal.close}>
          <X size={20} />
        </button>

        <div className="modal-grid">
          {/* Product Image */}
          <div className="modal-image-col">
            <img src={product.image} alt={pt.name} className="modal-product-img" />
          </div>

          {/* Product Details */}
          <div className="modal-info-col">
            <span className="modal-category">
              {product.category === 'skincare' ? t.shop.filterSkincare : t.shop.filterCosmetics}
            </span>
            <h2 className="modal-title">{pt.name}</h2>
            <p className="modal-tagline">{pt.tagline}</p>
            
            <span className="modal-price">
              {product.price.toLocaleString()} <span className="currency">{t.shop.currency}</span>
            </span>

            <p className="modal-description">{pt.description}</p>

            {/* Collapsible/Sections */}
            <div className="modal-sections">
              <div className="modal-section">
                <div className="modal-section-title">
                  <Sparkles size={16} />
                  <h4>{t.modal.benefits}</h4>
                </div>
                <p>{pt.tagline}</p>
              </div>

              <div className="modal-section">
                <div className="modal-section-title">
                  <Info size={16} />
                  <h4>{t.modal.ingredients}</h4>
                </div>
                <p className="ingredients-list">{pt.ingredients}</p>
              </div>

              <div className="modal-section">
                <div className="modal-section-title">
                  <HelpCircle size={16} />
                  <h4>{t.modal.usage}</h4>
                </div>
                <p>{pt.usage}</p>
              </div>
            </div>

            {/* Add to Cart button */}
            <button className="btn btn-primary modal-add-btn" onClick={handleAddToCart}>
              <ShoppingCart size={18} />
              {t.modal.addToCart}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
