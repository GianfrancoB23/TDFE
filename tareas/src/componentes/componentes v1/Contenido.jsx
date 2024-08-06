import React, { useEffect, useState } from 'react'
import Input_Agregar from './Input_Agregar'
import Contenedor_Tarjetas from './Contenedor_Tarjetas'

const Contenido = () => {

  return (
    <div className="contenido">
      <Input_Agregar />
      <Contenedor_Tarjetas />
    </div>
  )
}

export default Contenido