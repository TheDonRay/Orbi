import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 


// import the pages stuff here 
const HomePage = require('./pages/homepage.jsx'); 
const AboutPage = require('./pages/aboutpage.jsx'); 

function App() {
  return (  
    <Router>
      <Routes> 
        <Route exact path = "/home" element={<HomePage />} /> 
        <Route exact path = "/about" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App;
