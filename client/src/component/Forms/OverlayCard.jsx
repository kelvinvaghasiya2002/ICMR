// OverlayCard.jsx
import React from 'react';
import './OverlayCard.css'; // We'll create this CSS file next

const OverlayCard = ({ isVisible, message }) => {
  return (
    <div className={`overlay ${isVisible ? 'visible' : ''}`}>
      <p>{message}</p>
    </div>
  );
};

export default OverlayCard;