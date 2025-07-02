import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('mission');
  const [animatedStats, setAnimatedStats] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.querySelector('.about-stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setAnimatedStats(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about">
      {/* Hero Section with Parallax */}
      <section className="about-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="about-hero-content">
            <div className="hero-badge">
              <span>🏆 Trusted Since 2014</span>
            </div>
            <h1 className="hero-title">
              <span className="title-highlight">Revolutionizing</span> Real Estate
              <br />
              <span className="title-sub">One Dream Home at a Time</span>
            </h1>
            <p className="hero-description">
              We're not just selling properties; we're crafting dreams, building communities, 
              and creating legacies that last generations.
            </p>
            <div className="hero-cta">
              <button className="cta-primary">Our Story</button>
              <button className="cta-secondary">Meet Our Team</button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Mission/Vision Tabs */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="tab-navigation">
            <button 
              className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              <i className="fas fa-bullseye"></i>
              Our Mission
            </button>
            <button 
              className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              <i className="fas fa-eye"></i>
              Our Vision
            </button>
            <button 
              className={`tab-btn ${activeTab === 'values' ? 'active' : ''}`}
              onClick={() => setActiveTab('values')}
            >
              <i className="fas fa-heart"></i>
              Our Values
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'mission' && (
              <div className="tab-panel active">
                <div className="panel-content">
                  <div className="panel-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h2>Launching Dreams Into Reality</h2>
                  <p>
                    Our mission is to transform the real estate experience from a transaction 
                    into a journey of discovery. We believe every family deserves a home that 
                    not only shelters but inspires, nurtures, and grows with them.
                  </p>
                  <div className="mission-highlights">
                    <div className="highlight-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Transparent Pricing</span>
                    </div>
                    <div className="highlight-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Expert Guidance</span>
                    </div>
                    <div className="highlight-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Lifetime Support</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'vision' && (
              <div className="tab-panel active">
                <div className="panel-content">
                  <div className="panel-icon">
                    <i className="fas fa-globe"></i>
                  </div>
                  <h2>Building Tomorrow's Communities Today</h2>
                  <p>
                    We envision a world where finding your perfect home is as natural as 
                    breathing. Where technology meets human touch, and every property 
                    transaction feels like a celebration of new beginnings.
                  </p>
                  <div className="vision-goals">
                    <div className="goal-item">
                      <div className="goal-number">2025</div>
                      <div className="goal-text">Digital-First Experience</div>
                    </div>
                    <div className="goal-item">
                      <div className="goal-number">2030</div>
                      <div className="goal-text">AI-Powered Matching</div>
                    </div>
                    <div className="goal-item">
                      <div className="goal-number">2035</div>
                      <div className="goal-text">Sustainable Communities</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'values' && (
              <div className="tab-panel active">
                <div className="panel-content">
                  <div className="panel-icon">
                    <i className="fas fa-diamond"></i>
                  </div>
                  <h2>The Values That Drive Us Forward</h2>
                  <div className="values-grid">
                    <div className="value-item">
                      <i className="fas fa-handshake"></i>
                      <h3>Integrity</h3>
                      <p>Every promise kept, every word honored</p>
                    </div>
                    <div className="value-item">
                      <i className="fas fa-star"></i>
                      <h3>Excellence</h3>
                      <p>Good enough is never good enough</p>
                    </div>
                    <div className="value-item">
                      <i className="fas fa-users"></i>
                      <h3>Community</h3>
                      <p>Building relationships, not just houses</p>
                    </div>
                    <div className="value-item">
                      <i className="fas fa-lightbulb"></i>
                      <h3>Innovation</h3>
                      <p>Always learning, always growing</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Story Section with Timeline */}
      <section className="story-section">
        <div className="container">
          <div className="story-header">
            <h2>Our Journey Through Time</h2>
            <p>From humble beginnings to industry leaders</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">2014</div>
              <div className="timeline-content">
                <h3>The Beginning</h3>
                <p>Started with a dream and a small office in Indore</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2017</div>
              <div className="timeline-content">
                <h3>First 100 Homes</h3>
                <p>Celebrated our 100th successful property transaction</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2020</div>
              <div className="timeline-content">
                <h3>Digital Revolution</h3>
                <p>Launched our online platform and mobile app</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2024</div>
              <div className="timeline-content">
                <h3>Industry Leader</h3>
                <p>Recognized as one of the top real estate companies in MP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Cards */}
      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <h2>Meet the Dream Team</h2>
            <p>The passionate people behind every success story</p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="card-image">
                <i className="fas fa-user-tie"></i>
              </div>
              <div className="card-content">
                <h3>Rajesh Kumar</h3>
                <span className="position">Founder & CEO</span>
                <p>Visionary leader with 15+ years of real estate expertise</p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
            <div className="team-card">
              <div className="card-image">
                <i className="fas fa-user-graduate"></i>
              </div>
              <div className="card-content">
                <h3>Priya Sharma</h3>
                <span className="position">Head of Sales</span>
                <p>Expert in property valuation and market analysis</p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
            <div className="team-card">
              <div className="card-image">
                <i className="fas fa-user-shield"></i>
              </div>
              <div className="card-content">
                <h3>Amit Patel</h3>
                <span className="position">Legal Advisor</span>
                <p>Specialist in property law and regulatory compliance</p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
            <div className="team-card">
              <div className="card-image">
                <i className="fas fa-user-friends"></i>
              </div>
              <div className="card-content">
                <h3>Sunita Devi</h3>
                <span className="position">Customer Relations</span>
                <p>Dedicated to ensuring every client's complete satisfaction</p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="about-stats-section">
        <div className="container">
          <div className="stats-header">
            <h2>Numbers That Tell Our Story</h2>
            <p>Real achievements, real impact</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className={`stat-number ${animatedStats ? 'animate' : ''}`}>10+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-smile"></i>
              </div>
              <div className={`stat-number ${animatedStats ? 'animate' : ''}`}>500+</div>
              <div className="stat-label">Happy Families</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-home"></i>
              </div>
              <div className={`stat-number ${animatedStats ? 'animate' : ''}`}>1500+</div>
              <div className="stat-label">Dream Homes Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className={`stat-number ${animatedStats ? 'animate' : ''}`}>25+</div>
              <div className="stat-label">Expert Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 