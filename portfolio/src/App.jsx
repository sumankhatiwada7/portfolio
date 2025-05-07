import Nav from './components/nav.jsx';
import { useState } from 'react';
import Homepage from './components/homepage.jsx';
import Skills from './components/skills.jsx';
import Html from './media/html.svg';
import Css from './media/css.svg';
import Reactlogo from './media/react.svg';
import Javascript from './media/javascript.svg';

export const App = () => {
  const [showmenu, setShowMenu] = useState(false);

  const skillsData = [
    { img: Html, name: 'HTML' },
    { img: Css, name: 'CSS' },
    { img: Javascript, name: 'JavaScript' },
    { img: Reactlogo, name: 'React' },
    
  ];

  return (
    <>
      <Homepage />
      <Nav showmenu={showmenu} setshowmenu={setShowMenu} /> 
      <Skills skills={skillsData} />
    </>
  );
};

export default App;

