import React from 'react';
import { useNavigate } from 'react-router-dom';

function TopNavbar() {
  const navigate = useNavigate();

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg"
      style={{
        backgroundColor: 'beige',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        borderBottom: '2px solid #d3e4cd'
      }}
    >
      <div className="container-fluid px-4">
        
        <span
          className="navbar-brand fw-bold text-success"
          style={{ fontSize: '1.3rem' }}
        >
        La Receta de la Abuela
        </span>
        <div className="d-flex gap-3">
          <button
            className="btn btn-outline-success btn-sm"
            onClick={() => navigate('/')}
          >
            Inicio
          </button>
          <button
            className="btn btn-outline-success btn-sm"
            onClick={() => navigate('/recipes')}
          >
            Nueva Receta
          </button>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
