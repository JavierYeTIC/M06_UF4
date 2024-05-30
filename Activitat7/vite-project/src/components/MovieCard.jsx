// src/components/MovieCard.jsx
import React from 'react';
import './styles/MovieCard.css';

const MovieCard = ({ title, image, rate, direction, onDelete }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={`${title} poster`} className="movie-poster" />
      <h2>{title}</h2>
      <p>Direcció: {direction}</p>
      <p>Nota: {rate}/5</p>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
};

export default MovieCard;
