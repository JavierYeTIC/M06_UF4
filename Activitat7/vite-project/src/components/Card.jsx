import React from 'react';
import { Link } from 'react-router-dom';
import './styles/MovieCard.css';

const Card = ({ title, description, link }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={link}>Veure més</Link>
        </div>
    );
};

export default Card;
