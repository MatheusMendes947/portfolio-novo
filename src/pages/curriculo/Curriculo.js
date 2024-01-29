import React from 'react';
import { Link } from 'react-router-dom';

function Curriculo() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <Link to="/Curriculos">Ir para outra página</Link>
    </div>
  );
}

export default Curriculo;
