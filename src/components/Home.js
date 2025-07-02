import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/land.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{t('home.title')}</h1>
          <div className="hero-subtitle">{t('home.heroSubtitle')}</div>
          <div className="action-buttons-hero">
            <button className="action-btn-hero buy-btn-hero">
              {/* <div className="btn-icon-hero">
                <i className="fas fa-home"></i>
              </div> */}
              <div className="btn-content-hero">
                <h3>{t('home.actionButtons.buy.title')}</h3>
                {/* <p>{t('home.actionButtons.buy.description')}</p> */}
              </div>
            </button>
            <button className="action-btn-hero sell-btn-hero">
              {/* <div className="btn-icon-hero">
                <i className="fas fa-tags"></i>
              </div> */}
              <div className="btn-content-hero">
                <h3>{t('home.actionButtons.sell.title')}</h3>
                {/* <p>{t('home.actionButtons.sell.description')}</p> */}
              </div>
            </button>
            <button className="action-btn-hero rent-btn-hero">
              {/* <div className="btn-icon-hero">
                <i className="fas fa-key"></i>
              </div> */}
              <div className="btn-content-hero">
                <h3>{t('home.actionButtons.rent.title')}</h3>
                {/* <p>{t('home.actionButtons.rent.description')}</p> */}
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>{t('home.whyChooseUs')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-home"></i>
              </div>
              <h3>{t('home.feature1.title')}</h3>
              <p>{t('home.feature1.description')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>{t('home.feature2.title')}</h3>
              <p>{t('home.feature2.description')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>{t('home.feature3.title')}</h3>
              <p>{t('home.feature3.description')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>{t('home.feature4.title')}</h3>
              <p>{t('home.feature4.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">1500+</div>
              <div className="stat-label">{t('home.stats.properties')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">{t('home.stats.clients')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">{t('home.stats.years')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">{t('home.stats.satisfaction')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="property-types-section">
        <div className="container">
          <h2>{t('home.propertyTypes')}</h2>
          <div className="property-types-grid">
            <div className="property-type-card">
              <div className="property-type-image">
                <i className="fas fa-building"></i>
              </div>
              <h3>{t('home.types.residential')}</h3>
              <p>{t('home.types.residentialDesc')}</p>
            </div>
            <div className="property-type-card">
              <div className="property-type-image">
                <i className="fas fa-store"></i>
              </div>
              <h3>{t('home.types.commercial')}</h3>
              <p>{t('home.types.commercialDesc')}</p>
            </div>
            <div className="property-type-card">
              <div className="property-type-image">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>{t('home.types.agricultural')}</h3>
              <p>{t('home.types.agriculturalDesc')}</p>
            </div>
            <div className="property-type-card">
              <div className="property-type-image">
                <i className="fas fa-industry"></i>
              </div>
              <h3>{t('home.types.industrial')}</h3>
              <p>{t('home.types.industrialDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t('home.cta.title')}</h2>
            <p>{t('home.cta.description')}</p>
            <button className="cta-button primary">{t('home.cta.button')}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 