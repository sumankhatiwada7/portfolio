import Nav from './components/nav.jsx';
import { useState } from 'react';
import Homepage from './components/homepage.jsx';
import Skills from './components/skills.jsx';
import Html from './media/html.svg';
import Css from './media/css.svg';
import Reactlogo from './media/react.svg';
import Javascript from './media/javascript.svg';
import Services from './components/services.jsx';
import Building from './media/building.svg';
import Desgning from './media/desgin.svg';
import Maintaining from './media/maintaince.svg';
import Project from './components/project.jsx';
import  Contact from './components/contact.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const App = () => {
  const [showmenu, setShowMenu] = useState(false);
 

  const skillsData = [
    { img: Html, name: 'HTML' },
    { img: Css, name: 'CSS' },
    { img: Javascript, name: 'JavaScript' },
    { img: Reactlogo, name: 'React' },
    
    
  ];
  const servicesData = [
    { img: Building, name: 'Website Development' ,pargraph:'I design clean, modern, and responsive layouts that match your brand and deliver a smooth user experience on all devices.'  },
    { img: Desgning, name: 'Website Desgning' ,pargraph:' I build functional and optimized websites using the latest technologies, ensuring fast loading times and strong performance.'},
    { img: Maintaining, name: 'Website Maintaince', pargraph:'I provide regular updates, bug fixes, and performance checks to keep your website secure, fresh, and fully operational.' },
    {
  name: "SEO Optimization",
  img: "./assets/uiux.svg",  // use any icon you have
  
  
}

  ]
  const projectData = [
    {title:'Black Jack Game',pargraph:'A simple black jack game using html css and javascript',link:"https://github.com/sumankhatiwada7/blackjackgame"},
    {title:'Password Generator',pargraph:'A simple password generator using html css and javascript',link:"https://github.com/sumankhatiwada7/password-generator"},
    {title:'Travel Managment System',pargraph:'A travel management system using C++',link:"https://github.com/sumankhatiwada7/Travel-management-system-"},
    {title:'Contact Management System',pargraph:'A contact management system using C',link:"https://github.com/sumankhatiwada7/project"}
     
  ]
  const socialMedia = [
    { name: 'Github', link: 'https://github.com/sumankhatiwada7', image: <FontAwesomeIcon icon={faGithub} /> },
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/suman-khatiwada-7b0a1b1b4/', image: <FontAwesomeIcon icon={faLinkedin} /> },
    { name: 'Facebook', link: 'https://www.facebook.com/suman.khatiwada.520357/', image: <FontAwesomeIcon icon={faFacebook} /> },
    { name: 'Instagram', link: 'https://www.instagram.com/suman_7.7/', image: <FontAwesomeIcon icon={faInstagram} /> },
  ];

  return (
    <>
      <Homepage />
      <Nav showmenu={showmenu} setshowmenu={setShowMenu} /> 
      <Skills skills={skillsData} />
      <Services services={servicesData} />
      <Project projectData={projectData} />
      <Contact socialMedia={socialMedia}/>

    </>
  );
};

export default App;

