import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

// import the pages stuff here 
import DarkVeil from './DarkVeil.jsx';
import HomePage from './Homepage.jsx';
import AboutPage from './Aboutpage.jsx';
import Navbar from './Navbar.jsx'; 
import Getstarted from './Getstarted.jsx'; 
import Learnmore from './Learnmore.jsx';

function App() {
  return ( 
    <div className="app-container">
      <DarkVeil />
      <div className="content">
        <Router>
          {/* Place the Navbar here, outside of Routes */}
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />  
            <Route path="/getstarted" element={<Getstarted />} />  
            <Route path = "/learnmore" element ={<Learnmore />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;