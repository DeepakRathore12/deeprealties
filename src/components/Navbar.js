import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = ({ onSectionChange, currentSection }) => {
  const [click, setClick] = useState(false);
  const { t, i18n } = useTranslation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleSectionChange = (section) => {
    onSectionChange(section);
    closeMobileMenu();
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="info-bar">
        <div className="info-container">
          <div className="contact-info">
            <span className="contact-item">
              <i className="fas fa-envelope"></i>
              {t('infoBar.email')}
            </span>
            <span className="contact-item">
              <i className="fas fa-phone"></i>
              {t('infoBar.phone')}
            </span>
          </div>
          <div className="language-switcher">
            <button 
              className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              {t('language.en')}
            </button>
            <button 
              className={`lang-btn ${i18n.language === 'hi' ? 'active' : ''}`}
              onClick={() => changeLanguage('hi')}
            >
              {t('language.hi')}
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={() => handleSectionChange('home')}>
            <img src="/favicon.ico" alt="Logo" className="logo-image" />
            <span>Deeprealties</span>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <div className={`hamburger ${click ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentSection === 'home' ? 'active' : ''}`}
                onClick={() => handleSectionChange('home')}
              >
                {t('navbar.home')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentSection === 'about' ? 'active' : ''}`}
                onClick={() => handleSectionChange('about')}
              >
                {t('navbar.about')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentSection === 'properties' ? 'active' : ''}`}
                onClick={() => handleSectionChange('properties')}
              >
                {t('navbar.properties')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentSection === 'testimonials' ? 'active' : ''}`}
                onClick={() => handleSectionChange('testimonials')}
              >
                {t('navbar.testimonials')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentSection === 'contact' ? 'active' : ''}`}
                onClick={() => handleSectionChange('contact')}
              >
                {t('navbar.contact')}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;