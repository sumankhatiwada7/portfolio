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
  ]

  return (
    <>
      <Homepage />
      <Nav showmenu={showmenu} setshowmenu={setShowMenu} /> 
      <Skills skills={skillsData} />
      <Services services={servicesData} />
    </>
  );
};

export default App;

