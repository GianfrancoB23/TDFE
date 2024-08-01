import React from 'react'
import Tarjeta1 from './Tarjeta1'
import { useDispatch } from 'react-redux'
import { guardarTareas } from '../features/tareasSlice';

const Contenedor_Tarjetas = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
      .then(r => r.json())
      .then(datos => {
        dispatch(guardarTareas())
      })

  }, [])

  return (
    <div className="tarjetas">
        {/* tareas.map(tarea => <Tarjeta1 key={tarea.id} {...tarea}/>) */}
    </div>
  )
}

export default Contenedor_Tarjetas