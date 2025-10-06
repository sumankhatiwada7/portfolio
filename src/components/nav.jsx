import { useState, useEffect } from 'react';
import Svg from '../media/menu.svg';
import Home from '../media/home.svg';
import Skills from '../media/skill.svg';
import Services from '../media/services.svg';
import Projects from '../media/projects.svg';
import Contact from '../media/contact.svg';
import './nav.css';

const Nav = ({ showmenu, setshowmenu }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'skills', 'services', 'project', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setshowmenu(false);
    }
  };

  return (
    <>
      {/* Menu Icon */}
      <div className={`menu-toggle ${isScrolled ? 'scrolled' : ''}`}>
        <img
          onClick={() => setshowmenu(!showmenu)}
          src={Svg}
          alt="menu"
          className="menu-icon"
        />
      </div>

      {/* Navigation Menu */}
      <div className={`svgnav ${showmenu ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-items">
          <button 
            onClick={() => scrollToSection('home')}
            className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
          >
            <img src={Home} alt="home" />
            <span>Home</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('skills')}
            className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
          >
            <img src={Skills} alt="skills" />
            <span>Skills</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('services')}
            className={`nav-item ${activeSection === 'services' ? 'active' : ''}`}
          >
            <img src={Services} alt="services" />
            <span>Services</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('project')}
            className={`nav-item ${activeSection === 'project' ? 'active' : ''}`}
          >
            <img src={Projects} alt="projects" />
            <span>Projects</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
          >
            <img src={Contact} alt="contact" />
            <span>Contact</span>
          </button>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {showmenu && <div className="nav-overlay" onClick={() => setshowmenu(false)}></div>}
    </>
  );
};

export default Nav;