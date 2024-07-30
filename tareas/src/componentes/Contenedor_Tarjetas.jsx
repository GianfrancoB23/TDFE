import React from 'react'
import Tarjeta1 from './Tarjeta1'

const Contenedor_Tarjetas = ({tareas}) => {
  return (
    <div className="tarjetas">
        {tareas.map(tarea => <Tarjeta1 key={tarea.id} {...tarea}/>)}
    </div>
  )
}

export default Contenedor_Tarjetas