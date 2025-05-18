import React from 'react';
import { useNavigate } from 'react-router-dom';

function TopNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-dark fixed-top" style={{ backgroundColor: '#436146' }}>
      <div className="container-fluid">
        <span className="navbar-brand mx-auto">Mi Biblioteca con React</span>
        <div className="dropdown">
          <button className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">
            Usuario
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><button className="dropdown-item" onClick={() => navigate('/perfil')}>Perfil</button></li>
            <li><button className="dropdown-item" onClick={() => navigate('/books')}>Gestión de Libros</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;