import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Search</Link>
      <Link to="/watchlist">Watchlist</Link>
    </nav>
  );
};

export default Navbar;
