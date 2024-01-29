import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
  <Link to="/Curriculo">
    <button>
      Click me!
    </button>
  </Link>
  );
}

export default Home;
