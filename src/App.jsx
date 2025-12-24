import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAndSkills from './components/AboutAndSkills';
import EducationWork from './components/EducationWork';
import Projects from './components/Projects';
import Contact from './components/Contact'; // New Component

const SimpleFooter = () => (
  <footer className="py-4 text-center text-secondary small mt-auto">
    Designed and developed by Madhav
  </footer>
);

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Navbar />
        
        <div className="container flex-grow-1 d-flex align-items-center justify-content-center">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutAndSkills />} />
            <Route path="/experience" element={<EducationWork />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <SimpleFooter />
      </div>
    </Router>
  );
}

export default App;