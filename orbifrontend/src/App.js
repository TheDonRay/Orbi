import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Import your page components
import HomePage from './Homepage.jsx';
import AboutPage from './Aboutpage.jsx';
import Navbar from './Navbar.jsx';
import Getstarted from './Getstarted.jsx';
import Learnmore from './Learnmore.jsx';
import Iridescence from './Iridescence.jsx';

function App() {
  return (
    <div className="app-container">
      <Iridescence 
        className="iridescence-container"
        color={[0.3, 0, 1]} // Updated color here
        mouseReact={false}
        amplitude={0.1}
        speed={2}  
      />

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