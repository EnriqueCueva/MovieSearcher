import React from 'react';

const Watchlist = ({ watchlist, onRemoveFromWatchlist }) => {
  return (
    <div>
      <h1>My Watchlist</h1>
      <div className="movies-grid">
        {watchlist.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <button onClick={() => onRemoveFromWatchlist(movie.imdbID)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
