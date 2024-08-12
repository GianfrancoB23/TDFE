import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Contenedor = () => {
  const logout = () => {
    //CERRAR SESION
    localStorage.clear();
  };

  const apiKey = localStorage.getItem("apiKey");

  return (
    <div className="container-fluid">
      <header className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/Dashboard">
            BABY TRACKER
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            {!apiKey && (
                <>
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/Login">
                      LOGIN
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Registro">
                      REGISTRO
                    </NavLink>
                  </li>
                </>
              )}
              {apiKey && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/AgregarEvento">
                      AGREGAR EVENTO
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/ListadoEvento">
                      LISTADO EVENTOS
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/InformeEventos">
                      INFORME EVENTOS
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Login" onClick={logout}>
                      LOGOUT
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>

      <main className="row">
        <Outlet />
      </main>
    </div>
  );
};

export default Contenedor;
