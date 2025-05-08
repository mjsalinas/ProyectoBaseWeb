import { FaRegUserCircle } from "react-icons/fa";

function TopNavbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand">Mi Aplicacion de Administrador</span>
                <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle"  
                    type="button"
                    data-bs-toggle="dropdown">
                        <FaRegUserCircle className="me-2" /> Usuario
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                            <button className="dropdown-item" onClick={() => { }}>
                                Perfil
                            </button>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default TopNavbar;