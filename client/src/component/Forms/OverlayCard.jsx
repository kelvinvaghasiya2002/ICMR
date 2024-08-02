// OverlayCard.jsx
import React from 'react';
import './OverlayCard.css'; // We'll create this CSS file next

// const OverlayCard = ({ isVisible, message }) => {
//   return (
//     <div className={`overlay ${isVisible ? 'visible' : ''}`}>
//       <p>{message}</p>
//     </div>
//   );
// };

const OverlayCard = ({ isVisible, message }) => {
  return (
    <div className={`overlay ${isVisible ? 'visible' : ''}`}>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
};
export default OverlayCard;