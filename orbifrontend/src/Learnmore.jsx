import React, { useState } from "react";
import "./styles/Card.css";

function Learnmore() {
  const Card = ({ children, className }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className={`card-container ${className} ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="card-content">{children}</div>
      </div>
    );
  };

  return (
    <div className="learn-more-page">
      {/* This new container will hold all four cards */}
      <div className="cards-grid">
        <Card>
          <h2 className="firsttitle">
            What Makes <span className="orbi">O R B I ?</span>
          </h2>
          <p>O R B I..</p>
        </Card>
        <Card>
          <h2 className="title">
            Our Mission <span className="orbi2">Statement</span>
          </h2>
          <p>Our mission</p>
        </Card>
        <Card>
          <h2 className="title">
            How did <span className="orbi3">O R B I</span> come about?
          </h2>
          <p>It started..</p>
        </Card>
        <Card>
          <h2 className="title">
            Upcoming <span className="orbi4">Features</span>
          </h2>
          <p>The Next steps for us are..</p>
        </Card>
      </div>
    </div>
  );
}

export default Learnmore;
