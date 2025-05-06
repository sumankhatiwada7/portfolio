import Nav from './components/nav.jsx';
import { useState } from 'react';
import Homepage from './components/homepage.jsx';

export const App = () => {
  const [showmenu, setShowMenu] = useState(false);

  return (
    <>
    <Homepage />
    <Nav showmenu={showmenu} setshowmenu={setShowMenu} /> 
    </>
  );
};

export default App;