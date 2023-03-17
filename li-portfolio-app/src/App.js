import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound';


import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/navbar/Navbar";
// import Footer from './components/footer/Footer';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;
