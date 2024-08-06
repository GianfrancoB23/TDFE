import React, { useId, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { guardarTarea } from '../../features/tareasSlice';

const Input_Agregar = () => {

    const idCampo = useId();
    const campo = useRef(null);
    const dispatch = useDispatch();

    const agregarTarea = () => {

        let objTarea = {
            "userId": 1,
            "title": campo.current.value,
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
                dispatch(guardarTarea(json))
            });
    }

    return (
        <div className="agregar">
            <label htmlFor={idCampo}>Agregar:</label>
            <input type="text" ref={campo} id={idCampo} />
            <input type="button" defaultValue="Agregar" onClick={agregarTarea} />
        </div>
    )
}

export default Input_Agregar