import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, onAddToWatchlist }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <Link to={`/movies/${movie.imdbID}`}>Details</Link>
      <button onClick={() => onAddToWatchlist(movie)}>Add to Watchlist</button>
    </div>
  );
};

export default MovieCard;
