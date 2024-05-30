import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexMenu from './pages/IndexMenu';
import MoviesAdd from './pages/MoviesAdd';
import MoviesList from './pages/MoviesList';

const NotFound = () => <h2>Pàgina no trobada</h2>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexMenu />} />
        <Route path="/movies/list" element={<MoviesList />} />
        <Route path="/movies/add" element={<MoviesAdd />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
