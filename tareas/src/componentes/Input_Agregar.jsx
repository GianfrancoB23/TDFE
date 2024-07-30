import React, { useId, useRef } from 'react'

const Input_Agregar = ({agregarTarea}) => {

    const idCampo = useId();
    const campo = useRef(null)

    const tomarDato = () => {
        //console.log(campo.current.value);
        agregarTarea(campo.current.value);
    }

    return (
        <div className="agregar">
            <label htmlFor={idCampo}>Agregar:</label>
            <input type="text" ref={campo} id={idCampo} />
            <input type="button" defaultValue="Agregar" onClick={tomarDato} />
        </div>
    )
}

export default Input_Agregar