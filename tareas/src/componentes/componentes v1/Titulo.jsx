import React from 'react'
import { useSelector } from 'react-redux'

const Titulo = () => {

    const cantidadTareas = useSelector(state => state.tareas.tareas.length)

    return (
        <div className="menu">
            <h2>Tareas ({cantidadTareas})</h2>
        </div>
    )
}

export default Titulo