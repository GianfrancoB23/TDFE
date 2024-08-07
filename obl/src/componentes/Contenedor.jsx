import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Contenedor = () => {

    const logout = () => {
        //CERRAR SESION
        localStorage.clear();
    }

    return (
        <div className='container-fluid'>
            <header className='row'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        BABY TRACKER
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/Login">LOGIN</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Registro">REGISTRO</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Login" onClick={logout}>LOGOUT</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main className='row'>
                <Outlet />
            </main>
        </div>
    )
}

export default Contenedor