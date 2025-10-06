import { useState, useEffect } from 'react';
import './Project.css';

const Project = ({ projectData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const projectSection = document.getElementById('project');
      if (projectSection) {
        const rect = projectSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projectData.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projectData.length) % projectData.length);
  };

  return (
    <section id="project" className={`project-section ${isVisible ? 'visible' : ''}`}>
      <div className="project-container">
        <div className="project-header">
          <h2 className="project-subtitle">MY CREATIONS</h2>
          <h1 className="project-title">Projects</h1>
          <div className="header-decoration"></div>
          <p className="project-intro">
            Here are some of my recent projects that showcase my skills in web development, 
            design, and problem-solving. Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="projects-side-by-side">
          {/* Project Content */}
          <div className="project-content">
            <div className="project-number">0{activeProject + 1}</div>
            
            <div className="project-info">
              <h3 className="project-name">{projectData[activeProject].title}</h3>
              <p className="project-description">{projectData[activeProject].paragraph}</p>
              
              <div className="project-details">
                <div className="detail-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6e45e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{projectData[activeProject].timeline || "2-4 Weeks"}</span>
                </div>
                
                <div className="detail-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6e45e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{projectData[activeProject].status || "Completed"}</span>
                </div>
              </div>

              <div className="project-tech">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  {projectData[activeProject].technologies && 
                    projectData[activeProject].technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))
                  }
                </div>
              </div>

              <div className="project-features">
                <h4>Key Features:</h4>
                <ul className="features-list">
                  {projectData[activeProject].features && 
                    projectData[activeProject].features.map((feature, i) => (
                      <li key={i}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 13L9 17L19 7" stroke="#6e45e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {feature}
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className="project-actions">
                <a 
                  href={projectData[activeProject].link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn github-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  View Code
                </a>
                
                {projectData[activeProject].demo && (
                  <a 
                    href={projectData[activeProject].demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn demo-btn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16L16 12M16 12L12 8M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Project Image/Visual */}
          <div className="project-visual">
            <div className="project-image-container">
              <div className="image-placeholder">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 16L8 12L12 16L16 10L20 14M4 16V20H20V4H4V16Z" stroke="#6e45e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>Project Preview</p>
              </div>
            </div>

            <div className="project-navigation">
              <button className="nav-btn prev-btn" onClick={prevProject}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="project-dots">
                {projectData.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === activeProject ? 'active' : ''}`}
                    onClick={() => setActiveProject(index)}
                  />
                ))}
              </div>
              
              <button className="nav-btn next-btn" onClick={nextProject}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="projects-cta">
          <h3>Interested in working together?</h3>
          <p>Let's discuss how I can help bring your next project to life</p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-button primary">
              Start a Project
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button secondary"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;