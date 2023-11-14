import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          ICE Barrio Parque Casas
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                Nuestra iglesia
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Actividades
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to={"/meetings"} className="nav-link text-black">
                    Reuniones
                  </Link>
                </li>
                <li>
                  <Link to={"/ministries"} className="nav-link text-black">
                    Ministerios
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Otros
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to={"/prays"} className="nav-link">
                Oraciones
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/declaration"} className="nav-link">
                Declaración de Fe
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/blog"} className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/contact"} className="nav-link">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
