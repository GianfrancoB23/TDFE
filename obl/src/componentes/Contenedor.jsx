import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import "../../src/estilos.css"

const Contenedor = () => {

  const [apiKey, setApiKey] = useState(localStorage.getItem("apiKey"));

  const logout = () => {
    localStorage.clear();
    setApiKey(null);
  };
  useEffect(() => {
    const cambioApiKey = localStorage.getItem("apiKey");
    if (cambioApiKey != apiKey) {
      setApiKey(cambioApiKey);
    }
  }, []);

  return (
    <div className="container-fluid">
      <header className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/Dashboard">
            <img
              src="../html/img/logo32.png"
              width={30}
              height={30}
              className="d-inline-block align-top mx-2"
              alt=""
            />
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
                    <Link className="nav-link" to="/Login" onClick={logout}>
                      LOGOUT
                      <FontAwesomeIcon className="m-2 my-0" icon={faArrowRightFromBracket} />
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
