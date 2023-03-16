import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import DrawerComp from "./components/drawer/Drawer";
import {Routes, Route} from 'react-router-dom';
// import ConfirmPrompt from 'inquirer/lib/prompts/confirm';

function App() {
  return (
    <>
      <Navbar />  
      <DrawerComp /> 
      <Header />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}

      <Home />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
