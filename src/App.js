import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import MovieSearch from './pages/movieSearch';
import MovieDetails from './pages/movieDetails';
import Watchlist from './pages/watchList';
import './App.css';

const App = () => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
    alert("Movie added to watchlist")
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((movie) => movie.imdbID !== id));
    alert("Movie deleted from watchlist")
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieSearch onAddToWatchlist={addToWatchlist} />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/watchlist" element={<Watchlist watchlist={watchlist} onRemoveFromWatchlist={removeFromWatchlist} />} />
      </Routes>
    </Router>
  );
};

export default App;

