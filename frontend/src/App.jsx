import Home from './pages/Home'; 
import Navbar from './components/Navbar';
import Dashboards from './pages/Dashboards';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboards" element={<Dashboards />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

