import React, { useState } from 'react';
import MovieCard from '../components/movieCard';

const MovieSearch = ({ onAddToWatchlist }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=a231eb9b&s=${searchQuery}`);
    const data = await response.json();
    if (data.Search) setMovies(data.Search);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={fetchMovies}>Search</button>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onAddToWatchlist={onAddToWatchlist} />
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
