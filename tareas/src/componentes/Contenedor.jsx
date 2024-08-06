import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Contenedor = () => {
  return (
    <div className='container'>
        <header className='row'>
            <h1>App Clima</h1>
            <nav>
                <NavLink to="/">Inicio</NavLink> - <NavLink to="/clima">Clima</NavLink> - <NavLink to="/lista">Lista</NavLink> 
            </nav>
        </header>
        <hr />
        <main className='row'>
            <Outlet />
        </main>
    </div>
  )
}

export default Contenedor