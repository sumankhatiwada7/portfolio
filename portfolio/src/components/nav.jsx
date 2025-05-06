import Svg from '../media/menu.svg';
import Home from '../media/home.svg';
import skills from '../media/skill.svg';
import services from '../media/services.svg';
import Projects from '../media/projects.svg';
import Contact from '../media/contact.svg';
import './nav.css';

const Nav = ({ showmenu, setshowmenu }) => {
  return (
    <div>
      {/* Menu Icon */}
      <div className="img">
        <img
          onClick={() => setshowmenu(!showmenu)} // Toggle the menu
          src={Svg}
          alt="menu"
        />
      </div>

      {/* Navigation Menu */}
      {showmenu && (
        <div className="svgnav">
          <a href="#home"><img src={Home} alt="home" /></a>
          <a href="#skills"><img src={skills} alt="skills" /></a>
          <a href="#services"><img src={services} alt="services" /></a>
          <a href="#projects"><img src={Projects} alt="projects" /></a>
          <a href="#contact"><img src={Contact} alt="contact" /></a>
        </div>
      )}
    </div>
  );
};

export default Nav;