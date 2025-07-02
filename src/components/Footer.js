import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Deeprealties</h3>
            <p>{t('footer.tagline', 'Connecting you to your dream property with transparency and trust.')}</p>
          </div>
          
          <div className="footer-section">
            <h4>{t('footer.contact', 'Contact')}</h4>
            <p>Email: info@deeprealties.com</p>
            <p>Phone: +91 83055 51215</p>
            <p>Address: Indore, Madhya Pradesh</p>
          </div>
          
          <div className="footer-section">
            <h4>{t('footer.services', 'Services')}</h4>
            <ul>
              <li>{t('footer.buyProperty', 'Buy Property')}</li>
              <li>{t('footer.sellProperty', 'Sell Property')}</li>
              <li>{t('footer.rentProperty', 'Rent Property')}</li>
              <li>{t('footer.propertyManagement', 'Property Management')}</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{t('footer.followUs', 'Follow Us')}</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Deeprealties. {t('footer.rights', 'All rights reserved.')}</p>
          <div className="footer-links">
            <a href="#">{t('footer.privacy', 'Privacy Policy')}</a>
            <a href="#">{t('footer.terms', 'Terms of Service')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 