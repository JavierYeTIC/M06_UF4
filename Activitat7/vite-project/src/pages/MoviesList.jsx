// src/pages/MoviesList.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { ref, onValue, remove } from 'firebase/database';
import MovieCard from '../components/MovieCard';
import './styles/MoviesList.css';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const moviesRef = ref(db, 'movies');
    const unsubscribe = onValue(moviesRef, (snapshot) => {
      const data = snapshot.val();
      const moviesList = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      setMovies(moviesList);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (movieId) => {
    try {
      await remove(ref(db, `movies/${movieId}`));
      alert('Pel·lícula eliminada amb èxit!');
    } catch (error) {
      console.error('Error eliminant pel·lícula:', error.message);
    }
  };

  return (
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          image={movie.imageURL}
          rate={movie.rating}
          direction={movie.director}
          onDelete={() => handleDelete(movie.id)}
        />
      ))}
    </div>
  );
};

export default MoviesList;
