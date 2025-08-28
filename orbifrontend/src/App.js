import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
// import the pages stuff here 
import Particles from './Particles.jsx';
import HomePage from './Homepage.jsx';
import AboutPage from './Aboutpage.jsx'; 
import Navbar from './Navbar.jsx'; 
import Getstarted from './Getstarted.jsx'; 
import Learnmore from './Learnmore.jsx';

function App() {
  return ( 
    <div className="app-container">
      {/* The Particles component is placed here, before any other content.
        It uses 'fixed' positioning and a low z-index to stay in the background.
      */}
      <div className = "particles-container">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* This is the main content container. It holds your Navbar and all
        the page components rendered by react-router-dom. It should be
        positioned on top of the particles.
      */}
      <div className="content">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} /> 
            <Route path="/getstarted" element={<Getstarted />} />  
            <Route path="/learnmore" element={<Learnmore />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;