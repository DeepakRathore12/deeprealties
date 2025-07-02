import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Properties.css';

const Properties = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('buy');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  // Sample property data with service type
  const properties = [
    {
      id: 1,
      title: "Modern 3BHK Apartment",
      serviceType: "buy", // buy, sell, rent
      propertyType: "residential",
      price: "₹75,00,000",
      rentPrice: "₹25,000/month",
      location: "Indore, Madhya Pradesh",
      bedrooms: 3,
      bathrooms: 2,
      area: "1200",
      image: "apartment1",
      featured: true
    },
    {
      id: 2,
      title: "Commercial Office Space",
      serviceType: "sell",
      propertyType: "commercial",
      price: "₹2,50,00,000",
      rentPrice: "₹1,50,000/month",
      location: "Delhi, NCR",
      bedrooms: 0,
      bathrooms: 3,
      area: "2500",
      image: "office1",
      featured: false
    },
    {
      id: 3,
      title: "Luxury Villa with Garden",
      serviceType: "rent",
      propertyType: "residential",
      price: "₹5,00,00,000",
      rentPrice: "₹75,000/month",
      location: "Bangalore, Karnataka",
      bedrooms: 4,
      bathrooms: 4,
      area: "3500",
      image: "villa1",
      featured: true
    },
    {
      id: 4,
      title: "Agricultural Farmland",
      serviceType: "buy",
      propertyType: "agricultural",
      price: "₹50,00,000",
      rentPrice: "₹15,000/month",
      location: "Punjab",
      bedrooms: 0,
      bathrooms: 0,
      area: "50000",
      image: "farm1",
      featured: false
    },
    {
      id: 5,
      title: "Industrial Warehouse",
      serviceType: "sell",
      propertyType: "industrial",
      price: "₹8,00,00,000",
      rentPrice: "₹3,00,000/month",
      location: "Chennai, Tamil Nadu",
      bedrooms: 0,
      bathrooms: 2,
      area: "10000",
      image: "warehouse1",
      featured: true
    },
    {
      id: 6,
      title: "2BHK Affordable Housing",
      serviceType: "rent",
      propertyType: "residential",
      price: "₹35,00,000",
      rentPrice: "₹18,000/month",
      location: "Pune, Maharashtra",
      bedrooms: 2,
      bathrooms: 2,
      area: "900",
      image: "apartment2",
      featured: false
    }
  ];

  const locations = ['Indore, Madhya Pradesh', 'Delhi, NCR', 'Bangalore, Karnataka', 'Punjab', 'Chennai, Tamil Nadu', 'Pune, Maharashtra'];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesService = activeTab === 'all' || property.serviceType === activeTab;
    const matchesType = selectedType === 'all' || property.propertyType === selectedType;
    const matchesLocation = selectedLocation === 'all' || property.location === selectedLocation;
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'low' && parseInt(property.price.replace(/[^\d]/g, '')) < 5000000) ||
                        (priceRange === 'medium' && parseInt(property.price.replace(/[^\d]/g, '')) >= 5000000 && parseInt(property.price.replace(/[^\d]/g, '')) < 20000000) ||
                        (priceRange === 'high' && parseInt(property.price.replace(/[^\d]/g, '')) >= 20000000);
    
    return matchesSearch && matchesService && matchesType && matchesLocation && matchesPrice;
  });

  const getServiceStats = (serviceType) => {
    const count = properties.filter(p => serviceType === 'all' || p.serviceType === serviceType).length;
    return count;
  };

  return (
    <div className="properties">
      {/* Hero Section */}
      <section className="properties-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="properties-hero-content">
            <div className="hero-badge">
              <span>🏠 {t('properties.heroBadge')}</span>
            </div>
            <h1>{t('properties.title')}</h1>
            <p>{t('properties.subtitle')}</p>
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
                <h3>{t('properties.serviceTabs.all.title')}</h3>
                <p>{t('properties.serviceTabs.all.description')}</p>
                <span className="count">{getServiceStats('all')} {t('properties.properties')}</span>
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
                <h3>{t('properties.serviceTabs.buy.title')}</h3>
                <p>{t('properties.serviceTabs.buy.description')}</p>
                <span className="count">{getServiceStats('buy')} {t('properties.properties')}</span>
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
                <h3>{t('properties.serviceTabs.sell.title')}</h3>
                <p>{t('properties.serviceTabs.sell.description')}</p>
                <span className="count">{getServiceStats('sell')} {t('properties.properties')}</span>
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
                <h3>{t('properties.serviceTabs.rent.title')}</h3>
                <p>{t('properties.serviceTabs.rent.description')}</p>
                <span className="count">{getServiceStats('rent')} {t('properties.properties')}</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Advanced Search and Filters Section */}
      <section className="search-filters-section">
        <div className="container">
          <div className="search-filters">
            <div className="search-box">
              <input
                type="text"
                placeholder={t('properties.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="fas fa-search"></i>
            </div>
            
            <div className="filters">
              <div className="filter-group">
                <label>{t('properties.filters.propertyType')}</label>
                <select 
                  value={selectedType} 
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="all">{t('properties.filters.allTypes')}</option>
                  <option value="residential">{t('properties.residential')}</option>
                  <option value="commercial">{t('properties.commercial')}</option>
                  <option value="agricultural">{t('home.types.agricultural')}</option>
                  <option value="industrial">{t('home.types.industrial')}</option>
                </select>
              </div>
              
              <div className="filter-group">
                <label>{t('properties.filters.location')}</label>
                <select 
                  value={selectedLocation} 
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="all">{t('properties.filters.allLocations')}</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              
              <div className="filter-group">
                <label>{t('properties.filters.priceRange')}</label>
                <select 
                  value={priceRange} 
                  onChange={(e) => setPriceRange(e.target.value)}
                >
                  <option value="all">{t('properties.filters.allPrices')}</option>
                  <option value="low">{t('properties.filters.under50Lakhs')}</option>
                  <option value="medium">{t('properties.filters.50LakhsTo2Crores')}</option>
                  <option value="high">{t('properties.filters.above2Crores')}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="properties-grid-section">
        <div className="container">
          <div className="properties-header">
            <h2>{t('properties.availableProperties')}</h2>
            <p>{filteredProperties.length} {t('properties.propertiesFound')}</p>
          </div>
          
          <div className="properties-grid">
            {filteredProperties.map(property => (
              <div key={property.id} className={`property-card ${property.featured ? 'featured' : ''}`}>
                {property.featured && (
                  <div className="featured-badge">
                    <i className="fas fa-star"></i>
                    {t('properties.featured')}
                  </div>
                )}
                
                <div className="property-image">
                  <div className="image-placeholder">
                    <i className="fas fa-home"></i>
                  </div>
                  <div className="property-type-badge">
                    {t(`properties.propertyTypes.${property.propertyType === 'residential' ? 'apartment' : property.propertyType}`)}
                  </div>
                  <div className="service-type-badge">
                    {t(`properties.serviceTypes.${property.serviceType}`)}
                  </div>
                </div>
                
                <div className="property-details">
                  <h3>{property.title}</h3>
                  <p className="property-location">
                    <i className="fas fa-map-marker-alt"></i>
                    {property.location}
                  </p>
                  
                  <div className="property-specs">
                    {property.bedrooms > 0 && (
                      <span>
                        <i className="fas fa-bed"></i>
                        {property.bedrooms} {t('properties.bedrooms')}
                      </span>
                    )}
                    {property.bathrooms > 0 && (
                      <span>
                        <i className="fas fa-bath"></i>
                        {property.bathrooms} {t('properties.bathrooms')}
                      </span>
                    )}
                    <span>
                      <i className="fas fa-ruler-combined"></i>
                      {property.area} {t('properties.sqft')}
                    </span>
                  </div>
                  
                  <div className="property-price">
                    {property.serviceType === 'rent' ? (
                      <span className="price rent-price">{property.rentPrice}</span>
                    ) : (
                      <span className="price">{property.price}</span>
                    )}
                  </div>
                  
                  <div className="property-actions">
                    <button className="btn-primary">
                      <i className="fas fa-eye"></i>
                      {t('properties.viewDetails')}
                    </button>
                    <button className="btn-secondary">
                      <i className="fas fa-phone"></i>
                      {t('properties.contactAgent')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProperties.length === 0 && (
            <div className="no-properties">
              <div className="no-properties-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>{t('properties.noProperties.title')}</h3>
              <p>{t('properties.noProperties.description')}</p>
              <button 
                className="btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedType('all');
                  setPriceRange('all');
                  setSelectedLocation('all');
                  setActiveTab('all');
                }}
              >
                {t('properties.noProperties.resetFilters')}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="quick-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-home"></i>
              </div>
              <div className="stat-content">
                <div className="stat-number">{getServiceStats('buy')}</div>
                <div className="stat-label">{t('properties.stats.forSale')}</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-key"></i>
              </div>
              <div className="stat-content">
                <div className="stat-number">{getServiceStats('rent')}</div>
                <div className="stat-label">{t('properties.stats.forRent')}</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-tags"></i>
              </div>
              <div className="stat-content">
                <div className="stat-number">{getServiceStats('sell')}</div>
                <div className="stat-label">{t('properties.stats.forSale')}</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="stat-content">
                <div className="stat-number">{properties.filter(p => p.featured).length}</div>
                <div className="stat-label">{t('properties.stats.featured')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties; 