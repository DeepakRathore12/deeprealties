import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'general',
    propertyType: '',
    budget: '',
    location: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [typingIndicator, setTypingIndicator] = useState(false);

  // Auto-response messages for chat
  const autoResponses = [
    t('contact.chat.responses.welcome'),
    t('contact.chat.responses.help'),
    t('contact.chat.responses.contact'),
    t('contact.chat.responses.services')
  ];

  useEffect(() => {
    // Add initial welcome message
    if (chatMessages.length === 0) {
      setChatMessages([
        {
          id: 1,
          type: 'bot',
          message: t('contact.chat.welcome'),
          timestamp: new Date()
        }
      ]);
    }
  }, [t]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = t('contact.validation.nameRequired');
    }
    
    if (!formData.email.trim()) {
      errors.email = t('contact.validation.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = t('contact.validation.emailInvalid');
    }
    
    if (!formData.phone.trim()) {
      errors.phone = t('contact.validation.phoneRequired');
    }
    
    if (!formData.message.trim()) {
      errors.message = t('contact.validation.messageRequired');
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'general',
        propertyType: '',
        budget: '',
        location: '',
        message: ''
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;
    
    const userMessage = {
      id: Date.now(),
      type: 'user',
      message: currentMessage,
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setTypingIndicator(true);
    
    // Simulate bot response
    setTimeout(() => {
      const randomResponse = autoResponses[Math.floor(Math.random() * autoResponses.length)];
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        message: randomResponse,
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, botMessage]);
      setTypingIndicator(false);
    }, 1500);
  };

  const getServiceIcon = (serviceType) => {
    const icons = {
      buy: 'fas fa-home',
      sell: 'fas fa-tags',
      rent: 'fas fa-key',
      invest: 'fas fa-chart-line',
      legal: 'fas fa-gavel',
      general: 'fas fa-question-circle'
    };
    return icons[serviceType] || icons.general;
  };

  const getPropertyTypeOptions = () => {
    return [
      { value: '', label: t('contact.form.selectPropertyType') },
      { value: 'residential', label: t('contact.propertyTypes.residential') },
      { value: 'commercial', label: t('contact.propertyTypes.commercial') },
      { value: 'agricultural', label: t('contact.propertyTypes.agricultural') },
      { value: 'industrial', label: t('contact.propertyTypes.industrial') },
      { value: 'land', label: t('contact.propertyTypes.land') }
    ];
  };

  const getBudgetOptions = () => {
    return [
      { value: '', label: t('contact.form.selectBudget') },
      { value: 'under-10lakh', label: t('contact.budgets.under10Lakh') },
      { value: '10-25lakh', label: t('contact.budgets.10to25Lakh') },
      { value: '25-50lakh', label: t('contact.budgets.25to50Lakh') },
      { value: '50lakh-1cr', label: t('contact.budgets.50LakhTo1Cr') },
      { value: 'above-1cr', label: t('contact.budgets.above1Cr') }
    ];
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="contact-hero-content">
            <div className="hero-badge">
              <span>📞 {t('contact.heroBadge')}</span>
            </div>
            <h1>{t('contact.title')}</h1>
            <p>{t('contact.subtitle')}</p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">{t('contact.stats.support')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15min</div>
                <div className="stat-label">{t('contact.stats.response')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">{t('contact.stats.satisfaction')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tabs Section */}
      <section className="service-tabs-section">
        <div className="container">
          <div className="service-tabs">
            <button 
              className={`service-tab ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              <div className="tab-icon">
                <i className="fas fa-question-circle"></i>
              </div>
              <div className="tab-content">
                <h3>{t('contact.serviceTabs.general.title')}</h3>
                <p>{t('contact.serviceTabs.general.description')}</p>
              </div>
            </button>
            
            <button 
              className={`service-tab ${activeTab === 'buy' ? 'active' : ''}`}
              onClick={() => setActiveTab('buy')}
            >
              <div className="tab-icon">
                <i className="fas fa-home"></i>
              </div>
              <div className="tab-content">
                <h3>{t('contact.serviceTabs.buy.title')}</h3>
                <p>{t('contact.serviceTabs.buy.description')}</p>
              </div>
            </button>
            
            <button 
              className={`service-tab ${activeTab === 'sell' ? 'active' : ''}`}
              onClick={() => setActiveTab('sell')}
            >
              <div className="tab-icon">
                <i className="fas fa-tags"></i>
              </div>
              <div className="tab-content">
                <h3>{t('contact.serviceTabs.sell.title')}</h3>
                <p>{t('contact.serviceTabs.sell.description')}</p>
              </div>
            </button>
            
            <button 
              className={`service-tab ${activeTab === 'rent' ? 'active' : ''}`}
              onClick={() => setActiveTab('rent')}
            >
              <div className="tab-icon">
                <i className="fas fa-key"></i>
              </div>
              <div className="tab-content">
                <h3>{t('contact.serviceTabs.rent.title')}</h3>
                <p>{t('contact.serviceTabs.rent.description')}</p>
              </div>
            </button>
            
            <button 
              className={`service-tab ${activeTab === 'invest' ? 'active' : ''}`}
              onClick={() => setActiveTab('invest')}
            >
              <div className="tab-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="tab-content">
                <h3>{t('contact.serviceTabs.invest.title')}</h3>
                <p>{t('contact.serviceTabs.invest.description')}</p>
              </div>
            </button>
            
            <button 
              className={`service-tab ${activeTab === 'legal' ? 'active' : ''}`}
              onClick={() => setActiveTab('legal')}
            >
              <div className="tab-icon">
                <i className="fas fa-gavel"></i>
              </div>
              <div className="tab-content">
                <h3>{t('contact.serviceTabs.legal.title')}</h3>
                <p>{t('contact.serviceTabs.legal.description')}</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-container">
              <div className="form-header">
                <div className="service-indicator">
                  <i className={getServiceIcon(activeTab)}></i>
                  <span>{t(`contact.serviceTabs.${activeTab}.title`)}</span>
                </div>
                <h2>{t('contact.form.title')}</h2>
                <p>{t('contact.form.description')}</p>
              </div>
              
              {submitSuccess ? (
                <div className="success-message">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>{t('contact.form.success.title')}</h3>
                  <p>{t('contact.form.success.description')}</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">{t('contact.form.name')} *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.namePlaceholder')}
                        className={formErrors.name ? 'error' : ''}
                      />
                      {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">{t('contact.form.email')} *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.emailPlaceholder')}
                        className={formErrors.email ? 'error' : ''}
                      />
                      {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">{t('contact.form.phone')} *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.phonePlaceholder')}
                        className={formErrors.phone ? 'error' : ''}
                      />
                      {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="location">{t('contact.form.location')}</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.locationPlaceholder')}
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="propertyType">{t('contact.form.propertyType')}</label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                      >
                        {getPropertyTypeOptions().map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="budget">{t('contact.form.budget')}</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                      >
                        {getBudgetOptions().map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">{t('contact.form.message')} *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows="5"
                      className={formErrors.message ? 'error' : ''}
                    ></textarea>
                    {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                  </div>
                  
                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        {t('contact.form.submitting')}
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        {t('contact.form.submit')}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            <div className="contact-info-container">
              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-content">
                    <h3>{t('contact.info.address.title')}</h3>
                    <p>{t('contact.info.address.text')}</p>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="info-content">
                    <h3>{t('contact.info.phone.title')}</h3>
                    <p>{t('infoBar.phone')}</p>
                    <span className="availability">{t('contact.info.phone.availability')}</span>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info-content">
                    <h3>{t('contact.info.email.title')}</h3>
                    <p>{t('infoBar.email')}</p>
                    <span className="availability">{t('contact.info.email.availability')}</span>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="info-content">
                    <h3>{t('contact.info.hours.title')}</h3>
                    <p>{t('contact.info.hours.text')}</p>
                  </div>
                </div>
              </div>
              
              <div className="emergency-contact">
                <div className="emergency-header">
                  <i className="fas fa-exclamation-triangle"></i>
                  <h3>{t('contact.emergency.title')}</h3>
                </div>
                <p>{t('contact.emergency.description')}</p>
                <div className="emergency-phone">
                  <i className="fas fa-phone"></i>
                  <span>{t('infoBar.phone')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat Widget */}
      <div className={`chat-widget ${chatOpen ? 'open' : ''}`}>
        <div className="chat-header" onClick={() => setChatOpen(!chatOpen)}>
          <div className="chat-title">
            <i className="fas fa-comments"></i>
            <span>{t('contact.chat.title')}</span>
          </div>
          <div className="chat-status">
            <span className="status-dot"></span>
            {t('contact.chat.online')}
          </div>
        </div>
        
        {chatOpen && (
          <div className="chat-body">
            <div className="chat-messages">
              {chatMessages.map(msg => (
                <div key={msg.id} className={`chat-message ${msg.type}`}>
                  <div className="message-content">
                    {msg.message}
                  </div>
                  <div className="message-time">
                    {msg.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              ))}
              {typingIndicator && (
                <div className="chat-message bot typing">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>
            
            <form className="chat-input" onSubmit={handleChatSubmit}>
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder={t('contact.chat.placeholder')}
              />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h2>{t('contact.faq.title')}</h2>
            <p>{t('contact.faq.description')}</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question">
                <i className="fas fa-question-circle"></i>
                <h3>{t('contact.faq.q1.question')}</h3>
              </div>
              <p>{t('contact.faq.q1.answer')}</p>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <i className="fas fa-question-circle"></i>
                <h3>{t('contact.faq.q2.question')}</h3>
              </div>
              <p>{t('contact.faq.q2.answer')}</p>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <i className="fas fa-question-circle"></i>
                <h3>{t('contact.faq.q3.question')}</h3>
              </div>
              <p>{t('contact.faq.q3.answer')}</p>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <i className="fas fa-question-circle"></i>
                <h3>{t('contact.faq.q4.question')}</h3>
              </div>
              <p>{t('contact.faq.q4.answer')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 