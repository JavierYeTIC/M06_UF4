import React from 'react';
import './counter.css';
function Comptador({ count }) {
  return (
    <div className="counterContainer">
      <p className="counterText">{count}</p>
    </div>
  );
}

export default Comptador;