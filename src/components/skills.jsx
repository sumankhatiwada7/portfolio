import { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  // Sample skills data with backend and tools
  const skills = [
    // Frontend skills
    { 
      name: 'HTML/CSS', 
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 
      level: 80, 
      category: 'frontend',
      experience: '3+ years',
      projects: '20+ projects'
    },
    { 
      name: 'JavaScript', 
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
      level: 45, 
      category: 'frontend',
      experience: '3+ years',
      projects: '18+ projects'
    },
    { 
      name: 'React', 
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
      level: 50,
      category: 'frontend',
      experience: '2+ years',
      projects: '15+ projects'
    },
    
    // Backend skills
    { 
      name: 'Java', 
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', 
      level: 45, 
      category: 'backend',
      experience: '2+ years',
      projects: '10+ projects'
    },
    { 
      name: 'C', 
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', 
      level: 60, 
      category: 'backend',
      experience: '2+ years',
      projects: '8+ projects'
    },
    { 
      name: 'C++', 
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', 
      level: 55, 
      category: 'backend',
      experience: '2+ years',
      projects: '9+ projects'
    },
    { 
      name: 'Python', 
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 
      level: 40, 
      category: 'backend',
      experience: '2+ years',
      projects: '12+ projects'
    },
    { 
      name: 'Laravel', 
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg', 
      level: 70, 
      category: 'backend',
      experience: '1+ years',
      projects: '5+ projects'
    },
    
    // Tools
    { 
      name: 'Git', 
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', 
      level: 85, 
      category: 'tools',
      experience: '3+ years',
      projects: 'All projects'
    },
    { 
      name: 'GitHub', 
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', 
      level: 80, 
      category: 'tools',
      experience: '3+ years',
      projects: 'All projects'
    }
  ];

  // Filter skills based on category
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  // Set up scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className={`skills-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
          <div className="header-accent"></div>
        </div>

        <div className="skills-categories">
          <button 
            className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Skills
          </button>
          <button 
            className={`category-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveCategory('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`category-btn ${activeCategory === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveCategory('backend')}
          >
            Backend
          </button>
          <button 
            className={`category-btn ${activeCategory === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveCategory('tools')}
          >
            Tools
          </button>
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div 
              className={`skill-card ${isVisible ? 'visible' : ''}`} 
              key={index}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon-container">
                <div className="icon-wrapper">
                  <img src={skill.img} alt={skill.name} className="skill-icon" />
                </div>
                <div className="skill-level">
                  <div className="level-bar">
                    <div 
                      className="level-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="level-text">{skill.level}%</span>
                </div>
              </div>
              
              <div className="skill-content">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-desc">Proficient in {skill.name} development</p>
                
                <div className="skill-meta">
                  
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;