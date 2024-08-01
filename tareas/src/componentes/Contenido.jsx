import React, { useEffect, useState } from 'react'
import Input_Agregar from './Input_Agregar'
import Contenedor_Tarjetas from './Contenedor_Tarjetas'

const Contenido = () => {

  const [tareas, setTareas] = useState([]);



  const agregarTarea = (textoTarea) => {
    console.log("Agregar tarea - componente Contenido");
    let objTarea = {
      "userId": 1,
      "title": textoTarea,
      "completed": false
    }

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(objTarea),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setTareas([...tareas, json])
      });
  }

  return (
    <div className="contenido">
      <Input_Agregar agregarTarea={agregarTarea} />
      <Contenedor_Tarjetas />
    </div>
  )
}

export default Contenido