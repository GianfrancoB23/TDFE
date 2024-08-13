import React, {useEffect, useState} from "react";
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import "../../src/estilos.css";

const Contenedor = () => {
  const urlAPI = "https://babytracker.develotion.com/";
  const navigate = useNavigate();
  const [apiKey, setApiKey] = useState(null);
  const storedApiKey = localStorage.getItem("apiKey");
  if (storedApiKey != apiKey) {
    setApiKey(storedApiKey);
  }

  const logout = () => {
    localStorage.clear();
    setApiKey(null);
  };
  useEffect(() => {
    if (
      localStorage.getItem("apiKey") == null ||
      localStorage.getItem("apiKey" == undefined)
    ) {
      navigate("/Login");
      fetch(`${urlAPI}categorias.php`, {
        headers: {
          "Content-type": "application/json",
          apikey: localStorage.getItem("apiKey"),
          iduser: localStorage.getItem("id"),
        },
      })
        .then((r) => r.json())
        .then((datos) => {
          if (datos.codigo == 200) {
            navigate("/Dashboard");
          } else if (datos.codigo == 401) {
            localStorage.clear();
            //console.log(datos.codigo, datos.mensaje);
            toast.warn(`ERROR: ${datos.mensaje}.`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            navigate("/Login");
          } else {
            //console.log(datos.codigo, datos.mensaje);
            toast.warn(`ERROR: ${datos.mensaje}.`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        });
    } else {
      navigate("/Dashboard");
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
                      <FontAwesomeIcon
                        className="m-2 my-0"
                        icon={faArrowRightFromBracket}
                      />
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
