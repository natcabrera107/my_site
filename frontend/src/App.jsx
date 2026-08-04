import Home from './pages/Home'; 
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

