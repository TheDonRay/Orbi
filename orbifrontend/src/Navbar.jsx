// this is the Navbar here 
import React from 'react';
import './styles/Navbar.css'; // Don't forget to import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* You'll replace this with your actual logo */}
        <img src="/orbilogo.png" alt="Orbi Logo" class = "rounded-logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;