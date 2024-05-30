import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexMenu from '../pages/IndexMenu';
import MoviesList from '../pages/MoviesList';
import MoviesAdd from '../pages/MoviesAdd';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Welcome username="usuari" />
          <IndexMenu />
        </Route>
        <Route path="/movies/list" component={MoviesList} />
        <Route path="/movies/add" component={MoviesAdd} />
      </Switch>
    </Router>
  );
};

export default App;