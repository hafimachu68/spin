import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        DUBAI KMCC TRIKARIPUR MANDALAM <br />
        VKP KHALID HAJI MEMORIAL FOOTBALL FEST
      </div>
      <Link to="/spin2" s className="match-list-link">
        Match List
      </Link>
    </nav>
  );
};

export default Navbar;
