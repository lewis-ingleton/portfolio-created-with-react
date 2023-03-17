import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import { useState } from 'react';

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
// import DrawerComp from "./components/drawer/Drawer";
// import { resolveBreakpointValues } from '@mui/system/breakpoints';

// import ConfirmPrompt from 'inquirer/lib/prompts/confirm';


function App() {

  const [page, setPage] = useState('Home');
  
  const handlePageView = () => {
      switch (page) {
        case 'Home':
          return <Home />
        break;
        case 'Contact':
          return <Contact />
        break;
        case 'Projects':
          return <Projects />
        break;
      }
  }

  return (
    <>
      <Navbar setPage={setPage}/>
      {handlePageView()}
      
      
    </>
  );
}

export default App;
