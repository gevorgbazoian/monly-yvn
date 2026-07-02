import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Mail, MapPin, Clock, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact({ t }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    skinNotes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Reveal header
    gsap.fromTo('.contact-header > *', 
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

    // Reveal grid columns
    gsap.fromTo('.contact-col',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-grid',
          start: 'top 85%'
        }
      }
    );
  }, { scope: sectionRef });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setSubmitted(true);
    setFormData({ fullName: '', email: '', skinNotes: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        
        {/* Header */}
        <div className="contact-header">
          <h2>{t.contact.title}</h2>
          <p className="contact-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="grid-2 contact-grid">
          {/* Column 1: Info */}
          <div className="contact-col contact-info-col">
            <div className="contact-info-card glass">
              
              <div className="contact-info-item">
                <div className="contact-info-icon gold-accent">
                  <MapPin size={22} />
                </div>
                <div className="contact-info-text">
                  <h4>{t.contact.locationTitle}</h4>
                  <p>{t.contact.locationDesc}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon gold-accent">
                  <Clock size={22} />
                </div>
                <div className="contact-info-text">
                  <h4>{t.contact.hoursTitle}</h4>
                  <p>{t.contact.hoursDesc}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon gold-accent">
                  <Mail size={22} />
                </div>
                <div className="contact-info-text">
                  <h4>Email</h4>
                  <p>support@monly-yvn.com</p>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Booking Form */}
          <div className="contact-col contact-form-col">
            <div className="contact-form-card glass">
              {submitted ? (
                <div className="booking-success">
                  <div className="booking-success-icon-wrapper">
                    <Check size={28} />
                  </div>
                  <p>{t.contact.successMsg}</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="contact-fullName">{t.contact.fullName} *</label>
                    <input 
                      type="text" 
                      id="contact-fullName" 
                      name="fullName" 
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="form-control" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">{t.contact.email} *</label>
                    <input 
                      type="email" 
                      id="contact-email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-skinNotes">{t.contact.skinNotes} *</label>
                    <textarea 
                      id="contact-skinNotes" 
                      name="skinNotes" 
                      value={formData.skinNotes}
                      onChange={handleInputChange}
                      className="form-control" 
                      rows="4" 
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary contact-submit-btn">
                    <Calendar size={16} />
                    {t.contact.bookBtn}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
