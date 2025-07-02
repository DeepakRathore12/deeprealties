import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Testimonials.css';

const Testimonials = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: t('testimonials.client1.name'),
      location: t('testimonials.client1.location'),
      text: t('testimonials.client1.text'),
      rating: 5,
      serviceType: 'buy', // buy, sell, rent
      propertyType: 'residential',
      image: 'client1',
      featured: true,
      verified: true,
      date: '2024-01-15'
    },
    {
      id: 2,
      name: t('testimonials.client2.name'),
      location: t('testimonials.client2.location'),
      text: t('testimonials.client2.text'),
      rating: 5,
      serviceType: 'sell',
      propertyType: 'commercial',
      image: 'client2',
      featured: false,
      verified: true,
      date: '2024-01-10'
    },
    {
      id: 3,
      name: t('testimonials.client3.name'),
      location: t('testimonials.client3.location'),
      text: t('testimonials.client3.text'),
      rating: 5,
      serviceType: 'buy',
      propertyType: 'investment',
      image: 'client3',
      featured: true,
      verified: true,
      date: '2024-01-08'
    },
    {
      id: 4,
      name: t('testimonials.client4.name'),
      location: t('testimonials.client4.location'),
      text: t('testimonials.client4.text'),
      rating: 5,
      serviceType: 'rent',
      propertyType: 'residential',
      image: 'client4',
      featured: false,
      verified: true,
      date: '2024-01-05'
    },
    {
      id: 5,
      name: t('testimonials.client5.name'),
      location: t('testimonials.client5.location'),
      text: t('testimonials.client5.text'),
      rating: 5,
      serviceType: 'sell',
      propertyType: 'residential',
      image: 'client5',
      featured: false,
      verified: true,
      date: '2024-01-03'
    },
    {
      id: 6,
      name: t('testimonials.client6.name'),
      location: t('testimonials.client6.location'),
      text: t('testimonials.client6.text'),
      rating: 5,
      serviceType: 'rent',
      propertyType: 'commercial',
      image: 'client6',
      featured: true,
      verified: true,
      date: '2024-01-01'
    }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => {
    return activeTab === 'all' || testimonial.serviceType === activeTab;
  });

  const getServiceStats = (serviceType) => {
    const count = testimonials.filter(t => serviceType === 'all' || t.serviceType === serviceType).length;
    return count;
  };

  const getAverageRating = (serviceType) => {
    const filtered = testimonials.filter(t => serviceType === 'all' || t.serviceType === serviceType);
    const totalRating = filtered.reduce((sum, t) => sum + t.rating, 0);
    return filtered.length > 0 ? (totalRating / filtered.length).toFixed(1) : '0.0';
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`fas fa-star ${index < rating ? 'filled' : ''}`}
      ></i>
    ));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="testimonials">
      {/* Hero Section */}
      <section className="testimonials-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="testimonials-hero-content">
            <div className="hero-badge">
              <span>⭐ {t('testimonials.heroBadge')}</span>
            </div>
            <h1>{t('testimonials.title')}</h1>
            <p>{t('testimonials.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Service Tabs Section */}
      <section className="service-tabs-section">
        <div className="container">
          <div className="service-tabs">
            <button 
              className={`service-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              <div className="tab-icon">
                <i className="fas fa-th-large"></i>
              </div>
              <div className="tab-content">
                <h3>{t('testimonials.serviceTabs.all.title')}</h3>
                <p>{t('testimonials.serviceTabs.all.description')}</p>
                <span className="count">{getServiceStats('all')} {t('testimonials.reviews')}</span>
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
                <h3>{t('testimonials.serviceTabs.buy.title')}</h3>
                <p>{t('testimonials.serviceTabs.buy.description')}</p>
                <span className="count">{getServiceStats('buy')} {t('testimonials.reviews')}</span>
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
                <h3>{t('testimonials.serviceTabs.sell.title')}</h3>
                <p>{t('testimonials.serviceTabs.sell.description')}</p>
                <span className="count">{getServiceStats('sell')} {t('testimonials.reviews')}</span>
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
                <h3>{t('testimonials.serviceTabs.rent.title')}</h3>
                <p>{t('testimonials.serviceTabs.rent.description')}</p>
                <span className="count">{getServiceStats('rent')} {t('testimonials.reviews')}</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="quick-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-content">
                <div className="stat-number">{testimonials.length}</div>
                <div className="stat-label">{t('testimonials.stats.totalClients')}</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="stat-content">
                <div className="stat-number">{getAverageRating('all')}</div>
                <div className="stat-label">{t('testimonials.stats.averageRating')}</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-heart"></i>
              </div>
              <div className="stat-content">
                <div className="stat-number">98%</div>
                <div className="stat-label">{t('testimonials.stats.satisfactionRate')}</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="stat-content">
                <div className="stat-number">{testimonials.filter(t => t.verified).length}</div>
                <div className="stat-label">{t('testimonials.stats.verifiedReviews')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-grid-section">
        <div className="container">
          <div className="testimonials-header">
            <h2>{t('testimonials.availableReviews')}</h2>
            <p>{filteredTestimonials.length} {t('testimonials.reviewsFound')}</p>
          </div>
          
          <div className="testimonials-grid">
            {filteredTestimonials.map(testimonial => (
              <div key={testimonial.id} className={`testimonial-card ${testimonial.featured ? 'featured' : ''}`}>
                {testimonial.featured && (
                  <div className="featured-badge">
                    <i className="fas fa-star"></i>
                    {t('testimonials.featured')}
                  </div>
                )}
                
                <div className="testimonial-header">
                  <div className="client-avatar">
                    <i className="fas fa-user"></i>
                    {testimonial.verified && (
                      <div className="verified-badge">
                        <i className="fas fa-check-circle"></i>
                      </div>
                    )}
                  </div>
                  <div className="client-info">
                    <h3>{testimonial.name}</h3>
                    <p className="client-location">
                      <i className="fas fa-map-marker-alt"></i>
                      {testimonial.location}
                    </p>
                    <div className="rating">
                      {renderStars(testimonial.rating)}
                      <span className="rating-text">{testimonial.rating}/5</span>
                    </div>
                  </div>
                  <div className="service-type-badge">
                    {t(`testimonials.serviceTypes.${testimonial.serviceType}`)}
                  </div>
                </div>
                
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p>"{testimonial.text}"</p>
                </div>
                
                <div className="testimonial-footer">
                  <div className="testimonial-meta">
                    <span className="date">{formatDate(testimonial.date)}</span>
                    <span className="property-type">{t(`testimonials.propertyTypes.${testimonial.propertyType}`)}</span>
                  </div>
                  <button 
                    className="read-more-btn"
                    onClick={() => setSelectedTestimonial(testimonial)}
                  >
                    <i className="fas fa-eye"></i>
                    {t('testimonials.readMore')}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredTestimonials.length === 0 && (
            <div className="no-testimonials">
              <div className="no-testimonials-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3>{t('testimonials.noReviews.title')}</h3>
              <p>{t('testimonials.noReviews.description')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="featured-testimonial">
        <div className="container">
          <div className="featured-content">
            <div className="featured-quote">
              <i className="fas fa-quote-left"></i>
            </div>
            <div className="featured-text">
              <h2>{t('testimonials.featuredSection.title')}</h2>
              <p>{t('testimonials.featuredSection.description')}</p>
              <div className="featured-author">
                <div className="author-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="author-info">
                  <h4>{t('testimonials.featuredSection.author.name')}</h4>
                  <p>{t('testimonials.featuredSection.author.position')}</p>
                  <div className="rating">
                    {renderStars(5)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2>{t('testimonials.whyChoose.title')}</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>{t('testimonials.whyChoose.reasons.trust.title')}</h3>
              <p>{t('testimonials.whyChoose.reasons.trust.description')}</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>{t('testimonials.whyChoose.reasons.personalized.title')}</h3>
              <p>{t('testimonials.whyChoose.reasons.personalized.description')}</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>{t('testimonials.whyChoose.reasons.expertise.title')}</h3>
              <p>{t('testimonials.whyChoose.reasons.expertise.description')}</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>{t('testimonials.whyChoose.reasons.security.title')}</h3>
              <p>{t('testimonials.whyChoose.reasons.security.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="testimonials-cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t('testimonials.cta.title')}</h2>
            <p>{t('testimonials.cta.description')}</p>
            <div className="cta-buttons">
              <button className="cta-button primary">
                <i className="fas fa-rocket"></i>
                {t('testimonials.cta.startJourney')}
              </button>
              <button className="cta-button secondary">
                <i className="fas fa-star"></i>
                {t('testimonials.cta.viewMoreReviews')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Modal */}
      {selectedTestimonial && (
        <div className="testimonial-modal" onClick={() => setSelectedTestimonial(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedTestimonial(null)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-testimonial">
              <div className="modal-header">
                <div className="client-avatar">
                  <i className="fas fa-user"></i>
                  {selectedTestimonial.verified && (
                    <div className="verified-badge">
                      <i className="fas fa-check-circle"></i>
                    </div>
                  )}
                </div>
                <div className="client-info">
                  <h3>{selectedTestimonial.name}</h3>
                  <p className="client-location">
                    <i className="fas fa-map-marker-alt"></i>
                    {selectedTestimonial.location}
                  </p>
                  <div className="rating">
                    {renderStars(selectedTestimonial.rating)}
                    <span className="rating-text">{selectedTestimonial.rating}/5</span>
                  </div>
                </div>
                <div className="service-type-badge">
                  {t(`testimonials.serviceTypes.${selectedTestimonial.serviceType}`)}
                </div>
              </div>
              <div className="modal-content-text">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>"{selectedTestimonial.text}"</p>
              </div>
              <div className="modal-footer">
                <span className="date">{formatDate(selectedTestimonial.date)}</span>
                <span className="property-type">{t(`testimonials.propertyTypes.${selectedTestimonial.propertyType}`)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials; 