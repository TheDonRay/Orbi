import React, { useState } from 'react';
import './styles/Card.css';

function Learnmore() {
  const Card = ({ children, className }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className={`card-container ${className} ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="card-content">
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="learn-more-page">
      {/* This new container will hold all four cards */}
      <div className="cards-grid">
        <Card>
          <h2 className='firsttitle'>What Makes <span className='orbi'>O R B I ?</span></h2>
          <p>This is the content of the card.</p>
        </Card>
        <Card>
          <h2 className='title'>Our Mission <span className='orbi2'>Statement</span></h2>
          <p>You can use the same component for multiple cards.</p>
        </Card>
        <Card>
          <h2 className='title'>How did <span className='orbi3'>O R B I</span> come about?</h2>
          <p>You can use the same component for multiple cards.</p>
        </Card>
        <Card>
          <h2 className='title'>How did <span className='orbi4'>O R B I</span> come about?</h2>
          <p>You can use the same component for multiple cards.</p>
        </Card>
      </div>
    </div>
  );
}

export default Learnmore;