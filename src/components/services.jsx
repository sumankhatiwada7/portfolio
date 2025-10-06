import { useState, useEffect } from 'react';
import './service.css';

const Services = ({ services }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className={`services-section ${isVisible ? 'visible' : ''}`}>
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-subtitle">WHAT I OFFER</h2>
          <h1 className="services-title">Services</h1>
          <div className="header-decoration"></div>
          <p className="services-description">
            I provide comprehensive digital solutions to help businesses establish a strong online presence, 
            enhance user engagement, and achieve their digital transformation goals.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className={`service-card ${isVisible ? 'visible' : ''}`} 
              key={index}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="card-inner">
                <div className="service-icon-container">
                  <div className="icon-background"></div>
                  <img src={service.img} alt={service.name} className="service-icon" />
                </div>
                
                <div className="service-content">
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-description">{service.paragraph}</p>
                  
                  <div className="service-features">
                    {service.features && service.features.map((feature, i) => (
                      <span key={i} className="feature-tag">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="service-details">
                    <div className="detail-item">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6e45e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{service.deliveryTime || "2-4 Weeks"}</span>
                    </div>
                    
                    <div className="detail-item">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4.5V19.5M19.5 12H4.5" stroke="#6e45e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{service.revisions || "Unlimited Revisions"}</span>
                    </div>
                  </div>
                  
                  <button className="service-cta">
                    Get Started
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta-section">
          <h3>Ready to start your project?</h3>
          <p>Let's discuss how I can help bring your ideas to life</p>
          <div className="cta-buttons">
            <button className="primary-cta">
              Contact Me
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="secondary-cta">
              View Portfolio
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20L12 4M12 4L5 11M12 4L19 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;