import React, { useEffect } from 'react'
import Tarjeta1 from './Tarjeta1'
import { useDispatch, useSelector } from 'react-redux'
import { guardarTareas } from '../../features/tareasSlice';

const Contenedor_Tarjetas = () => {

  const dispatch = useDispatch();
  const tareas = useSelector(state => state.tareas.tareas)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
      .then(r => r.json())
      .then(datos => {
        dispatch(guardarTareas(datos))
      })

  }, [])

  return (
    <div className="tarjetas">
        {tareas.map(tarea => <Tarjeta1 key={tarea.id} {...tarea}/>)}
    </div>
  )
}

export default Contenedor_Tarjetas