import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Sparkles, ArrowRight, ArrowLeft, RefreshCw, ShoppingCart, Check } from 'lucide-react';
import { products } from '../data/translations';

export default function RoutineQuiz({ language, onAddMultipleToCart, t }) {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [bundleAdded, setBundleAdded] = useState(false);

  const containerRef = useRef(null);
  const cardRef = useRef(null);

  const questions = t.quiz.questions;

  const handleStart = () => {
    gsap.to(cardRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      onComplete: () => {
        setStarted(true);
        setCurrentStep(0);
        setAnswers({});
        setShowResult(false);
        setBundleAdded(false);
        gsap.fromTo(cardRef.current, 
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.2)' }
        );
      }
    });
  };

  const handleOptionSelect = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const transitionToStep = (nextStep, isResult = false) => {
    // Determine animation direction
    const slideOutX = nextStep > currentStep ? -50 : 50;
    const slideInX = nextStep > currentStep ? 50 : -50;

    gsap.timeline()
      .to(cardRef.current, { x: slideOutX, opacity: 0, duration: 0.25, ease: 'power2.in' })
      .call(() => {
        if (isResult) {
          setShowResult(true);
        } else {
          setCurrentStep(nextStep);
        }
      })
      .fromTo(cardRef.current, 
        { x: slideInX, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.35, ease: 'power2.out' }
      );
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      transitionToStep(currentStep + 1);
    } else {
      transitionToStep(null, true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      transitionToStep(currentStep - 1);
    } else {
      gsap.to(cardRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        onComplete: () => {
          setStarted(false);
          gsap.fromTo(cardRef.current, 
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
          );
        }
      });
    }
  };

  // Algorithm to calculate recommended products
  const getRecommendedProducts = () => {
    // Step 1: Always Cleanser (ID 4)
    const cleanser = products.find(p => p.id === 4);
    // Step 2: Always Serum (ID 1)
    const treatment = products.find(p => p.id === 1);
    
    // Step 3: Moisturizer based on texture preference
    // Light texture -> Peptide Renewal Cream (ID 3)
    // Rich texture -> Ceramide Barrier Balm (ID 6)
    const moisturizerId = answers.texture === 'light' ? 3 : 6;
    const moisturizer = products.find(p => p.id === moisturizerId);

    return [cleanser, treatment, moisturizer].filter(Boolean);
  };

  const recommendedItems = showResult ? getRecommendedProducts() : [];
  const originalPriceSum = recommendedItems.reduce((acc, item) => acc + item.price, 0);
  const bundlePrice = Math.round(originalPriceSum * 0.85); // 15% discount

  const handleAddBundleToCart = () => {
    onAddMultipleToCart(recommendedItems);
    setBundleAdded(true);
    setTimeout(() => setBundleAdded(false), 3000);
  };

  return (
    <section id="quiz" className="quiz-section" ref={containerRef}>
      <div className="container quiz-container">
        <h2>{t.quiz.title}</h2>

        <div className="quiz-card-wrapper">
          <div className="quiz-card glass" ref={cardRef}>
            
            {/* Intro View */}
            {!started && !showResult && (
              <div className="quiz-intro">
                <div className="quiz-icon-header gold-accent">
                  <Sparkles size={36} />
                </div>
                <h3>{t.quiz.introTitle}</h3>
                <p>{t.quiz.introDesc}</p>
                <button className="btn btn-primary" onClick={handleStart}>
                  {t.quiz.start}
                  <ArrowRight size={16} />
                </button>
              </div>
            )}

            {/* Questions View */}
            {started && !showResult && (
              <div className="quiz-question-flow">
                <span className="quiz-step-indicator">
                  {t.quiz.step} {currentStep + 1} / {questions.length}
                </span>

                <h3 className="quiz-question-text">{questions[currentStep].text}</h3>

                <div className="quiz-options">
                  {questions[currentStep].options.map((opt) => {
                    const isSelected = answers[questions[currentStep].id] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        className={`quiz-option-btn glass ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleOptionSelect(questions[currentStep].id, opt.value)}
                      >
                        <span className="option-radio"></span>
                        <span className="option-label">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="quiz-nav-btns">
                  <button className="quiz-back-btn" onClick={handlePrev}>
                    <ArrowLeft size={16} />
                    {t.quiz.prev}
                  </button>

                  <button 
                    className="btn btn-primary quiz-next-btn"
                    onClick={handleNext}
                    disabled={!answers[questions[currentStep].id]}
                  >
                    {currentStep === questions.length - 1 ? t.nav.quiz : t.quiz.next}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Results View */}
            {showResult && (
              <div className="quiz-results">
                <h3>{t.quiz.resultTitle}</h3>
                <p>{t.quiz.resultDesc}</p>

                {/* Recommended products row */}
                <div className="quiz-results-grid">
                  {recommendedItems.map((item, idx) => {
                    const pt = item.translations[language];
                    return (
                      <div key={item.id} className="quiz-result-item glass">
                        <span className="result-step-tag">Step {idx + 1}</span>
                        <img src={item.image} alt={pt.name} className="result-item-img" />
                        <h4>{pt.name}</h4>
                        <span className="result-item-price">
                          {item.price.toLocaleString()} {t.shop.currency}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Bundle pricing details */}
                <div className="quiz-bundle-box glass">
                  <div className="bundle-pricing-row">
                    <span className="original-price-label">{t.quiz.originalPrice}:</span>
                    <span className="original-price-value">{originalPriceSum.toLocaleString()} {t.shop.currency}</span>
                  </div>
                  <div className="bundle-pricing-row discount-highlight">
                    <span className="bundle-price-label">{t.quiz.packagePrice}:</span>
                    <span className="bundle-price-value">{bundlePrice.toLocaleString()} {t.shop.currency}</span>
                  </div>

                  <div className="bundle-actions">
                    <button 
                      className={`btn btn-gold bundle-add-btn ${bundleAdded ? 'added' : ''}`}
                      onClick={handleAddBundleToCart}
                      disabled={bundleAdded}
                    >
                      {bundleAdded ? <Check size={18} /> : <ShoppingCart size={18} />}
                      {bundleAdded ? t.shop.added : t.quiz.addBundle}
                    </button>
                    <button className="quiz-restart-btn" onClick={handleStart}>
                      <RefreshCw size={16} />
                      {t.quiz.restart}
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
