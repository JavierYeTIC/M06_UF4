// src/components/Welcome.jsx
import React from 'react';

const Welcome = ({ username }) => {
  return (
    <div>
      <h1>Hola, {username}!</h1>
      <p>Pel·lícules per a l’estiu</p>
    </div>
  );
};

export default Welcome;
