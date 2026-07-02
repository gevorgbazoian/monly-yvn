import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { X, Trash2, Plus, Minus, Send, ArrowLeft, CheckCircle } from 'lucide-react';

const BUSINESS_PHONE = '37499123456'; // Easily configurable WhatsApp order target number

export default function Cart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveFromCart, onClearCart, language, t }) {
  const backdropRef = useRef(null);
  const drawerRef = useRef(null);
  const [checkoutMode, setCheckoutMode] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  // Checkout Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    method: 'whatsapp'
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Animate backdrop and drawer
      gsap.to(backdropRef.current, { opacity: 1, visibility: 'visible', duration: 0.3 });
      gsap.fromTo(drawerRef.current, 
        { x: '100%' },
        { x: '0%', duration: 0.4, ease: 'power3.out', delay: 0.05 }
      );
    } else {
      document.body.style.overflow = '';
      if (backdropRef.current) {
        gsap.to(backdropRef.current, { opacity: 0, visibility: 'hidden', duration: 0.3 });
      }
      if (drawerRef.current) {
        gsap.to(drawerRef.current, { x: '100%', duration: 0.3, ease: 'power3.in' });
      }
      // Reset checkout states on close
      setCheckoutMode(false);
      setOrderPlaced(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(drawerRef.current, { 
      x: '100%', 
      duration: 0.35, 
      ease: 'power3.in',
      onComplete: onClose
    });
    gsap.to(backdropRef.current, { 
      opacity: 0, 
      visibility: 'hidden', 
      duration: 0.35 
    });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const subtotal = calculateSubtotal();
    
    // Format order details text
    let orderSummary = `🛍️ *NEW ORDER FROM MONLY WEBSITE*\n`;
    orderSummary += `---------------------------------\n`;
    orderSummary += `👤 *Customer Name:* ${formData.fullName}\n`;
    orderSummary += `📞 *Phone Number:* ${formData.phone}\n`;
    orderSummary += `📍 *Delivery Address:* ${formData.address}\n\n`;
    orderSummary += `📋 *Items Ordered:*\n`;
    
    cartItems.forEach((item) => {
      const name = item.translations[language].name;
      orderSummary += `• ${name} x${item.quantity} - ${(item.price * item.quantity).toLocaleString()} AMD\n`;
    });
    
    orderSummary += `\n💵 *Total Price:* ${subtotal.toLocaleString()} AMD`;

    if (formData.method === 'whatsapp') {
      // Open WhatsApp Web/App
      const encodedText = encodeURIComponent(orderSummary);
      const whatsappUrl = `https://wa.me/${BUSINESS_PHONE}?text=${encodedText}`;
      window.open(whatsappUrl, '_blank');
      
      // Complete order
      onClearCart();
      setOrderPlaced(true);
    } else {
      // Simulated Email/SMS order placement
      onClearCart();
      setOrderPlaced(true);
    }
  };

  return (
    <div 
      className={`cart-backdrop ${isOpen ? 'open' : ''}`} 
      ref={backdropRef}
      onClick={handleClose}
    >
      <div 
        className="cart-drawer glass" 
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="cart-header">
          <h3>{orderPlaced ? t.cart.successTitle : (checkoutMode ? t.cart.formTitle : t.cart.title)}</h3>
          <button className="cart-close-btn" onClick={handleClose} aria-label="Close Cart">
            <X size={20} />
          </button>
        </div>

        {/* Content Container */}
        <div className="cart-content-wrapper">
          {orderPlaced ? (
            /* SUCCESS VIEW */
            <div className="cart-success-view">
              <div className="success-icon-wrapper">
                <CheckCircle size={64} className="success-icon" />
              </div>
              <h4>{t.cart.successTitle}</h4>
              <p>{t.cart.successDesc}</p>
              <button className="btn btn-primary" onClick={handleClose}>
                {t.modal.close}
              </button>
            </div>
          ) : checkoutMode ? (
            /* CHECKOUT FORM VIEW */
            <form className="cart-checkout-form" onSubmit={handleSubmitOrder}>
              <div className="form-group">
                <label htmlFor="fullName">{t.cart.fullName} *</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName"
                  value={formData.fullName} 
                  onChange={handleInputChange} 
                  className="form-control" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t.cart.phone} *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  className="form-control" 
                  placeholder="+374 99 123456"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">{t.cart.address} *</label>
                <textarea 
                  id="address" 
                  name="address"
                  value={formData.address} 
                  onChange={handleInputChange} 
                  className="form-control" 
                  rows="3"
                  required 
                ></textarea>
              </div>

              <div className="form-group">
                <label>{t.cart.methodLabel}</label>
                <div className="method-options">
                  <label className="method-option-label glass">
                    <input 
                      type="radio" 
                      name="method" 
                      value="whatsapp"
                      checked={formData.method === 'whatsapp'} 
                      onChange={handleInputChange} 
                    />
                    <span>{t.cart.methodWhatsapp}</span>
                  </label>
                  <label className="method-option-label glass">
                    <input 
                      type="radio" 
                      name="method" 
                      value="simulated"
                      checked={formData.method === 'simulated'} 
                      onChange={handleInputChange} 
                    />
                    <span>{t.cart.methodSimulated}</span>
                  </label>
                </div>
              </div>

              <div className="cart-footer">
                <div className="cart-subtotal-row">
                  <span>{t.cart.subtotal}:</span>
                  <span className="subtotal-val">{calculateSubtotal().toLocaleString()} {t.shop.currency}</span>
                </div>
                <div className="checkout-actions">
                  <button type="button" className="cart-back-btn" onClick={() => setCheckoutMode(false)}>
                    <ArrowLeft size={16} />
                    {t.cart.backToCart}
                  </button>
                  <button type="submit" className="btn btn-primary checkout-btn-submit">
                    <Send size={16} />
                    {t.cart.placeOrder}
                  </button>
                </div>
              </div>
            </form>
          ) : (
            /* STANDARD CART ITEMS LIST VIEW */
            <>
              {cartItems.length === 0 ? (
                <div className="cart-empty-view">
                  <p>{t.cart.empty}</p>
                </div>
              ) : (
                <div className="cart-items-list">
                  {cartItems.map((item) => {
                    const pt = item.translations[language];
                    return (
                      <div key={item.id} className="cart-item glass">
                        <img src={item.image} alt={pt.name} className="cart-item-img" />
                        
                        <div className="cart-item-details">
                          <h4>{pt.name}</h4>
                          <span className="cart-item-price">
                            {item.price.toLocaleString()} {t.shop.currency}
                          </span>
                          
                          {/* Quantity Controls */}
                          <div className="cart-quantity-controls">
                            <button 
                              className="qty-btn" 
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="qty-val">{item.quantity}</span>
                            <button 
                              className="qty-btn" 
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button 
                          className="cart-remove-btn" 
                          onClick={() => onRemoveFromCart(item.id)}
                          title="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}

              {cartItems.length > 0 && (
                <div className="cart-footer">
                  <div className="cart-subtotal-row">
                    <span>{t.cart.subtotal}:</span>
                    <span className="subtotal-val">{calculateSubtotal().toLocaleString()} {t.shop.currency}</span>
                  </div>
                  <button className="btn btn-primary checkout-trigger-btn" onClick={() => setCheckoutMode(true)}>
                    {t.cart.checkout}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
