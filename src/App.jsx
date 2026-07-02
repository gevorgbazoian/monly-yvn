import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Shop from './components/Shop';
import ProductModal from './components/ProductModal';
import RoutineQuiz from './components/RoutineQuiz';
import Cart from './components/Cart';
import InstagramFeed from './components/InstagramFeed';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './data/translations';

export default function App() {
  const [language, setLanguage] = useState('hy'); // Default to Armenian for local market feel
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [addedItems, setAddedItems] = useState({});
  const [activeSection, setActiveSection] = useState('hero');

  // Load translations based on active language
  const t = translations[language];

  // Scroll monitoring to highlight active navigation link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'shop', 'quiz', 'instagram', 'contact'];
      const scrollPos = window.scrollY + 120; // offset for nav header

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // Cart Functions
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    // Provide visual card button feedback
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const handleAddMultipleToCart = (productsList) => {
    setCart((prev) => {
      let updatedCart = [...prev];
      productsList.forEach((product) => {
        const existing = updatedCart.find((item) => item.id === product.id);
        if (existing) {
          updatedCart = updatedCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          updatedCart.push({ ...product, quantity: 1 });
        }
      });
      return updatedCart;
    });
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Modal Functions
  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const getCartCount = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <div className="app-root">
      {/* Navigation Header */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        cartCount={getCartCount()}
        onCartClick={() => setCartOpen(true)}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        t={t}
      />

      {/* Hero Section */}
      <Hero
        onShopClick={() => scrollToSection('shop')}
        onQuizClick={() => scrollToSection('quiz')}
        t={t}
      />

      {/* About Section */}
      <About t={t} />

      {/* Shop Catalog Section */}
      <Shop
        language={language}
        onAddToCart={handleAddToCart}
        onQuickView={handleQuickView}
        addedItems={addedItems}
        t={t}
      />

      {/* Skincare Routine Finder Quiz */}
      <RoutineQuiz
        language={language}
        onAddMultipleToCart={handleAddMultipleToCart}
        t={t}
      />

      {/* Instagram Feed / Gallery */}
      <InstagramFeed t={t} />

      {/* Consultation Contact Booking */}
      <Contact t={t} />

      {/* Footer */}
      <Footer
        scrollToSection={scrollToSection}
        t={t}
      />

      {/* Slide-out Cart Drawer Overlay */}
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
        language={language}
        t={t}
      />

      {/* Product Details Modal Overlay */}
      <ProductModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
        language={language}
        t={t}
      />
    </div>
  );
}
