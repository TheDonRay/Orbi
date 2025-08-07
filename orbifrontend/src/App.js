import React from 'react'; 

// import the pages stuff here 
const HomePage = require('./pages/homepage.jsx'); 
const AboutPage = require('./pages/aboutpage.jsx'); 

function App() {
  return ( 
    <div> 
     <HomePage />  
     <AboutPage />
    </div>
  )
}

export default App;
